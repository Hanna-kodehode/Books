import "./App.css";
import ProductCard from "./BookCard.jsx";

{
  /*The book list: */
}

function App() {
  const books = [
    {
      img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1612238791i/56916837.jpg",
      name: "To Kill a Mockingbird",
      author: "Harper Lee",
      ISBN: "9780061120084",
      releaseDate: 1960,
      genre: "Fiction",
    },
    {
      img: "https://www.norli.no/media/catalog/product/9/7/9780141036144_1_1.jpg?auto=webp&format=pjpg&width=480&height=375&fit=cover",
      name: "1984",
      author: "George Orwell",
      ISBN: "9780451524935",
      releaseDate: 1949,
      genre: "Dystopian",
    },
    {
      img: "https://www.norli.no/media/catalog/product/9/7/9780141036137_1.jpg?auto=webp&format=pjpg&width=480&height=375&fit=cover",
      name: "Animal Farm",
      author: "George Orwell",
      ISBN: "9780451526342",
      releaseDate: 1945,
      genre: "Dystopian",
    },
    {
      img: "https://m.media-amazon.com/images/I/712P0p5cXIL._AC_UF1000,1000_QL80_.jpg",
      name: "Pride and Prejudice",
      author: "Jane Austen",
      ISBN: "9780141199078",
      releaseDate: 1813,
      genre: "Romance",
    },
    {
      img: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781787556997/emma-9781787556997_hr.jpg",
      name: "Emma",
      author: "Jane Austen",
      ISBN: "9780141439587",
      releaseDate: 1815,
      genre: "Romance",
    },
    {
      img: "https://m.media-amazon.com/images/I/81QuEGw8VPL.jpg",
      name: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      ISBN: "9780743273565",
      releaseDate: 1925,
      genre: "Fiction",
    },
    {
      img: "https://m.media-amazon.com/images/I/71GNqqXuN3L.jpg",
      name: "Brave New World",
      author: "Aldous Huxley",
      ISBN: "9780060850524",
      releaseDate: 1932,
      genre: "Dystopian",
    },
    {
      img: "https://cdn.britannica.com/94/181394-050-2F76F7EE/Reproduction-cover-edition-The-Catcher-in-the.jpg",
      name: "The Catcher in the Rye",
      author: "J.D. Salinger",
      ISBN: "9780316769488",
      releaseDate: 1951,
      genre: "Fiction",
    },
    {
      img: "https://m.media-amazon.com/images/I/7161NWQ0jrL._AC_UF1000,1000_QL80_.jpg",
      name: "Sense and Sensibility",
      author: "Jane Austen",
      ISBN: "9780141199672",
      releaseDate: 1811,
      genre: "Romance",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/en/d/db/Fahrenheit_451_1st_ed_cover.jpg",
      name: "Fahrenheit 451",
      author: "Ray Bradbury",
      ISBN: "9781451673319",
      releaseDate: 1953,
      genre: "Dystopian",
    },
  ];

  {
    /*The page gets built here: */
  }
  return (
    <div>
      <div>
        <header
          style={{
            textAlign: "center",
            padding: "20px",
            color: "#000",
          }}
        >
          <h1>Book Collection</h1>
        </header>
      </div>
      <div className="bookListDiv">
        {books.map((product) => {
          return <ProductCard key={product.ISBN} data={product} />;
        })}
      </div>
    </div>
  );
}
export default App;
