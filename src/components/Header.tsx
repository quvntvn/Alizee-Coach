"use client";

import { useState } from 'react';
import styles from './style/Header.module.css';
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);  // Ferme le menu lorsqu'un lien est cliqué
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          {/* Use absolute path so the logo loads correctly on every page */}
          <img src="/images/logo.png" alt="Alizé Coach Logo" className={styles.logo} />
        </Link>
        
        {/* Bouton pour le menu mobile */}
        <button className={styles.menuButton} onClick={toggleMenu}>
          ☰
        </button>

        {/* Menu navigation */}
        <nav className={`${styles.navMenu} ${menuOpen ? styles.navMenuOpen : ''}`}>
          <Link href="/" legacyBehavior>
            <a className={styles.navLink} onClick={closeMenu}>Accueil</a>
          </Link>
          <Link href="/services" legacyBehavior>
            <a className={styles.navLink} onClick={closeMenu}>Services</a>
          </Link>
          <Link href="/temoignages" legacyBehavior>
            <a className={styles.navLink} onClick={closeMenu}>Témoignages</a>
          </Link>
          <Link href="/a-propos" legacyBehavior>
            <a className={styles.navLink} onClick={closeMenu}>À propos</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className={styles.navLink} onClick={closeMenu}>Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
