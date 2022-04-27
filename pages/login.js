import Head from 'next/head';
import Featured from '../components/Featured';
import Header from '../components/Header';
import MiddleBanners from '../components/MiddleBanners';
import ProductsList from '../components/ProductsList';
import Slider from '../components/Slider';


export default function Login() {
    return (
        <>
        <Head>
            <title>Login | InnerKomfort - The Lingerie Store in Pune</title>
            <meta name="keywords" content="Buy bra, panties, ladies night wear, onlie lingerie store" />
            <meta name="description" content="InnerKomfort - The Lingerie Store in Pune. Buy bra, panties, ladies night wear and much more." />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
            <div className="w-full max-w-xs py-50 px-50">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                        </label>
                        {/* <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"> */}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        {/* <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"> */}
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Sign In
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2020 Acme Corp. All rights reserved.
                </p>
            </div>
        </main>

        </>
    )
}
