import React, { useState } from "react";

function SearchBar() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	return (
		<>
			<div className="flex justify-between items-center w-full max-w-[600px] text-base text-neutral-400">
				<div className="flex gap-5 px-3 py-2 rounded-xl bg-neutral-700 flex-grow mr-4">
					<img
						src="search.svg"
						className="object-contain shrink-0 w-5 aspect-square"
						alt=""
					/>
					<input
						type="text"
						className="flex-auto w-full bg-transparent hover:outline-none focus:outline-none"
						placeholder="Search for a city"
						aria-label="Search for a city"
					/>
				</div>
				<button aria-label="Settings" onClick={toggleModal}>
					<img
						src="settings.svg"
						className="object-contain shrink-0 self-start w-8 aspect-square"
					/>
				</button>
			</div>
			{isModalOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
					<div className="bg-neutral-700 p-6 rounded-xl">
						<h2 className="text-xl font-bold mb-4">Settings</h2>
						<div className="mb-4">
							<label className="block mb-2">Temperature Unit</label>
							<select className="w-full bg-neutral-600 p-2 rounded">
								<option>Fahrenheit</option>
								<option>Celsius</option>
							</select>
						</div>
						<button
							className="bg-slate-500 text-white px-4 py-2 rounded"
							onClick={toggleModal}
						>
							Close
						</button>
					</div>
				</div>
			)}
		</>
	);
}

export default SearchBar;
