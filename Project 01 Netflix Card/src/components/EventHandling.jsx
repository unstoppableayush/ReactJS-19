import  './EV.css'

export const EventHandling = () => {

    // function handleButtonClick(){
    //     alert("Button Clicked");
    // }
    const  handleButtonClick = (event) =>{
        console.log(event);
        console.log(event.target);
        console.log(event.type);
        alert("Button Clicked");
    }

    const handleWelcomeUser = (name) => {
        alert(`Welcome ${name}`);
    }

    return (
    <>
    {/*  Function Components with Named Functions */}
    {/*     
    If you call this funtion then it will run wthout even clicking. You just need to pass refrence and not call here.  
    */}

    <button onClick={handleButtonClick}>click Me</button>
    <button onClick={ (event) => handleButtonClick(event)} className='pt-2'>click Me 2</button>

    {/* Inline Event Handlers */}
    <button onClick={(event) => console.log(event)}>Inline Function</button>

    {/* Funtion Components with Inline Arrow Functions */}

    <button onClick={() => alert("Inline Arrow funtion")}>Inline Arrow Fun</button>

    {/* Passing Aruments to Event Handlers */}
    <button onClick={() => handleWelcomeUser("Ayush")}>click Me</button>

    </>
    );
};