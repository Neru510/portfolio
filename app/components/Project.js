"use client"
import { useState } from "react";
import { projects } from "@/data/projects";
import {subskills} from "@/data/subskills";
import Skills from "@/app/components/Skills";
import SubSkills from "@/app/components/SubSkills";

export default function Project({ nomProjet }) {
    const project = projects.find(s => s.id === String(nomProjet));
    if (!project) return <div className="text-center text-red-500 py-8">Projet introuvable.</div>;

    const { title, content, images, liens, skills_overview, skills } = project;
    const preuves = images?.preuves || [];

    // Carousel state
    const [current, setCurrent] = useState(0);


    // Group skills by idSkill
    const groupedSkills = {};
    if (skills && skills.length > 0) {
        skills.forEach(sk => {
            if (!groupedSkills[sk.idSkill]) groupedSkills[sk.idSkill] = [];
            groupedSkills[sk.idSkill].push(sk);
        });
    }

    const linkTypes = ["repo", "depo", "drive"];

    const disclaimer = project.disclaimer;

    function getDescr(idSkill, lvl) {
        return subskills[idSkill]?.[lvl]?.[0] || "";
    }


    console.log(preuves);

    return (
        <section className="w-full pt-30 text-gray-100 py-10 px-0">
            {/* Header */}
            <div className="flex items-center gap-5 mb-8 px-4">
                {images.logo && (
                    <img
                        src={images.logo}
                        alt={title}
                        className="w-20 h-20 object-contain rounded-full border-2 border-[#bfae4f] shadow"
                    />
                )}
                <h1 className="text-4xl font-bold text-[#bfae4f]">{title}</h1>
            </div>

            {/* Disclaimer */}
            {disclaimer && disclaimer !== "" && (
                <div className="w-full bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 px-6 py-3 mb-8 rounded shadow max-w-3xl mx-auto">
                    {disclaimer}
                </div>
            )}

            {/* Liens */}
            {liens && linkTypes.some(type => liens[type]) && (
                <div className="flex flex-wrap gap-4 mb-8 px-8">
                    {linkTypes.map(type =>
                        liens[type] ? (
                            <a
                                key={type}
                                href={liens[type]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-4 py-2 bg-[#bfae4f] text-black rounded shadow hover:bg-yellow-400 transition font-semibold"
                            >
                                {type.charAt(0).toUpperCase() + type.slice(1)}
                            </a>
                        ) : null
                    )}
                </div>
            )}

            {/* Content */}
            <div className="prose prose-invert mb-10 px-4 max-w-full">
                {content}
            </div>

            {/* Carousel d'aperçus */}
            {preuves && preuves.length > 0 && (

                <div className="w-full flex flex-col items-center mb-12 px-4">
                    <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Aperçus du projet</h2>
                    <div className="relative flex flex-col items-center">
                        <img
                            src={preuves[current]}
                            alt={`Preuve ${current + 1}`}
                            className="rounded-xl shadow border border-gray-700 bg-gray-900 mx-auto"
                            style={{
                                maxWidth: "100%",
                                maxHeight: "70vh", // Limite la hauteur à 70% de la fenêtre, ajuste si besoin
                                width: "auto",
                                height: "auto",
                                display: "block",
                            }}
                        />
                        {/* Flèches de navigation */}
                        {preuves.length > 1 && (
                            <>
                                <button
                                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-[#bfae4f] text-black rounded-full p-2 shadow hover:bg-yellow-400 transition hover:cursor-pointer"
                                    onClick={() => setCurrent((current - 1 + preuves.length) % preuves.length)}
                                    aria-label="Précédent"
                                >
                                    &#8592;
                                </button>
                                <button
                                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#bfae4f] text-black rounded-full p-2 shadow hover:bg-yellow-400 transition hover:cursor-pointer"
                                    onClick={() => setCurrent((current + 1) % preuves.length)}
                                    aria-label="Suivant"
                                >
                                    &#8594;
                                </button>
                            </>
                        )}
                        {/* Indicateurs */}
                        <div className="flex justify-center mt-2 gap-2">
                            {preuves.map((_, i) => (
                                <button
                                    key={i}
                                    className={`w-3 h-3 rounded-full ${i === current ? 'bg-[#bfae4f]' : 'bg-gray-700'}`}
                                    onClick={() => setCurrent(i)}
                                    aria-label={`Voir l'aperçu ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}


            {/* Skills overview */}
            {skills_overview && skills_overview.length > 0 && (
                <div className="mb-10 px-8">
                    <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Compétences</h2>
                    <Skills skills_overview={skills_overview} />
                </div>
            )}

            {/* SubSkills affichés par compétence, en grille */}
            {skills && skills.length > 0 && (
                <div className="mb-10 px-8">
                    <div className="space-y-8">
                        {Object.keys(groupedSkills)
                            .sort((a, b) => a - b)
                            .map(idSkill => {
                                // Grouper par niveau
                                const byLvl = {};
                                groupedSkills[idSkill].forEach(sk => {
                                    if (!byLvl[sk.lvl]) byLvl[sk.lvl] = [];
                                    byLvl[sk.lvl].push(sk);
                                });

                                return (
                                    <div key={idSkill} className="mb-8">
                                        <h3 className="text-xl font-bold text-yellow-400 mb-3">{`Compétence ${idSkill}`}</h3>
                                        {Object.keys(byLvl)
                                            .sort((a, b) => a - b)
                                            .map(lvl => (
                                                <div key={lvl} className="mb-4">
                                                    <h4 className="text-lg font-semibold text-[#bfae4f] mb-2">{`Niveau ${lvl} : ${getDescr(idSkill, lvl)}`}</h4>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                                        {byLvl[lvl].map((sk, idx) => (
                                                            <SubSkills
                                                                key={idx}
                                                                idSkill={sk.idSkill}
                                                                idSubSkill={sk.idSubSkill}
                                                                justification={sk.justification}
                                                                level={sk.lvl}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                );
                            })
                        }

                    </div>
                </div>
            )}
        </section>
    );
}
