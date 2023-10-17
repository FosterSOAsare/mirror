import Header from "./components/Header";
import Hero from "./components/Hero";
import Advice from "./components/Advice";

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
								<div className="w-8 h-8 rounded-full border-black border-[2px] mt-6"></div>
							</p>
						</div>
					</article>
					<article className="flex bg-slate-300 h-[400px] gap-12 items-center justify-between"></article>
				</div>
			</section>
			<Advice />
		</>
	);
}

export default App;
