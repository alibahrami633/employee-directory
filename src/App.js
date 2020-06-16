import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Route exact path="/" component={Search} />
      </Wrapper>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
