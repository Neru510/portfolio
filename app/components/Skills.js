"use client";

import { useState } from 'react';
import Image from 'next/image';
import skills from "@/data/skills";

export default function Skills({ id }) {
    const [showImg, setShowImg] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setPos({ x: e.clientX, y: e.clientY });
    };

    const skill = skills.find(s => s.id === String(id));
    if (!skill) return null;

    const nom = skill.nom;
    const img = skill.img;
    const color = skill.color;

    return (
        <>
            <div
                className="relative rounded-md flex items-center justify-center text-white text-[10px] font-light overflow-hidden cursor-pointer transition-all duration-300 group shadow px-3 py-1"
                style={{ backgroundColor: color }}
                onMouseEnter={() => setShowImg(true)}
                onMouseLeave={() => setShowImg(false)}
                onMouseMove={handleMouseMove}
            >
                <span className="z-10 select-none font-normal italic opacity-85">#{nom}</span>
            </div>

            {showImg && (
                <div
                    style={{
                        position: 'fixed',
                        left: pos.x + 24,
                        top: pos.y + 24,
                        pointerEvents: 'none',
                        zIndex: 1000,
                    }}
                >
                    <Image
                        src={img}
                        alt={nom}
                        width={800}
                        height={800}
                        className="rounded-lg shadow-lg border border-white"
                        style={{ background: '#222' }}
                        unoptimized
                    />
                </div>
            )}
        </>
    );
}
