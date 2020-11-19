import React from 'react';
import styles from './NavBar.module.scss';

const NavBar = () => {
	return (
		<>
			<nav>
				<a href="/weather">Weather</a>
				<a href="/quiz">Quiz</a>
				<a href="/football">Football</a>
			</nav>
		</>
	);
};

export default NavBar;
