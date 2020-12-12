import './App.css'
import Quiz from 'react-quiz-component'
import quiz from './quiz/quiz'
import results from './results/results'
// see https://github.com/neetos-llc/react-quiz-components for details on how to use quiz component

const App = () => {
  return (
    <div className='App'>
      <Quiz quiz={quiz} showDefaultResult={false} customResultPage={results}/>
    </div>
  )
}

export default App
