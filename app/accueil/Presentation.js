import Image from "next/image";
import LinkHover from "@/app/components/LinkHover";

const BREAKPOINT = "xl"; // Modifie ici: sm, md, lg, xl, 2xl

export default function Presentation() {
    const bp = BREAKPOINT + ":";
    
    const classes = {
        row: `${bp}flex-row`,
        p: `${bp}p-12`,
        text: `${bp}text-lg`,
        flex1: `${bp}flex-[3]`,
        orderLast: `${bp}order-last`,
        textLeft: `${bp}text-left`,
        ml: `${bp}ml-10`,
        textSize: `text-4xl ${bp}text-5xl`,
        w: `w-48 h-48 ${bp}w-70 ${bp}h-70`,
        mt: `mt-4 ${bp}mt-6`,
    };

    return (
        <section className="min-h-screen pt-20 px-6 scroll-mt-10" id="about">
            <h1 className={`${classes.textSize} font-extrabold text-[#D49C6A] drop-shadow-[0_2px_16px_rgba(212,156,106,0.25)] tracking-widest mb-8 text-center ${classes.textLeft} ${classes.ml}`}>
                À propos de moi
            </h1>
            
            {/* Container principal avec le fond blur */}
            <div className={`w-full mx-auto bg-gray-950/80 rounded-3xl shadow-2xl border border-[#D49C6A]/30 p-6 ${classes.p} backdrop-blur-sm flex flex-col ${classes.row} gap-6 items-stretch`}>
                
                {/* Image: premier dans le code, mais order-last sur desktop → à droite */}
                <div className={`flex flex-col items-center justify-center ${classes.flex1} ${classes.orderLast}`}>
                    <div className={`${classes.w} rounded-full overflow-hidden border-4 border-[#D49C6A] shadow-xl bg-gray-900 flex items-center justify-center`}>
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
                        className={`${classes.mt} px-6 py-2 bg-[#D49C6A] hover:bg-[#b97a40] text-gray-900 font-semibold rounded-md shadow-md text-center w-max transform transition-transform duration-200 hover:scale-105`}
                    >
                        Télécharger mon CV
                    </a>
                </div>

                {/* Texte: deuxième dans le code, order-0 par défaut → à gauche sur desktop */}
                <div className={`flex-1 text-gray-100 text-base ${classes.text} leading-relaxed font-light text-justify`}>
                    <p>
                        Je suis animée par une idée simple :
                        <b className="font-semibold text-[#D49C6A]"> apprendre pour mieux comprendre, et comprendre pour mieux agir.</b>
                        <br /><br />

                        Chaque expérience ouvre une nouvelle perspective :
                        <span className="font-medium text-[#D49C6A]"> le code</span> comme levier d'autonomie,
                        <span className="font-medium text-[#D49C6A]"> la gestion de projet</span> comme espace de création collective,
                        <span className="font-medium text-[#D49C6A]"> le débat</span> comme outil de réflexion et d'apprentissage.
                        <br /><br />

                        Mon parcours n'a rien de parfaitement linéaire, mais il est guidé par une constante :
                        <span className="text-[#D49C6A]"> le désir d'apprendre, de concevoir et de transmettre.</span>
                        <br /><br />

                        Ce désir d'apprentissage s'exprime à travers chacun de mes projets. J'ai récemment terminé
                        <b className="font-semibold text-[#D49C6A]"> la conception et le développement du site GoPetSit</b>, une start-up dédiée à la garde d'animaux.
                        J'y ai assuré la gestion du projet tout en participant activement au développement, en collaboration étroite avec la fondatrice et une équipe de cinq personnes.
                        <br /><br />

                        Mon engagement au sein de structures comme l'association étudiante
                        <a className="font-medium text-[#D49C6A]" href="https://www.instagram.com/licornes.asso/" target="_blank" rel="noopener noreferrer" aria-label="LICORNES (lien externe)"> LICORNES </a>
                        ou le
                        <a className="font-medium text-[#D49C6A]" href="https://www.festivaldujeu-montpellier.org/" target="_blank" rel="noopener noreferrer" aria-label="Festival du jeu (lien externe)"> festival du jeu </a>
                        m'a permis de mieux comprendre les dynamiques internes des organisations et l'importance de l'apprentissage collectif.
                        <br /><br />

                        C'est dans cette logique que j'ai choisi le parcours <span className="text-[#D49C6A]">IAMSI</span>, orienté gestion et pilote.
                        Mon objectif : <span className="font-medium text-[#D49C6A]"> développer une réelle polyvalence</span>, alliant vision stratégique,
                        compétences techniques et sens du travail en équipe. Je souhaite poursuivre cette trajectoire en intégrant une école d'ingénieur afin d'approfondir ces compétences.
                        <br /><br />

                        Aujourd'hui, je souhaite étudier à Montréal pour explorer un nouveau cadre de vie, découvrir une autre culture,
                        m'ouvrir à de nouvelles façons de travailler et multiplier les expériences humaines autant que professionnelles.
                        <br /><br />

                        Je poursuis ma formation avec l'envie de créer des projets utiles, durables et ouverts aux autres.
                        <b className="font-semibold text-[#D49C6A]"> Comprendre, créer, transmettre : ce fil conducteur continue de guider chacun de mes choix.</b>
                    </p>
                </div>
            </div>
        </section>
    );
}