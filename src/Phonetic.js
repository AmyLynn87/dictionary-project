import React from "react";
import "./Phonetic.css";
import ReactAudioPlayer from 'react-audio-player';

export default function Phonetic(props) {
let audioElement = new Audio(props.phonetic.audio);

function play() {
    audioElement.play();
}

    return (
        <div className="Phonetic">
            <button className="audioButton" onClick={play}><i class="fas fa-volume-up"></i></button>
             <div className="phoneticText">{props.phonetic.text}</div>
</div>
    );
}