import React, { useEffect, useState } from "react";
import Api from "../Api/Api";
import { NavLink } from "react-router-dom";

export default function BookTable() {
  const [books, setBooks] = useState([]);

  async function getBooks() {
    const res = await Api.get("/api/book");
    setBooks(res.data.book);
  }

  async function trash(id) {
    await Api.delete(`/api/book/${id}`);
    getBooks();
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-header bg-dark text-white text-center">
          <h4 className="mb-0">My-Book-Store</h4>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered table-hover text-center align-middle">
              <thead className=" table-dark text-white ">
                <tr>
                  <th>No.</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Created</th>
                  <th>Updated</th>
                  <th>Edit & Delete</th>
                </tr>
              </thead>

              <tbody>
                {books.length > 0 ? (
                  books.map((book, index) => (
                    <tr key={book._id}>
                      <td>{index + 1}</td>
                      <td>{book.title}</td>
                      <td>{book.author}</td>
                      <td>₹ {book.price}</td>
                      <td>{book.category}</td>
                      <td
                        style={{
                          maxWidth: "200px",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          textAlign: "left",
                        }}
                      >
                        {book.description}
                      </td>
                      <td>{new Date(book.createdAt).toLocaleDateString()}</td>
                      <td>{new Date(book.updatedAt).toLocaleDateString()}</td>
                      <td>
                        <button
                          onClick={() => trash(book._id)}
                          className="btn btn-danger btn-sm me-2"
                        >
                          Delete
                        </button>

                        <NavLink
                          to={`/api/book/${book._id}`}
                          className="btn btn-warning btn-sm"
                        >
                          Edit
                        </NavLink>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-muted">
                      No Books Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
