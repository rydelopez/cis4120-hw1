import React from "react";

const hourlyData = [
	{
		time: "6a",
		icon: "cloud.svg",
		temp: "60°",
	},
	{
		time: "9a",
		icon: "sun.svg",
		temp: "70°",
	},
	{
		time: "12p",
		icon: "sun.svg",
		temp: "81°",
	},
	{
		time: "3p",
		icon: "rain.svg",
		temp: "78°",
	},
];

function HourlyForecast() {
	return (
		<div className="flex justify-between px-6 py-5 mt-6 rounded-xl bg-neutral-700 overflow-x-auto w-full">
			<div className="flex w-full justify-between min-w-full">
				{hourlyData.map((hour, index) => (
					<>
						{index > 0 && (
							<div className="w-px bg-neutral-600 mx-4 flex-shrink-0"></div>
						)}
						<div className="flex flex-col items-center flex-shrink-0">
							<div className="text-base font-medium">{hour.time}</div>
							<img src={hour.icon} className="w-16 h-16 my-4 object-contain" />
							<div className="text-xl font-bold">{hour.temp}</div>
						</div>
					</>
				))}
			</div>
		</div>
	);
}

export default HourlyForecast;
