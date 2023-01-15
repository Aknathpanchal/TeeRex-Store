import React from 'react'
import { useState } from "react";
import { useDispatch} from "react-redux";
import { product_search } from '../Redux/actions';


const SearchBar = () => {
   
    const [searchInput, setSearchInput] = useState("");
    const dispatch = useDispatch();
    
    const searchDataHandler = () => {
        dispatch(product_search(searchInput));
      };
 
      

  return (
        <div className="search">
        <input
          type="text"
          placeholder="Search for products..."
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={searchDataHandler}>
          <img
            src="https://www.freeiconspng.com/uploads/search-icon-png-29.png"
            width="18px"
            alt="Png Search Simple"
          />
        </button>
        <button className="filter_icon">
          <img
            width="18px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLnaQzz2KlvXpHg7bv9uW6DoONrWTdTyKsA&usqp=CAU"
            alt="filter icon"
          />
        </button>
      </div>
   
  )
}

export default SearchBar
