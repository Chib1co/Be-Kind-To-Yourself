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
import AUTH from './utils/AUTH';


function App() {
   
  constructor() {
    super();
    
		this.state = {
			loggedIn: false,
			user: null
    };
  }
  
	componentDidMount() {
		AUTH.getUser().then(response => {
			console.log(response.data);
			if (!!response.data.user) {
				this.setState({
					loggedIn: true,
					user: response.data.user
				});
			} else {
				this.setState({
					loggedIn: false,
					user: null
				});
			}
		});
	}

	logout = (event) => {
    event.preventDefault();
    
		AUTH.logout().then(response => {
			console.log('successfully logged out!');
			console.log(response.status);
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				});
			}

		});
	}

	login = (email, password) => {
		AUTH.login(email, password).then(response => {
      console.log(response);
      if (response.status === 200) {
        // update the state
        this.setState({
          loggedIn: true,
          user: response.data.user
        });
      }
    });
	}
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
