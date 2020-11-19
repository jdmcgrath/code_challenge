import React from 'react';
import { render } from '@testing-library/react';
import WeatherCardList from './WeatherCardList';

describe('WeatherCardList tests', () => {
	it('should render', () => {
		expect(render(<WeatherCardList />)).toBeTruthy();
	});
});
