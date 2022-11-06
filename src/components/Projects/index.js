import React from 'react';
import cameraReel from '../../assets/camera-reel.png';
// import data from '../../assets/data.png';
// import ecommerce from '../../assets/ecommerce.png';
// import openBook from '../../assets/open-book.png';
// import password from '../../assets/password.png';
// import socialNetwork from '../../assets/social-network.png';

function Projects(
    setPage,
     Movie) 
    // Employee Tracker, 
    // ECommerce Backend, 
    // Book Nook, 
    // Password Generator,
    //  Social Network API 
    {

    return (
        <section>
            <div>
                <ul className="flex-row">
                <li className="mx-2">
                <h1 id="projects">My Projects</h1>
                <a href="#movie" onClick={() => setPage(<Movie/>)}></a>
            <img className="w-full object-contain" src={cameraReel} style={{ width: "20%" }} alt="movie media application"></img>
            <a className="font-italic hover:font-bold text-xl" href="https://josephw143.github.io/Movie-Music-Magic//">Movie Music Magic </a>
                </li>
                </ul>
            </div>
        </section>
    )
    
};
export default Projects;