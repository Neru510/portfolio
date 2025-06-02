import Image from "next/image";

export default function SocialMedia() {
    let link = '/portfolio/img/components/social-media/';
    const socials = [
        { name: "github", url: "https://github.com/Neru510" },
        { name: "linkedin", url: "https://www.linkedin.com/in/rigauxh" },
        { name: "cv", url: "/portfolio/img/CV_RIGAUX_Heloise.pdf" },
    ];
    let style= "mx-2 transition-transform duration-200 will-change-transform transform hover:scale-110"
    return (
        <div className="flex items-center justify-center">
            {socials.map((social) => (
                <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2"
                >
                    <Image
                        src={`${link}${social.name}.svg`}
                        alt={social.name}
                        width={32}
                        height={32}
                        className="transition-transform duration-200 will-change-transform transform hover:scale-110"
                        unoptimized
                    />
                </a>
            ))}
        </div>
    )
}