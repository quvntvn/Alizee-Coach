// src/app/a-propos/page.tsx

import SectionTitle from "@/components/SectionTitle";
import ProfileImage from "@/components/ProfileImage";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-50 text-gray-800">
      <SectionTitle text="À propos d'Alyzée Coach" />
      <section className="flex flex-col items-center md:flex-row md:items-start md:space-x-8">
        <ProfileImage src="/images/alize.jpg" alt="Photo d'Alyzée Coach Sportif" />
        <div className="max-w-lg text-center md:text-left">
          <p className="text-lg mb-4">
            Je suis Alyzée, coach sportif passionnée avec plus de 5 ans d’expérience...
          </p>
          <p className="text-lg mb-4">
            Diplômée en sciences du sport, je m'engage à offrir un encadrement professionnel...
          </p>
          <p className="text-lg">
            Rejoignez-moi pour une aventure sportive où vous apprendrez à dépasser vos limites...
          </p>
        </div>
      </section>
    </main>
  );
}
