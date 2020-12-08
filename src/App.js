import "./App.css";
import Features from "./Features";
import GetStarted from "./GetStarted";
import Hero from "./Hero";
import Links from "./Links";
import Navbar from "./Navbar";
import Test from "./Test";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Links />
      <Features />
      <GetStarted />
      {/* statistics */}
      {/* link boost */}
      {/* footer */}
      {/* <Test /> */}
    </div>
  );
}

export default App;
