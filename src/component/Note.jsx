import React,{useState} from "react";
import '../App.css'
// import ReadMore from "./ReadMore";

// function readMore(props){
//     return <ReadMore content= {props.content}/>;
// }

function Note(props){

    return <div className="note">
                <h1>{props.title}</h1>
                <p id="para">{props.content.substring(0 ,60)}...</p>
                <button  className="btnDel" onClick={()=>{props.delete(props.id)}}>Delete</button>
            </div>
};

export default Note;