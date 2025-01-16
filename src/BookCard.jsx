{
  /*The different divs with books in get set up here: */
}

export default function ProductCard({
  data: { img, name, author, ISBN, releaseDate, genre },
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        border: "solid #000 2px",
        background: "#a52a2a",
        padding: "75px 0px",
        maxWidth: "50vw",
        borderRadius: "25px",
        minWidth: "325px",
        minHeight: "100%",
        maxHeight: "100%",
      }}
    >
      <img
        src={img}
        alt={`Cover of ${name}`}
        style={{ maxWidth: "15vw", maxHeight: "30vh", margin: "10px 0px" }}
      />
      <h2>{name}</h2>
      <h3>{author}</h3>
      <p>{ISBN}</p>
      <p>{releaseDate}</p>
      <h4>{genre}</h4>
      <button style={{ padding: "10px 20px", margin: "25px 0px" }}>More</button>
    </div>
  );
}
