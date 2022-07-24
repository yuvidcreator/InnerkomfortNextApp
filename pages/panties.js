import Head from 'next/head';
import Featured from '../components/Featured';
import Header from '../components/Header';
import MiddleBanners from '../components/MiddleBanners';
import Navbar from '../components/Navbar';
import ProductsList from '../components/ProductsList';
import SinglePro from '../components/SinglePro';
import Slider from '../components/Slider';

function Panties() {
    return (
        <div>
            <>
                <Head>
                    <title>Panties | @InnerKomfort</title>
                    <meta name="keywords" content="Buy bra, panties, ladies night wear, onlie lingerie store" />
                    <meta name="description" content="InnerKomfort - The Lingerie Store in Pune. Buy bra, panties, ladies night wear and much more." />
                    <ink rel="icon" href="/favicon.ico" />
                </Head>

                <main>
                    <SinglePro />
                </main>
            </>
        </div>
    )
}

export default Panties