import React from "react";
import "./Phonetic.css";
import ReactAudioPlayer from 'react-audio-player';

export default function Phonetic(props) {
    return (
        <div className="Phonetic">
             <div className="phoneticText">{props.phonetic.text}</div>
             <div className="audioPlayer">
            <ReactAudioPlayer
  src={props.phonetic.audio}
  controls
/> 
</div>
</div>
    );
}