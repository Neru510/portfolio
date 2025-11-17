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
                            Je suis animée par une idée simple :
                            <b className="font-semibold text-[#D49C6A]"> apprendre pour mieux comprendre, et comprendre pour mieux agir.</b>
                            <br /><br />

                            Chaque expérience ouvre une nouvelle perspective :
                            <span className="font-medium text-[#D49C6A]"> le code</span> comme levier d’autonomie,
                            <span className="font-medium text-[#D49C6A]"> la gestion de projet</span> comme espace de création collective,
                            <span className="font-medium text-[#D49C6A]"> le débat</span> comme outil de réflexion et d’apprentissage.
                            <br /><br />

                            Mon parcours n’a rien de parfaitement linéaire, mais il est guidé par une constante :
                            <span className="text-[#D49C6A]"> le désir d’apprendre, de concevoir et de transmettre.</span>
                            <br /><br />

                            Ce désir d’apprentissage s’exprime à travers chacun de mes projets. J’ai récemment terminé
                            <b className="font-semibold text-[#D49C6A]"> la conception et le développement du site GoPetSit</b>, une start-up dédiée à la garde d’animaux.
                            J’y ai assuré la gestion du projet tout en participant activement au développement, en collaboration étroite avec la fondatrice et une équipe de cinq personnes.
                            <br /><br />

                            Mon engagement au sein de structures comme l’association étudiante
                            <a className="font-medium text-[#D49C6A]" href="https://www.instagram.com/licornes.asso/"> LICORNES </a>
                            ou le
                            <a className="font-medium text-[#D49C6A]" href="https://www.festivaldujeu-montpellier.org/"> festival du jeu </a>
                            m’a permis de mieux comprendre les dynamiques internes des organisations et l’importance de l’apprentissage collectif.
                            <br /><br />

                            C’est dans cette logique que j’ai choisi le parcours <span className="text-[#D49C6A]">IAMSI</span>, orienté gestion et pilotage.
                            Mon objectif : <span className="font-medium text-[#D49C6A]"> développer une réelle polyvalence</span>, alliant vision stratégique,
                            compétences techniques et sens du travail en équipe. Je souhaite poursuivre cette trajectoire en intégrant une école d’ingénieur afin d’approfondir ces compétences.
                            <br /><br />

                            Aujourd’hui, je souhaite étudier à Montréal pour explorer un nouveau cadre de vie, découvrir une autre culture,
                            m’ouvrir à de nouvelles façons de travailler et multiplier les expériences humaines autant que professionnelles.
                            <br /><br />

                            Je poursuis ma formation avec l’envie de créer des projets utiles, durables et ouverts aux autres.
                            <b className="font-semibold text-[#D49C6A]"> Comprendre, créer, transmettre : ce fil conducteur continue de guider chacun de mes choix.</b>
                        </p>
                    </div>


                    {/* Image */}
                    <div className="flex flex-col items-center">
                        <div className="w-70 h-70 min-w-50 min-h-50 rounded-full overflow-hidden border-4 border-[#D49C6A] shadow-xl bg-gray-900 flex items-center justify-center">
                            <Image
                                src="/portfolio/img/pp.jpeg"
                                alt="Héloïse Rigaux"
                                className="object-cover w-full h-full"
                                height="300"
                                width="300"
                                unoptimized
                            />
                        </div>
                        <a
                            href="/portfolio/img/CV_RIGAUX_Heloise.pdf"
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