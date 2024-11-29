'use client';

import React, { ReactNode, useState } from "react";
import Image from "next/image"; // Importer Image pour le chargement
import styles from "./style/Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const [imageLoaded, setImageLoaded] = useState(false); // État pour le chargement de l'image

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.modalBody}>
          {/* Ajout d'un spinner pour l'image dans la popup */}
          {!imageLoaded && <div className={styles.spinner}></div>}
          <div className={styles.imageContainer}>
            {/* Ajout de l'image avec le suivi du chargement */}
            {children && React.cloneElement(children as React.ReactElement, {
              onLoad: () => setImageLoaded(true), // Détecte le chargement de l'image
              className: `${styles.image} ${imageLoaded ? "" : styles.hidden}` // Masque l'image avant qu'elle ne soit chargée
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
