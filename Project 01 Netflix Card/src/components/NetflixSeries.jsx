const NetflixSeries = () => {
  const name = "Queen Of Tears";
  const summary =
    "Summary : Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi alias sapiente quidem cumque.";
  const returnGenre = () => {
    const genre = "RomCom";
    return genre;
  };
  let age = 18;

  // Third Method -> You might have complex if conditions , for that there are some solutions

  // let canWatch = "Not Available";
  // if( age >= 18) canWatch = "Watch Now";

  // Forth Method -> Prevents cluttering of variables outside and encapsulates such logic inside a function.
  // One another benefit is also  that, you can also pass some dynamic values as function parameter.

  const canWatch = () => {
    if (age >= 18) return "Watch Now";
    return "Not Available";
  };

  return (
    <>
      <div>
        <img src="queen.jpg" alt="" height="300px" width="500px" />
      </div>
      <h2>Name: {name}</h2>
      <h3>Rating: {5 + 3.2}</h3>
      <p>{summary}</p>
      <p>Genre: {returnGenre()}</p>
      <button>{canWatch()}</button>
    </>
  );
};

export default NetflixSeries;

export const Footer = () => {
  return <p>Copyright @ Ayush</p>;
};

export const Header = () => {
    return <h1>This is Header</h1>;
  };
  