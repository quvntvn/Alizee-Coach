"use client";

import { ReactNode, useEffect } from "react";

export default function FadeIn({ children }: { children: ReactNode }) {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
            observer.unobserve(entry.target); // Arrête d'observer après l'apparition
          }
        });
      },
      { threshold: 0 } // 10% de l'élément visible avant de déclencher l'animation
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return <div className="fade-in">{children}</div>;
}
