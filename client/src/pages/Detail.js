import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";

function Detail(props) {
  const [book, setBook] = useState({});

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const { id } = useParams();
  useEffect(() => {
    API.getBook(id)
      .then((res) => setBook(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id).catch((err) => console.log(err));
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-9">
          <Jumbotron>
            <h1>
              {book.title} by {book.author}
            </h1>
          </Jumbotron>
        </Col>
        <Col size="md-3">
          <Link to={book.link}>View</Link>
          <DeleteBtn onClick={() => deleteBook(book._id)} />
        </Col>
      </Row>
      <Row>
        <Col size="md-4 sm-12">
          <img src={book.image} alt={book.title} />
        </Col>
        <Col size="md-8 md-offset-1">
          <article>
            <h1>Description</h1>
            <p>{book.description}</p>
          </article>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;
