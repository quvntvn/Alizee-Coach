// src/pages/contact.tsx

import styles from '../../components/style/Contact.module.css';
import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Thé Tip Top</title>
        <meta name="description" content="Contactez-nous pour toute question ou information." />
      </Head>

      <main className={styles.main}>
        <h1>Contactez-nous</h1>
        <p>Pour toute question, n'hésitez pas à nous contacter via le formulaire ci-dessous.</p>

        <form className={styles.contactForm} action="#" method="post">
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" name="name" required placeholder="Votre nom" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required placeholder="Votre email" />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required placeholder="Votre message"></textarea>

          <button type="submit" className={styles.submitButton}>Envoyer</button>
        </form>

        <section className={styles.socialLinks}>
          <p>Suivez-nous sur les réseaux sociaux :</p>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </section>
      </main>
    </>
  );
}
