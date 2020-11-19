import React from 'react';
import styles from './WeatherCard.module.scss';

const WeatherCard = (props) => {
	const { city } = props;
	const { name, main } = city;
	const { humidity, temp, temp_max, temp_min } = main;
	return (
		<>
			<div className={styles.card}>
				<h3> {name} </h3>
				<h4>Temperature: {Math.round(temp - 273.15)}°C </h4>
				<h5>
					High: {Math.round(temp_max - 273.15)}°C Low: {Math.round(temp_min - 273.15)}°C
				</h5>
				<h4>Humidity: {humidity}%</h4>
			</div>
		</>
	);
};

export default WeatherCard;
