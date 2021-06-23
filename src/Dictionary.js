import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {

const [keyword, setKeyword] = useState("");

function search(event) {
    event.preventDefault();
alert(`Searching for ${keyword} definition`);
}

function handleKeywordChange(event) {
    setKeyword(event.target.value);
}

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
        <div className="input-group">
    <input
    type="search"
    className="form-control"
    placeholder="What word would you like to search?"
    autoFocus="on"
    onChange={handleKeywordChange}
  />
  <button className="input-group-text" type="submit" >
    <i className="fas fa-search" />
  </button>
  </div>
  </form>
        </div>
    );
}