import { createContext } from "react";

const BookContext = createContext({
  book: {},
  books: [],
});

export default BookContext;
