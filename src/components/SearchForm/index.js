import React from "react";
import "./style.css";
import { Form, Autosuggest } from "react-bootstrap";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <Form>
      <Form.Group>
        <Form.Label htmlFor="employee">Employee Name:</Form.Label>
        <Form.Control type="text" size="lg"
          value={props.search}
          onChange={props.handleInputChange}
          placeholder="Type in an employee name to begin"
          list="employees"
        />
        <datalist id="employees">
          {props.employees.map(employee => (
            <option value={employee.employeeName} key={employee.id} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Filter
        </button>
      </Form.Group>
    </Form>
  );
}

export default SearchForm;
