"use client"; // Directive pour rendre le composant côté client

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Définit `isClient` sur `true` une fois côté client
  }, []);

  if (!isClient) return null; // Empêche le rendu côté serveur si requis

  return (
    <>
      <Head>
        <title>Accueil | Alizée</title>
        <meta
          name="description"
          content="Site officiel du coach sportif X. Découvrez mes services, mon parcours et prenez contact."
        />
      </Head>
      {/* Menu en haut de la page */}

      {/* Contenu principal */}
      <main>
        {/* Introduction */}
        <section>
          <h1>
            Bienvenue chez Alyzée Coach
          </h1>
          <p>
            Améliorez votre bien-être et atteignez vos objectifs sportifs avec des séances personnalisées.
          </p>
        </section>

        {/* Image de présentation */}
        <section>
          <Image
            src="/images/alizee.png"
            alt="Alyzée Coach Sportif"
            width={300}
            height={300}
            className="rounded-full shadow-lg"
          />
        </section>

        {/* Services */}
        <section className="my-10 max-w-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nos services</h2>
          <ul className="text-gray-600">
            <li>- Coaching personnalisé</li>
            <li>- Plans de nutrition</li>
            <li>- Suivi de progression</li>
            <li>- Entraînements en groupe</li>
          </ul>
        </section>

        {/* Contact */}
        <section className="my-10">
          <Link href="/contact" legacyBehavior>
            <a className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
              Contactez-moi
            </a>
          </Link>
        </section>
      </main>
    </>
  );
}
