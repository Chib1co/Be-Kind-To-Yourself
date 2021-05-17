import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./pages/Home";
import Checker from "./pages/Checker";
import Result from "./pages/Result";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Charts from "./pages/Charts";
import Daylog from "./pages/DayLog";
import AddActivity from "./pages/AddActivity";
import SevendayResults from "./pages/SevendayResults";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import './App.css';
import { Auth } from './utils/Auth';
import API from "./utils/API"
import { useHistory } from "react-router-dom";


function App() {
  const history = useHistory();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const value = { isAuthenticated, setIsAuthenticated };

  // We check if user is already logged in, and if they are then we set isAuthenticated to true
  useEffect(() => {
    API.userLoggedIn().then(response => {
      setIsAuthenticated(response.data.isAuthenticated)
    })
  }, []);




  return (
    <Auth.Provider value={value}>
      <Router>
        <div className="app">
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={Home} />
            <Route path="/Checker">
              {isAuthenticated ?
                <Checker /> : <Login />
              }
            </Route>
            <Route path="/Result">
              {isAuthenticated ?
                <Result /> : <Login />
              }
            </Route>
            <Route path="/Charts">
              {isAuthenticated ?
                <Charts /> : <Login />
              }
            </Route>
            <Route path="/Daylog">
              {isAuthenticated ?
                <Daylog /> : <Login />
              }
            </Route>
            <Route path="/addactivity">
              {isAuthenticated ?
                <AddActivity /> : <Login />
              }
            </Route>
            <Route path="SevendayResults">
              {isAuthenticated ?
                <SevendayResults /> : <Login />
              }
            </Route>
            <Route path="/Login">
              {!isAuthenticated ?
                <Login /> : <Checker />
              }
            </Route>
            <Route path="/Signup">
              {!isAuthenticated ?
                <Signup /> : <Checker />
              }
            </Route>
          </Wrapper>

          <Footer />

        </div>
      </Router>
    </Auth.Provider>
  );
}

export default App;
