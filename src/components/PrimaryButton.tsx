/* eslint-disable @typescript-eslint/no-explicit-any */
const PrimaryButton = ({ text, sx = "", href, handleClick }: { text: string; sx?: string; href?: string; handleClick?: (e: any) => void }) => {
	return (
		<>
			{!href && (
				<button className={`${sx} p-4 px-6 bg-black hover:bg-opacity-70 text-white`} onClick={(e) => handleClick && handleClick(e)}>
					{text}
				</button>
			)}
			{href && (
				<a href={href} className={`${sx} w-auto flex items-center justify-center p-4 px-6 bg-black hover:bg-opacity-70 text-white`}>
					{text}
				</a>
			)}
		</>
	);
};

export default PrimaryButton;
