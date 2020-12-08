import "./App.css";
import Features from "./Features";
import Footer from "./Footer";
import GetStarted from "./GetStarted";
import Hero from "./Hero";
import Links from "./Links";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Test from "./Test";
import SignUp from "./SignUp";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/login">
            <h1>Login page</h1>
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Hero />
            <Links />
            <Features />
            <GetStarted />
            <Footer />
          </Route>
        </Switch>
      </Router>
      {/* statistics */}
      {/* link boost */}
      {/* footer */}
      {/* <Test /> */}
    </div>
  );
}

export default App;
