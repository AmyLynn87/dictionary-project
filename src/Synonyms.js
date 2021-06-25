import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
    if(props.synonyms) {
    return (
        <div className="Synonyms">
            <h6>Synonyms: </h6>
        <ul className="list">
            {props.synonyms.map(function(synonym, index){
                return (
                    <li key={index}>
                        {synonym}
                    </li>
                );
            })}
        </ul>
        </div>
    );
} else {
    return null;
}
}