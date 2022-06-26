import { useState } from "react";
import PropTypes from "prop-types";

function AddCategory({setCategories}) {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length > 0) {
      setCategories((categories)=>[...categories,inputValue]);
      setInputValue("");  
    }

    document.querySelector("#card-grid").remove();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="search">
        <input
          type='text'
          className="textArea"
          placeholder="Search..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit" className="btnSearch"><i className="fa fa-search"></i></button>
      </div>
    </form>
  );
  
}   

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory;