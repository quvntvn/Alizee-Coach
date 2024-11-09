
import { useState } from 'react';
import style from 'style/Home.module.css';
import Link from "next/link";

<section className={style.ctaSection} aria-label="Section de réservation pour le coaching avec Alizé">
<h2>Prêt à Commencer ?</h2>
<p>Réservez votre première séance et bénéficiez d'un bilan personnalisé gratuit !</p>
<Link href="/contact" className={`${style.ctaButton} ${style.primaryButton}`} aria-label="Réserver une séance avec Alizé">
  Réservez Maintenant
</Link>
</section>