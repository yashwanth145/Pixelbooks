"use client";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import { randombooks } from "../actions";

export default function Recommended() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const data = await randombooks();
        setBooks(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    }
    fetchBooks();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container-fluid mt-4">
        <div className="row g-4 mt-5">
          {books.map((book) => (
            <div key={book.title} className="col-md-4">
              <div className="card shadow-sm text-center">
                <Image
                  src={book.image}
                  alt="Book Cover"
                  width={150}
                  height={200}
                  className="card-img-top mx-auto mt-3"
                  unoptimized
                />
                <div className="card-body">
                  <h5 className="card-title">{book.author}</h5>
                  <p className="card-text">{book.category}</p>
                  <p className="card-text">{book.publisher}</p>
                  <p className="card-text">{book.pages} pages</p>
                  <p className="card-text">{book.language}</p>
                  <p className="card-text">Price: {book.price}</p>
                  <p className="card-text">Status: {book.status}</p>
                  <p className="card-text">Delivery: {book.delivary}</p>
                  <button className="btn btn-danger">Buy</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
