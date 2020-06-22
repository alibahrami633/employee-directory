import React from "react";
import "./style.css";
import { Form, InputGroup, Button, DropdownButton, DropdownItem, Row, Col } from "react-bootstrap";

const API = require("../../utils/API");

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <Row>
      <Col md={12}>
        <Form>
          <Form.Group>
            <Row>
              <Col md={12}>
                <InputGroup className="mb-3">
                  <Form.Control type="text" size="lg"
                    value={props.search}
                    onChange={props.handleInputChange}
                    placeholder="Employee Name ..."
                    list="employees"
                  />
                  <datalist id="employees">
                    {props.employees.sort(API.default.compareValues(props.sort, "asc")).map(employee => (
                      <option value={employee.employeeName} key={employee.id} />
                    ))}
                  </datalist>
                  <InputGroup.Append>
                    <Button variant="primary" type="submit" onClick={props.handleFormSubmit}>Filter by Name</Button>
                  </InputGroup.Append>
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col md={5}>
                <div className="btn-group">
                  <select onChange={props.handleSortChange} drop="right" id="dropdown-sort" title="Sort by ..." variant="secondary">
                    <option value="id" key="id">ID</option>
                    <option value="employeeName" key="employeeName">Employee Name</option>
                    <option value="phone" key="phone">Phone</option>
                    <option value="email" key="email">Email</option>
                    <option value="position" key="position">Position</option>
                    {/* {Object.keys(props.employees[0]).map(keyItem => (<Dropdown.Item href="#">{keyItem}</Dropdown.Item>))} */}
                  </select>
                </div>
              </Col>
              <Col md={9}>
              </Col>
            </Row>
            <Row>
              <Col>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </Col>
    </Row >

  );
}

export default SearchForm;
