import { ToastContainer } from "react-toastify";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Advice from "./components/Advice";
import DiscoveryProcess from "./components/DiscoveryProcess";
import PrimaryButton from "./components/PrimaryButton";
import Footer from "./components/Footer";
import Book from "./components/Book";

import SelfImage from "./assets/self.jpg";
import AltruistImage from "./assets/altruist.jpg";

import { ImArrowUpRight2 } from "react-icons/im";

function App() {
	return (
		<>
			<Header />
			<Hero />
			<section className="w-full h-auto px-4 py-6 md:py-12">
				<div className="w- flex flex-col gap-8 h max-w-6xl mx-auto ">
					<article className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-8 h-auto">
						<h3 className="w-full md:w-2/5 text-3xl md:text-[48px] md:leading-[60px] font-semibold">“Knowing yourself is the beginning of all wisdom”</h3>
						<div className="w-full md:w-1/2">
							<p className="text-lg leading-[35px]">
								The only true journey is the journey within. The greatest discovery in life is self discovery, and until you find yourself, you will always be someone else. LOOK INTO
								THE MIRROR TODAY
								<span className="w-8 h-8 rounded-full flex items-center justify-center text-xl border-black border-[2px] mt-6">
									<ImArrowUpRight2 className="rotate-[180deg]" />
								</span>
							</p>
						</div>
					</article>
					<article className="flex bg-slate-300 h-[200px] md:h-[400px] gap-12 items-center justify-between">
						<img src={SelfImage} className="w-full h-full" alt="" />
					</article>
				</div>
			</section>
			<Advice />
			<DiscoveryProcess />
			<Book />

			<section className="w-full h-auto px-4 py-6 md:py-12">
				<div className="w-full h-auto max-w-6xl mx-auto ">
					<h3 className="text-3xl md:text-[48px] md:leading-[60px] font-semibold w-full md:w-1/2">Hear From Our Altruist</h3>
					<div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-8 justify-start h-auto items-stretch">
						<article className="flex flex-col bg-slate-300  w-full md:w-[35%] h-[300px]">
							<img src={AltruistImage} className="w-full h-full" alt="" />
						</article>
						<article className="w-full md:w-1/2 h-full">
							<p>You are confused about your personality, or it seems you are lost and you want to discover self. LOOK INTO THE MIRROR</p>
							<p className="mb-8">
								Finding you is our number 1 mission. We have selfless individuals who cares about others and helps them despite not gaining anything by doing this. we act to promote
								someone else's welfare, even at a risk or cost to ourselves. Let's find you. Look Into The Mirror Today.
							</p>
							<PrimaryButton text="Mirror Self" sx="w-full md:w-1/2 lg:w-1/3 md:px-12" href="#mirror" />
							<div className="w-8 h-8 rounded-full flex items-center justify-center text-xl border-black border-[2px] mt-8">
								<ImArrowUpRight2 className="rotate-[270deg]" />
							</div>
						</article>
					</div>
				</div>
			</section>
			<Footer />
			<ToastContainer />
		</>
	);
}

export default App;
