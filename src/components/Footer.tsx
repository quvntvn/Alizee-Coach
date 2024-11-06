// src/components/Footer.tsx
import styles from './style/Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.powered}>
        Site réalisé par{' '}
        <Link href="https://quvntvn.netlify.app/" target="_blank" className={styles.link}>
          Quvntvn
        </Link>
      </p>
    </footer>
  );
}
