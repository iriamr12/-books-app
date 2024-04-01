import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import "./Type.css";

const Type = () => {
  const [travelBooks, setTravelBooks] = useState([]);
  const [photographyBooks, setPhotographyBooks] = useState([]);
  const [cookingBooks, setCookingBooks] = useState([]);

  const API_KEY = "AIzaSyDBN0k-cEvlnsLQj0YELqLD1ckFYMmPF4I";

  const maxResults = 6;


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch education books
        const educationResponse = await fetch(`https://www.googleapis.com/books/v1/volumes?q=traveleurope&key=${API_KEY}&maxResults=${maxResults}`);
        const educationData = await educationResponse.json();
        setTravelBooks(educationData.items);

        // Fetch fiction books
        const fictionResponse = await fetch(`https://www.googleapis.com/books/v1/volumes?q=photography&key=${API_KEY}&maxResults=${maxResults}`);
        const fictionData = await fictionResponse.json();
        setPhotographyBooks(fictionData.items);

        // Fetch cooking books
        const cookingResponse = await fetch(`https://www.googleapis.com/books/v1/volumes?q=mediterraneanfood&key=${API_KEY}&maxResults=${maxResults}`);
        const cookingData = await cookingResponse.json();
        setCookingBooks(cookingData.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderBooks = (books) => {
    return books.map((book, index) => (
      <div className="each-book" key={index}>
        {/* <Link to={`/bookviewer/${book.id}`}> */}
          <a href={book.volumeInfo.previewLink}>
           <img className="imagen" src={book?.volumeInfo?.imageLinks?.smallThumbnail} alt={book.volumeInfo.title} /> 
          </a>
{/*           
        </Link> */}
        {/* <button onClick={() => window.location.href = `/bookviewer/${book.id}`}>Read me</button> */}
      </div>
    ));
  };

  return (
    <div className='titles'>
      <div>
        <h2>Travel</h2>
        <div className="books-container">
          {renderBooks(travelBooks)}
        </div>
      </div>
      <div>
        <h2>Photography</h2>
        <div className="books-container">
          {renderBooks(photographyBooks)}
        </div>
      </div>
      <div>
        <h2>Cooking</h2>
        <div className="books-container">
          {renderBooks(cookingBooks)}
        </div>
      </div>
    </div>
  );
};

export default Type;


