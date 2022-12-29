import React from 'react';

function Login() {
    return (
        <div className='content'>
            <h3>User Name</h3>
            <input type={"text"} placeholder={"User Name"}></input>
            <h3>Password</h3>
            <input type={"password"} placeholder={"Password"}></input>
            <button>Login</button>
        </div>
    )
}

export default Login;