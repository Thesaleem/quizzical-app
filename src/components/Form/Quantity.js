
const QuantityForm = props => {
 
  return (
    <>
      <label className='mb-2' htmlFor="quantity">Number of Questions:</label>
      <input 
      className='pl-4 outline-none bg-[#e9edf0] focus:outline-[#4D5B9E] focus:outline-1 mb-3 rounded-md'
        type="number" 
        id="quantity" 
        name="quantity" 
        min={1} 
        max={40} 
        value={props.formData.quantity} 
        onChange={props.updateForm} 
      />
    </>
  );
}

export default QuantityForm;
