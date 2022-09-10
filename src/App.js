import React from "react";
import './App.css';
import Header from "components/Header.js";
import Footer from "components/Footer.js";
import Main from "components/Main.js";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas)

export default function App() {
  return (
    <div className='App'>
        <Header />
        <Main />
        <Footer />
    </div>
  );
}
