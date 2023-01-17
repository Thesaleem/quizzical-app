import { decode } from "html-entities"
import { useState } from "react"
import Question from "./Question"
import Button from "../UI/Button"
import LoadingSpinner from "../UI/LoadingSpinner"

const Quiz = props => {
    const [isFinished, setIsFinished] = useState(false)
    const [totalScore, setTotalScore] = useState(0)

    function finishQuiz () {
        setIsFinished(true)
        checkAnswer()
    }

    function playAgain(){
        props.onStartQuiz()
        props.onFormData(() => props.formDefaultState)
    }
    function checkAnswer(){
        props.quiz.forEach(quiz => {
            if(quiz.selected.trim() === decode(quiz.correctAnswer)){
                setTotalScore(prev => prev + 1)
            }
        })     
       
    }

    function addSelectedAnswer(questionID, ans){
        props.setQuiz(prevQuiz => {
            const newArr =  prevQuiz.map(quiz => {
                if(questionID === quiz.id){
                    return {
                        ...quiz,
                        selected: ans,
                    }
                }
                else{
                    return quiz
                }
            })
            return newArr
        })
    }
    const content = props.quiz.map(quiz => {
        return (
          <div className="">
            <Question
              key={quiz.id}
              id={quiz.id}
              question={decode(quiz.question)}
              answer={quiz.allOptions}
              optionID={quiz.optionID}
              addSelectedAnswer={addSelectedAnswer}
              isFinished={isFinished}
              correctAnswer={quiz.correctAnswer}
              selected={quiz.selected}
            />
          </div>
        );
    })

    const messages = 'font-bold text-xl absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"'  
    return (
        <div className={` w-[85%] mx-auto my-0 pt-16 pb-12 min-h-full flex flex-col justify-between`}>
                {!props.loading && !props.error && content}
                {!props.loading && !props.error && 
                <div className="flex justify-center items-center mt-12">
                    {!isFinished && <Button className="font-semibold text-lg" onClick={finishQuiz}>Check answers</Button>}
                    {isFinished && 
                    <div className="flex flex-col md:flex-row items-center">
                    <p className="font-bold lg:text-2xl mr-8">You scored {totalScore}/{props.formData.quantity} correct answers</p> 
                    <Button onClick={playAgain} className="font-semibold text-lg mt-4 md:mt-0">Play Again</Button>
                    </div>}
                </div>}
                {props.loading && !props.error && <LoadingSpinner />}
                {!props.loading && props.error && <p className={messages}>{props.errorMessage}</p>}
                {!props.loading && !props.error && <p className="mx-auto mt-8">Developed by <a href="https://github.com/thesaleem" target="_blank" rel="noreferrer" className="underline"> Saleem</a> </p>}
        </div>
    )
}

export default Quiz