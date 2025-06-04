// src/pages/ServicesPage.js
"use client"
import { FaDumbbell, FaRunning, FaAppleAlt, FaHeartbeat } from "react-icons/fa";
import ReservationBtn from '../../components/ReservationBtn';
import styles from '../../components/style/Services.module.css';
import SectionTitle from "@/components/SectionTitle";
import FadeIn from 'react-fade-in';

const services = [
  {
    title: "Coaching Personnel",
    description: "Des séances personnalisées pour répondre à vos objectifs spécifiques et maximiser votre potentiel.",
    icon: <FaDumbbell size={40} className={styles.iconBlue} />,
  },
  {
    title: "Programme de Nutrition",
    description: "Un suivi nutritionnel adapté pour vous aider à atteindre vos objectifs de manière saine et durable.",
    icon: <FaAppleAlt size={40} className={styles.iconGreen} />,
  },
  {
    title: "Entraînement de Groupe",
    description: "Des sessions en groupe pour rester motivé, se dépasser et s’amuser ensemble.",
    icon: <FaRunning size={40} className={styles.iconYellow} />,
  },
  {
    title: "Suivi Santé",
    description: "Des conseils de santé personnalisés pour une forme optimale et un mode de vie équilibré.",
    icon: <FaHeartbeat size={40} className={styles.iconRed} />,
  },
];

export default function ServicesPage() {
  return (
    <main className={styles.main}>
      <FadeIn>
      {/* Titre */}
      <SectionTitle text="Mes Services" />
      {/* Liste des services */}
      <section className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconContainer}>{service.icon}</div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDescription}>{service.description}</p>
          </div>
        ))}
      </section>

      {/* Section déroulement du plan */}
      <section className={styles.planSection}>
        <h2 className={styles.planTitle}>Comment se déroule le plan ?</h2>
        <ul className={styles.planSteps}>
          <li>📅 <strong>Premier rendez-vous</strong></li><li>Définition des objectifs et évaluation initiale</li>
          <li>💪 <strong>Plan personnalisé</strong></li><li>Programme d’entraînement et nutrition adapté</li>
          <li>🔄 <strong>Suivi régulier</strong></li><li>Ajustements basés sur vos progrès</li>
          <li>🎯 <strong>Évaluation des résultats</strong></li><li>Bilans pour rester motivé et atteindre vos objectifs</li>
        </ul>
        <p className={styles.planDescription}>
          Le programme commence par un rendez-vous où nous discutons de vos objectifs et faisons un bilan de votre forme actuelle. Ensuite, un plan personnalisé est mis en place comprenant des étapes adaptées à vos besoins. Des évaluations régulières permettent de suivre vos progrès et d’ajuster le programme pour des résultats optimaux.
        </p>

      </section>
      <ReservationBtn />
      </FadeIn>
    </main>
  );
}
