import Head from 'next/head';
import Featured from '../components/Featured';
import Header from '../components/Header';
import MiddleBanners from '../components/MiddleBanners';
import Slider from '../components/Slider';

function bra() {
    return (
        <>
        <Head>
            <title>Bra | @InnerKomfort</title>
            <meta name="keywords" content="Buy bra, panties, ladies night wear, onlie lingerie store" />
            <meta name="description" content="InnerKomfort - The Lingerie Store in Pune. Buy bra, panties, ladies night wear and much more." />
            <ink rel="icon" href="/favicon.ico" />
        </Head>

        <main>
            <Header />
            <Slider />
            <MiddleBanners />
            <Featured />
        </main>
        </>
    )
}

export default bra