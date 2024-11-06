// src/app/temoignages/page.tsx
import React from "react";
import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";

const testimonials = [
  {
    name: "Claire Dupont",
    text: "Grâce à Alyzée, j'ai retrouvé confiance en moi et je me sens en pleine forme !",
    image: "/images/claire.png",
  },
  {
    name: "Thomas Martin",
    text: "Un coaching exceptionnel qui m'a permis de dépasser mes limites et d'atteindre mes objectifs sportifs.",
    image: "/images/thomas.png",
  },
  {
    name: "Sophie Moreau",
    text: "Les séances sont adaptées à mes besoins, je me sens en sécurité et motivée !",
    image: "/images/sophie.png",
  },
];

export default function TestimonialsPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-50">
      <SectionTitle text="Témoignages" />
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            title={testimonial.name}
            description={testimonial.text}
            image={testimonial.image}
          />
        ))}
      </section>
    </main>
  );
}
