import { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
export default function SignIn() {
    const nameRef = useRef();
    const history = useHistory();
    const [userName, setUsername] = useState(false);
    const [password, setPassword] = useState(false);
    const [valid, validate] = useState(true);
    const onName = (e) => {
        return e.target.value === "admin" ? setUsername(true) : userName;
    }
    const onPassword = (e) => {
        return e.target.value === "admin" ? setPassword(true) : password;
    }
    const onsubmit = () => {
        console.log(userName);
        if(userName && password) {
            history.push('./', "admin");
        } else {
            nameRef.current.focus();
            validate(false);
        }
    }
    
    return (
        <div>
            <label htmlFor="fname">Username:</label><br></br>
            <input type="text" ref={nameRef} id="fname" name="fname" onChange={(e)=>{onName(e)}}></input>
            <br></br>
            <label htmlFor="password">Password:</label><br></br>
            <input type="password" id="password" name="password" onChange={(e)=>{onPassword(e)}}></input><br></br>
            {valid ? '' : 'Please enter correct credentials'}
            <button onClick={() => onsubmit()}>Submit</button>
        </div>
    );
}