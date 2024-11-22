"use client";
import styles from '../../components/style/Contact.module.css';
import SectionTitle from '@/components/SectionTitle';
import FadeIn from '@/components/FadeIn';
import Head from 'next/head';
import { useState, useRef } from 'react';

export default function Contact() {
  const [currentPhotoLabel, setCurrentPhotoLabel] = useState('Choisissez une photo...');
  const [goalPhotoLabel, setGoalPhotoLabel] = useState('Choisissez une photo...');

  // Création des refs pour les inputs de fichier
  const currentPhotoRef = useRef<HTMLInputElement>(null);
  const goalPhotoRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setLabel: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (!event.target.files || event.target.files.length === 0) {
      setLabel('Aucun fichier sélectionné.');
      return;
    }

    const file = event.target.files[0];
    setLabel(file.name);
  };

  const handleFileUpload = (ref: React.RefObject<HTMLInputElement>) => {
    if (ref.current) {
      ref.current.click();
    }
  };
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
        <form className={styles.contactForm} action="#" method="post" encType="multipart/form-data">
        <label htmlFor="name" >Nom</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required 
          placeholder="Votre nom" 
        />

        <label htmlFor="phone" >Numéro de téléphone</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          required 
          placeholder="Votre numéro de téléphone" 
          pattern="^(\+33|0)[1-9](\d{2}){4}$" 
          title="Entrez un numéro de téléphone valide (exemple : +33123456789 ou 0123456789)" 
        />

        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required 
          placeholder="Votre email" 
        />

        <label htmlFor="objective" className="no-required">Objectif principal</label>
        <select id="objective" name="objective" required>
          <option value="" disabled selected>Choisissez votre objectif</option>
          <option value="weight_loss">Perte de poids</option>
          <option value="muscle_gain">Renforcement musculaire</option>
          <option value="general_health">Amélioration générale de la santé</option>
          <option value="preparation_event">Préparation pour un événement</option>
        </select>

        <label htmlFor="preferences" className="no-required">Préférences</label>
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

        <label htmlFor="height" className="no-required">Taille (en cm)</label>
        <input 
          type="number" 
          id="height" 
          name="height" 
          required 
          placeholder="Votre taille" 
        />

        <label htmlFor="weight" className="no-required">Poids (en kg)</label>
        <input 
          type="number" 
          id="weight" 
          name="weight" 
          required 
          placeholder="Votre poids" 
        />

        <label htmlFor="diet" className="no-required">Diète actuelle</label>
        <textarea 
          id="diet" 
          name="diet" 
          required 
          placeholder="Décrivez votre alimentation actuelle (par exemple : équilibrée, riche en protéines, végétarienne, etc.)."
        ></textarea>

        <label htmlFor="currentPhoto" className="no-required">Photo actuelle</label>
        <div className={styles.fileUpload}>
          <button
            type="button"
            className={styles.fileButton}
            onClick={() => handleFileUpload(currentPhotoRef)}
          >
            Ajouter une photo
          </button>
          <span className={styles.fileLabel}>{currentPhotoLabel}</span>
          <input
            ref={currentPhotoRef}
            type="file"
            id="currentPhoto"
            name="currentPhoto"
            accept="image/*"
            required
            className={styles.fileInput}
            onChange={(e) => handleFileChange(e, setCurrentPhotoLabel)}
          />
        </div>
        <small id="currentPhotoHelp">Téléchargez une photo de votre physique actuel.</small>

        <label htmlFor="goalPhoto" className="no-required">Photo d'aspiration</label>
        <div className={styles.fileUpload}>
          <button
            type="button"
            className={styles.fileButton}
            onClick={() => handleFileUpload(goalPhotoRef)}
          >
            Ajouter une photo
          </button>
          <span className={styles.fileLabel}>{goalPhotoLabel}</span>
          <input
            ref={goalPhotoRef}
            type="file"
            id="goalPhoto"
            name="goalPhoto"
            accept="image/*"
            required
            className={styles.fileInput}
            onChange={(e) => handleFileChange(e, setGoalPhotoLabel)}
          />
        </div>
        <small id="goalPhotoHelp">Téléchargez une photo représentant votre objectif physique (par exemple : Musclor).</small>

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
