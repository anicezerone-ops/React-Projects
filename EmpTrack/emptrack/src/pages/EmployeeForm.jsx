import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import employeeApi from "../api/employeeApi";
import { EMPLOYEE_PAGE_SIZE } from "../constants/employeeConstants";
import AppLayout from "../components/AppLayout";
import styles from "./employeeform.module.css";
import axios from "axios";

const INITIAL_EMPLOYEE = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  personalEmail: "",
  mobileNumber: "",
  postalAddress: "",
  gender: 0,
  country: "",
  city: "",
  designation: 0,
  basicPay: 0,
  needTransportation: false,
  notes: "",
  username: "",
  password: "",
};

function EmployeeForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const isEditMode = !!id;

  const [employee, setEmployee] = useState(INITIAL_EMPLOYEE);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  useEffect(() => {
    if (!isEditMode) {
      setEmployee({ ...INITIAL_EMPLOYEE });
      return;
    }

    if (!id) return;

    const controller = new AbortController();

    const loadEmployee = async () => {
      try {
        const res = await employeeApi.get(`/api/Employee/${id}`, {
          signal: controller.signal,
        });

        const emp = res.data;
        setEmployee({
          ...emp,
          dateOfBirth: emp.dateOfBirth ? emp.dateOfBirth.substring(0, 10) : "",
        });
      } catch (err) {
        if (err.code !== "ERR_CANCELED") {
          console.log(err);
        }
      }
    };

    loadEmployee();

    return () => controller.abort();
  }, [isEditMode, id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setEmployee((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dob = new Date(employee.dateOfBirth);
    const today = new Date();

    if (dob > today) {
      alert("Date of Birth cannot be a future date.");
      return;
    }

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    if (age < 18) {
      alert("Employee must be at least 18 years old.");
      return;
    }

    if (age > 100) {
      alert("Please enter a valid Date of Birth.");
      return;
    }

    try {
      let focusEmployeeId = Number(id);
      let focusPage = Number(location.state?.returnPage) || 1;

      if (isEditMode) {
        await employeeApi.put(`/api/Employee/${id}`, employee);
        alert("Employee Updated");
      } else {
        const res = await employeeApi.post("/api/Employee", employee);
        const created = res.data;
        focusEmployeeId = Number(
          typeof created === "object" ? created?.employeeID : created
        );
        alert("Employee Added");

        const countRes = await employeeApi.get("/api/Employee/count");
        focusPage = Math.ceil(countRes.data / EMPLOYEE_PAGE_SIZE);
      }

      if (!focusEmployeeId || Number.isNaN(focusEmployeeId)) {
        navigate("/employees");
        return;
      }

      navigate("/employees", { state: { focusEmployeeId, focusPage } });
    } catch (err) {
      console.error(err);
      alert("Operation failed");
    }
  };

  return (
    <AppLayout title={isEditMode ? "Edit Employee" : "Add Employee"}>
      <div className={styles.formContainer}>
        <div className={`card shadow-sm border-0 ${styles.formCard}`}>
          <div className={`card-body ${styles.formCardBody}`}>
            <form onSubmit={handleSubmit}>
              <div className={`row ${styles.formRow}`}>
                <div className="col-12 col-md-6 mb-3">
                  <label className={styles.label}>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    value={employee.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-12 col-md-6 mb-3">
                  <label className={styles.label}>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    value={employee.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-12 col-md-6 mb-3">
                  <label className={styles.label}>Date Of Birth</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    className="form-control"
                    value={employee.dateOfBirth}
                    onChange={handleChange}
                    required
                    max={new Date().toISOString().split("T")[0]}
                  />
                </div>

                <div className="col-12 col-md-6 mb-3">
                  <label className={styles.label}>Email</label>
                  <input
                    type="email"
                    name="personalEmail"
                    className="form-control"
                    value={employee.personalEmail}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12 col-md-6 mb-3">
                  <label className={styles.label}>Mobile Number</label>
                  <input
                    type="text"
                    name="mobileNumber"
                    className="form-control"
                    value={employee.mobileNumber}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12 col-md-6 mb-3">
                  <label className={styles.label}>Address</label>
                  <input
                    type="text"
                    name="postalAddress"
                    className="form-control"
                    value={employee.postalAddress}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12 col-md-6 mb-3">
                  <label className={styles.label}>Country</label>
                  <input
                    type="text"
                    name="country"
                    className="form-control"
                    value={employee.country}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12 col-md-6 mb-3">
                  <label className={styles.label}>City</label>
                  <input
                    type="text"
                    name="city"
                    className="form-control"
                    value={employee.city}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12 col-md-6 mb-3">
                  <label className={styles.label}>Gender</label>
                  <select
                    name="gender"
                    className="form-select"
                    value={employee.gender}
                    onChange={handleChange}
                  >
                    <option value={0}>Male</option>
                    <option value={1}>Female</option>
                  </select>
                </div>

                <div className="col-12 col-md-6 mb-3">
                  <label className={styles.label}>Designation</label>
                  <input
                    type="number"
                    name="designation"
                    className="form-control"
                    value={employee.designation}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12 col-md-6 mb-3">
                  <label className={styles.label}>Basic Pay</label>
                  <input
                    type="number"
                    name="basicPay"
                    className="form-control"
                    value={employee.basicPay}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12 col-md-6 mb-3">
                  <label className={styles.label}>Username</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    value={employee.username}
                    onChange={handleChange}
                  />
                </div>

                {!isEditMode && (
                  <div className="col-12 col-md-6 mb-3">
                    <label className={styles.label}>Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      value={employee.password}
                      onChange={handleChange}
                    />
                  </div>
                )}

                <div className="col-12 mb-3">
                  <label className={styles.label}>Notes</label>
                  <textarea
                    name="notes"
                    rows="3"
                    className="form-control"
                    value={employee.notes}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12 mb-4">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      name="needTransportation"
                      className="form-check-input"
                      id="needTransportation"
                      checked={employee.needTransportation}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="needTransportation">
                      Need Transportation
                    </label>
                  </div>
                </div>
              </div>

              <div className={`d-flex flex-wrap gap-2 ${styles.formActions}`}>
                <button
                  type="submit"
                  className={`btn btn-success ${styles.submitButton}`}
                >
                  {isEditMode ? "Update Employee" : "Add Employee"}
                </button>

                <button
                  type="button"
                  className={`btn btn-secondary ${styles.cancelButton}`}
                  onClick={() => navigate("/employees")}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default EmployeeForm;
