import React, { useState } from "react";
import ProgressiveImage from "react-progressive-image";
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

export default function Card({
  title,
  description,
  imageBefore,
  imageAfter,
  duration,
  program,
  rating,
}: CardProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [showAfterImage, setShowAfterImage] = useState(false);

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

        {imageBefore && (
          <ProgressiveImage src={imageBefore} placeholder="/images/placeholder.png">
            {(src: string, loading: boolean) => (
              <img
                src={src}
                alt={`Avant de ${title}`}
                className={`${styles.image} ${loading ? styles.loading : ""}`}
              />
            )}
          </ProgressiveImage>
        )}

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
          {imageBefore && (
            <ProgressiveImage
              src={showAfterImage && imageAfter ? imageAfter : imageBefore}
              placeholder="/images/placeholder.png"
            >
              {(src: string, loading: boolean) => (
                <img
                  src={src}
                  alt={showAfterImage ? `Après de ${title}` : `Avant de ${title}`}
                  className={`${styles.imageZoom} ${loading ? styles.loading : ""}`}
                />
              )}
            </ProgressiveImage>
          )}

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
