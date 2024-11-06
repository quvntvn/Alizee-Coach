import Head from "next/head";
import localFont from "next/font/local";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Poppins } from "next/font/google";
import "./globals.css";

// Importation de la police Google
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Importation des polices locales
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Alyzée Coach</title>
        <meta
          name="description"
          content="Découvrez mes services de coaching sportif et prenez contact."
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      
      <body className={`${poppins.className} ${geistSans.variable} ${geistMono.variable}`}>
      <Header />
        {children}
      <Footer/>
      </body>
    </html>
  );
}
