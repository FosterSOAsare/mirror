import PrimaryButton from "./PrimaryButton";

import StarSvg from "../assets/star.svg?react";
import HeroImage from "../assets/hero-image.jpg";

const Hero = () => {
	return (
		<section className="w-full h-auto px-4 py-6 md:py-12">
			<div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-between">
				<article className="w-full md:w-1/2 h-auto">
					<div className="text-4xl md:text-6xl relative font-semibold pb-8 md:pb-12 flex flex-col gap-6">
						<div className="relative">
							<h1 className="relative">MIRROR</h1>
							<div className="w-8 h-8 absolute left-[42%] md:left-[45%] top-4 md:top-8  bottom-0 my-auto flex items-center justify-center">
								<StarSvg />
							</div>
						</div>
						<h1 className="text-right">Revealing Truth</h1>
						<div className="relative">
							<h1 className="relative">You & Self</h1>
							<div className="w-8 h-8 absolute left-[54%] md:left-[60%] bottom-3 md:bottom-8 my-auto flex items-center justify-center">
								<StarSvg />
							</div>
						</div>
						<div className="w-8 h-8 absolute left-[25%] -bottom-4 md:-bottom-10 my-auto flex items-center justify-center">
							<StarSvg />
						</div>
					</div>

					<PrimaryButton text="Mirror Self" sx="mt-16 md:mt-32 w-full md:w-1/2 lg:w-1/3 px-16" href="#mirror" />
				</article>
				<article className="w-full md:w-1/2">
					<p>Get to know the hidden you. Mirror reveals your true personality, exposing the unseen and unknown self. LOOK INTO THE MIRROR TODAY</p>
					<div className="w-full mt-8 h-[300px] md:h-[400px] bg-slate-300">
						<img src={HeroImage} className="w-full h-full" alt="Hero Image" />
					</div>
				</article>
			</div>
		</section>
	);
};

export default Hero;
