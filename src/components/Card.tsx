import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import styles from "./style/Card.module.css";

interface CardProps {
  title: string;
  description: string;
  imageBefore?: string;
  imageAfter?: string;
  duration: string;
  program: string;
  rating: number;
}

export default function Card({ title, description, imageBefore, imageAfter, duration, program, rating }: CardProps) {
  return (
    <div className={styles.card}>
      {/* Photos Avant / Après */}
      <div className={`${styles.iconContainer} ${styles.flexContainer}`}>
        {imageBefore && (
          <Image
            src={imageBefore}
            alt={`Avant de ${title}`}
            width={80}
            height={80}
            className="rounded-full"
          />
        )}
        {imageAfter && (
          <Image
            src={imageAfter}
            alt={`Après de ${title}`}
            width={80}
            height={80}
            className="rounded-full"
          />
        )}
      </div>

      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <p className={styles.durationProgram}>{duration} | {program}</p>

      {/* Étoiles de notation */}
      <div className={styles.rating}>
        {Array.from({ length: rating }, (_, i) => (
          <FaStar key={i} className={styles.ratingIcon} />
        ))}
      </div>
    </div>
  );
}
