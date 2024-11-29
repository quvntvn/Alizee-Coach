"use client";
import styles from '../../components/style/Contact.module.css';
import SectionTitle from '@/components/SectionTitle';
import FadeIn from 'react-fade-in';
import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Thé Tip Top</title>
        <meta name="description" content="Contactez-nous pour toute question ou information." />
      </Head>

      <main>
        <FadeIn>
          <SectionTitle text="Contactez-Moi" />

          <form
            className={styles.contactForm}
            action="https://formspree.io/f/mvgowllv"
            method="POST"
          >
            {/* Redirection après envoi réussi */}
            <input type="hidden" name="_next" value="/confirmation" />
            
            <label htmlFor="name" className={styles.required}>Nom</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              placeholder="Votre nom" 
            />

            <label htmlFor="phone" className={styles.required}>Numéro de téléphone</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              required 
              placeholder="Votre numéro de téléphone" 
              pattern="^(\+33|0)[1-9](\d{2}){4}$" 
              title="Entrez un numéro de téléphone valide (exemple : +33123456789 ou 0123456789)" 
            />

            <label htmlFor="email" className={styles.required}>Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              placeholder="Votre email" 
            />

            <label htmlFor="message" className={styles.required}>Message</label>
            <textarea 
              id="message" 
              name="message" 
              required 
              placeholder="Décrivez vos besoins ou vos questions."
            ></textarea>

            <button type="submit" className={styles.submitButton}>Envoyer</button>
          </form>

          <section className={styles.socialLinks}>
            <p className="text-lg font-medium">Suivez-moi sur les réseaux sociaux :</p>
            <div className="flex gap-4 justify-center">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </section>
        </FadeIn>
      </main>
    </>
  );
}
