// src/pages/index.tsx

"use client"; // Directive pour rendre le composant côté client

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import style from '../components/style/Home.module.css';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      <Head>
        <title>Accueil | Alizée Coach Sportif</title>
        <meta name="description" content="Transformez votre vie avec le coaching d'Alizée : santé, forme, et bien-être personnalisés." />
      </Head>

      <main className={style.main}>
        {/* Section Héro */}        
        
        <section className={style.hero}>
  <div className={`${style.heroColumn} ${style.heroText}`}>
    <h1>Transformez Votre Vie avec Alizée</h1>
    <p>Que ce soit pour sculpter votre corps, gagner en énergie, ou adopter un mode de vie sain, Alizée vous accompagne vers vos objectifs avec des séances personnalisées.</p>
    <Link href="/contact" legacyBehavior>
      <a className={`${style.ctaButton} ${style.primaryButton}`}>Réservez Maintenant</a>
    </Link>
  </div>

  <div className={`${style.heroColumn} ${style.heroImage}`}>
    <Image src="/images/alizee.png" alt="Alizée Coach Sportif" width={500} height={500} className={style.heroImage} />
  </div>

  <div className={`${style.heroColumn} ${style.alizeeJourney}`}>
    <h3>Parcours d'Alizée</h3>
    <p><strong>Diplômes :</strong></p>
    <ul>
      <li>Licence en Sciences du Sport et de l’Entraînement</li>
      <li>Certification de Coach Personnel</li>
      <li>Formation en Nutrition Sportive</li>
    </ul>
    
    <p><strong>Expérience professionnelle :</strong></p>
    <ul>
      <li>5 ans de coaching personnalisé</li>
      <li>Expertise en perte de poids et renforcement musculaire</li>
      <li>Ancienne coach pour une équipe de cross-training</li>
    </ul>
  </div>
</section>



        {/* Section Services */}
        <section className={style.servicesSection}>
          <h2>Nos Services</h2>
          <div className={style.serviceList}>
            <div className={style.serviceItem}>
              <h3>Coaching Personnalisé</h3>
              <p>Des programmes adaptés pour des résultats optimaux.</p>
            </div>
            <div className={style.serviceItem}>
              <h3>Plans de Nutrition</h3>
              <p>Un plan nutritionnel sain, adapté à votre style de vie.</p>
            </div>
            <div className={style.serviceItem}>
              <h3>Suivi de Progression</h3>
              <p>Des bilans réguliers pour évaluer vos avancées.</p>
            </div>
            <div className={style.serviceItem}>
              <h3>Entraînements en Groupe</h3>
              <p>Boostez votre motivation en vous entraînant avec d’autres.</p>
            </div>
          </div>
          <Link href="/services" className={`${style.ctaButton} ${style.secondaryButton}`}>
            Découvrir les services
          </Link>
        </section>

        {/* Témoignages Clients */}
        <section className={style.testimonialsSection}>
          <h2>Ce Que Disent Nos Clients</h2>
          <div className={style.testimonial}>
            <p>“Grâce à Alizée, j'ai retrouvé mon énergie et atteint des objectifs que je pensais impossibles. Un coaching au top !”</p>
            <span>- Laura, 35 ans</span>

            <p>“Chaque séance est une dose de motivation et les résultats sont là. Je recommande à 100% !”</p>
            <span>- Marc, 42 ans</span>
          </div>
          <Link href="/temoignages" className={`${style.ctaButton} ${style.secondaryButton}`}>
            Voir tous les témoignages
          </Link>
        </section>

        <section className={style.statsSection}>
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
        <section className={style.ctaSection}>
          <h2>Prêt à Commencer ?</h2>
          <p>Réservez votre première séance et bénéficiez d'un bilan personnalisé gratuit !</p>
          <Link href="/contact" className={`${style.ctaButton} ${style.primaryButton}`}>
            Réservez Maintenant
          </Link>
        </section>
      </main>
    </>
  );
}
