import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {

const [keyword, setKeyword] = useState("");
const [results, setResults] = useState(null);
const [photos, setPhotos] = useState(null);

function handleResponse(response) {
    setResults(response.data[0]);
}

function handlePexelResponse(response) {
    setPhotos(response.data.photos);
}

function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/
let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;

axios.get(apiUrl).then(handleResponse);

let pexelsApiKey = "563492ad6f91700001000001d83ee433d93e4397acb155624b383e3a";
let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
let headers = {"Authorization" : `Bearer ${pexelsApiKey}`};
axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelResponse);

}

function handleKeywordChange(event) {
    setKeyword(event.target.value);
}

    return (
        <div className="Dictionary">
            <h1 className="text-center">Dictionary</h1>
            <section>
            <form onSubmit={search}>
        <div className="input-group">
    <input
    type="search"
    className="form-control"
    placeholder="What word do you want to look up?"
    autoFocus="on"
    onChange={handleKeywordChange}
  />
  <button className="input-group-text" type="submit" >
    <i className="fas fa-search" />
  </button>
  </div>
  </form>
  </section>
  <Results results={results} />
  <Photos photos={photos} />
        </div>
    );
}