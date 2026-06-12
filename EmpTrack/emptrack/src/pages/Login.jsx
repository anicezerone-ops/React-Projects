import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./login.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/employees");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://trainingapi.zerone-consulting.net/api.publish/api/account",
        {
          username,
          password
        }
      );

      localStorage.setItem("token", response.data.token);
      navigate("/employees");
    } catch (err) {
      setError(err.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${styles.pageWrapper} min-h-screen`}>
      <Container fluid className="h-100 py-3 py-md-5">
        <Row className="align-items-center justify-content-center h-100 g-4">
          <Col xs={12} sm={10} md={8} lg={6} xl={5} className="px-3 px-sm-4">
            <div className={`${styles.card} shadow-lg`}>
              <div className={styles.cardHeader}>
                <h1 className={`${styles.title} fw-bold`}>EmpTrack</h1>
                <p className={styles.subtitle}>Employee Management System</p>
              </div>

              <form onSubmit={handleLogin} className={styles.form}>
                <div className={styles.formGroup}>
                  <label
                    htmlFor="username"
                    className={`${styles.label} form-label`}
                  >
                    User Name
                  </label>
                  <input
                    id="username"
                    type="text"
                    className={`${styles.input} form-control`}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label
                    htmlFor="password"
                    className={`${styles.label} form-label`}
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className={`${styles.input} form-control`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </div>

                {error && (
                  <div
                    className={`${styles.error} alert alert-danger`}
                    role="alert"
                  >
                    <strong>Error:</strong> {error}
                  </div>
                )}

                <button
                  type="submit"
                  className={`${styles.button} btn btn-primary w-100 fw-bold`}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Logging in...
                    </>
                  ) : (
                    "Login"
                  )}
                </button>
              </form>

              <div className={styles.footer}>
                <p className="text-muted small mb-0">
                  &copy; {new Date().getFullYear()} EmpTrack. All rights
                  reserved.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
