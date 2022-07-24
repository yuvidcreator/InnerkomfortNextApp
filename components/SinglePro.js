import Image from 'next/image'
import Link from 'next/link'
import StarRatings from './StarRatings'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const SinglePro = () => {
  return (
    <section className="flex flex-col justify-center items-center">
        <div className="flex p-4">
            <Image alt="ecommerce" className="object-cover object-center rounded" src="/images/products/pr-01.jpg" width={512} height={512} />
        </div>
        <div className="flex flex-col justify-center text-center">
            <h4 className="text-gray-800">BRAND NAME</h4>
            <h2 className="text-xl font-bold">Product Title</h2>
        </div>
        <div className="flex">
            <div className="flex-col items-center">
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

    </section>
  )
}

export default SinglePro