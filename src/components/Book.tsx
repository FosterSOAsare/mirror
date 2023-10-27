/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { toast } from "react-toastify";

import PrimaryButton from "./PrimaryButton";

import DiscoverYourSelfImage from "../assets/form-image.jpg";

import { IoMdClose } from "react-icons/io";

const Book = () => {
	const [showAvancedForm, setShowAdvancedForm] = useState(false);
	const [formData, setFormData] = useState({
		birthmonth: "",
		birthdate: "",
		appointment: {
			name: "",
			date: "",
			time: "",
			mode: "",
		},
	});

	function toNextStep(e: any) {
		e.preventDefault();
		const { birthmonth, birthdate } = formData;
		if (!birthdate || !birthmonth) {
			toast.error("Please fill in all the provided fields", { autoClose: 1500 });
			return;
		}
		setShowAdvancedForm(true);
	}

	function bookSession(e: any) {
		e.preventDefault();
		const { name, date, time, mode } = formData.appointment;
		if (!name || !date || !time || !mode) {
			toast.error("Please fill in all the provided fields", { autoClose: 1500 });
			return;
		}
		toast.success("Appointment succesfully booked", { autoClose: 1500 });
		console.log(formData);
		// Clear form data
		setFormData({
			birthmonth: "",
			birthdate: "",
			appointment: {
				name: "",
				date: "",
				time: "",
				mode: "",
			},
		});
	}

	function handleAppointmentFieldChange(field: string, value: string) {
		setFormData((prev) => ({ ...prev, appointment: { ...prev.appointment, [field]: value } }));
	}
	return (
		<section className="w-full h-auto px-4 py-6 md:py-12" id="mirror">
			{!showAvancedForm && (
				<div className="w-full h-auto max-w-6xl mx-auto ">
					<h3 className="text-2xl md:text-[48px] md:leading-[60px] font-semibold w-full md:w-1/2">Discover Yourself. Look Into The MIRROR</h3>
					<div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-8 justify-start h-auto items-stretch">
						<article className="flex flex-col bg-slate-300 w-full md:w-[35%] h-[250px] md:h-[300px] ">
							<img src={DiscoverYourSelfImage} className="w-full h-full" alt="" />
						</article>
						<article className="w-full md:w-1/2 h-full">
							<p>You are confused about your personality, or it seems you are lost and you want to discover self. LOOK INTO THE MIRROR</p>

							<form action="" className="start mt-6">
								<input
									onChange={(e) => setFormData((prev) => ({ ...prev, birthmonth: e.target.value }))}
									type="text"
									value={formData?.birthmonth}
									className="font-semibold w-full h-auto py-4 focus:outline-0 px-4 border-black border-[1px] mb-4"
									placeholder="Birth Month"
								/>
								<input
									onChange={(e) => setFormData((prev) => ({ ...prev, birthdate: e.target.value }))}
									type="text"
									value={formData?.birthdate}
									className="font-semibold w-full h-auto py-4 focus:outline-0 px-4 border-black border-[1px] mb-8"
									placeholder="Date"
								/>

								<PrimaryButton text="Get Started" sx="w-full md:w-auto" handleClick={toNextStep} />
							</form>
						</article>
					</div>
				</div>
			)}
			{showAvancedForm && (
				<div className="w-full h-auto max-w-6xl mx-auto ">
					<div className="w-full flex items-center justify-between">
						<h1 className="text-2xl md:text-[48px] md:leading-[60px] font-semibold w-full md:w-1/2">You & Self</h1>
						<button className="w-10 h-10 rounded-full flex items-center justify-center text-2xl border-[2px] border-black " onClick={() => setShowAdvancedForm(false)}>
							<IoMdClose />
						</button>
					</div>
					<div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-8 justify-start h-auto items-stretch">
						<article className="flex flex-col w-full md:w-1/2 h-auto">
							<h3 className="text-2xl font-medium">Your Personality</h3>

							<div className="w-full h-auto mt-4">
								<h4 className="w-full text-xl mb-2 font-medium">Strengths</h4>
								<p className="text-[18px] leading-[35px]">
									You are intelligent, smart and creative. A very logical thinker, who is passionate about solving problems. You are also caring and kind, at times you get provoked
									and over react. Nevertheless you are still loving. You love to explore and draw conclusion based on your observation. You are also hardworking,but hate stress. You
									are not materialistic but love to have basic things you need. You are wired to be independent.
								</p>
							</div>
							<div className="w-full h-auto mt-8">
								<h4 className="w-full text-xl mb-2 font-medium">Weaknesses</h4>
								<p className="text-[18px] leading-[35px]">You are emotional and can make rash decisions when emotional. Your love can be a weakness at times.</p>
							</div>
						</article>
						<article className="w-full md:w-1/2 h-full">
							<p className="text-[18px]">Are you living in the shadows of self? We are here tp help you discover self. Book a session today and discover self</p>

							<form action="" className="mt-6">
								<div>
									<label htmlFor="name" className="mb-2 block font-medium">
										Your Name
									</label>
									<input
										type="text"
										value={formData?.appointment?.name}
										onChange={(e: any) => {
											handleAppointmentFieldChange("name", e.target.value);
										}}
										className="font-semibold w-full h-auto py-4 focus:outline-0 px-4 border-black border-[1px] mb-4"
										id="name"
									/>
								</div>
								<div>
									<label htmlFor="date" className="mb-2 block font-medium">
										Preferred Date{" "}
									</label>
									<input
										type="date"
										id="date"
										value={formData?.appointment?.date}
										onChange={(e: any) => {
											handleAppointmentFieldChange("date", e.target.value);
										}}
										className="changedplaceholder font-semibold w-full h-auto py-4 focus:outline-0 px-4 border-black border-[1px] mb-4"
									/>
								</div>
								<div>
									<label htmlFor="name" className="mb-2 block font-medium">
										Time
									</label>
									<input
										type="time"
										id="time"
										value={formData?.appointment?.time}
										onChange={(e: any) => {
											handleAppointmentFieldChange("time", e.target.value);
										}}
										className="changedplaceholder font-semibold w-full h-auto py-4 focus:outline-0 px-4 border-black border-[1px] mb-4"
									/>
								</div>
								<div>
									{" "}
									<label htmlFor="mode" className="mb-2 block font-medium">
										Mode of Communication
									</label>
									<select
										id="mode"
										value={formData?.appointment?.mode}
										onChange={(e: any) => {
											handleAppointmentFieldChange("mode", e.target.value);
										}}
										className="font-semibold w-full h-auto py-4 focus:outline-0 px-4 border-black border-[1px] mb-8">
										<option value="" disabled>
											Select mode{" "}
										</option>
										<option value="visit">Visit </option>
										<option value="call">On Call</option>
									</select>
								</div>
								<PrimaryButton handleClick={bookSession} text="Book a Session" sx="w-full md:w-auto text-[18px] font-semibold" />
							</form>
						</article>
					</div>
				</div>
			)}
		</section>
	);
};

export default Book;
