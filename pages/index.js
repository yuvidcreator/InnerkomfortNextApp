import Head from 'next/head';
import Featured from '../components/Featured';
import Header from '../components/Header';
import MiddleBanners from '../components/MiddleBanners';
import Navbar from '../components/Navbar';
import ProductsList from '../components/ProductsList';
import Slider from '../components/Slider';


export default function Home() {
  return (
    <>
      <Head>
        <title>InnerKomfort - The Lingerie Store in Pune</title>
        <meta name="keywords" content="Buy bra, panties, ladies night wear, onlie lingerie store" />
        <meta name="description" content="InnerKomfort - The Lingerie Store in Pune. Buy bra, panties, ladies night wear and much more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <Header />
      <main>
        <Slider />
        <MiddleBanners />
        <Featured />
        <ProductsList />
      </main>

    </>
  )
}
