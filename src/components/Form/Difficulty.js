
const DifficultyForm = props => {

  return (
    <>
      <label className='mb-2' htmlFor="difficulty">Select Difficulty:</label>
      <select
        className='outline-none mb-3 bg-[#eaf0f7] text-base' 
        id="difficulty" 
        name="difficulty" 
        value={props.formData.difficulty} 
        onChange={props.updateForm} 
      >
        <option value="">Any Difficulty</option>
        <option value="&difficulty=easy">Easy</option>
        <option value="&difficulty=medium">Medium</option>
        <option value="&difficulty=hard">Hard</option>
      </select>
    </>
  );
}

export default DifficultyForm;
