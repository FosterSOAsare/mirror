const PrimaryButton = ({ text, sx = "" }: { text: string; sx?: string }) => {
	return <button className={`${sx} p-4 px-6 bg-black text-white`}>{text}</button>;
};

export default PrimaryButton;
