import Image from 'next/image';
import Link from 'next/link';

function MiddleBanners() {
    return (
        <div className="mb-12 lg:mb-14 xl:mb-16 lg:pb-1 xl:pb-0">
            <div className="md:grid md:grid-cols-2 md:gap-5 xl:gap-7 relative">
                <div className="mx-auto col-span-1">
                    <Link href={"/"}>
                        <a className="flex">
                            Middle Small Banners Banner
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MiddleBanners