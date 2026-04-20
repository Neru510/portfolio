import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";

const sortedProjects = [...projects].sort((a, b) => b.date.localeCompare(a.date));

export default function Projects() {
    return (
        <section className="py-8 px-4 scroll-mt-20" id="projets">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#D49C6A] drop-shadow-[0_2px_16px_rgba(212,156,106,0.25)] tracking-widest mb-8 text-center">
                Projets
            </h1>
            
            <div className="relative max-w-4xl mx-auto">
                <div className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-white transform -translate-x-1/2"></div>
                
                {sortedProjects.map((project, idx) => (
                    <div key={project.id} className="relative flex items-center w-full mb-8">
                        {idx % 2 === 0 ? (
                            <>
                                <div className="w-[calc(50%-12px)] text-right">
                                    <Link
                                        href={`/projets/${project.id}`}
                                        aria-label={`Voir le projet ${project.title}`}
                                        className="inline-block focus:outline-none focus:ring-2 focus:ring-[#bfae4f] rounded-2xl"
                                    >
                                        <div className="max-w-md w-full rounded-2xl shadow-lg bg-black border transition-all duration-300 hover:shadow-2xl hover:border-yellow-400" style={{ borderColor: "#bfae4f" }}>
                                            <div className="relative w-full h-36 overflow-hidden rounded-t-2xl bg-gray-900 group">
                                                {project.images.preuves?.[0] && (
                                                    <Image
                                                        src={project.images.preuves[0]}
                                                        alt={project.title}
                                                        fill
                                                        sizes="100vw"
                                                        className="transition-transform duration-300 ease-out group-hover:scale-110"
                                                        style={{ objectFit: "cover", objectPosition: "top" }}
                                                        priority
                                                        unoptimized
                                                    />
                                                )}
                                            </div>
                                            <div className="px-4 py-3">
                                                <div className="text-xs text-[#D49C6A] mb-1">{project.dateLabel}</div>
                                                <h2 className="text-lg font-bold text-[#bfae4f] mb-1 group-hover:text-yellow-400 transition-colors">
                                                    {project.title}
                                                </h2>
                                                <p className="text-gray-300 text-xs line-clamp-2">
                                                    {project.description}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="w-[24px] flex justify-center items-center relative z-10">
                                    <div className={`w-3 h-3 rounded-full bg-[#1D1D1D] border-4 border-white ${idx === 0 ? 'w-4 h-4 border-6' : ''}`}></div>
                                </div>
                                <div className="w-[calc(50%-12px)]"></div>
                            </>
                        ) : (
                            <>
                                <div className="w-[calc(50%-12px)]"></div>
                                <div className="w-[24px] flex justify-center items-center">
                                    <div className="w-3 h-3 rounded-full bg-[#1D1D1D] border-4 border-white z-10"></div>
                                </div>
                                <div className="w-[calc(50%-12px)] text-left">
                                    <Link
                                        href={`/projets/${project.id}`}
                                        aria-label={`Voir le projet ${project.title}`}
                                        className="inline-block focus:outline-none focus:ring-2 focus:ring-[#bfae4f] rounded-2xl"
                                    >
                                        <div className="max-w-md w-full rounded-2xl shadow-lg bg-black border transition-all duration-300 hover:shadow-2xl hover:border-yellow-400" style={{ borderColor: "#bfae4f" }}>
                                            <div className="relative w-full h-36 overflow-hidden rounded-t-2xl bg-gray-900 group">
                                                {project.images.preuves?.[0] && (
                                                    <Image
                                                        src={project.images.preuves[0]}
                                                        alt={project.title}
                                                        fill
                                                        sizes="100vw"
                                                        className="transition-transform duration-300 ease-out group-hover:scale-110"
                                                        style={{ objectFit: "cover", objectPosition: "top" }}
                                                        priority
                                                        unoptimized
                                                    />
                                                )}
                                            </div>
                                            <div className="px-4 py-3">
                                                <div className="text-xs text-[#D49C6A] mb-1">{project.dateLabel}</div>
                                                <h2 className="text-lg font-bold text-[#bfae4f] mb-1 group-hover:text-yellow-400 transition-colors">
                                                    {project.title}
                                                </h2>
                                                <p className="text-gray-300 text-xs line-clamp-2">
                                                    {project.description}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

