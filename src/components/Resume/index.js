import React from 'react';
import Myresume from '../../assets/MP_Resume.pdf';


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
                        <a className="font-italic hover:font-bold text-xl" href={Myresume} >Resume</a>
                    </li>
                </ul>
            </div>
            </section>
           
    )
}


export default Resume;