// src/pages/index.tsx

"use client";

import Head from 'next/head';
import { FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa'; // Assurez-vous d'avoir react-icons installé
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import style from '../components/style/Home.module.css';
import FadeIn from 'react-fade-in';
import ReservationBtn from '../components/ReversationBtn';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      <Head>
        <title>Accueil | Alizé Coach Sportif</title>
        <meta name="description" content="Transformez votre vie avec le coaching d'Alizée : santé, forme, et bien-être personnalisés." />
      </Head>

      <main className={style.main} aria-label="Page principale du site d'Alizé Waron, coach sportif">
        {/* Section Héro */}  
        <FadeIn>      
        <section className={style.hero} aria-label="Section Héro présentant Alizé et son parcours">
          {/* Colonne 1 : Image et parcours */}
          <div className={style.heroLeftColumn} aria-label="Présentation du parcours d'Alizé">
            <Image src="/images/alize.jpg" alt="Portrait d'Alizé Waron, coach sportif" width={1000} height={1000} className={style.heroImage} />
            <div className={style.alizeJourney} aria-labelledby="journey-title">
              <h2 id="journey-title">Mon parcours</h2>
              <p><strong>Formation :</strong></p>
              <ul>
                <li>Formation de professeur de pole dance</li>
                <li>Licence pro des métiers de la forme</li>
              </ul>
              
              <p><strong>Expérience :</strong></p>
              <ul>
                <li>Coach sportif</li>
                <li>Auto-entrepreneur</li>
              </ul>
            </div>
          </div>

          {/* Colonne 2 : Texte et bouton */}
          <div className={style.heroRightColumn} aria-label="Description et message d'Alizé">
            <h1 className={style.titleH1}>Alizé Waron</h1>
            <h2 className={style.titleH2}>Coach sportif</h2>
            <p className={style.slogan}>Basé sur la neurologie et l'étude du développement psychomoteur</p>

            <div className={style.contactInfo} aria-label="Informations de contact d'Alizé">
            <p><FaPhone /> <Link href="tel:+33761933515" >+33 7 61 93 35 15</Link></p>
            <p><FaEnvelope /> <Link href="mailto:alizepoledancer@gmail.com">alizepoledancer@gmail.com</Link></p>
              <p><FaInstagram /> <a href="https://www.instagram.com/mindtomvmt" target="_blank" rel="noopener noreferrer">mindtomvmt</a></p>
            </div>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Des méthodes qui vont au-delà de la pratique sportive, elles vous aident à mieux comprendre le fonctionnement de votre corps et de votre esprit.</p>

            <Link href="/contact" legacyBehavior>
              <a className={`${style.ctaButton} ${style.primaryButton}`} aria-label="Réservez une séance avec Alizé">Réservez Une Séance</a>
            </Link>
            {/* Ajout des informations de contact */}
          </div>
        </section>

        {/* Section Services */}
        <section className={style.servicesSection} aria-label="Présentation des services proposés par Alizé">
          <h2>Nos Services</h2>
          <table className={style.serviceTable} aria-label="Table des services">
            <thead>
              <tr>
                <th>Service</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Coaching Personnalisé</td>
                <td>Des programmes adaptés pour des résultats optimaux.</td>
              </tr>
              <tr>
                <td>Plans de Nutrition</td>
                <td>Un plan nutritionnel sain, adapté à votre style de vie.</td>
              </tr>
              <tr>
                <td>Suivi de Progression</td>
                <td>Des bilans réguliers pour évaluer vos avancées.</td>
              </tr>
              <tr>
                <td>Entraînements en Groupe</td>
                <td>Boostez votre motivation en vous entraînant avec d’autres.</td>
              </tr>
            </tbody>
          </table>
          <Link href="/services" className={`${style.ctaButton} ${style.secondaryButton}`} aria-label="Voir tous les services d'Alizé">
            Découvrir les services
          </Link>
        </section>

        {/* Témoignages Clients */}
        <section className={style.testimonialsSection} aria-label="Section Témoignages des clients d'Alizé">
          <h2>Avis des derniers clients</h2>
          <div className={style.testimonial}>
            <p>“Grâce à Alizée, j'ai retrouvé mon énergie et atteint des objectifs que je pensais impossibles. Un coaching au top !”</p>
            <span>- Laura, 35 ans</span>

            <p>“Chaque séance est une dose de motivation et les résultats sont là. Je recommande à 100% !”</p>
            <span>- Marc, 42 ans</span>
          </div>
          <Link href="/temoignages" className={`${style.ctaButton} ${style.secondaryButton}`} aria-label="Voir tous les témoignages">
            Voir tous les témoignages
          </Link>
        </section>

        {/* Résultats et Statistiques */}
        <section className={style.statsSection} aria-label="Statistiques des résultats des clients d'Alizé">
          <h2>Les Résultats Parlent d'Eux-Mêmes</h2>
          <div className={style.statsContainer}>
            <div className={style.statItem}>
              <h3>98%</h3>
              <p>Clients satisfaits</p>
            </div>
            <div className={style.statItem}>
              <h3>500+</h3>
              <p>Séances réalisées</p>
            </div>
            <div className={style.statItem}>
              <h3>50+</h3>
              <p>Plans personnalisés créés</p>
            </div>
          </div>
        </section>

        {/* Appel à l’Action */}
        <ReservationBtn />
        </FadeIn>
      </main>
    </>
  );
}
