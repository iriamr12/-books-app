import { useState, useEffect } from "react";
import Books from "./Books";
import Type from "./Type";
import BookForm from "./BookForm";
import './BookSearch.css'


function BookSearch() {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [booksType, setBooksType] = useState([]);
  const [error, setError] = useState("");

  const API_KEY = "AIzaSyDBN0k-cEvlnsLQj0YELqLD1ckFYMmPF4I";

  const getBook = async (title) => {
    setLoading(true);
    setError("");

    const maxResults = 6;

    let url = `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${API_KEY}&maxResults=${maxResults}`;

    try {
      let response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        console.log("We got data!");
        console.log(data);
        setBooks(data.items);
      } else {
        setError(`Server Error: ${response.status} ${response.statusText}`);
      }
    } catch (e) {
      setError(`Network Error: ${e.message}`);
    }
    setLoading(false);
  };

  const getBookByType = async () => {
    setLoading(true);
    setError("");

    const maxResults = 2;

    let url1 = `https://www.googleapis.com/books/v1/volumes?q={"fiction","education","cooking"}&key=${API_KEY}&maxResults=${maxResults}`;
   
    try {
        let response = await fetch(url1);
        if (response.ok) {
            let data1 = await response.json();
            console.log('We got data by type!');
            console.log(data1);
            setBooksType(data1.items);
        } else {
            setError(`Server Error: ${response.status} ${response.statusText}`);
        }
    } catch (e) {
        setError(`Network Error: ${e.message}`);
    }
    setLoading(false);
};


  useEffect(() => {
    // Call getBookByType when the component mounts
    getBookByType();
  }, []); // The empty dependency array ensures that this effect runs only once on mount


  return (

      <div className="containers">
        
        <div className="books">
          <div className="form">
            <BookForm className='search' getBookCb={(title) => getBook(title)} />
          </div>
         
        <Books data={books} />
        {loading && <h2>Loading...</h2>}
        {error && <h2 style={{ color: "red" }}>{error}</h2>}
        </div>
      <div className="book-type">
        {booksType.length > 0 ? (
          <Type data1={booksType}/>
        ) : (
          <h2>No data available for Type</h2>
        )}        
        </div>
      </div>

  );
}

export default BookSearch;
