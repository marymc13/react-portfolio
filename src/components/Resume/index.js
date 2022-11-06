import React from 'react';
import Myresume from '../../assets/Myresume.png';


function Resume(
    setPage,
    Experience)
 {
    return (
        <section>
        <div>
                <ul className="flex-row">
                    <li className="mx-2">
                       
                        <a href="#experience" onClick={() => setPage(<Experience />)}></a>
                        <img className="w-full object-contain" src={Myresume} style={{ width: "20%" }} alt="movie media application"></img>
                        <a className="font-italic hover:font-bold text-xl">Resume</a>
                    </li>
                </ul>
            </div>
            </section>
           
    )
}


export default Resume;