import Link from "next/link";

export default function Navbar() {
    const linkStyle =
        "text-white hover:[color:#D49C6A] transition Alexandria-medium hover:Alexandria-bold w-[110px] inline-block text-center";
    return (
        <nav className="fixed w-full flex justify-center py-6 top-0 z-50 backdrop-blur-md bg-transparent">
            <ul className="flex space-x-8 rounded-full px-8 py-3 ">
                <li>
                    <Link href="/" className={linkStyle}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/#about" className={linkStyle}>
                        À propos
                    </Link>
                </li>
                <li>
                    <Link href="/#projets" className={linkStyle}>
                        Projets
                    </Link>
                </li>
                <li>
                    <Link href="/#contact" className={linkStyle}>
                        Me contacter
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
