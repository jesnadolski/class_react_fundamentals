import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function emailOnChange (event) {
        //when we create an onChange event - we can pass an event to our function (when a key is typed)
        //event.target.value - gets the value that was typed in
        console.log(event.target.value);
        setEmail(event.target.value)
    }

    function passwordOnChange (event) {
        console.log(event.target.value);
        setPassword(event.target.value)
    }
    
    return ( 
        <div>
            <h3>LOGIN: </h3>
            <input type="text" placeholder="email" value={email} onChange={(e) => emailOnChange(e)} ></input>
            <input type="text" placeholder="password" value={password} onChange={(e) => passwordOnChange(e)}></input>
        </div>
     );
}
 
export default Login;