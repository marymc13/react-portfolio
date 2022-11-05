import React from 'react';

function Nav({setPage, About, Projects, Contact, Resume}) {

    return (

        <header>
            <h2>
                <a href="/">
                    Mary Paul
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about" onClick={() => setPage(<About/>)}>
                            About Me
                        </a>
                    </li>
                    <li className="mx-2">
                    <span a href="#projects" onClick={() => setPage(<Projects/>)}> 
                       Projects</span>
                       
                    </li>
                    <li className="mx-2">
                    <span a href="#contact"  onClick={() => setPage(<Contact/>)}>
                        Contact Me</span>
                        
                    </li>
                    <li className="mx-2">
                    <span a href="#resume" onClick={() => setPage(<Resume/>)}>
                        Resume</span>
                        
                    </li>
                </ul>
            </nav>
        </header>

    );
}

export default Nav;