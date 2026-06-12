import { useEffect, useRef, useState } from "react";
import employeeApi from "../api/employeeApi";
import { Link, useLocation } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import styles from "./employeelist.module.css";
import { FaMale, FaFemale } from "react-icons/fa";
import { EMPLOYEE_PAGE_SIZE } from "../constants/employeeConstants";

function EmployeeList() {
  const location = useLocation();
  const focusHandled = useRef(false);

  const [employees, setEmployees] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(
    () => Number(location.state?.focusPage) || 1
  );
  const [pendingFocusId, setPendingFocusId] = useState(null);
  const [highlightedEmployeeId, setHighlightedEmployeeId] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);

  const designationMap = {
    0: "HR",
    1: "Tester",
    2: "Developer",
    3: "Manager",
    4: "Team Lead",
  };

  const focusEmployeeId = location.state?.focusEmployeeId;

  useEffect(() => {
    if (!focusEmployeeId || focusHandled.current) return;

    focusHandled.current = true;
    setPendingFocusId(Number(focusEmployeeId));

    const focusPage = Number(location.state?.focusPage);
    if (focusPage) {
      setCurrentPage(focusPage);
    }

    window.history.replaceState({}, document.title);
  }, [focusEmployeeId, location.state?.focusPage]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchEmployees = async () => {
      try {
        const res = await employeeApi.get(
          `/api/Employee/paged/${EMPLOYEE_PAGE_SIZE}/${currentPage}/employeeID/asc`,
          { signal: controller.signal }
        );
        setEmployees(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        if (err.code !== "ERR_CANCELED") {
          console.log(err);
        }
      }
    };

    fetchEmployees();
    return () => controller.abort();
  }, [currentPage, reloadKey]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchCount = async () => {
      try {
        const res = await employeeApi.get("/api/Employee/count", {
          signal: controller.signal,
        });
        setCount(res.data);
      } catch (err) {
        if (err.code !== "ERR_CANCELED") {
          console.log(err);
        }
      }
    };

    fetchCount();
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!pendingFocusId) return;

    const employeeOnPage = employees.find(
      (emp) => emp.employeeID === pendingFocusId
    );

    if (!employeeOnPage) return;

    const card = document.getElementById(`employee-${pendingFocusId}`);

    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "center" });
      card.focus({ preventScroll: true });
    }

    setHighlightedEmployeeId(pendingFocusId);
    setPendingFocusId(null);

    const timer = setTimeout(() => {
      setHighlightedEmployeeId(null);
    }, 3000);

    return () => clearTimeout(timer);
  }, [employees, pendingFocusId]);

  const totalPages = Math.ceil(count / EMPLOYEE_PAGE_SIZE);

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const deleteEmployee = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (!confirmDelete) return;

    try {
      await employeeApi.delete(`/api/Employee/${id}`);

      const countRes = await employeeApi.get("/api/Employee/count");
      const newCount = countRes.data;
      setCount(newCount);

      const newTotalPages = Math.max(1, Math.ceil(newCount / EMPLOYEE_PAGE_SIZE));

      if (newCount === 0) {
        setEmployees([]);
        alert("Employee Deleted");
        return;
      }

      if (currentPage > newTotalPages) {
        setCurrentPage(newTotalPages);
      } else {
        setReloadKey((key) => key + 1);
      }

      alert("Employee Deleted");
    } catch (err) {
      console.log(err);
      alert("Delete Failed");
    }
  };

  return (
    <AppLayout
      title="Employee Tracker"
      headerExtra={
        <p className={styles.employeeCount}>
          Total Employees: <span>{count}</span>
        </p>
      }
    >
      <div className={styles.pageContainer}>
        <div className={`${styles.rowList} row g-4 align-items-start`}>
          {employees.map((emp) => (
            <div
              key={emp.employeeID}
              className={`col-12 col-sm-6 col-xl-6 ${styles.cardColumn}`}
            >
              <div
                id={`employee-${emp.employeeID}`}
                tabIndex={-1}
                className={`${styles.flipCard} ${
                  highlightedEmployeeId === emp.employeeID
                    ? styles.flipCardHighlighted
                    : ""
                }`}
              >
                <div className={styles.flipCardInner}>
                  <div
                    className={`${styles.flipCardFront} card shadow-sm border-0`}
                  >
                    <div className="card-body text-center d-flex flex-column h-100">
                      <img
                        src={
                          emp.notes?.trim()
                            ? emp.notes
                            : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                        }
                        alt={emp.firstName}
                        className={`rounded-circle mb-3 mx-auto ${styles.avatar}`}
                      />

                      <h5 className="fw-semibold mb-2">
                        {emp.firstName} {emp.lastName}
                      </h5>

                      <p
                        className={`text-muted small mb-1 ${styles.genderRow}`}
                      >
                        <span>Gender:</span>
                        {emp.gender === 0 ? (
                          <span className={styles.genderValue}>
                            <FaMale
                              className={`${styles.genderIcon} text-primary`}
                            />
                            Male
                          </span>
                        ) : (
                          <span className={styles.genderValue}>
                            <FaFemale
                              className={`${styles.genderIcon} text-danger`}
                            />
                            Female
                          </span>
                        )}
                      </p>

                      <p className="text-muted small mb-1">
                        Designation:{" "}
                        {designationMap[emp.designation] || "Not Assigned"}
                      </p>

                      <p className="text-muted small mb-1 text-truncate">
                        Email: {emp.personalEmail}
                      </p>
                      <p className="text-muted small mb-3">
                        Mobile: {emp.mobileNumber}
                      </p>

                      <div className="mt-auto d-flex justify-content-center gap-2">
                        <Link
                          to={`/employees/edit/${emp.employeeID}`}
                          state={{ returnPage: currentPage }}
                          className="btn btn-warning btn-sm"
                        >
                          Edit
                        </Link>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => deleteEmployee(emp.employeeID)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles.flipCardBack} card shadow-sm border-0`}
                  >
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                      <h5 className="text-center mb-3 fw-semibold">
                        Employee Details
                      </h5>

                      <p className="text-muted small mb-1">
                        <strong>Address: </strong>
                        {/* <br /> */}
                        {emp.postalAddress}
                      </p>
                      <p className="text-muted small mb-1">
                        <strong>City: </strong> {emp.city}
                      </p>
                      <p className="text-muted small mb-1">
                        <strong>Country: </strong> {emp.country}
                      </p>
                      <p className="text-muted small mb-1">
                        <strong>DOB: </strong>{" "}
                        {new Date(emp.dateOfBirth).toLocaleDateString()}
                      </p>
                      <p className="text-muted small mb-1">
                        <strong>Basic Pay: </strong> ${emp.basicPay}
                      </p>
                      <p className="text-muted small mb-1">
                        <strong>Transportation: </strong>{" "}
                        {emp.needTransportation ? "Yes" : "No"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {count === 0 && employees.length === 0 && (
          <div className={styles.emptyState}>
            <p>No employees found.</p>
            <Link to="/employees/add" className="btn btn-primary btn-sm">
              Add your first employee
            </Link>
          </div>
        )}

        {totalPages > 0 && (
          <div className={styles.pagination}>
            <button
              className="btn btn-outline-secondary btn-sm"
              disabled={currentPage === 1}
              onClick={() => goToPage(currentPage - 1)}
            >
              Previous
            </button>

            <div className={styles.pageNumbers}>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  className={
                    currentPage === index + 1
                      ? "btn btn-primary btn-sm"
                      : "btn btn-outline-primary btn-sm"
                  }
                  onClick={() => goToPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              className="btn btn-outline-secondary btn-sm"
              disabled={currentPage === totalPages}
              onClick={() => goToPage(currentPage + 1)}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </AppLayout>
  );
}

export default EmployeeList;
