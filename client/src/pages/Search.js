import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import GoogleAPI from "../utils/GoogleAPI";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import BookContext from "../utils/BookContext";

function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState({});
  const [formObject, setFormObject] = useState({
    search: "",
  });

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks();
  }, []);

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // handle search submit
  // ->GoogleAPI call function

  // handle save submit
  // ->post book to DB
  // ->set book context?

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Book Search</h1>
          </Jumbotron>
          <form>
            <Input
              onChange={handleInputChange}
              name="search"
              placeholder="Search"
            />
            <FormBtn
              disabled={!formObject.search}
              onClick={() => {
                /*handle search submit*/
              }}
            >
              Search
            </FormBtn>
          </form>
        </Col>
        <Col size="md-12">
          <Jumbotron>
            <h1>Results</h1>
          </Jumbotron>
          {books.length ? (
            <List>
              {books.map((book) => {
                return (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    <DeleteBtn onClick={() => {}} />
                    {/* save button  */}
                  </ListItem>
                );
              })}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
