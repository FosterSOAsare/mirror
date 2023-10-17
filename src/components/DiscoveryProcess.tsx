import { ImArrowUpRight2 } from "react-icons/im";

const AdviceCard = () => {
	return (
		<div className="w-full p-6 border-black border-[1px] rounded-[5px]">
			<h3 className="text-black font-semibold text-xl">Visualize your ideal self and lifestyle</h3>
			<p className="mt-4">
				Understand that the ideal person is you and you alone. Your definition of self is what is right. Do not view yourself through the lens of others because you won’t get to see your real
				self.{" "}
			</p>
		</div>
	);
};

const DiscoveryProcess = () => {
	return (
		<section className="w-full h-auto py-12">
			<div className="w-full h-auto max-w-6xl mx-auto ">
				<h3 className="w-full text-[48px] leading-[60px] font-semibold">The Self Discovery Process</h3>
				<div className="flex  gap-12 mt-8 justify-between items-stretch">
					<article className="w-2/5 flex flex-col gap-8">
						{[1, 2, 3].map((advice, index) => (
							<AdviceCard key={index} />
						))}
					</article>
					<article className="h-auto flex flex-col w-1/2">
						<div className="w-full bg-slate-300 h-4/5 gap-12 items-center justify-between"></div>
						<div className="flex items-center justify-between w-full h-12 mt-auto">
							<div className="w-8 h-8 rounded-full flex items-center justify-center border-black border-[2px]">
								<ImArrowUpRight2 className="rotate-[270deg]" />
							</div>
							<p className="text-sm font-semibold">See more</p>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
};

export default DiscoveryProcess;
