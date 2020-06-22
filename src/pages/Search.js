import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

class Search extends Component {
  state = {
    search: "",
    employees: [], // all employees
    results: [],   // filtered employees
    error: "",
    sort: ""
  };

  // componentDidMount will be called only once after the first render
  componentDidMount() {
    API.getEmployeeList()
      .then(res => this.setState({ employees: res, results: res }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  }

  handleSortChange = event => {
    this.setState({ sort: event.target.value });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.getEmployeeByName(this.state.search)
      .then(res => {
        this.setState({ results: res });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <>
        <h1 className="text-center">Employees' List</h1>
        <Container>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            handleSortChange={this.handleSortChange}
            employees={this.state.employees}
            sort={this.state.sort}
          />
          <SearchResults results={this.state.results} />
        </Container>
      </>
    );
  }
}

export default Search;
