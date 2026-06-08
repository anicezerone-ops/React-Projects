import { useState } from "react";
import ContactModal from "../components/ContactModal";
import styles from "./contact.module.css";

export default function Contact() {
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    matter: ""
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    const sanitizedValue = name === "name" ? value.replace(/^\s+/, "") : value;

    setFormData({
      ...formData,
      [name]: sanitizedValue
    });

    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined
      }));
    }
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (!/^[A-Za-z][A-Za-z\s]*$/.test(formData.name.trim())) {
      newErrors.name =
        "Name should start with a letter and contain only letters and spaces.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.matter.trim()) {
      newErrors.matter = "Please enter your message.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
    setFormData({
      name: "",
      email: "",
      matter: ""
    });
    setErrors({});
  }

  return (
    <div className={styles.contactPage}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>Contact Us</span>
          <h1 className={styles.heroTitle}>
            Connect with Decomax for expert security support
          </h1>
          <p className={styles.heroText}>
            Send your inquiry and our team will get back to you quickly. We
            provide CCTV installation, biometric systems, access control, and
            maintenance service across Kochi and nearby areas.
          </p>
        </div>
      </section>

      <section className={styles.contactGrid}>
        <div className={styles.formCard}>
          <h2>Send a message</h2>
          <form
            onSubmit={handleSubmit}
            className={styles.contactForm}
            noValidate
          >
            <div>
              <input
                type="text"
                name="name"
                className={`${styles.inputField} ${errors.name ? styles.invalidField : ""}`}
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className={styles.errorText}>{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                className={`${styles.inputField} ${errors.email ? styles.invalidField : ""}`}
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className={styles.errorText}>{errors.email}</p>
              )}
            </div>

            <div>
              <textarea
                rows="5"
                name="matter"
                className={`${styles.textareaField} ${errors.matter ? styles.invalidField : ""}`}
                placeholder="Your message"
                value={formData.matter}
                onChange={handleChange}
              />
              {errors.matter && (
                <p className={styles.errorText}>{errors.matter}</p>
              )}
            </div>

            <button className={styles.submitButton} type="submit">
              Submit
            </button>
          </form>
        </div>

        <aside className={styles.infoCard}>
          <h2>Contact details</h2>
          <p className={styles.infoText}>
            For fast service, call our team or send a message using the form. We
            are available for site surveys, installation help, and maintenance
            support.
          </p>
          <ul className={styles.infoList}>
            <li>
              <span>Phone:</span>
              <strong>9061 016 991</strong>
            </li>
            <li>
              <span>Service:</span>
              <strong>8547 072 132</strong>
            </li>
            <li>
              <span>Email:</span>
              <strong>support@decomax.com</strong>
            </li>
            <li>
              <span>Location:</span>
              <strong>Karukutty, Angamaly, Kerala</strong>
            </li>
          </ul>
        </aside>
      </section>

      <section className={styles.locationSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Location</h2>

          <div className={styles.locationGrid}>
            <div className={styles.mapWrapper}>
              <iframe
                title="Decomax Location"
                src="https://www.google.com/maps?q=10.2336113,76.3634161&z=18&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            {/* <div className={styles.locationDetails}>
              <h3>Decomax</h3>
              <p>53/1256-A, Paradise Rd, Karukutty, Angamaly, Kerala 683574</p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+919061016991">9061 016 991</a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:support@decomax.com">support@decomax.com</a>
              </p>
              <p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=10.2336113,76.3634161"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-danger"
                >
                  Get Directions
                </a>
                <a
                  href="https://www.google.com/maps/@10.2336113,76.3634161,3a,75y,90.5h,82.05t/data=!3m7!1e1!3m5!1sEjrPbESoRCxjq-tWNl0s4A!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D7.947078864353131%26panoid%3DEjrPbESoRCxjq-tWNl0s4A%26yaw%3D90.50066371769786!7i13312!8i6656?authuser=0&entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-secondary ms-2"
                >
                  View Street View
                </a>
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {showModal && (
        <ContactModal
          jsonData={JSON.stringify(formData, null, 2)}
          closeModal={handleCloseModal}
        />
      )}
    </div>
  );
}
