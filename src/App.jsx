import React from "react";
import SearchBar from "./SearchBar";
import WeatherInfo from "./WeatherInfo";
import HourlyForecast from "./HourlyForecast";
import AdditionalInfo from "./AdditionalInfo";

function WeatherApp() {
	return (
		<main className="flex overflow-hidden flex-col items-start px-3 py-2.5 mx-auto w-full text-xl bg-zinc-900 max-w-[480px] text-stone-50">
			<SearchBar />
			<WeatherInfo />
			<section>
				<h2 className="mt-10 ml-4">Today's Forecast</h2>
				<HourlyForecast />
			</section>
			<section>
				<h2 className="mt-10 ml-4">More Information</h2>
				<AdditionalInfo />
			</section>
		</main>
	);
}

export default WeatherApp;
