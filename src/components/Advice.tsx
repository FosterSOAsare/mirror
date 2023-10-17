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

const Advice = () => {
	return (
		<section className="w-full h-auto py-12">
			<div className="w-full flex gap-12 h-auto max-w-6xl mx-auto ">
				<article className="h-auto w-1/2">
					<h3 className="w-full text-[48px] leading-[60px] font-semibold">Feed Your Inner Self Today. Look Into The MIRROR</h3>
					<div className="w-[90%] mt-12 bg-slate-300 h-[300px] gap-12 items-center justify-between"></div>
				</article>
				<div className="w-1/2 flex flex-col gap-8">
					{[1, 2].map((advice, index) => (
						<AdviceCard key={index} />
					))}
					<div className="flex items-center justify-between w-full h-12 mt-auto">
						<div className="w-8 h-8 rounded-full flex items-center justify-center border-black border-[2px]">
							<ImArrowUpRight2 className="rotate-[270deg]" />
						</div>
						<p className="text-sm font-semibold">See more</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Advice;
