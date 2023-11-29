import "./AddReminderForm.css"

function AddReminderForm({submitHandler}){
    return(
      <div className = "AddReminderForm">
        <h1>Add a reminder?</h1>
        <form onSubmit = {submitHandler}>
          <label for="reminder">Reminder title</label><br/>
          <input type="text" id="reminder"/> <br/>
          <label for="start-time">Start</label>
          <input type="time" id="start-time"/> <br/>
          <label for="end-time">End</label>
          <input type = "time" id="end-time"/> <br/>
          <button type = "submit">Submit!</button>
        </form>
      </div>
    )
}

export default AddReminderForm;
