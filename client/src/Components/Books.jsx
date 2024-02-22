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

 const removeFromFavorites = (book) => {
  // Call the removeFromFavorites function from the auth context
  
  auth.removeFromFavorites(book);
 
};

    return (
      <div className="books-container">
        {data.map((book, index) => (
          <div className="each-book" key={index}>
            <a href={book.volumeInfo.previewLink}>
            <img src={book?.volumeInfo?.imageLinks?.smallThumbnail}/>
            </a>
            <h3>{book.volumeInfo.title}</h3>
          
            <button onClick={() => window.location.href = `/bookviewer/${book.id}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-book" viewBox="0 0 16 16">
  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
</svg></button>
            <button onClick={() => addToFavorites(book)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg></button>

            {/* <p>Authors: {book.volumeInfo.authors.join(', ')}</p>*/}
          </div>
        ))}
      </div>
    );
  }