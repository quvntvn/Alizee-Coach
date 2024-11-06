// src/components/Card.tsx

import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  image?: string;
}

export default function Card({ title, description, image }: CardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-300 hover:scale-105">
      {/* Affiche l'image si elle est fournie */}
      {image && (
        <div className="flex justify-center mb-4">
          <Image
            src={image}
            alt={`Image de ${title}`}
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
      )}

      {/* Titre et description */}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
