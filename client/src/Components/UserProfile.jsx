// Example UserProfile component
import React, { useContext } from 'react';
import { authContext } from "../Context/AuthenticationProvider";
import "./UserProfile.css";


const UserProfile = () => {

  const auth = useContext(authContext);

  const removeFromFavorites = (itemToRemove) => {

    auth.removeFromFavorites(itemToRemove)
  };
  

  return (
    <div className='fav-list'>
      <br />
      <h2>Favorite Books</h2>
      <ul className="books-container">
        {auth.favoriteBooks.map((book, index) => (
          <div className="book-list" key={index}>
            <img src={book?.volumeInfo?.imageLinks?.smallThumbnail}/>
            <button onClick={() => removeFromFavorites(book)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
          </svg></button>
            </div>
            
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
