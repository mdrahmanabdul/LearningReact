import { useState } from "react"

const OnChangeHandlerDemo=()=>{

    const [password,setPassword] = useState('');

    function handleInputChange(event){
        setPassword(event.target.value);
    }

    return(
        <>
            <input type="password" onChange={handleInputChange}></input>
            <p>You have entered : {password}</p>
        </>
    )
}

export default OnChangeHandlerDemo;