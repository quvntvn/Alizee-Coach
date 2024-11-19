import SectionTitle from "@/components/SectionTitle";
import ProfileImage from "@/components/ProfileImage";
import styles from "../../components/style/APropos.module.css";
import FadeIn from "@/components/FadeIn";

export default function AboutPage() {
  return (
    <main className={`${styles.main} min-h-screen px-4 py-8 bg-gray-50 text-gray-800`}>
      <SectionTitle text="À propos de moi" />

      <section className={`${styles.profileSection}`}>
        <FadeIn>
          <div className={`${styles.leftCol}`}>
            <ProfileImage src="/images/alize.jpg" alt="Photo d'Alizé Coach Sportif" />
          </div>
        </FadeIn>
        <FadeIn>
          <div className={`${styles.rightCol}`}>
            <p className="text-lg mb-4">
              Je suis Alizé, coach sportif passionnée avec plus de 5 ans d’expérience dans
              l’accompagnement personnalisé.
            </p>
            <p className="text-lg mb-4">
              Diplômée en sciences du sport, je suis spécialisée dans la remise en forme, le
              renforcement musculaire et la préparation physique. Mon objectif est de vous aider
              à atteindre vos objectifs, quel que soit votre niveau.
            </p>
            <p className="text-lg">
              Rejoignez-moi pour une aventure sportive où vous apprendrez à dépasser vos limites
              tout en prenant soin de votre bien-être mental et physique.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className={`${styles.storySection}`}>
  <FadeIn>
    <h2 className="text-2xl font-bold mb-4">L'histoire d'Alizé</h2>
  </FadeIn>
  <div className={`${styles.gridSection}`}>
    <FadeIn>
      <div className={`${styles.leftCol}`}>
        <p className="text-lg mb-4">
          Depuis mon plus jeune âge, le sport a toujours été une passion. J'ai commencé par
          la danse classique avant de découvrir le fitness et l'entraînement fonctionnel.
          Après plusieurs compétitions et années d'apprentissage, j'ai décidé de partager ma
          passion en devenant coach.
        </p>
        <p className="text-lg">
          Aujourd'hui, j'accompagne mes clients à repousser leurs limites, que ce soit pour
          retrouver confiance en eux, perdre du poids ou se préparer pour des défis
          sportifs.
        </p>
      </div>
    </FadeIn>
    <FadeIn>
      <div className={`${styles.rightCol}`}>
        <img
          src="/images/alize.jpg"
          alt="Alizé en entraînement"
          className="rounded-lg shadow-md"
        />
      </div>
    </FadeIn>
  </div>
</section>

    </main>
  );
}
