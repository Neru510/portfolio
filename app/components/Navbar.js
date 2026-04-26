"use client";
import Link from "next/link";
import { useCallback } from "react";

const scrollToSection = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
    const linkStyle =
        "text-white hover:[color:#D49C6A] transition Alexandria-medium hover:Alexandria-bold w-[110px] inline-block text-center";
    return (
        <nav className="fixed w-full flex justify-center py-6 top-0 z-50 backdrop-blur-md bg-transparent">
            <ul className="flex space-x-8 rounded-full px-8 py-3 ">
                <li>
                    <a href="/portfolio" className={linkStyle}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="/portfolio#about" className={linkStyle}>
                        À propos
                    </a>
                </li>
                <li>
                    <a href="/portfolio#projets" className={linkStyle}>
                        Projets
                    </a>
                </li>
                <li>
                    <a href="/portfolio#contact" className={linkStyle}>
                        Me contacter
                    </a>
                </li>
                <li>
                    <Link href="/apprentissage" className={linkStyle}>
                        Portfolio d'apprentissage
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
