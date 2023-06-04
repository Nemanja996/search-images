import './SearchBar.css'
import { useState } from "react";

function SearchBar({onSubmit}){
  const [term,setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
    setTerm('');
  }

  const handleChange = (event) => {
    setTerm(event.target.value)
  };

  return (
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit}>
        <label>Search Images</label>
          <div>
            <input value={term} onChange={handleChange}/>
            <button onClick={handleFormSubmit}>Search</button>
          </div>
      </form>
    </div>
  )
}

export default SearchBar;