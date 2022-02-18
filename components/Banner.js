import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
	{ src: "/carousel-images/1.jpg", alt: "banner pic"},
	{ src: "/carousel-images/2.jpg", alt: "banner pic"},
	{ src: "/carousel-images/3.jpg", alt: "banner pic"}
];

export default function Banner() {
	return (
		<div className="relative">
			<div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
			<Carousel
				autoPlay
				infiniteLoop
				showStatus={false}
				showIndicators={false}
				showThumbs={false}
				interval={5000}
			>
				{images.map(({ src, alt },i) => (
					<div key={i}>
						<img loading="lazy" src={src} alt={alt} />
					</div>
				))}
			</Carousel>
		</div>
	);
}