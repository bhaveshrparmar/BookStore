import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookNavbar from "./Pages/BookNavbar";
import BookAddForm from "./Pages/BookAddForm";
import BookList from "./Pages/BookList";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <BookNavbar />
        <Routes>
          <Route element={<BookList />} path="/" />
          <Route element={<BookAddForm />} path="/add" />
          <Route element={<BookAddForm />} path="/api/book/:id" />
        </Routes>
      </BrowserRouter>
    </>
  );
}
