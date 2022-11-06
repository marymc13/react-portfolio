import React from 'react';
import cameraReel from '../../assets/camera-reel.png';
import data from '../../assets/data.png';
import ecommerce from '../../assets/ecommerce.png';
import openBook from '../../assets/open-book.png';
import password from '../../assets/password.png';
import socialNetwork from '../../assets/social-network.jpg';

function Projects(
    setPage,
    Movie,
    Tracker,
    ECommerce, 
    BookNook, 
    Password,
    Social)
{

    return (
        <section>
            <div>
                <ul className="flex-row">
                    <li className="mx-2">
                        <h1 id="projects">My Projects</h1>
                        <a href="#movie" onClick={() => setPage(<Movie />)}></a>
                        <img className="w-full object-contain" src={cameraReel} style={{ width: "20%" }} alt="movie media application"></img>
                        <a className="font-italic hover:font-bold text-xl" href="https://josephw143.github.io/Movie-Music-Magic//">Movie Music Magic </a>
                    </li>
                </ul>
            </div>

            <div>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#tracker" onClick={() => setPage(<Tracker />)}></a>
                        <img className="w-full object-contain" src={data} style={{ width: "20%" }} alt="walkthrough video of application"></img>
                        <a className="font-italic hover:font-bold text-xl" href="https://watch.screencastify.com/v/zD0ViaLKtYV7f8ZkxD1T">Employee Tracker</a>
                    </li>
                </ul>
            </div>

            <div>
                <ul className="flex-row" >
                    <li className="mx-2">
                        <a href="#ecommerce" onClick={() => setPage(<ECommerce />)}></a>
                        <img className="w-full object-contain" src={ecommerce} style={{ width: "20%" }} alt=" walkthrough video of backend application to track employee data"></img>
                        <a className="font-italic hover:font-bold text-xl" href="https://watch.screencastify.com/v/eVmmYn0p6bPRgp19VTRH">ECommerce Backend</a>
                    </li>
                </ul>
            </div>

            <div>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#bookNook" onClick={() => setPage(<BookNook />)}></a>
                        <img className="w-full object-contain" src={openBook} style={{ width: "20%" }} alt=" web application for parents to find books for their kids"></img>
                        <a className="font-italic hover:font-bold text-xl" href="https://booknook-stars.herokuapp.com/">Book Nook</a>
                    </li>
                </ul>
            </div>

            <div>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#password" onClick={() => setPage(<Password />)}></a>
                        <img className="w-full object-contain" src={password} style={{ width: "20%" }} alt=" web application for parents to find books for their kids"></img>
                        <a className="font-italic hover:font-bold text-xl" href="https://marymc13.github.io/password-generator/">Password Generator</a>
                    </li>
                </ul>
            </div>

            <div>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#social" onClick={() => setPage(<Social />)}></a>
                        <img className="w-full object-contain" src={socialNetwork} style={{ width: "20%" }} alt=" social network api for users to make comments and connect with others"></img>
                        <a className="font-italic hover:font-bold text-xl" href="https://marymc13.github.io/password-generator/">Social Network API</a>
                    </li>
                </ul>
            </div>




        </section>
    )

};
export default Projects;