import React, { useState } from 'react';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function emailOnChange (event) {
        console.log(event.target.value);
        setEmail(event.target.value)
    }

    function passwordOnChange(event){
        console.log(event.target.value);
        setPassword(event.target.value)
    }
    
    return (
        <div>
            <h3>SIGN UP: </h3>
            <input type="text" placeholder="email" value={email} onChange={(e) => emailOnChange(e)}></input>
            <input type="text" placeholder="password" value={password} onChange={(e) => passwordOnChange(e)}></input>
        </div>

    );
}

export default Signup;