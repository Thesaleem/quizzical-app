import { createContext } from "react"


const QuizContext = createContext([{
    id: '',
    question: '',
    correctAnswer: '',
    allOptions: [],
    optionID: []
}])

export default QuizContext