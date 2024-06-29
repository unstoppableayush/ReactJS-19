export const EventProps = () => {
    const handleWeclomeUser = (user) => {
        alert(`Hey, ${user}`)
    }

    const handleHover = () => {
        alert(`Hey Thanks for hovering me`)
    }
    return (
        <>
        <WelcomeUser 
        onButtonClick = { 
            () => handleWeclomeUser("Unstoppable")
        } 
        onMouseEnter = {handleHover}
        />
        </>
    )
}


const WelcomeUser = (props) => {
    const {onButtonClick, onMouseEnter} = props
    const handleGreeting = () => {
        console.log(`Hey User, Welcome`);
        onButtonClick();
    }
    return (
        <>
        <button onClick={props.onButtonClick}>Click</button>
        <button onMouseEnter={props.onMouseEnter}>Hover</button>
        <button onClick={handleGreeting}>Greeting</button>
        </>
    )
}