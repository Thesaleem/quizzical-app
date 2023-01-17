import { useState } from "react"
import { decode } from "html-entities"
import Answer from "./Answer"

const Question = props => {
    const [selectedOption, setSelectedOption] = useState()

    const answer = props.answer.map((ans, index) => {
        return (
          <>
            <Answer
              key={props.optionID[index]}
              selectedOption={selectedOption}
              onSetOption={setSelectedOption}
              option={decode(ans)}
              questionID={props.id}
              optionID={props.optionID[index]}
              addSelectedAnswer={props.addSelectedAnswer}
              isFinished={props.isFinished}
              correctAnswer={props.correctAnswer}
              selected={props.selected}
            />
          </>
        );
    })
    return (
        <>
            <p className="font-bold lg:text-2xl mt-4" id={props.id}>{props.question}</p>
            <div className="grid grid-cols-2 gap-x-4 md:block md:space-x-4 ">
                {answer}
            </div>
                <hr className="mt-8 border-[#757c9d61]" />
        </>
    )
}

export default Question