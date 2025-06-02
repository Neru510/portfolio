import SocialMedia from "@/app/components/Social-Media";
import { alexandria } from "@/app/fonts";

export default function HeroSection() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center pt-16">
            <div>
                <h1 className={`${alexandria.className} text-[5.5rem] font-extrabold tracking-tight text-white mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]`}>
                    Héloïse Rigaux
                </h1>

            </div>
            <div>
                <p className="text-2xl text-white font-thin mb-8 [text-shadow:_0_0_0_rgba(0,0,0,0.9)]">
                    Apprendre pour mieux comprendre,<br />
                    comprendre pour mieux agir.
                </p>

            </div>
            <SocialMedia />
        </section>

    );
}
