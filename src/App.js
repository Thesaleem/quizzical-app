import './App.css';
import {useState, useEffect} from "react"
import Card from './components/UI/Card';
import Intro from './components/Intro/Intro';
import Quiz from './components/Quiz/Quiz';
import {nanoid} from 'nanoid'


function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [startQuiz, setStartQuiz] = useState(false)
  const [quiz, setQuiz] = useState([])
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState()

  const formDefaultState = {
    quantity: '10',
    category: '',
    difficulty: ''
  }

  const [formData, setFormData] = useState(formDefaultState)

  function updateForm (e){
    const {name,value} = e.target
    setFormData(prev => {
      return {
        ...prev,
        [name]:  value
      }
    })
  }


  useEffect( () => {
    const fetchQuiz = async function (){
        try{
            setIsLoading(true)
            const res = await fetch(`https://opentdb.com/api.php?amount=${formData.quantity}${formData.category}${formData.difficulty}`)
            if(!res.ok){
                throw new Error ('Something went wrong')
            } 
            const data = await res.json()

            const loadedQuiz = data.results.map((result, index) => {                
                return {
                    id: index,
                    question: result.question,
                    correctAnswer: result.correct_answer,
                    allOptions: [...result.incorrect_answers, result.correct_answer].sort((a, b) => Math.random() - 0.5),
                    optionID: [1,2,3,4].map(() => nanoid()),
                    selected: ''
                }
            })

            setIsLoading(false)
            setQuiz(loadedQuiz)
        }
        catch(err) {
            setIsLoading(false)
            setError(true)
            setErrorMessage(err.message)
        }
    }
    fetchQuiz()
}, [startQuiz, formData])

  const loadQuestions = (e) => {
    e.preventDefault()
    setStartQuiz( prevState => !prevState)
  }
  const toggleStartQuiz = () => {
    setStartQuiz( prevState => !prevState)
  }
  return (
    <Card>
      {!startQuiz && <Intro onStart={loadQuestions} updateForm={updateForm} formData={formData} />}
      {startQuiz && (
        <Quiz
          quiz={quiz}
          setQuiz={setQuiz}
          onStartQuiz={toggleStartQuiz}
          loading={isLoading}
          error={error}
          errorMessage={errorMessage}
          onFormData={setFormData}
          formDefaultState={formDefaultState}
          formData={formData}
        />
      )}
    </Card>
  );
}

export default App;
