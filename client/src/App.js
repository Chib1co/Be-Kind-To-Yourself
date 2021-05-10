import React from "react";
import { 
  BrowserRouter as Router,
  Route,
Link,
Redirect
} from "react-router-dom";
import Home from "./pages/Home";
import Checker from "./pages/Checker";
import Result from "./pages/Result";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Charts from "./pages/Charts";
import DayLog from "./pages/DayLog";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import './App.css';

const Auth = {
  isAuthenticated: false,
  authenticate(cb){
    
  }
}

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
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Charts" component={Charts} />
          <Route exact path="/Daylog" component={DayLog} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
