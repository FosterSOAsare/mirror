import Header from "./components/Header";
import Hero from "./components/Hero";
import Advice from "./components/Advice";
import DiscoveryProcess from "./components/DiscoveryProcess";
import PrimaryButton from "./components/PrimaryButton";
import Footer from "./components/Footer";

import { ImArrowUpRight2 } from "react-icons/im";

function App() {
	return (
		<>
			<Header />
			<Hero />
			<section className="w-full h-auto py-12">
				<div className="w- flex flex-col gap-8 h max-w-6xl mx-auto ">
					<article className="flex justify-between items-start gap-8 h-auto">
						<h3 className="w-2/5 text-[48px] leading-[60px] font-semibold">“Knowing yourself is the beginning of all wisdom”</h3>
						<div className="w-1/2">
							<p className="text-lg leading-[35px]">
								The only true journey is the journey within. The greatest discovery in life is self discovery, and until you find yourself, you will always be someone else. LOOK INTO
								THE MIRROR TODAY
								<div className="w-8 h-8 rounded-full flex items-center justify-center text-xl border-black border-[2px] mt-6">
									<ImArrowUpRight2 className="rotate-[180deg]" />
								</div>
							</p>
						</div>
					</article>
					<article className="flex bg-slate-300 h-[400px] gap-12 items-center justify-between"></article>
				</div>
			</section>
			<Advice />
			<DiscoveryProcess />
			<section className="w-full h-auto py-12">
				<div className="w-full h-auto max-w-6xl mx-auto ">
					<h3 className="text-[48px] leading-[60px] font-semibold w-1/2">Discover Yourself. Look Into The MIRROR</h3>
					<div className="flex  gap-16 mt-8 justify-start h-[300px] items-stretch">
						<article className="flex flex-col bg-slate-300  w-[35%] h-full"></article>
						<article className="w-1/2 h-full">
							<p>You are confused about your personality, or it seems you are lost and you want to discover self. LOOK INTO THE MIRROR</p>

							<form action="" className="mt-6">
								<input type="text" className="font-semibold w-full h-auto py-4 focus:outline-0 px-4 border-black border-[1px] mb-6" placeholder="Birth Month" />
								<input type="text" className="font-semibold w-full h-auto py-4 focus:outline-0 px-4 border-black border-[1px] mb-8" placeholder="Date" />

								<PrimaryButton text="Get Started" />
							</form>
						</article>
					</div>
				</div>
			</section>
			<section className="w-full h-auto py-12">
				<div className="w-full h-auto max-w-6xl mx-auto ">
					<h3 className="text-[48px] leading-[60px] font-semibold w-1/2">Hear From Our Altruist</h3>
					<div className="flex  gap-16 mt-8 justify-start h-[300px] items-stretch">
						<article className="flex flex-col bg-slate-300  w-[35%] h-full"></article>
						<article className="w-1/2 h-full">
							<p>You are confused about your personality, or it seems you are lost and you want to discover self. LOOK INTO THE MIRROR</p>
							<p className="mb-8">
								Finding you is our number 1 mission. We have selfless individuals who cares about others and helps them despite not gaining anything by doing this. we act to promote
								someone else's welfare, even at a risk or cost to ourselves. Let's find you. Look Into The Mirror Today.
							</p>
							<PrimaryButton text="Mirror Self" sx="px-12" />
							<div className="w-8 h-8 rounded-full flex items-center justify-center text-xl border-black border-[2px] mt-8">
								<ImArrowUpRight2 className="rotate-[270deg]" />
							</div>
						</article>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}

export default App;
