import { FiTwitter, FiInstagram, FiFacebook } from "react-icons/fi";

const Footer = () => {
	return (
		<footer className="w-full h-auto py-6 bg-white px-6">
			<div className="w-full max-w-6xl mx-auto flex items-center justify-between">
				<h3 className="font-semibold text-xl md:text-2xl">Mirror</h3>
				<nav className="flex gap-2 md:gap-4 text-xl">
					<a href="" className="hover:bg-slate-200 p-2 rounded-full">
						<FiTwitter />
					</a>
					<a href="" className="hover:bg-slate-200 p-2 rounded-full">
						<FiInstagram />
					</a>
					<a href="" className="hover:bg-slate-200 p-2 rounded-full">
						<FiFacebook />
					</a>
				</nav>
			</div>

			<div className="w-full h-auto flex flex-col md:flex-row items-center justify-between mt-12 mx-auto max-w-5xl">
				<p className="md:text-lg font-semibold">
					Designed by <a href="">Sovi Joshua</a>
				</p>
				<p className="md:text-lg font-semibold">
					<span className="group ml-4">
						<a target="_blank" rel="noreferrer" href="https://www.behance.net/joshuasovi" className="group-hover:underline">
							https://www.behance.net/joshuasovi
						</a>
					</span>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
