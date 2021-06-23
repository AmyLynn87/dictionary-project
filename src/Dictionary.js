import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {

const [keyword, setKeyword] = useState("");

function handleResponse(response) {
    console.log(response.data[0]);
}

function search(event) {
    event.preventDefault();

let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;

axios.get(apiUrl).then(handleResponse);

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