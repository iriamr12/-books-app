import React from 'react';
import "./Books.css";
import { authContext } from '../Context/AuthenticationProvider';
import { useContext } from "react";

export default function Books({data}) {

  const auth = useContext(authContext);

  const addToFavorites = (book) => {
    // Call the addToFavorites function from the auth context
    
    auth.addToFavorites(book);
   
  };
 console.log(auth.favoriteBooks)

    return (
      <div className="books-container">
        {data.map((book, index) => (
          <div className="each-book" key={index}>
            <a href={book.volumeInfo.previewLink}>
            <img src={book?.volumeInfo?.imageLinks?.smallThumbnail}/>
            </a>
            <h3>{book.volumeInfo.title}</h3>
          
            <button className="readme" onClick={() => window.location.href = `/bookviewer/${book.id}`}>Read me</button>
            <button onClick={() => addToFavorites(book)}>Add to Favorites</button>
            {/* <p>Authors: {book.volumeInfo.authors.join(', ')}</p>*/}
          </div>
        ))}
      </div>
    );
  }