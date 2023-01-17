import QuizContext from "./quiz-context";


const QuizProvider = (prop) => {

    return (
        <QuizContext.Provider value={prop.quiz}>
            {props.children}
        </QuizContext.Provider>
    )
}

export default QuizProvider