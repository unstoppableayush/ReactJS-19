import seriesData  from "../api/series.json"
import { SeriesCard } from "./SeriesCard";
const NetflixSeries = () => {
  return (
    <ul>
      {seriesData.map((series) => {
        return (
        <SeriesCard key={series.id} series={series}/>
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
  