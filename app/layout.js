import { albertSans } from './fonts';
import "./globals.css";

export const metadata = {
  title: "Héloïse Rigaux - Portfolio",
  description: "Portfolio d'Héloïse Rigaux - Étudiante en IAMSI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={albertSans.className}>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#D49C6A] focus:text-black focus:rounded-md focus:font-semibold"
        >
          Aller au contenu principal
        </a>
        <div className="bg-placeholder" aria-hidden="true" />
        <div 
          className="bg-layer loaded" 
          style={{ backgroundImage: "url('/portfolio/img/background.jpg')" }} 
          aria-hidden="true" 
        />
        {children}
      </body>
    </html>
  );
}
