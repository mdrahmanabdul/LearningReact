import { useState } from "react"
import axios from "axios";

const FormSubmission=()=>{

    const [formData,setFormData] = useState({
        name : "",
        age : "",
        email : ""
    });

    const handleChange=(event)=>{
        const{name,value} = event.target;
        setFormData((prevData)=>({
            ...prevData,
            [name] : value,
        }))
    };

    const handleSubmit=(event)=>{
        event.preventDefault(); //prevents reloading of the page if submitted !
        console.log("Form Data : ",formData);

        try {
            const response = axios.post("https://jsonplaceholder.typicode.com/posts",formData);
            console.log("Response : ",response);
            alert('Form data successfully submitted !')
            
        } catch (error) {
            console.error('error : ',error);
            alert('Form submission failed !')
        }
        
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter name"/>
                <input type="age" name="age" value={formData.age} onChange={handleChange} placeholder="Enter age"/>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email"/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default FormSubmission;