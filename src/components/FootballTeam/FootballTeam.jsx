import React, { useState } from 'react';
import styles from './FootballTeam.module.scss';
import players from '../../data/players';
import FootballEdit from '../FootballEdit';

// Football Team Organiser
// Using the data set provided, build a component to allow users to select players from the list and create their ideal Borussia Mönchengladbach starting eleven.
// Keep in mind:
// A user can't insert a player more than once.
// A team can have no more than 1 Goalkeeper
// The starting eleven needs to include 3 Defenders, 4 Midfielders, 3 Attackers.
// The UI should reflect the user choices.

// Dropdowns for each player name
// When selected, remove from list

const FootballTeam = (props) => {
	// const [showing, setShowing] = useState;

	const goalkeepers = players.filter((player) => player.position === 'Goalkeeper');
	const defenders = players.filter((player) => player.position === 'Defender');
	const midfielders = players.filter((player) => player.position === 'Midfielder');
	const attackers = players.filter((player) => player.position === 'Attacker');
	const coaches = players.filter((player) => player.role === 'COACH');

	const selected_goalkeeper = [];
	const selected_defenders = [];
	const selected_midfielders = [];
	const selected_attackers = [];
	const selected_coach = coaches;

	// const toggleEdit = () => {
	// 	setShowing({ showing: !showing });;
	// };

	return (
		<>
			<FootballEdit
				goalkeepers={goalkeepers}
				defenders={defenders}
				midfielders={midfielders}
				attackers={attackers}
				coaches={coaches}
			/>
			<section className={styles.football}>
				<h1>Football Selector</h1>

				{/* <button onClick={toggleEdit}>Edit Players</button> */}

				<div>
					<h3>Coach:</h3>
					{selected_coach.map((coach) => (
						<p>{coach.name}</p>
					))}
				</div>

				<div>
					<h3>Attackers:</h3>
					{selected_attackers.map((attacker) => (
						<p>{attacker.name}</p>
					))}
				</div>

				<div>
					<h3>Midfielders:</h3>
					{selected_midfielders.map((midfielder) => (
						<p>{midfielder.name}</p>
					))}
				</div>

				<div>
					<h3>Defenders:</h3>
					{selected_defenders.map((defender) => (
						<p>{defender.name}</p>
					))}
				</div>

				<div>
					<h3>Goalkeeper:</h3>
					{selected_goalkeeper.map((goalkeeper) => (
						<p>{goalkeeper.name}</p>
					))}
				</div>
			</section>
		</>
	);
};

export default FootballTeam;
