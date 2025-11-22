import Link from "next/link";

const Header: React.FC = () =>{
    return(
        <header className="border border-[#FF5A5F] rounded-full mx-[400px] mb-[10px] h-[50px] px-10">
            <nav className=" mt-3 text-xl">
                <ul className="flex flex-wrap items-center justify-center gap-7 ">

                    <li className="border-r border-[#FF5A5F] pr-7">
                        <Link href='/home' className="hover:border-b">
                            🏠Home
                        </Link>
                    </li>
                    <li className="border-r border-[#FF5A5F] pr-7">
                        <Link href='/posts' className="hover:border-b">
                            🪧Posts
                        </Link>
                    </li>
                    <li className="border-r border-[#FF5A5F] pr-7">
                        <Link href='/users' className="hover:border-b">
                            👤Users
                        </Link>
                    </li>
                    <li className="">
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