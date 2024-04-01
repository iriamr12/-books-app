import React, { createContext, useState, useEffect, useContext} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const authContext = createContext();

function AuthenticationProvider ({children}) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [favoriteBooks, setFavoriteBooks] = useState([]);
    const navigate = useNavigate()


const login = async (user) => {
    try {
       const { data } = await axios.post("/api/auth/login", user);
       localStorage.setItem("token", data.token);
       setIsLoggedIn(true);
       console.log(data.message, data.token);
       navigate("/BookSearch");
    } catch (error) {
       console.error("Login failed:", error.response?.data || error.message);
       // Set an error state or show a message to the user
    }
 };
 

 const logout = () => {
    localStorage.removeItem("token");
    //set the context
    setIsLoggedIn(false)
  };

  const registration = async (user) => {
   try {
     const { data } = await axios.post("api/auth/register", user);
     localStorage.setItem("token", data.token);
     setIsLoggedIn(true);
     navigate("/login");
   } catch (error) {
     console.log(error);
   }
 };

  const addToFavorites = (book) => {
    setFavoriteBooks((prevFavoriteBooks) => [...prevFavoriteBooks, book]);
    console.log('Favorite books:', favoriteBooks);
  };

  const removeFromFavorites = (itemToRemove) => {
   // Filter out the item to remove
   const updatedFavorites = favoriteBooks.filter(item => item !== itemToRemove);
   // Update the favorites state with the filtered list
   setFavoriteBooks(updatedFavorites);
 };


  useEffect(() => {
   // Check local storage or any other mechanism to determine if the user is logged in
   // For example, you can check if a token exists in local storage
   const token = localStorage.getItem("token");
   if (token) {
       setIsLoggedIn(true);
   }
}, []); // Run once on mount to check initial login state

 const authContextValue = {
    isLoggedIn,
    login,
    logout,
    registration,
    addToFavorites,
    favoriteBooks,
    removeFromFavorites,
 }
 return (
    <authContext.Provider value={authContextValue}>
        {children}
    </authContext.Provider>
 )
}

export default AuthenticationProvider;