"use client" 
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../components/style/404.module.css';
import FadeIn from 'react-fade-in';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Erreur 404 | Thé Tip Top</title>
        <meta
          name="description"
          content="La page que vous cherchez n'existe pas."
        />
      </Head>
      <main>
        <FadeIn>
        <div className={styles.content}>
        <h1>Erreur 404</h1>
        <p>
        Oups, la page que vous cherchez n'existe pas. 😢        </p>
        <Link href="/" className={styles.ctaButton}>
          Retour à la page d'accueil
        </Link>
        </div>
        </FadeIn>
      </main>
    </>
  );
}
