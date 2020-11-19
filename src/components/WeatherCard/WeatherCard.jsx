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
				<h4>Temperature: {temp} </h4>
				<h5>
					High: {temp_max} Low: {temp_min}
				</h5>
				<h4>Humidity: {humidity}</h4>
			</div>
		</>
	);
};

export default WeatherCard;
