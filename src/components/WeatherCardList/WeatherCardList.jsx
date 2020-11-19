import React from 'react';
import styles from './WeatherCardList.module.scss';
import WeatherCard from '../WeatherCard';

const WeatherCardList = (props) => {
	const { weather } = props;
	const results = weather.map((city) => <WeatherCard city={city} />);

	return <section className={styles.cardList}>{results}</section>;
};

export default WeatherCardList;
