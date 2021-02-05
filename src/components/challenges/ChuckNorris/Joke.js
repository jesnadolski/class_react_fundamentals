import React, { useState } from 'react';


const ChuckJoke = () => {

const [joke, setJoke] = useState("");

    function fetchJoke(){
        const url='https://api.chucknorris.io/jokes/random';
        fetch(url)
        .then((response) => response.json())
        .then((json) => setJoke(json.value));
        };
    
    return ( 
        <div>
           {joke} <button onClick={fetchJoke}>Fetch Joke</button>
            
        </div>
     );
}
 
export default ChuckJoke;

