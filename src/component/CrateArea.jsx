import React ,{useState}from "react";
import '../App.css'

function CreateArea(props){
    const [note , setNotes]  = useState(
        {
            title:"" ,
            content:""
        }
      );

      function handleChange(event){
          const {name , value} = event.target;

          setNotes((prevValue)=>{
              return {
                  ...prevValue,
                  [name] : value
            }
          })
      }

    return <div className="align">
              
                    <input  name="title"  onChange={handleChange} value= {note.title}  type="text"  placeholder="Title" />
                    <textarea name="content" onChange={handleChange} value={note.content} cols="3" rows="10" placeholder="Take a note..."></textarea>
                    <button className="button1" onClick={()=>{
                        props.getNote(note) ;
                        setNotes({title:"" , content:""})
                    }}>Add</button>
    </div>
}

export default CreateArea;