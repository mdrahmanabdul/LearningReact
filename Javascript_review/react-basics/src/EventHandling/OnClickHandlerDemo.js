const OnClickHandlerDemo=()=>{

    function handleClick(){
        console.log('Button has been clicked !');
    }

    return(
        <>
            <button onClick={handleClick}>Hit me hard I say</button>
        </>
    )
}

export default OnClickHandlerDemo;