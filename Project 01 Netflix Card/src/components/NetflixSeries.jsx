import series  from "../api/series.json"
const NetflixSeries = () => {
  return (
    <ul>
      {series.map((series) => {
        return (
          <li key={series.id}>
          <div>
            <img src="quejpgen." alt="" height="300px" width="500px" />
          </div>
          <h2>Name: {series.name}</h2>
          <h3>Rating: {series.rating}</h3>
          <p>Description: {series.description}</p>
          <p>Cast: {series.cast.join(", ")}</p>
          <p>Genre: {series.genre.join(", ")}</p>
          <a href={series.watch_url} target="_blank">
          <button>Watch Now</button>
          </a>
        </li>
        )
      })}
   
    </ul>
  );
};

export default NetflixSeries;

export const Footer = () => {
  return <p>Copyright @ Ayush</p>;
};

export const Header = () => {
    return <h1>This is Header</h1>;
  };
  