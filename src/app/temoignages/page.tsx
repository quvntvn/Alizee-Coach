"use client";
import React from "react";
import Head from "next/head"; // Import du composant Head de Next.js
import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";
import FadeIn from "react-fade-in";
import ReservationBtn from '../../components/ReversationBtn';
import styles from "@/components/style/Temoignages.module.css"; // Module CSS importé

const testimonials = [
  {
    name: "Claire D.",
    text: "Grâce à Alizé, j'ai retrouvé confiance en moi et je me sens en pleine forme !",
    imageBefore: "/images/clairefdB.png",
    imageAfter: "/images/clairedA.png",
    duration: "6 mois de coaching",
    program: "Programme bien-être",
    rating: 5,
  },
  {
    name: "Thomas Martin",
    text: "Un coaching exceptionnel qui m'a permis de dépasser mes limites et d'atteindre mes objectifs sportifs.",
    imageBefore: "/images/thomamB.png",
    imageAfter: "/images/thomamA.png",
    duration: "3 mois de coaching",
    program: "Programme performance",
    rating: 4,
  },
  {
    name: "Sophie Moreau",
    text: "Les séances sont adaptées à mes besoins, je me sens en sécurité et motivée !",
    imageBefore: "/images/sophiemB.png",
    imageAfter: "/images/sophiemA.png",
    duration: "8 mois de coaching",
    program: "Programme santé",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <Head>
        {/* Préchargement des images */}
        <link rel="preload" as="image" href="/images/clairedB.png" />
        <link rel="preload" as="image" href="/images/clairedA.png" />
        <link rel="preload" as="image" href="/images/thomamB.png" />
        <link rel="preload" as="image" href="/images/thomamA.png" />
        <link rel="preload" as="image" href="/images/sophiemB.png" />
        <link rel="preload" as="image" href="/images/sophiemA.png" />
      </Head>
      <main className={styles.main}> {/* Classe principale */}
        <FadeIn>
          <SectionTitle text="Témoignages" />
          <section className={styles.grid}> {/* Grille des témoignages */}
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                title={testimonial.name}
                description={testimonial.text}
                imageBefore={testimonial.imageBefore}
                imageAfter={testimonial.imageAfter}
                duration={testimonial.duration}
                program={testimonial.program}
                rating={testimonial.rating}
              />
            ))}
          </section>
          <ReservationBtn />
        </FadeIn>
      </main>
    </>
  );
}
