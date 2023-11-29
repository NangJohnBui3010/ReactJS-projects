import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
const addReminder = ({}) =>{

}

function AddReminderForm(props){
  const [formData, setFormData] = useState({title:"",start:"",end:""});

  function submitHandler(e){
    e.preventDefault();
    props.onAdd(formData);
    setFormData({title:"",start:"",end:""})
  }
  function changeHandler(e){
    setFormData({...formData,[e.target.name]: e.target.value})
  }
  return(
    <>
      <h1>Add a reminder</h1>
      <form onSubmit={submitHandler}>
        <label>Title</label>
        <input type = "text" name = "title" value = {formData.title} onChange={changeHandler}></input> <br/>
        <label>Start</label>
        <input type = "time" name = "start" value = {formData.start} onChange={changeHandler}></input> <br/>
        <label>End</label>
        <input type = "time" name = "end" value = {formData.end} onChange={changeHandler}></input> <br/>
        <button type = "submit">Submit</button>
      </form>
    </>
  )
}

function ListOfReminders(props){
  return(
    <>
    {
      (props.allReminders.length===0)?
      <h2>No reminders for now</h2>
      :<ul>
      {props.allReminders.map(
        (r)=>(
          <li key = {r.title}>
            <p>{r.title} from {r.start} to {r.end}</p>
          </li>
        ))}
      </ul>
    }
    </>
  )
}

function App() {
  const [reminderList, setReminderList] = useState([{title:"pee", start:"7PM", end:"9PM"}]);
  return (
    <div className="App">
      <header>
        <h1 className = "title">SMART REMINDER</h1>
        <p className = "author-name">created by Nang Bui (John)</p>
      </header>
      <main>
        <AddReminderForm/>
        <ListOfReminders allReminders = {reminderList}/>
      </main>
    </div>
  );
}

export default App;
