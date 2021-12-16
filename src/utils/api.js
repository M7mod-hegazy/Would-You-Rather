import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from './_DATA.js';

export const getInitialData = () =>
	Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) =>
	({
		users,
		questions
	}));

export const saveQuestion = (question) => (_saveQuestion(question));

export const saveQuestionAnswer = (info) => (_saveQuestionAnswer(info));