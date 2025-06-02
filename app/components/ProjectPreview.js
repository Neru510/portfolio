import Link from "next/link";
import Image from "next/image";
import Skills from "./Skills";

export default function ProjectPreview({ nom, desc, img, skills_overview, link, logo }) {
    return (
        <Link
            href={link}
            aria-label={`Voir le projet ${nom}`}
            className="block focus:outline-none focus:ring-2 focus:ring-[#bfae4f] rounded-2xl"
        >
            <div
                className="project-preview max-w-xl w-full rounded-2xl shadow-lg bg-black border transition-all duration-300 group-hover:shadow-2xl group-hover:border-yellow-400"
                style={{ borderColor: "#bfae4f" }}
            >
                <div className="relative w-full h-48 overflow-hidden rounded-t-2xl bg-gray-900 group">
                    {img && (
                        <Image
                            src={img}
                            alt={nom}
                            fill
                            sizes="100vw"
                            className="transition-transform duration-300 ease-out group-hover:scale-110"
                            style={{ objectFit: "cover", objectPosition: "top" }}
                            priority
                            unoptimized
                        />
                    )}
                </div>

                <div className="px-6 py-5 relative">
                    {logo && (
                        <div className="w-10 h-10 rounded-full bg-black shadow flex items-center justify-center absolute -top-5 left-6 border border-[#bfae4f]">
                            <Image
                                src={logo}
                                alt="logo"
                                width={28}
                                height={28}
                                className="object-contain"
                                unoptimized
                            />
                        </div>
                    )}

                    <h2 className="text-2xl font-bold text-[#bfae4f] mb-2 group-hover:text-yellow-400 transition-colors">
                        {nom}
                    </h2>
                    <p className="text-gray-300 text-sm mb-4 text-justify line-clamp-4">
                        {desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-2">
                        {skills_overview && skills_overview.map((id) => (
                            <Skills key={id} id={id} />
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}
