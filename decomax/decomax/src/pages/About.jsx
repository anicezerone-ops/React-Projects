import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.jpg";
import about4 from "../assets/about4.jpg";
import about5 from "../assets/about5.png";
import styles from "./abount.module.css";

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>About Decomax</span>
          <h1 className={styles.heroTitle}>
            Trusted security solutions for every home and business
          </h1>
          <p className={styles.heroText}>
            Decomax delivers professional CCTV surveillance, biometric
            attendance, network infrastructure, and smart security services
            across Kochi and surrounding areas. Our team builds reliable systems
            tailored to your needs, with fast installation and long-term
            maintenance.
          </p>
          <p className={styles.heroText}>
            Whatever your safety requirements may be, Infosec Solutions is the right choice because we cover all possible angles in meeting the security needs of our clients. The team behind Infosec Solutions has over 25 years of experience and is passionate about exceeding your expectations!
          </p>
        </div>
        <div className={styles.heroImage}>
          <img src={about1} alt="Decomax security" />
        </div>
      </section>

      <section className={styles.infoSection}>
        <div className={styles.infoCard}>
          <h2>Who we are</h2>
          <p>
            Decomax is a local security specialist focused on CCTV, access
            control, alarm systems, and network-based monitoring. We bring
            expert design, high quality products, and dependable service to each
            installation.
          </p>
          <ul className={styles.benefitsList}>
            <li>ISO-aligned security installation standards</li>
            <li>Experienced technical team</li>
            <li>Residential and commercial solutions</li>
          </ul>
        </div>
        <div className={styles.infoCard}>
          <h2>Our promise</h2>
          <p>
            We promise clear communication, transparent pricing, and systems
            that work reliably from day one. Our team supports you with
            installation, configuration, and after-sales service for the long
            term.
          </p>
          <div className={styles.serviceHighlights}>
            <div>
              <strong>Fast Response</strong>
              <p>Quick site surveys and same-day estimates.</p>
            </div>
            <div>
              <strong>Trusted Brands</strong>
              <p>Quality cameras, recorders, and access control devices.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className={styles.galleryItem}>
          <img src={about2} alt="CCTV installation" />
        </div>
        <div className={styles.galleryItem}>
          <img src={about4} alt="Security team" />
        </div>
        {/* <div className={styles.galleryItemWide}>
          <img src={about4} alt="Access control" />
        </div> */}
      </section>

      <section className={styles.detailSection}>
        <div className={styles.detailCard}>
          <h3>Complete security solutions</h3>
          <p>
            Our services include CCTV camera installation, biometric attendance,
            alarm systems, door access control, and structured cabling. We work
            with homes, offices, warehouses, and industrial facilities.
          </p>
        </div>
        <div className={styles.detailCard}>
          <h3>Why choose Decomax</h3>
          <p>
            We provide reliable installations, customized system design, and
            ongoing support so your security solution stays effective and easy
            to use.
          </p>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <img src={about5} alt="Smart security" />
          <div>
            <h2>Ready to secure your property?</h2>
            <p>
              Contact Decomax today for a free consultation and site survey. We
              will recommend the right security system for your needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
