import React from "react";
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
