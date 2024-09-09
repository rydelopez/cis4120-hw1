import React from "react";

function AdditionalInfo() {
	return (
		<div className="flex flex-col items-start px-6 py-5 mt-4 w-full rounded-xl bg-neutral-700">
			<div className="flex justify-between w-full mb-6">
				<div className="flex flex-col items-center">
					<div className="flex items-center mb-2">
						<img
							src="sunrise.svg"
							className="w-8 h-8 mr-3"
							alt="Sunrise icon"
						/>
						<span>Sunrise</span>
					</div>
					<span className="text-2xl font-bold">6:21 AM</span>
				</div>
				<div className="flex flex-col items-center">
					<div className="flex items-center mb-2">
						<img src="sunset.svg" className="w-8 h-8 mr-3" alt="Sunset icon" />
						<span>Sunset</span>
					</div>
					<span className="text-2xl font-bold">8:02 PM</span>
				</div>
			</div>
			<div className="flex items-center mb-4">
				<img
					src="temperature.svg"
					className="w-8 h-8 mr-3"
					alt="Temperature icon"
				/>
				<span>
					Feels Like: <span className="font-bold">82°</span>
				</span>
			</div>
			<div className="flex items-center mb-6">
				<img src="humidity.svg" className="w-8 h-8 mr-3" alt="Humidity icon" />
				<span>
					Humidity: <span className="font-bold">70%</span>
				</span>
			</div>
			<p className="text-sm text-yellow-100 bg-yellow-900 bg-opacity-20 p-3 rounded-lg">
				Consider bringing a rain jacket. Due to high humidity, wearing
				lightweight linen and clothes that don't stick close to your body may
				increase comfort.
			</p>
		</div>
	);
}

export default AdditionalInfo;
