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
import { auth } from "./firebase";
import { createContext, useEffect, useState } from "react";
import FullLinkList from "./FullLinkList.js";

export const userContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function (newuser) {
      if (newuser) {
        setUser(newuser);
      } else setUser(null);
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="app">
      <userContext.Provider value={user}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/signin">
              <SignUp />
            </Route>
            <Route path="/links">
              <FullLinkList user={user} />
            </Route>
            <Route path="/">
              <Hero />
              <Links user={user} />
              <Features />
              <GetStarted />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </userContext.Provider>

      {/* statistics */}
      {/* link boost */}
      {/* footer */}
      {/* <Test /> */}
    </div>
  );
}
export default App;
