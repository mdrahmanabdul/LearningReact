import { useContext } from "react";
import ThemeContext from "./Context/ThemeContext";

 
function ThemedButton(){

    const{theme, setTheme} = useContext(ThemeContext);

    return(
        <button
        style={{
            backgroundColor:theme==="light"?"white":"black",
            color:theme==="light"?"black":"white",
            padding:"10px",
            border:"none",
            cursor:'pointer'

        }}
        onClick={()=>setTheme(theme==="light"?"dark":'light')}
        >
            Switch to {theme==="light"?"dark":"light"}
        </button>
    )
}

export default ThemedButton;