import { AppProps } from 'next/app';
import '../app/globals.css';
import styles from '../components/style/Footer.module.css'; // Assure-toi que le chemin est correct

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.pageWrapper}> {/* Ajout du wrapper */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
