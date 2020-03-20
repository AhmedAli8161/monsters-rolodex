import React from "react";
import "./search-box.style.css";

const SearchBox = ({ placeHolder, changeHandler }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeHolder}
      onChange={changeHandler}
    ></input>
  );
};

export default SearchBox;
