import Image from 'next/image';
import { FilmIcon, HomeIcon, PlusIcon, SearchIcon, StarIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Link from 'next/link';

function Featured() {
    return (
        <div className="mb-12 lg:mb-14 xl:mb-16 lg:pb-1 xl:pb-0">
            <div className="md:grid md:grid-cols-2 md:gap-5 xl:gap-7 relative">
                <div className="mx-auto col-span-1">
                    <Link href={"/"}>
                        <a className="flex">
                            Featured Section
                        </a>
                    </Link>
                </div>

            </div>

            <div className="h-14 bg-gradient-to-r from-purple-500 to-pink-500 shadow-xl"></div>
        </div>
    )
}

export default Featured;