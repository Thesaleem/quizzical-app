import QuantityForm from "./Quantity";
import CategoriesForm from "./Category";
import DifficultyForm from "./Difficulty";
import Button from "../UI/Button";

const Form = props => {
    return (
        <form className="flex flex-col p-12  text-lg" onSubmit={props.onClick}>
            <QuantityForm updateForm={props.updateForm} formData ={props.formData}/>
            <CategoriesForm updateForm={props.updateForm} formData ={props.formData} />
            <DifficultyForm updateForm={props.updateForm} formData ={props.formData}/>
            <Button className="text-xl w-[240px] mt-6 mx-auto" type="submit" >Start quiz</Button>
        </form>
    )
}

export default Form