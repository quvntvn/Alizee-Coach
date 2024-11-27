"use client";
import styles from '../../components/style/Contact.module.css';
import SectionTitle from '@/components/SectionTitle';
import FadeIn from '@/components/FadeIn';
import Head from 'next/head';
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Formulaire soumis avec succès (traité par Netlify) !');
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      objective: formData.get('objective'),
      preferences: formData.getAll('preferences'),
      height: formData.get('height'),
      weight: formData.get('weight'),
      diet: formData.get('diet'),
      message: formData.get('message'),
    };

    // Envoi du formulaire via emailjs
    emailjs.send('service_68kgklb', 'template_2qvcdhh', data, 'jBRnYSIcWFN_brvMQXBE4')
      .then((response) => {
        alert('Message envoyé avec succès!');
      })
      .catch((error) => {
        alert('Erreur lors de l\'envoi du message.');
      });
      console.log([...formData.entries()]);
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
          <form className={styles.contactForm} onSubmit={handleSubmit} method="post" encType="multipart/form-data"
          data-netlify="true"
          name="contact"
          >
            
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

            <label htmlFor="objective" className={styles.noRequired}>Objectif principal</label>
            <select id="objective" name="objective">
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
              placeholder="Votre taille" 
            />

            <label htmlFor="weight" className="no-required">Poids (en kg)</label>
            <input 
              type="number" 
              id="weight" 
              name="weight" 
              placeholder="Votre poids" 
            />

            <label htmlFor="diet" className="no-required">Diète actuelle</label>
            <textarea 
              id="diet" 
              name="diet" 
              placeholder="Décrivez votre alimentation actuelle (par exemple : équilibrée, riche en protéines, végétarienne, etc.)."
            ></textarea>
            {/*
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
                className={styles.fileInput}
                onChange={(e) => handleFileChange(e, setGoalPhotoLabel)}
              />
            </div>
            <small id="goalPhotoHelp">Téléchargez une photo représentant votre objectif physique (par exemple : Musclor).</small>
            */}
            <label htmlFor="message" className={styles.required}>Message</label>
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
