import React from 'react';
import styles from './OneQuestionQuiz.module.scss';

const answerChecker = () => {
	let guessElem = document.getElementById('guess');
	let inputText = guessElem.value.toUpperCase();

	// If answer is correct
	if (inputText === 'PIZZA') {
		guessElem.value = '';
		alert('WELL DONE!');
	}

	// If there is no answer entered
	else if (inputText.length === 0) {
		alert('PLEASE ENTER');
	}

	// If answer entered is wrong
	else {
		alert("THAT'S WRONG!");
	}
};

const OneQuestionQuiz = () => {
	return (
		<>
			<h1>One Question Quiz</h1>
			<h2>What is Joe's favourite food?</h2>
			<form action="">
				<input type="text" id="guess" />
				<input type="submit" onClick={answerChecker} />
			</form>
		</>
	);
};

export default OneQuestionQuiz;
