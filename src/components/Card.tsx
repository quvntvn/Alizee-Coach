import React, { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Modal from "./Modal";
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
  const [isModalOpen, setModalOpen] = useState(false);
  const [showAfterImage, setShowAfterImage] = useState(false);
  const [isImageLoading, setImageLoading] = useState(true); // État pour le chargement de l'image

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
    setShowAfterImage(false);
  };
  const toggleImage = () => setShowAfterImage(!showAfterImage);

  return (
    <>
      <div className={styles.card} onClick={openModal}>
        <h3 className={styles.cardTitle}>{title}</h3>

        <div className={styles.imageContainer}>
          {isImageLoading && <p className={styles.loadingText}>Chargement en cours...</p>}
          <Image
            src={imageBefore || ""}
            alt={`Avant de ${title}`}
            width={300}
            height={300}
            className={styles.image}
            onLoad={() => setImageLoading(false)} // Marque l'image comme chargée
          />
        </div>

        <p className={styles.cardDescription}>{description}</p>
        <p className={styles.durationProgram}>{duration} | {program}</p>

        <div className={styles.rating}>
          {Array.from({ length: rating }, (_, i) => (
            <FaStar key={i} className={styles.ratingIcon} />
          ))}
        </div>
      </div>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h3>{title}</h3>
          <div className={styles.imageContainer}>
            {isImageLoading && <p className={styles.loadingText}>Chargement en cours...</p>}
            <Image
              src={showAfterImage && imageAfter ? imageAfter : imageBefore || ""}
              alt={showAfterImage ? `Après de ${title}` : `Avant de ${title}`}
              width={1000}
              height={1000}
              className={styles.imageZoom}
              onLoad={() => setImageLoading(false)} // Marque l'image comme chargée
            />
          </div>
          {imageBefore && imageAfter && (
            <button onClick={toggleImage} className={styles.toggleButton}>
              {showAfterImage ? "Avant" : "Après"}
            </button>
          )}
        </Modal>
      )}
    </>
  );
}
