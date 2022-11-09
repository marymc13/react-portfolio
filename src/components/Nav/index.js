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
                    < a href="#projects" onClick={() => setPage(<Projects/>)}> 
                       Projects</a>
                       
                    </li>
                    <li className="mx-2">
                    < a href="#contact"  onClick={() => setPage(<Contact/>)}>
                        Contact Me</a>
                        
                    </li>
                    <li className="mx-2">
                    < a href="#resume" onClick={() => setPage(<Resume/>)}>
                        Resume</a>
                        
                    </li>
                </ul>
            </nav>
        </header>

    );
}

export default Nav;