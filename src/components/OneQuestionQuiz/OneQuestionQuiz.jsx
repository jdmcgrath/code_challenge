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
					<section className={styles.quiz}>
						<h1>One Question Quiz</h1>
						<h2>What is Joe's favourite food?</h2>
						<form className={styles.form}>
							<input className="textbox" type="text" id="guess" />
							<input className="submit" type="submit" onClick={answerChecker} />
						</form>
			</section>
		</>
	);
};

export default OneQuestionQuiz;
