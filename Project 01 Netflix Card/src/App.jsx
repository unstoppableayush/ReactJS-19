
function App() {
  return (
    <>
      <NetflixSeries/>
    </>
  )
}

export default App

//* 1. Variable 
//? You can embed any JavaScript variable within JSX by enclosing it in curly braces. The value of the variable will be inserted into the DOM at the respective location.

//* 2. Expression
//? JSX allows you to write JavaScript expression inside curly braces. This includes operations, function calls, and other Javascript expressions that produce a value.

//* 3. Function Calls
//? Function, especially those that return JSX, can be invoked directly within your JSX.

const NetflixSeries = () => {

  const name = "Queen Of Tears";
  const summary = "Summary : Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi alias sapiente quidem cumque."
  const returnGenre = () => {
    const genre = "RomCom"
    return genre;
  }
  let age = 18;

  // Third Method -> You might have complex if conditions , for that there are some solutions

  // let canWatch = "Not Available";
  // if( age >= 18) canWatch = "Watch Now";

  // Forth Method -> Prevents cluttering of variables outside and encapsulates such logic inside a function.
  // One another benefit is also  that, you can also pass some dynamic values as function parameter.

  const canWatch = () => {
    if(age >= 18 ) return "Watch Now";
    return "Not Available";
  }

  return (
    <div>
      <div>
        <img src="queen.jpg" alt=""  height="300px" width="500px"/>
      </div>
      <h2>Name: {name}</h2>
      <h3>Rating: {5 + 3.2}</h3>
      <p>
        {summary}
      </p>
      <p>Genre: {returnGenre()}</p>
      <button >{canWatch()}</button>
    </div>
  );
};
