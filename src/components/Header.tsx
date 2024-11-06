// src/components/Header.tsx

import styles from './style/Header.module.css';
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <img src="images/logo.png" alt="Thé Tip Top Logo" className={styles.logo} />
        </Link>
        <nav className={styles.navMenu}>
          <Link href="/a-propos" legacyBehavior>
            <a className={styles.navLink}>À propos</a>
          </Link>
          <Link href="/services" legacyBehavior>
            <a className={styles.navLink}>Services</a>
          </Link>
          <Link href="/temoignages" legacyBehavior>
            <a className={styles.navLink}>Témoignages</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className={styles.navLink}>Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
