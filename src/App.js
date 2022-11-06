import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects'; 
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";


import './App.css';

function App() {
  const [page, setPage] = useState(<About/>);

  return (
    <div>
    <Nav>
   setPage = {setPage}
    About = {About}
    Projects = {Projects}
    Contact = {ContactForm}
    Resume = {Resume}
    </Nav>
    {page}
      <main>
        <setPage></setPage>
      <Projects></Projects>
      <ContactForm></ContactForm>
      <Resume></Resume>
      <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
