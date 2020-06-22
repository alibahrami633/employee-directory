import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper"
import Search from "./pages/Search";
import { Container } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Container fluid>
          <Route exact path="/" component={Search} />
        </Container>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
