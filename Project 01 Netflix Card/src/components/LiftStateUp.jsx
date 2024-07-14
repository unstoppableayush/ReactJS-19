import { useState } from "react"

export const LiftingState = () => {
    const [inputValue, setInputValue] = useState("");
    // passing the state to parent component, so we can pass the value to other child component as well so they can use
    return(
        <>
        <InputComponent 
        inputValue = {inputValue}
        setInputValue= {setInputValue} 
        />
        <DisplayComponent
        inputValue = {inputValue}
        />
        </>
    )
}

const InputComponent = ({inputValue, setInputValue}) => {
    return (
        <>
        <input 
        type="text"
        placeholder="Enter your name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        />
        </>
    )
}

const DisplayComponent = ({inputValue}) => {
    return <p>The current input value is: {inputValue}</p>
}