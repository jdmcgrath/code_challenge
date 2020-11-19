import React from 'react';
import { Router } from '@reach/router';
import WeatherApi from '../../components/WeatherApi';
import OneQuestionQuiz from '../../components/OneQuestionQuiz';
import FootballTeam from '../../components/FootballTeam';

const Routes = () => {
	return (
		<Router>
			<WeatherApi path="/weather" />
			<OneQuestionQuiz path="/quiz" />
			<FootballTeam path="/football" />
		</Router>
	);
};

export default Routes;
