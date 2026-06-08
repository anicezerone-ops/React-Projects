import logo from "../assets/decomax-logo.png";
import logo1 from "../assets/home1.png";
import client1 from "../assets/clients1.png";
import client2 from "../assets/clients2.jpg";
import client3 from "../assets/clients3.png";
import client4 from "../assets/clients4.jpg";
import client5 from "../assets/clients5.png";
import client6 from "../assets/clients6.jpg";
import client7 from "../assets/clients7.png";
import client8 from "../assets/clients8.png";
import client9 from "../assets/clients9.png";
import client10 from "../assets/clients10.png";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <section className={styles.heroSection}>
        <div className={styles.heroVideo}>
          <video autoPlay loop muted playsInline>
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
          <div className={styles.heroOverlay}></div>
        </div>

        <div className={styles.heroContent}>
          <h1 className={styles.heroMainTitle}>
            Welcome to a Safe, Secure, and Happy World
          </h1>
          <p className={styles.heroSubtitle}>
            Where Your Peace of Mind Matters Most!
          </p>
          <a href="#services" className={styles.ctaButton}>
            Explore Our Services
          </a>
        </div>
      </section>

      <section id="services" className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              {/* <img src={logo} alt="Decomax Logo" className={styles.logoImg} /> */}
              <h2 className={styles.sectionTitle}>
                Redefining the Art of Surveillance
              </h2>
              <p className={styles.sectionDesc}>
                Advanced CCTV Solutions For Homes, Offices And Industries.
              </p>
              <ul className={styles.featureList}>
                <li>Professional CCTV installation and maintenance</li>
                <li>Biometric attendance systems</li>
                <li>Access control and alarm solutions</li>
                <li>Fast, reliable service across Kerala</li>
              </ul>
            </div>

            <div className={styles.aboutImage}>
              <img src={logo1} alt="CCTV Installation" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.infoSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            CCTV Installation Services in Kerala
          </h2>
          <p className={styles.sectionDesc}>
            Decomax is an ISO-certified and trusted security system installer in
            Kerala, offering professional CCTV installation services for homes,
            offices, apartments, factories, warehouses, and commercial
            buildings. Established with a focus on reliability, we provide
            customized CCTV camera installation solutions using advanced
            surveillance technology.
          </p>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h3>Professional Team</h3>
              <p>Expert technicians with years of installation experience</p>
            </div>
            <div className={styles.statCard}>
              <h3>Quality Assured</h3>
              <p>ISO 9001:2015 certified systems and processes</p>
            </div>
            <div className={styles.statCard}>
              <h3>Fast Service</h3>
              <p>Quick site surveys and same-day estimates available</p>
            </div>
            <div className={styles.statCard}>
              <h3>24/7 Support</h3>
              <p>Maintenance and after-sales support for peace of mind</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.clientsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Major Clients</h2>
          <p className={styles.sectionDesc}>
            Trusted by businesses and homeowners across Kerala
          </p>
          <div className={styles.clientsGrid}>
            <div className={styles.clientItem}>
              <img src={client1} alt="Client 1" />
            </div>
            <div className={styles.clientItem}>
              <img src={client2} alt="Client 2" />
            </div>
            <div className={styles.clientItem}>
              <img src={client3} alt="Client 3" />
            </div>
            <div className={styles.clientItem}>
              <img src={client4} alt="Client 4" />
            </div>
            <div className={styles.clientItem}>
              <img src={client5} alt="Client 5" />
            </div>
            <div className={styles.clientItem}>
              <img src={client6} alt="Client 6" />
            </div>
            <div className={styles.clientItem}>
              <img src={client7} alt="Client 7" />
            </div>
            <div className={styles.clientItem}>
              <img src={client8} alt="Client 8" />
            </div>
            <div className={styles.clientItem}>
              <img src={client9} alt="Client 9" />
            </div>
            <div className={styles.clientItem}>
              <img src={client10} alt="Client 10" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>Ready to secure your property?</h2>
          <p>
            Contact Decomax today for a free consultation and professional
            security assessment.
          </p>
          <a href="/contact" className={styles.ctaButtonPrimary}>
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
