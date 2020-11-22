// React
import React from "react";
// Pages
import Home from "./pages/Home";
// Components
import Nav from "./components/Nav";
import GlobalStyles from "./components/GlobalStyles";
// Router
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
};

export default App;
