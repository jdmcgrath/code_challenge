import React from 'react';
import styles from './FootballEdit.module.scss';

const FootballEdit = (props) => {
	const { goalkeepers, defenders, midfielders, attackers, coaches } = props;

	return (
		<>
			<section className="football-edit">
				<h3>Select a coach</h3>
				{coaches.map((coach) => (
					<li>{coach.name}</li>
				))}

				<h3>Select three defenders</h3>
				{defenders.map((defender) => (
					<li>{defender.name}</li>
				))}

				<h3>Select four midfielders</h3>
				{midfielders.map((midfielder) => (
					<li>{midfielder.name}</li>
				))}

				<h3>Select three attackers</h3>
				{attackers.map((attacker) => (
					<li>{attacker.name}</li>
				))}

				<h3>Select a goalkeeper</h3>
				{goalkeepers.map((goalkeeper) => (
					<li>{goalkeeper.name}</li>
				))}
			</section>
		</>
	);
};

export default FootballEdit;
