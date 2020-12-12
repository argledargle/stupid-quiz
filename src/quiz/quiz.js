// the quiz data goes here

const quiz = {
  quizTitle: 'What is your dirty elf name?',
  quizSynopsis: 'Find out which slutty elf name suits you',
  questions: [
    {
      question: "What's the first initial of your last name?",
      answerSelectionType: 'single',
      questionType: 'text',
      answers: ['A-H', 'I-P', 'Q-Z'],
      correctAnswer: ['1', '2', '3']
    },
    {
      question: 'What season were you born in?',
      answerSelectionType: 'single',
      questionType: 'text',
      answers: ['Spring', 'Summer', 'Autumn', 'Winter'],
      correctAnswer: ['1', '2', '3', '4']
    },
    {
      question: 'On which day of the month were you born?',
      answerSelectionType: 'single',
      questionType: 'text',
      answers: ['1-7', '8-16', '17-25', '26-31'],
      correctAnswer: ['1', '2', '3', '4']
    }
  ]
}
export default quiz
