import {useEffect, useState} from 'react';

function SignUp() {
    const [name , setName] = useState("");
    const [mail , setMail] = useState("");
    const [password , setPassword] = useState("");

    function handleUserName(event){
        console.log(event.target.value)
       setName(event.target.value)
    }

    function handleNewMail(event){
        console.log(event.target.value)
        setMail(event.target.value)
    }

    function handleNewPassword(event){
        console.log(event.target.value)
        setPassword(event.target.value)
    }

    function signup(event) {
        // POST sign-up
        // get the token and store it Localstorage
        console.log(event)
        fetch('http://localhost:5000/users/sign-up', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": name,
                "password": password,
                "email": mail
            })
        })
        .then(data => data.json())
        .then(response => {
            console.log("res")
            window.localStorage.setItem('token', response.jwtToken)
        })
        // if there are any errors, display the error
        
    }

    return (
        <div className='content'>
            <h2>User Name</h2>
            <input type={"text"}
                   placeholder={"User Name"}
                   value={name}
                   onChange={handleUserName}>
            </input>
            <h2>Insert your E-mail</h2>
            <input type={"text"}
                    placeholder={"Your E-mail"}
                    value={mail}
                    onChange={handleNewMail}>
            </input>
            <h2>Write Your Password</h2>
            <input type={"password"} placeholder={"Password"}
            value={password}
            onChange={handleNewPassword}></input><br></br>
            <button onClick={signup}>Submit</button>
        </div>
    );
}

export default SignUp;