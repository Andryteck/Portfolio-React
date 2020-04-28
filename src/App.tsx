import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./MyProjects/Projects";
import RemoteJob from "./RemoteJob/RemoteJob";
import ContactForm from "./ContactForm/ContactForm";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
    <Header />
    <Main />
    <Skills />
    <Projects />
    <RemoteJob />
    <ContactForm />
    <Footer />
    </div>
  );
}

export default App;
