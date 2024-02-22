import React from "react";
import { Routes, Route} from "react-router-dom"
import Register from "./Components/Register.jsx";
import Login from "./Components/Login";
import AuthenticationProvider from "./Context/AuthenticationProvider.jsx";
import Homepage from "./Components/homepage";
import BookSearch from "./Components/Booksearch";
import Navigation from "./Components/Navigation";
import Fotter from "./Components/Fotter.jsx";
import "./App.css";
import UserProfile from "./components/UserProfile.jsx";
import PrivateRoute from "./Components/PrivateRoute.jsx";


function App(user){

    return(
        <AuthenticationProvider>
           <div className="app-container" >
                <div className="content" >
                <Navigation />
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/register" element={<Register />} /> 
                    <Route path="/login" element={<Login />} />
                    <Route path="/homepage" element={<Homepage />} />
                    <Route path="/booksearch" element={<BookSearch />} />
                    {/* <Route path="/bookprofile" element={<BookProfile />} /> */}
                    {/* <Route path="/bookviewer/:id" element={<BookViewer />} /> */}
                    <Route path="/userProfile" element={<PrivateRoute><UserProfile /> </PrivateRoute>} />
                </Routes>
                   <Fotter /> 
                </div>
           </div>
        </AuthenticationProvider>
      
    ) 

}

export default App;
