import { useState } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
import Image from 'next/image';



function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}) {
    const router = useRouter();

    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-black text-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md`}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-black h-24"> 
            {/*logo container*/}
                <Image 
                src="/InnerKomfort-logo-white.png" 
                alt="" 
                width={279} 
                height={63} 
                className="cursor-pointer" 
                onClick={() => router.push("/")}
                />
            </div>
            <div className="flex sticky flex-col ml-6 my-28">
                <Link href="/bra">
                    <a className="text-lg font-medium" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                        Bra
                    </a>
                </Link>
                <Link href="/panties">
                    <a className="text-lg font-normal" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                        Panties
                    </a>
                </Link>

                <button className="text-white mt-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </button>  
            </div>
        </div>
    )
}

export default function Navbar() {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    
    return (
        <nav className="flex sticky filter drop-shadow-md bg-black text-white px-4 py-4 items-center">
            
            <div className="flex items-center md:ml-8">
                <Image 
                src="/InnerKomfort-logo-white.png" 
                alt="" 
                width={279} 
                height={63} 
                className="cursor-pointer" 
                onClick={() => router.push("/")}
                />
            </div>
            
            <div className="w-9/12 flex justify-end items-center">
                <MobileNav open={open} setOpen={setOpen} />
                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden mr-4" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex ml-auto">
                    <div className="mr-10 text-xl font-normal">
                        <NavLink to="/bra">
                            Bra
                        </NavLink>
                        <NavLink to="/panties">
                            Panties
                        </NavLink>
                    </div>

                    <button className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </button> 
                </div>
            </div>
            
        </nav>
    )
}