export const SeriesCard = (props) => {
    console.log(props)
    const {name, rating, description} = props.series
  return (
    <li>
      <div>
        <img src="quejpgen." alt="" height="300px" width="500px" />
      </div>
      <h2>Name: {name}</h2>
      <h3>Rating: {rating}</h3>
      <p>Description: {description}</p>
      <p>Cast: {props.series.cast.join(", ")}</p>
      <p>Genre: {props.series.genre.join(", ")}</p>
      <a href={props.series.watch_url} target="_blank">
        <button>Watch Now</button>
      </a>
    </li>
  );
};
