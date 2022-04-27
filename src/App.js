// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Header from './component/Header'
import Footer from './component/Footer';
import Note from './component/Note'
import CreateArea from './component/CrateArea';
// import notes from './notes'

// function createNotes(){
//     return <Note/>
// }

function App() {
  
  const[allNote, setNote] = useState([])

  function addNote(note){

    console.log("I got clicked ..."+note.title , note.content)
    setNote((preValue)=>{
      return [...preValue,note]
    })
  }
  function deleteItem(id){
    console.log("Delete got Clicked..."+id);
   setNote((preValue)=>{
        return preValue.filter((note, index)=>{
            return index !== id;
        })
    })
  }
  
  return (
    <div className='' >
      <Header/>
    
      
      <CreateArea getNote = {addNote}/>
      <br/>
      {allNote.map((note, index)=>(
       <Note
        id = {index}      
        title = {note.title}
        content = {note.content}
        delete = {deleteItem}
              />
              
      ))}
      <Footer/>  
    </div>
  );
}

export default App;
