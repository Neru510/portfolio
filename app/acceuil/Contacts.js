import SocialMedia from "@/app/components/Social-Media";

export default function Contacts() {
    return (
        <section className="min-h-screen pt-16 flex flex-col items-center justify-center px-4" id={"contact"}>
            <div className="w-full max-w-lg bg-gray-950/80 rounded-3xl shadow-2xl border border-[#D49C6A]/30 p-8 md:p-12 backdrop-blur-sm">
                <h2 className="text-3xl md:text-4xl font-bold text-[#D49C6A] mb-8 text-center tracking-wide">Me contacter</h2>
                <form>
                    <input
                        name="name"
                        type="text"
                        className="w-full mb-4 px-4 py-3 rounded-md bg-transparent border-2 border-[#D49C6A] focus:border-[#b97a40] text-white font-medium text-lg transition-all duration-300 outline-none placeholder:text-gray-400"
                        placeholder="Nom"
                    />
                    <input
                        name="email"
                        type="email"
                        className="w-full mb-4 px-4 py-3 rounded-md bg-transparent border-2 border-[#D49C6A] focus:border-[#b97a40] text-white font-medium text-lg transition-all duration-300 outline-none placeholder:text-gray-400"
                        placeholder="Email"
                    />
                    <textarea
                        name="text"
                        className="w-full mb-4 px-4 py-3 rounded-md bg-transparent border-2 border-[#D49C6A] focus:border-[#b97a40] text-white font-medium text-lg transition-all duration-300 outline-none placeholder:text-gray-400 h-[150px] resize-vertical"
                        placeholder="Commentaire"
                    />
                    <input
                        type="submit"
                        value="ENVOYER"
                        className="w-full bg-[#D49C6A] hover:bg-[#b97a40] text-white font-bold text-xl py-3 rounded-md border-0 cursor-pointer transition-all duration-300 tracking-wider font-montserrat"
                    />
                </form>
                <div className="mt-8 flex justify-center">
                    <SocialMedia />
                </div>
            </div>
        </section>
    );
}
