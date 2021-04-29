import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Checker from "./pages/Checker";
import Result from "./pages/Result";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Charts from "./pages/Charts";
import DayLog from "./pages/DayLog";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import './App.css';


function App() {
  return (
<Router>
      <div className="app">
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/Checker" component={Checker} />
          <Route exact path="/Result" component={Result} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signin" component={Signin} />
          <Route exact path="/Charts" component={Charts} />
          <Route exact path="/Daylog" component={DayLog} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
