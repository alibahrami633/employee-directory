import React from "react";
import "./style.css";
import { Form } from "react-bootstrap";
// import compareValues from "../../utils/API"
const API = require("../../utils/API")

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <Form>
      <Form.Group>
        <Form.Label htmlFor="employee">Employee Name:</Form.Label>
        <Form.Control type="text" size="lg"
          value={props.search}
          onChange={props.handleInputChange}
          placeholder="Type in some letters of the employees name to begin"
          list="employees"
        />

        <datalist id="employees">
          {/* {props.employees.sort((a, b) => (a.employeeName.toLowerCase() > b.employeeName.toLowerCase()) ? 1 : -1).map(employee => (
            <option value={employee.employeeName} key={employee.id} />
          ))} */}
          {props.employees.sort(API.default.compareValues("phone", "asc")).map(employee => (
            <option value={employee.employeeName} key={employee.id} />
          ))}
          {console.log(props.employees)}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Filter by Name
        </button>
      </Form.Group>
    </Form>
  );
}

export default SearchForm;
