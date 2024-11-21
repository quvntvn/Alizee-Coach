import styles from '../../components/style/Contact.module.css';
import SectionTitle from '@/components/SectionTitle';
import FadeIn from '@/components/FadeIn';
import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Thé Tip Top</title>
        <meta name="description" content="Contactez-nous pour toute question ou information." />
      </Head>

            <main className={`${styles.main} bg-gray-50`}>
        <FadeIn>
          <SectionTitle text="Contactez-Moi" />
        </FadeIn>

        <FadeIn>
        <form className={styles.contactForm} action="#" method="post">
  <label htmlFor="name">Nom</label>
  <input type="text" id="name" name="name" required placeholder="Votre nom" />

  <label htmlFor="email">Email</label>
  <input type="email" id="email" name="email" required placeholder="Votre email" />

  <label htmlFor="objective">Objectif principal</label>
  <select id="objective" name="objective" required>
    <option value="" disabled selected>Choisissez votre objectif</option>
    <option value="weight_loss">Perte de poids</option>
    <option value="muscle_gain">Renforcement musculaire</option>
    <option value="general_health">Amélioration générale de la santé</option>
    <option value="preparation_event">Préparation pour un événement</option>
  </select>

  <label htmlFor="preferences">Préférences</label>
  <div>
    <label>
      <input type="checkbox" name="preferences" value="individual" />
      Séances individuelles
    </label>
    <label>
      <input type="checkbox" name="preferences" value="group" />
      Séances en groupe
    </label>
  </div>

  <label htmlFor="message">Message</label>
  <textarea 
    id="message" 
    name="message" 
    required 
    placeholder="Décrivez vos besoins, vos disponibilités, ou toute information supplémentaire. Par exemple, vos habitudes sportives ou des objectifs spécifiques."
  ></textarea>

  <button type="submit" className={styles.submitButton}>Envoyer</button>
</form>

        </FadeIn>

        <FadeIn>
          <section className={styles.socialLinks}>
            <p className="text-lg font-medium">Suivez-moi sur les réseaux sociaux :</p>
            <div className="flex gap-4 justify-center">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </section>
        </FadeIn>
      </main>


    </>
  );
}
