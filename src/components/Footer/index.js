import React from 'react';

function Footer(
    setPage,
    Github,
    Linkedin,
    Email)

    {
        return (
            <footer>
            <div>
            <ul className="flex-row">
                <li className="mx-2">
                    <h1 id="contact" >Contact Information</h1>
                    <a href="#github" onClick={() => setPage(<Github />)}></a>
                    <a className="font-italic hover:font-bold text-xl" href="https://github.com/marymc13">Github </a>
                </li>
                </ul>

                <ul className="flex-row">
                <li className="mx-2">
                    <a href="#linkedin" onClick={() => setPage(<Linkedin />)}></a>
                    <a className="font-italic hover:font-bold text-xl" href="https://www.linkedin.com/in/mary-paul-06740b199">LinkedIn </a>
                </li>
            </ul>

            {/* <ul className="flex-row">
                <li className="mx-2">
                    <a href="#email" onClick={() => setPage(<Email />)}></a>
                    <a className="font-italic hover:font-bold text-xl" href="marymc135@gmail.com">Email </a>
                </li>
            </ul> */}
        </div>
        </footer>
        )
    }

export default Footer;