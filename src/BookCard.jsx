{
  /*The different divs with books in get set up here: */
}

export default function ProductCard({
  data: { img, name, author, ISBN, releaseDate, genre },
}) {
  return (
    <div
      style={{
        border: "solid #000 2px",
        background: "#a52a2a",
        padding: "75px 0px",
        maxWidth: "50vw",
        margin: "75px 0px",
        borderRadius: "25px",
      }}
    >
      <img
        src={img}
        alt={`Cover of ${name}`}
        style={{ width: "25%", height: "auto", margin: "10px 0px" }}
      />
      <h2>{name}</h2>
      <h3>{author}</h3>
      <p>{ISBN}</p>
      <p>{releaseDate}</p>
      <h4>{genre}</h4>
      <button style={{ padding: "10px 20px" }}>More</button>
    </div>
  );
}
