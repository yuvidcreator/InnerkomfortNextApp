import Image from 'next/image';
import { useRouter } from "next/router";
import { useState } from 'react';
import Link from 'next/link';



function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
                {children}
            </a>
}

function MobileNav({open, setOpen}) {
    const router = useRouter();

    return (
        <>
            <div className={`absolute top-0 left-0 h-screen w-screen lg:hidden bg-black text-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md`}>
                <div className="flex items-center filter drop-shadow-md bg-black h-20"> 
                {/*logo container*/}
                    <Image 
                    src="/InnerKomfort-logo-white.png" 
                    alt="" 
                    width={225} 
                    height={54} 
                    className="cursor-pointer md:h-auto md:w-auto" 
                    onClick={() => router.push("/")}
                    />
                </div>
                <div className="flex sticky flex-col ml-6 my-4">
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
                    <Link href="/panties">
                        <a className="text-lg font-normal" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                            Sportswear
                        </a>
                    </Link>
                    <Link href="/panties">
                        <a className="text-lg font-normal" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                            Nightwear
                        </a>
                    </Link>
                    <Link href="/panties">
                        <a className="text-lg font-normal" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                            Maternitywear
                        </a>
                    </Link>
                    <Link href="/panties">
                        <a className="text-lg font-normal" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                            Others
                        </a>
                    </Link>

                    {/* <div className="flex text-white mt-8 space-x-4">
                        <button className="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </button> 
                        <button className="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                    </div> */}
                </div>

                <Link href="/login" passHref>
                    <a className="uppercase border px-4 py-1 ml-6 rounded font-medium text-white tracking-wide hover:bg-white hover:text-black transition duration-200">
                        Login
                    </a>
                </Link>
            </div>
        </>
    )
}



function Header() {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    return (
        <section>
            <div className="px-4 py-1 bg-pink-500 text-white">
                <p className="text-xs text-center">
                    We are raising prices on all products by Rs.100 by todya in support of the planet.{' '}
                    <a href='#' className="underline">
                    Learn more
                    </a>
                </p>
            </div>
            <header className="flex items-center sticky bg-black top-0 z-[1000] px-2 h-[63px] lg:px-12 shadow-md">
                <Image 
                    src="/InnerKomfort-logo-white.png" 
                    alt="" 
                    width={360} 
                    height={81} 
                    className="cursor-pointer" 
                    onClick={() => router.push("/")}
                />

                <div className="hidden ml-2 md:flex items-center space-x-4 md:space-x-2 text-white">
                    <Link href={"/bra"}>
                        <a className="header-link group">
                            {/* <HomeIcon className="h-4" /> */}
                            <span className="span">Bra</span>
                        </a>
                    </Link>

                    <Link href={"/panties"}>
                        <a className="header-link group">
                            {/* <SearchIcon className="h-4" /> */}
                            <span className="span">Panties</span>
                        </a>
                    </Link>

                    <Link href={"/nightwear"}>
                        <a className="header-link group">
                            {/* <PlusIcon className="h-4" /> */}
                            <span className="span">Nightwear</span>
                        </a>
                    </Link>

                    <Link href={"/Sports-wear"}>
                        <a className="header-link group">
                            {/* <StarIcon className="h-4" /> */}
                            <span className="span">Sportswear</span>
                        </a>
                    </Link>

                    <Link href={"/maternity-wear"}>
                        <a className="header-link group">
                            {/* <FilmIcon className="h-4" /> */}
                            {/* <Image src="/images/movie-icon.svg" alt="" className="h-5" width={20} height={20} /> */}
                            <span className="span">Maternitywear</span>
                        </a>
                    </Link>

                    <Link href={"/"}>
                        <a className="header-link group">
                            {/* <HomeIcon className="h-4" /> */}
                            {/* <Image src="/images/series-icon.svg" alt="" className="h-5" width={20} height={20} /> */}
                            <span className="span">Others</span>
                        </a>
                    </Link>
                </div>

                
                
                {/* <button className="text-white ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </button>
                <button className="uppercase border px-4 py-1 rounded font-medium text-white tracking-wide hover:bg-white hover:text-black transition duration-200">
                    Login
                </button> */}

                <div className="w-full flex justify-end items-center">
                    <MobileNav open={open} setOpen={setOpen} />
                    <div className="absolute right-0">
                        <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden mr-4" onClick={() => {
                            setOpen(!open)
                        }}>
                            {/* hamburger button */}
                            <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                            <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                            <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                        </div>
                    </div>

                    <div className="flex ml-auto">
                        <div className="hidden mr-10 text-lg font-normal">
                            <NavLink to="/bra">
                                Bra
                            </NavLink>
                            <NavLink to="/panties">
                                Pant
                            </NavLink>
                            <NavLink to="/sportswear">
                                Sportswear
                            </NavLink>
                            <NavLink to="/nightwear">
                                Nightwear
                            </NavLink>
                            <NavLink to="/maternitywear">
                                Maternitywear
                            </NavLink>
                            <NavLink to="/others">
                                Others
                            </NavLink>
                        </div>

                        <div className="md:flex space-x-4 hidden">
                            <a className="text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </a>

                            {/* <button className="text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </button> */}
                            <Link href="/login" passHref>
                                <a className="uppercase border px-4 py-1 ml-6 rounded font-medium text-white tracking-wide hover:bg-white hover:text-black transition duration-200">
                                    Login
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>

            </header>
        </section>
        
    )
}

export default Header