import styles from './Netflix.module.css'
export const SeriesCard = (props) => {
  console.log(props);
  const { name, rating, description, img_url, id } = props.series;

  const btn_style = {
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    color: "var(--bg-color)",
  };

  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;

  return (
    <li className={styles.card} key={id}>
      <div>
        <img src={img_url} alt="" width="400px" />
      </div>
      <div className={styles['card-content']}>
        <h2>Name: {name}</h2>
        <h3>
          Rating: <span className={`${styles.rating}  ${ratingClass}`}>{rating}</span>
        </h3>
        <p>Description: {description}</p>
        <p>Cast: {props.series.cast.join(", ")}</p>
        <p>Genre: {props.series.genre.join(", ")}</p>
        <a href={props.series.watch_url} target="_blank">
          <button style={btn_style}>Watch Now</button>
        </a>
      </div>
    </li>
  );
};
