import PrimaryButton from "./PrimaryButton";

import StarSvg from "../assets/star.svg?react";

const Hero = () => {
	return (
		<section className="w-full h-auto py-12">
			<div className="w-full max-w-6xl mx-auto flex gap-12 items-center justify-between">
				<article className="w-1/2 h-auto">
					<div className="text-6xl relative font-semibold pb-12 flex flex-col gap-6">
						<div className="relative">
							<h1 className="relative">MIRROR</h1>
							<div className="w-8 h-8 absolute left-[45%] top-8  bottom-0 my-auto flex items-center justify-center">
								<StarSvg />
							</div>
						</div>
						<h1 className="text-right">Revealing Truth</h1>
						<div className="relative">
							<h1 className="relative">You & Self</h1>
							<div className="w-8 h-8 absolute left-[60%] bottom-8 my-auto flex items-center justify-center">
								<StarSvg />
							</div>
						</div>
						<div className="w-8 h-8 absolute left-[25%] -bottom-10 my-auto flex items-center justify-center">
							<StarSvg />
						</div>
					</div>

					<PrimaryButton text="Mirror Self" sx="mt-32 px-16" />
				</article>
				<article className="w-1/2">
					<p>Get to know the hidden you. Mirror reveals your true personality, exposing the unseen and unknown self. LOOK INTO THE MIRROR TODAY</p>
					<div className="w-full mt-8 h-[400px] bg-slate-300"></div>
				</article>
			</div>
		</section>
	);
};

export default Hero;
