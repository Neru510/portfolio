import Image from "next/image";
import LinkHover from "@/app/components/LinkHover";

export default function Presentation() {
    return (
        <section className="min-h-screen pt-20 px-6 scroll-mt-10" id="about">
        <h1
                className="text-4xl md:text-5xl font-extrabold text-[#D49C6A] drop-shadow-[0_2px_16px_rgba(212,156,106,0.25)] tracking-widest mb-8 ml-10"
            >
                À propos de moi
            </h1>
            <div className="flex items-center justify-center">
                <div className="w-full max-w-9xl mx-auto bg-gray-950/80 rounded-3xl shadow-2xl border border-[#D49C6A]/30 p-8 md:p-12 flex flex-col md:flex-row flex-nowrap gap-12 items-center backdrop-blur-sm">
                    {/* Texte */}
                    <div className="md:flex-[3] text-gray-100 text-base md:text-lg leading-relaxed font-light max-w-7xl text-justify">
                        <p>
                            J&apos;ai 19 ans, et je suis animée par une idée simple :
                            <b className="font-semibold text-[#D49C6A]">apprendre pour mieux comprendre, et comprendre pour mieux agir.</b>
                            <br /><br />
                            Chaque expérience m&apos;apporte une nouvelle perspective :
                            <span className="font-medium text-[#D49C6A]">le code</span> comme levier d&apos;autonomie,
                            <span className="font-medium text-[#D49C6A]">la gestion de projet</span> comme une forme de création collective,
                            <span className="font-medium text-[#D49C6A]">le débat</span> comme outil de réflexion et d&apos;apprentissage.
                            <br /><br />
                            Mon parcours n&apos;est pas toujours linéaire, mais il est guidé par une constante :
                            <span className="text-[#D49C6A]">le désir d&apos;apprendre, de concevoir et de transmettre.</span>
                            <br /><br />
                            Ce désir m&apos;a menée à explorer différents domaines, en particulier à travers des projets concrets. Aujourd&apos;hui, je suis
                            <b className="font-semibold text-[#D49C6A]">cheffe de projet et Product Owner</b> pour la création du site web de
                            <span className="text-[#D49C6A]">GoPetSit</span>, une start-up innovante dans le secteur de la garde d&apos;animaux. Je pilote une équipe de 5 personnes et collabore directement avec la fondatrice pour définir et prioriser les fonctionnalités du site, tout en assurant le bon déroulement du projet.
                            <br /><br />
                            En parallèle, mon engagement dans des structures comme l&apos;association étudiante
                                <LinkHover
                                    text="LICORNES"
                                    href="https://www.instagram.com/licornes.asso/"
                                    previewImage="/img/previews/preview-licornes.png"
                                />{" "}
                                ou le{" "}
                                <LinkHover
                                    text="festival du jeu"
                                    href="https://www.festivaldujeu-montpellier.org/"
                                    previewImage="/img/previews/preview-festival.png"
                                />{" "}
                                m&apos;a permis de mieux comprendre les dynamiques internes des organisations.
                            <br /><br />
                            C&apos;est dans cette logique que j&apos;ai choisi le parcours <span className="text-[#D49C6A]">IAMSI</span>, plus orienté gestion et pilotage que développement pur. Mon objectif :
                            <span className="font-medium text-[#D49C6A]">cultiver une réelle polyvalence</span>, alliant vision stratégique, compétences techniques et sens du travail en équipe. C&apos;est dans cette logique que j&apos;ai choisi le parcours IAMSI, plus orienté gestion et pilotage que développement pur. Mon objectif est de cultiver une réelle polyvalence, alliant vision stratégique, compétences techniques et sens du travail en équipe. Je compte intégrer une école d&apos;ingénieur, car cela s&apos;aligne parfaitement avec mes aspirations.
                            <br /><br />
                            Je poursuis ma formation avec l&apos;envie de construire des projets utiles, durables, et ouverts aux autres.
                            <b className="font-semibold text-[#D49C6A]">Comprendre, créer, transmettre : ce fil conducteur continue de guider mes choix.</b>
                        </p>
                    </div>

                    {/* Image */}
                    <div className="flex flex-col items-center">
                        <div className="w-70 h-70 min-w-50 min-h-50 rounded-full overflow-hidden border-4 border-[#D49C6A] shadow-xl bg-gray-900 flex items-center justify-center">
                            <Image
                                src="/img/pp.jpeg"
                                alt="Héloïse Rigaux"
                                className="object-cover w-full h-full"
                                height="300"
                                width="300"
                            />
                        </div>
                        <a
                            href="/img/CV_RIGAUX_Heloise.pdf"
                            download
                            className="mt-6 px-6 py-2 bg-[#D49C6A] hover:bg-[#b97a40] text-gray-900 font-semibold rounded-md shadow-md text-center w-max
                                        transform transition-transform duration-200 hover:scale-105"
                        >
                            Télécharger mon CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}