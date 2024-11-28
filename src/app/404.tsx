import Head from 'next/head';
import Link from 'next/link';
import styles from '../components/style/404.module.css';

export default function Confirmation() {
  return (
    <>
      <Head>
        <title>Message envoyé | Thé Tip Top</title>
        <meta name="description" content="Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais." />
      </Head>
      <main>
        <div className={styles.content}>
        <h1>Erreur 404</h1>
        <p>
        Oups, la page que vous cherchez n'existe pas. 😢        </p>
        <Link href="/" className={styles.ctaButton}>
          Retour à la page d'accueil
        </Link>
        </div>
      </main>
    </>
  );
}
