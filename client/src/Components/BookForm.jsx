import React from 'react'
import {useState} from "react";
import './BookForm.css'

export default function BookForm(props){
    const [title, setTitle] = useState("");

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.getBookCb(title)
        setTitle("");
    };

    return(
        <form className="searchBar" onSubmit={handleSubmit}>
            <input
            className='searchInput'
            type="text"
            placeholder='What are you searching for?'
            value = {title}
            onChange={handleChange}
            />
        </form>
    )
}

