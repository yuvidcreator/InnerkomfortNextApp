import Image from "next/image";
import StarRatings from "./StarRatings";
import Link from 'next/link'
import {FiShoppingCart} from 'react-icons/fi'
import {FaShoppingBag} from 'react-icons/fa'

function Products() {
    return (
        <>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-8">
                {/* <!--Card 1--> */}
                <div className="rounded-xl overflow-hidden shadow-lg">
                    <Image width={450} height={450} className="w-full max-w-xs hover:scale-110 transition duration-300 ease-in-out" src="/images/home-01/bn-04.jpg" alt="Mountain" />
                    <div className="px-6 py-4">
                        <div className="flex justify-between items-center">
                            <h3 className="font-bold text-xl mb-2">Mountain</h3>
                            <p className="text-end font-medium">Price: ₹199</p>
                        </div>
                        <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    {/* <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div> */}
                    <div className="flex justify-between items-center p-2">
                        <div className="flex items-center p-2.5 mt-[-12px] space-x-2">
                            <Link href="/products" passHref>
                                <a className="flex w-fit space-x-2 rounded-md bg-pink-600 px-4 py-3 font-semibold shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-[2px] hover:bg-black hover:shadow-blue-800/20 text-white">
                                    <FaShoppingBag />
                                </a>
                            </Link>
                            <Link href="/cart" passHref>
                                <a className="flex w-fit space-x-2 rounded-md bg-pink-600 px-4 py-3 font-semibold shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-[2px] hover:bg-black hover:shadow-blue-800/20 text-white">
                                    <FiShoppingCart />
                                </a>
                            </Link>
                        </div>
                        <StarRatings number={5} className="absolute" />                        
                    </div>
                </div>

                {/* <!--Card 2--> */}
                <div className="rounded-xl overflow-hidden shadow-lg">
                    <Image width={450} height={450} className="w-full max-w-xs hover:scale-110 transition duration-300 ease-in-out" src="/images/home-01/bn-04.jpg" alt="River" />
                    <div className="px-6 py-4">
                        <div className="flex justify-between items-center">
                            <h3 className="font-bold text-xl mb-2">River</h3>
                            <p className="text-end font-medium">Price: ₹199</p>
                        </div>
                        <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    {/* <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div> */}
                    <div className="flex justify-between items-center p-2">
                        <div className="flex items-center p-2.5 mt-[-12px] space-x-2">
                            <Link href="/products" passHref>
                                <a className="flex w-fit space-x-2 rounded-md bg-pink-600 px-4 py-3 font-semibold shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-[2px] hover:bg-black hover:shadow-blue-800/20 text-white">
                                    <FaShoppingBag />
                                </a>
                            </Link>
                            <Link href="/cart" passHref>
                                <a className="flex w-fit space-x-2 rounded-md bg-pink-600 px-4 py-3 font-semibold shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-[2px] hover:bg-black hover:shadow-blue-800/20 text-white">
                                    <FiShoppingCart />
                                </a>
                            </Link>
                        </div>
                        <StarRatings number={5} className="absolute" />                        
                    </div>
                </div>

                {/* <!--Card 3--> */}
                <div className="rounded-xl overflow-hidden shadow-lg">
                    <Image width={450} height={450} className="w-full max-w-xs hover:scale-110 transition duration-300 ease-in-out" src="/images/home-01/bn-04.jpg" alt="Forest" />
                    <div className="px-6 py-4">
                        <div className="flex justify-between items-center">
                            <h3 className="font-bold text-xl mb-2">Forest</h3>
                            <p className="text-end font-medium">Price: ₹199</p>
                        </div>
                        <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    {/* <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div> */}
                    <div className="flex justify-between items-center p-2">
                        <div className="flex items-center p-2.5 mt-[-12px] space-x-2">
                            <Link href="/products" passHref>
                                <a className="flex w-fit space-x-2 rounded-md bg-pink-600 px-4 py-3 font-semibold shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-[2px] hover:bg-black hover:shadow-blue-800/20 text-white">
                                    <FaShoppingBag />
                                </a>
                            </Link>
                            <Link href="/cart" passHref>
                                <a className="flex w-fit space-x-2 rounded-md bg-pink-600 px-4 py-3 font-semibold shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-[2px] hover:bg-black hover:shadow-blue-800/20 text-white">
                                    <FiShoppingCart />
                                </a>
                            </Link>
                        </div>
                        <StarRatings number={5} className="absolute" />                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products