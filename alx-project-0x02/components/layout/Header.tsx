import Link from "next/link";

const Header: React.FC = () =>{
    return(
        <header className="border border-[#FF5A5F] rounded-full mx-[500px] mb-[10px] h-[50px]">
            <nav className=" mt-3 text-xl">
                <ul className="flex flex-wrap items-center justify-center">
                    <li className="border-r border-[#FF5A5F] pr-5">
                        <Link href='/home' className="hover:border-b">
                            🏠Home
                        </Link>
                    </li>
                    <li className="pl-5">
                        <Link href='/about' className="hover:border-b">
                            ✉️About
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;