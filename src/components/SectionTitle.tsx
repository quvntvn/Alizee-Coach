// src/components/SectionTitle.tsx
import React from "react";
import styles from "./style/SectionTitle.module.css";

interface SectionTitleProps {
  text: string;
}

export default function SectionTitle({ text }: SectionTitleProps) {
  return <h2 className={styles.sectionTitle}>{text}</h2>;
}
