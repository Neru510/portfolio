"use client";
import { useState } from "react";
import Image from "next/image";

export default function LinkHover({ text, href, previewImage }) {
    const [showPreview, setShowPreview] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <span className="relative inline-block">
      <a
          href={href}
          className="text-[#D49C6A] hover:underline transition-colors duration-300"
          onMouseEnter={() => setShowPreview(true)}
          onMouseLeave={() => setShowPreview(false)}
          onMouseMove={handleMouseMove}
          target="_blank"
          rel="noopener noreferrer"
      >
        {text}
      </a>
            {showPreview && previewImage && (
                <div
                    className="fixed z-50 rounded-lg shadow-xl border border-gray-200 overflow-hidden bg-white"
                    style={{
                        left: position.x,  // décale à droite
                        top: position.y + 12,   // décale vers le bas
                        maxWidth: "500px",
                        pointerEvents: "none",
                    }}
                >
                    <Image
                        src={previewImage}
                        alt={`Aperçu de ${href}`}
                        className="object-cover w-full"
                        style={{ maxHeight: "300px" }}
                        width={previewImage.width}
                        height={previewImage.height}
                    />
                    <div className="text-xs p-2 bg-gray-800 text-white">
                        {new URL(href).hostname}
                    </div>
                </div>
            )}
    </span>
    );
}
