//Passing Props Parent(Main)->Child(GreetUser)
const GreeUser=(props)=>{
    return(
        <>
            <h1>{`Hello ${props.userName}`}</h1>
        </>
    );
}

export const Main=()=>{
    return(
        <>
        <GreeUser userName="Rahman"/>        
        </>
    )
}

//Passing functions as props 
const CustomButton=({handleClick})=>{
    return(
        <>
            <button onClick={handleClick}>Click me</button>
        </>
    )
};

export const Main2=()=>{
    const showAlert=()=>{
        alert('Button clicked !');
    }
    return(
        <>
            <CustomButton handleClick={showAlert}/>
        </>
    );
}