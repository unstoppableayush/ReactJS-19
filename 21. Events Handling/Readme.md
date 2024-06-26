# Events Handling

- Event handling in *React.js is the process of capturing and responding to user interactions, such as clicks , keystrokes, or form submissions* , within a React application.

- Event handling in React follows a similar pattern to standard Javascript event handling but some key diffrences, such as using `syntetic events` for `cross-browser compatibilty` and providing `consistent event handling` across different elements and browsers.

- What is `SynteticBaseEvent` in React ?

- When you handle events in React, like clicking button or typing in an input box.
- `React wraps the native browser events in something called a SyntheticEvent.`
- This Sytheti is a wrapper around the browser's native event, making sure that events behave consistent in browser

### Here are some widely used `React.js events.`
    1. `onClick`: triggered when a element is clicked.
    2. `onChange`: Triggered when the value of an input element chnages.
    3. `onSubmit`: Triggered when a form is submitted.
    4. `onMouseEnter`: Triggered when the mouse pointer enters an element.
    5. `onMouseLeave`: Trigerred when the mouse pointer leaves an element.
    6. `onKeyDown`: Triggered when key is pressed down.
    7. `onKeyUp`: Triggered when a key is released.
    8. `onFocus`: Triggered when an element receives focus.
    9. `onBlur`: Triggered when an element loses focus.
    10. `onInput`: triggered when the value of an element is changed(similar to onChnage)

### Event Naming Conventions

- `CamelCase`: Event names in JSX should be writtern in camleCase.

- Prefix with `on`

## Function Naming Conventions

- Prefix with `handle`: It is a common convention to prefix event hanlder funtions with `handle` to clearly indicate thier purpose.

- For ex: handleClick, handleChange, handleSubmit.

- `Descriptive Names`:Funtions names should be descriptive and reflect what the function does. 

- For ex: handleFormSubmit instead of just handleSubmit id it is specifically for form submission.


```javascript
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
```