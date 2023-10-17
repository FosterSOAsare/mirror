import { FiTwitter, FiInstagram, FiFacebook } from "react-icons/fi";

const Footer = () => {
	return (
		<footer className="w-full h-auto py-6 bg-white">
			<div className="w-full max-w-6xl mx-auto flex items-center justify-between">
				<h3 className="font-semibold text-2xl">Mirror</h3>
				<nav className="flex gap-4 text-xl">
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
		</footer>
	);
};

export default Footer;
