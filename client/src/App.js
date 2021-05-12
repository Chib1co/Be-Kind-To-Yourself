import {useState, useEffect}from "react";
import { 
  BrowserRouter as Router,
  Route,
Switch,
Redirec
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
import AUTH from './utils/AUTH';
import API from "./utils/API"


function App() {
   
	const [isAuthenticated, setIsAuthenticated ] = useState(false);
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
          <Route exact path="/Checker" component={Checker} />
          <Route exact path="/Result" component={Result} />
		  {isAuthenticated ? 
                  <Main /> : <Login />
                }
		  <Route exact path="/Daylog" component={DayLog} />
          <Route exact path="/Charts" component={Charts} />
          <Switch>
		  <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
		  </Switch>
		</Wrapper>
       
        <Footer />

      </div>
    </Router>
	</Auth.Provider>
  );
}

export default App;
