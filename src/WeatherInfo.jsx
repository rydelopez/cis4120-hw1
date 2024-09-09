import React from "react";

function WeatherInfo() {
	return (
		<div className="flex flex-col items-center self-center mt-9 w-full max-w-[356px]">
			<div className="flex flex-col items-center font-bold">
				<h1 className="text-3xl">Philadelphia</h1>
				<div className="mt-4 text-4xl">80°</div>
				<div className="mt-9">Chance of Rain: 50%</div>
			</div>
			<div className="mt-3.5 flex flex-row justify-center w-full gap-14">
				<div>H: 90°</div>
				<div>L: 70°</div>
			</div>
			<div className="mt-4">
				<img
					src="sun.svg"
					className="object-contain aspect-square w-[104px]"
					alt="Current weather condition"
				/>
			</div>
		</div>
	);
}

export default WeatherInfo;
