import { useState } from "react"
import { decode } from "html-entities"

const Answer = props => {
    const [clicked, setClicked] = useState(false)
     
    const selectOption = (e) => {
        const ans = e.target.textContent
        setClicked(prevState => !prevState)
        props.addSelectedAnswer(props.questionID, ans)
        props.onSetOption(props.option)
        // console.log(props.selectedOption,props.correctAnswer);
        // console.log(props.selected);
      }
      
      let classes;

    const oneOptionClicked = clicked &&  props.selectedOption === props.option

    if(oneOptionClicked){
        classes = 'bg-[#D6DBF5] border-none'
    }
    else if (!oneOptionClicked){
        classes= 'border-[#4D5B9E] bg-transparent'
    }

    let styles;
  
    if (oneOptionClicked && props.isFinished && props.selected === decode(props.correctAnswer)){
        styles = 'bg-[#94D7A2] border-none'
    }
    else if (oneOptionClicked && props.isFinished && props.selected !== decode(props.correctAnswer)){
        styles = 'bg-[#F8BCBC] border-none opacity-50'
    }

    else if (props.isFinished && !clicked  && props.option === decode(props.correctAnswer)){
        styles = 'bg-[#94D7A2] border-none'
    }
    else if (props.isFinished && props.option !== decode(props.correctAnswer)){
        styles = 'opacity-50'
    }



    return (
      <>
        <button
          type="button"
          className={`border font-medium text-sm lg:text-base py-2 px-4 rounded-xl mt-4  ${classes} ${styles} disabled:cursor-not-allowed`}
          onClick={selectOption}
          id={props.optionID}
          disabled={props.isFinished}
        >
          {props.option}
        </button>
      </>
    );
}

export default Answer