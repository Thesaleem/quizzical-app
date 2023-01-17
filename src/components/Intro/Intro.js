import Form from "../Form/Form"
const Intro = props => {
    return (
        <div className="flex flex-col justify-center items-center h-[100vh]">
            <h1 className="text-4xl font-bold">Quizzical</h1>
            <p className="mt-4 mb-8 text-xl">Come, let's engage your brain! 🥳</p>
            <Form updateForm={props.updateForm} formData={props.formData} onClick={props.onStart} />
            <p>Developed by <a href="https://github.com/thesaleem" target="_blank" rel="noreferrer" className="underline"> Saleem</a> </p>
        </div>
    )
}

export default Intro