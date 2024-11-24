import React, { useEffect, useState } from "react";
import { fetchBooks } from "../service/api";
import "./booklist.css";

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getBooks = async () => {
            try {
                const data = await fetchBooks();
                console.log("Fetched books:", data); 
                setBooks(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };

        getBooks();
    }, []);

    if (loading) {
        return <p className="loading">Loading books...</p>;
    }

    return (
        <div className="main-container">
            {/* Sidebar: Table of Contents */}
            <div className="sidebar">
                <h3>Table of Contents</h3>
                <ul>
                    {books.map((book) => (
                        <li key={book.number}>
                            <a href={`#book-${book.number}`}>{book.title}</a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main Content */}
            <div className="booklist-container">
                <h1 className="title">HARRY POTTER BOOKS</h1>
                {books.map((book) => (
                    <div
                        className="book-card"
                        id={`book-${book.number}`}
                        key={book.number}
                    >
                        <img
                            src={book.cover}
                            alt={book.title}
                            className="book-cover"
                        />
                        <div className="book-details">
                            <h2 className="book-title">{book.title}</h2>
                            <p className="book-meta">
                                <strong>Release Date:</strong> {book.releaseDate}
                            </p>
                            <p className="book-meta">
                                <strong>Pages:</strong> {book.pages}
                            </p>
                            <p className="book-description">{book.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookList;
