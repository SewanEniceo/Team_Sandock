import React from 'react';
import { Data } from '../assets/Data';

const Books = () => {
  return (
    <div className="books-container">
      <h1 className="books-heading">Borrowed Books</h1>
      <div className="books-list">
        {Data.map((book, index) => (
          <div className="book-category" key={index}>
            <div className="book-info">{book.title}</div>
            <div className="book-info">Author: {book.author}</div>
            <div className="book-info">Date Published: {book.datePublished}</div>
            <div className="book-info">Publisher: {book.publisher}</div>
            <div className="book-info">Date Borrowed: {book.dateBorrowed}</div>
            <div className="book-info">Copies Available: {book.copiesAvailable}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
