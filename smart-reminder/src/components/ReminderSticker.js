const styles = {
    border: "2px solid black",
    margin: "2px",
    backgroundColor: "pink",
    width: "auto"
}
function ReminderSticker({children, onDelete}){
    return(
        <div className = "ReminderSticker" style={styles}>
            {children}
            <label>Completed</label>
            <input type = "checkbox" id = "completed-check"/> <br/>
            <button onClick = {onDelete} style = {{margin:"5px"}}>Delete</button>
        </div>
    )
}

export default ReminderSticker;