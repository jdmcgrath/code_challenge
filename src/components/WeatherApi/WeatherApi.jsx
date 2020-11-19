import React, { useEffect, useState } from 'react';
import styles from './WeatherApi.module.scss';
import WeatherCardList from '../WeatherCardList';

const WeatherApi = (props) => {
	const [weather, setWeather] = useState([]);
	const fetchWeather = () => {
		// Call the API with the IDs of London, Bristol, and Rome
		fetch(
			'https://api.openweathermap.org/data/2.5/group?id=2643744,4749005,4219762&appid=100a04b0b6d2e5fcd0a4a8ee737e23a3'
		)
			// Put response into response.json file
			.then((response) => response.json())
			// Add beers received in API fetch to beers object array of setBeers
			.then((data) => setWeather(data.list))
			// Catch errors
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		fetchWeather();
	}, []);

	return (
		<>
			<h1>Weathers of the World</h1>
			<WeatherCardList weather={weather} />
		</>
	);
};

export default WeatherApi;
