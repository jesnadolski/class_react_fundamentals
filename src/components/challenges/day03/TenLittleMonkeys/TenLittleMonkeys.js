import React, {useState} from 'react';

const TenLittleMonkeys = () => {
    const [count, setCount] = useState(10);

    function handleClick (){
        if (count !==0){
            setCount(count-1);
        }
    }

    return (
        <div>
            <h1>{count!== 0 ? `${count} little monkeys jumping on the bed` : 'No more monkeys jumping on the bed'}</h1>
            <button onClick ={handleClick}>Minus Monkeys</button>
        </div>
    );
};

export default TenLittleMonkeys;



// const MonkeyCount = () => {
//     return (
//         <div>
//             <h1>Ten Little Monkeys</h1>
//             <Monkey />
            

//         </div>
//     )
// }

// export default MonkeyCount;

// const Monkey = () => {
//     const [count, setCount] = useState('10');

//     function handleClick (){
//         setCount(count-1);
//         if(count=0){
//             return "little monkeys jumping on the bed.  One fell off and bumped his head.  Momma called the docor and the doctor said.  No more monkeys jumping on the bed."
//         } else {
//             return "NONE"
//         }
//     }
//     return (

//         <div>
//         <h3>{count} {display}</h3>
//         <button onClick = {e => setCount(count-1)}>Monkeys</button>
//         </div>
//     )
// }


