import { FaDumbbell, FaRunning, FaAppleAlt, FaHeartbeat } from "react-icons/fa";

const services = [
  {
    title: "Coaching Personnel",
    description: "Des séances personnalisées pour répondre à vos objectifs.",
    icon: <FaDumbbell size={40} className="text-blue-600" />,
  },
  {
    title: "Programme de Nutrition",
    description: "Un suivi nutritionnel adapté à vos besoins.",
    icon: <FaAppleAlt size={40} className="text-green-600" />,
  },
  {
    title: "Entraînement de Groupe",
    description: "Des sessions en groupe pour rester motivé ensemble.",
    icon: <FaRunning size={40} className="text-yellow-500" />,
  },
  {
    title: "Suivi Santé",
    description: "Des conseils santé pour une meilleure forme physique.",
    icon: <FaHeartbeat size={40} className="text-red-600" />,
  },
];

export default function ServicesPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-50">
      {/* Titre */}
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Nos Services</h1>
      
      {/* Liste des services */}
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-300 hover:scale-105"
          >
            {/* Icône du service */}
            <div className="flex justify-center mb-4">{service.icon}</div>

            {/* Titre et description */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
