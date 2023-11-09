import { useState } from "react";

function TinderRegistration(){
    const [name,setName] = useState("");
    const [age,setAge] = useState({value:"", isTouched:false});
    const [gender, setGender] = useState({})
    const [partner, setPartner] = useState([])
    const handleSubmit =(e)=> {
        //alert("Account created!");
        e.preventDefault();
        if(gender == "Male")
        {
            fetch('https://randomuser.me/api/?gender=female')
                .then(Response => Response.json())
                .then(data => setPartner(data))
        }else{
            fetch('https://randomuser.me/api/?gender=male')
                .then(Response => Response.json())
                .then(data => setPartner(data))
        }
    }

    const DateResult = ({children}) =>{
        return(
                (Object.keys(partner).length==0)?<p></p>:<p styles = {{color:"red"}}>You match with {partner.results[0].name.first}, {partner.results[0].dob.age} years old. Have fun tonight</p>
        )
    }
    const formValid = () =>{
        return name && parseInt(age.value,10) >= 18 && gender !== "Gender";
    }

    const ageRestrictionMessage = () =>{
        return(
                <p style = {{color:"red"}}>You're not old enough kid, try again in {18-parseInt(age.value,10)} years</p>
        )
    }
    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <fieldset>
                    <h1>💗Tinder💋 registration</h1>
                    <h2>Ready to find your love or just hook up? You find the right place</h2>

                    <div className = "Field">
                        <label>Your name: </label>
                        <input
                            type = "text"
                            value = {name}
                            onChange = {(e)=>{setName(e.target.value)}}
                        />
                    </div>

                    <div className = "Field">
                        <label>Age: </label>
                        <input
                            type = "text"
                            value = {age.value}
                            onChange = {(e)=>{
                                setAge({...age, value: e.target.value})
                            }}
                            onBlur = {() => {setAge({...age, isTouched: true})}}
                        />
                        {age.isTouched && parseInt(age.value,10) < 18 ? ( 
                            ageRestrictionMessage()
                            ) : null}
                    </div>

                    <div className = "Field">
                        <label>Gender </label>
                        <select onChange = {(e)=>setGender(e.target.value)}>
                            <option value = "Gender">Gender</option>
                            <option value = "Male">Male</option>
                            <option value = "Female">Female</option>
                        </select>
                    </div>

                    <button type = "submit" disabled = {!formValid()}>Submit</button>
                    <DateResult>Oh Yeah</DateResult>
                </fieldset>
            </form>
        </div>
    );
}
export default TinderRegistration;