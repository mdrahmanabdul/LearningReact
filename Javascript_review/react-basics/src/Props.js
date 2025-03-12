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
const Waiter=({order})=>{
    
    return(
        <>
            <h1>{`Preparing your order : ${order}`}</h1>
        </>
    )
    
};

export const Customer =()=>{ //parent component
    return(
        <>
             <Waiter order="Paneer Tikka Biryani"/>     
        </>
    )
};

//Immutability
//Instead of changing the existing object, create a new one

const actualUser = {
    'name' : 'Rahman',
    'age' : 23,
    'sex' : 'Male',
    'position' : 'Associate Software Developer'
};

const updatedUser = {...actualUser,name:'Mohammed AbdulRahman'};
console.log(updatedUser);


//Rendering Lists
export const Groceries=()=>{
    const items = [
        'apples','bananas','pickles','books'
    ];

    return(
        <ul>
            {
                items.map((item,index)=>{
                  return (<li key={index}>{item}</li>); //index is not ideal
                })
            }
        </ul>
    );
}

//Rendering mobile brands

export const RenderMobiles=()=>{

    const brandNames = [
        {
            id : 1,
            name : 'Oneplus'
        },
        {
            id : 2,
            name : 'Redmi'
        },
        {   
            id : 3,
            name : 'Apple'
        },
        {   
            id : 4,
            name : 'IQOO'
        }
    ];
    return(
        <ul>
            {
                brandNames.map((mobile)=>{
                    return <li key={mobile.id}>{mobile.name}</li>
                })
            }
        </ul>
    );
}