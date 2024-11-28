"use client";
import React from "react";
import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";
import FadeIn from 'react-fade-in';
import ReservationBtn from '../../components/ReversationBtn';
import styles from "../../components/style/Temoignages.module.css"; // Module CSS importé

const testimonials = [
  {
    name: "Claire Dupont",
    text: "Grâce à Alizé, j'ai retrouvé confiance en moi et je me sens en pleine forme !",
    imageBefore: "/images/claire.png",
    imageAfter: "/images/claire.png",
    duration: "6 mois de coaching",
    program: "Programme bien-être",
    rating: 5,
  },
  {
    name: "Thomas Martin",
    text: "Un coaching exceptionnel qui m'a permis de dépasser mes limites et d'atteindre mes objectifs sportifs.",
    imageBefore: "/images/claire.png",
    imageAfter: "/images/claire.png",
    duration: "3 mois de coaching",
    program: "Programme performance",
    rating: 4,
  },
  {
    name: "Sophie Moreau",
    text: "Les séances sont adaptées à mes besoins, je me sens en sécurité et motivée !",
    imageBefore: "/images/claire.png",
    imageAfter: "/images/claire.png",
    duration: "8 mois de coaching",
    program: "Programme santé",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <main className={styles.main}> {/* Applique la classe .main */}
      <FadeIn>
      <SectionTitle text="Témoignages" />
      <section className={styles.grid}> {/* Applique la classe .grid */}
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
  );
}
