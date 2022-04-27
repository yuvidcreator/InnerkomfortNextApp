import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

function Slider() {
    return (
        <section className="relative max-w-screen-3xl mx-auto">
            <Carousel 
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <div>
                    <Image src="/images/home-01/bn-05.jpg" alt="" height={680} width={1600} loading="lazy" />
                </div>
                <div>
                    <Image src="/images/home-01/bn-06.jpg" alt="" height={680} width={1600} loading="lazy" />
                </div>
                <div>
                    <Image src="/images/home-01/bn-05.jpg" alt="" height={680} width={1600} loading="lazy" />
                </div>
                <div>
                    <Image src="/images/home-01/bn-06.jpg" alt="" height={680} width={1600} loading="lazy" />
                </div>
            </Carousel>
        </section>
    )
}

export default Slider;