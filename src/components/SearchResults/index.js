import React from "react";
import "./style.css";
import { Card } from "react-bootstrap";
// import { CardTitle, CardText } from "react-bootstrap/Card";

function SearchResults(props) {
  return (

    props.results.map(result => (
      <Card>
        <Card.Header>{result.id + ". " + result.employeeName}</Card.Header>
        <Card.Body>
          <Card.Text><strong>Position: </strong>{result.position}</Card.Text>
          <Card.Text><strong>Email: </strong>{result.email}</Card.Text>
          <Card.Text><strong>Phone: </strong>{result.phone}</Card.Text>
        </Card.Body>
      </Card>
    ))

  );
}

export default SearchResults;
