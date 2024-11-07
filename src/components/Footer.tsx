// src/components/Footer.tsx
import styles from './style/Footer.module.css';
import Link from 'next/link';
import { FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contactInfo} aria-label="Informations de contact d'Alizé">
        <p><FaPhone /> <Link href="tel:+33761933515" className={styles.link}>+33 7 61 93 35 15</Link></p>
        <p><FaEnvelope /> <Link href="mailto:alizepoledancer@gmail.com" className={styles.link}>alizepoledancer@gmail.com</Link></p>
        <p><FaInstagram /> <Link href="https://www.instagram.com/mindtomvmt" target="_blank" rel="noopener noreferrer" className={styles.link}>mindtomvmt</Link></p>
      </div>

      <p>&copy; {new Date().getFullYear()} Alizé Waron. Tous droits réservés.</p>
      <p className={styles.powered}>
        Site réalisé par{' '}
        <Link href="https://quvntvn.netlify.app/" target="_blank" className={styles.link}>
          Quvntvn
        </Link>
      </p>
    </footer>
  );
}
