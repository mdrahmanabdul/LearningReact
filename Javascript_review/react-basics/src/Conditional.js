import { useState } from "react"
import '../src/ConditionalStyles.css';

export const ConditionalRendering=()=>{

    const[theme,setTheme] = useState('blue');
    const[mode, setmode] = useState('light');

    //This is an updated function
    //previosState will be passed to thiis function, so passing currentTheme is not necessary
    const handleClick=()=>{

        // condition ? "iftrue":"if-false"
        //Here currentTheme==="blue" is the condition
        // if yes then "white" will be considered
        // if false then second thing, "blue" will be considered
        setTheme((currentTheme=>(currentTheme==="blue"?"white":"blue")));
    }

    const handleThemeChange=()=>{
        setmode((previousTheme)=>(previousTheme==="light"?"dark":"light"));
    }

    return(
        <>
            <div style={{backgroundColor:theme, width:'100px', height:'100px'}}>
                <p>Rahman</p>
                <button onClick={handleClick}>Click me </button>
            </div>

            <div className={mode}>
                <p>IronMan</p>
                <button onClick={handleThemeChange}>Click me</button>
            </div>
        </>
    )
}