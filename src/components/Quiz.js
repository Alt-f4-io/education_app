
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'

export default function App() {
	const questions = [
		{
			questionText: 'What is 25 x 3',
			answerOptions: [
				{ answerText: '67', isCorrect: false },
				{ answerText: '83', isCorrect: false },
				{ answerText: '75', isCorrect: true },
				{ answerText: '29', isCorrect: false },
			],
		},
		{
			questionText: 'What is the square root of 144',
			answerOptions: [
				{ answerText: '8', isCorrect: false },
				{ answerText: '12', isCorrect: true },
				{ answerText: '53', isCorrect: false },
				{ answerText: '11', isCorrect: false },
			],
		},
		{
			questionText: 'What is 13 squared?',
			answerOptions: [
				{ answerText: '169', isCorrect: true },
				{ answerText: '278', isCorrect: false },
				{ answerText: '167', isCorrect: false },
				{ answerText: '287', isCorrect: false },
			],
		},
		{
			questionText: 'What is 82 divided by 2',
			answerOptions: [
				{ answerText: '333', isCorrect: false },
				{ answerText: '36', isCorrect: false },
				{ answerText: '2432', isCorrect: false },
				{ answerText: '41', isCorrect: true },
			],
		},
		{
			questionText: 'What is 3 x 4 x 5 x 6 ',
			answerOptions: [
				{ answerText: '333', isCorrect: false },
				{ answerText: '36', isCorrect: false },
				{ answerText: '2432', isCorrect: false },
				{ answerText: '360', isCorrect: true },
			],
		},
		{
			questionText: 'What is 9x8 ',
			answerOptions: [
				{ answerText: '333', isCorrect: false },
				{ answerText: '36', isCorrect: false },
				{ answerText: '87', isCorrect: false },
				{ answerText: '72', isCorrect: true },
			],
		},
		{
			questionText: 'What is 7x7 ',
			answerOptions: [
				{ answerText: '67', isCorrect: false },
				{ answerText: '36', isCorrect: false },
				{ answerText: '49', isCorrect: true },
				{ answerText: '72', isCorrect: false },
			],
		},
		{
			questionText: 'What is 7x2 ',
			answerOptions: [
				{ answerText: '14', isCorrect: true },
				{ answerText: '36', isCorrect: false },
				{ answerText: '49', isCorrect: false },
				{ answerText: '72', isCorrect: false },
			],
		},
		{
			questionText: 'What is 89+73 ',
			answerOptions: [
				{ answerText: '162', isCorrect: true },
				{ answerText: '124', isCorrect: false },
				{ answerText: '156', isCorrect: false },
				{ answerText: '167', isCorrect: false },
			],
		},
		{
			questionText: 'What is 89-22 ',
			answerOptions: [
				{ answerText: '67', isCorrect: true },
				{ answerText: '34', isCorrect: false },
				{ answerText: '65', isCorrect: false },
				{ answerText: '36', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='body'>
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					<h3>You scored {score} out of {questions.length}</h3>
					<br/>
					<Link to='/home'><h4>Back Home</h4></Link>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className="button" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
		</div>
	);
}