import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects'; 
import './App.css';

function App() {
  const [page, setPage] = useState(<About/>);

  return (
    <div>
    <Nav>
    setPage = {setPage}
    About = {About}
    Projects = {Projects}
    {/* Contact = {Contact}
    Resume = {Resume} */}
    </Nav>
    {page}
      <main>
        <Projects></Projects>
      </main>
    </div>
  );
}

export default App;
