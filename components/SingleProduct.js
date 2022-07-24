import Image from 'next/image'
import Link from 'next/link'
import StarRatings from './StarRatings'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const SingleProduct = () => {
  return (
    <section className="flex justify-center items-center p-24">
        <div className="flex flex-wrap md:w-5/6 mx-auto">
            <div className="lg:w-1/2 lg:h-auto ">
                <Image alt="ecommerce" className="h-64 object-cover object-center rounded" src="/images/products/pr-01.jpg" width={512} height={512} />
            </div>
            <div className="lg:w-1/2 lg:py-6 mt-4 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                <h1 className="text-black text-2xl md:text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
                <div className="md:flex md:mb-4">
                    <div className="flex items-center">
                        <StarRatings number={4} />
                        <span className="text-gray-600 ml-3">4 Reviews</span>
                    </div>
                    <div className="flex items-center ml-4 pl-2 py-2 border-l-2 border-gray-200">
                        <a href="https://www.facebook.com/" type="button" className="rounded-full border-2 border-white bg-blue-600 text-white leading-normal uppercase hover:bg-blue-800 hover:border-blue-800 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                            <FaFacebook className="ml-2 mt-2 mx-auto" />
                        </a>
                        <a href="https://www.instagram.com/" type="button" className="rounded-full border-2 border-white bg-gradient-to-tr text-white leading-normal uppercase hover:bg-gradient-to-tr from-fuchsia-600 to-orange-600 hover:border-transparent focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                            <FaInstagram className="ml-2 mt-2 mx-auto" />
                        </a>
                        <a href="https://wa.me/" type="button" className="rounded-full border-2 border-white bg-green-500 text-white leading-normal uppercase hover:bg-green-600 hover:border-green-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                            <FaWhatsapp className="ml-2 mt-2 mx-auto" />
                        </a>
                        <h4 className='md:m-4'>Share the Product</h4>
                    </div>
                </div>
                <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                    <div className="flex">
                        <span className="mr-3">Color</span>
                        <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                        <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                    </div>
                    <div className="flex ml-6 items-center">
                        <span className="mr-3">Size</span>
                        <div className="relative">
                            <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-pink-500 text-base pl-3 pr-10">
                                <option>SM</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                            </select>
                            <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <span className="md:absolute title-font font-medium text-2xl text-gray-900">$58.00</span>
                    <div className="flex-auto md:flex absolute right-24 lg:absolute md:right-52 space-x-2 lg:space-x-2">
                        <Link href="" passHref>
                            <a className="md:flex-row ml-auto md:right-0 w-fit rounded-md bg-pink-600 px-4 py-3 font-semibold shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-[2px] hover:bg-black hover:shadow-blue-800/20 text-white">
                                Buy now
                            </a>
                        </Link>
                        <Link href="" passHref>
                            <a className="md:flex-row w-fit rounded-md bg-pink-600 px-4 py-3 font-semibold shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-[2px] hover:bg-black hover:shadow-blue-800/20 text-white">
                                Add to Cart
                            </a>
                        </Link>
                        <a className="rounded-full w-10 h-10 bg-pink-200 p-0 border-0 inline-flex items-center justify-center text-pink-600 ml-4">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SingleProduct