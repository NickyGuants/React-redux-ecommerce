import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCars } from "../redux/actions/cartActions";
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom'

export default function Search() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const handleSubmit = (input) => {
    dispatch(searchCars(input));
  };
  return (
    <div className="search">
      <div className="search-input">
        <input
          type="text"
          id="search"
          value={input}
          placeholder="Search for car by make or model"
          onChange={(e) => setInput(e.target.value)}
              />
        <Link to="/search-results"><AiOutlineSearch className="search-icon" onClick={()=> handleSubmit(input)} /></Link>
      </div>
    </div>
  );
}