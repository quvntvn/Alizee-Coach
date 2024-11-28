import Head from 'next/head';
import Link from 'next/link';
import styles from '../../components/style/Confirmation.module.css';

export default function Confirmation() {
  return (
    <>
      <Head>
        <title>Message envoyé | Thé Tip Top</title>
        <meta name="description" content="Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais." />
      </Head>
      <main>
        <div className={styles.content}>
        <h1>Merci pour votre message !</h1>
        <p>
          Votre message a été envoyé avec succès. Je répondrai dans les plus brefs délais.
        </p>
        <Link href="/" className={styles.ctaButton}>
          Retour à la page d'accueil
        </Link>
        </div>
      </main>
    </>
  );
}
