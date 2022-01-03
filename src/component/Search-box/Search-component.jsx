import React from "react";
import './search-box.styles.css'
 
export const SearchBox = ({placeholder, HandleChange}) => {
    <input className="search"
    type="search"
    placeholder={placeholder}
    onChange={HandleChange}
    />
 } 