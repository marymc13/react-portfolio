import React from 'react';
import coverImage from "../../assets/mary.jpg";
function About() {
    return (
      <section className="my-5">
        <h1 id="about">About Me</h1>
        <img src={coverImage} className="my-2" style={{ width: "20%" }} alt="cover" />
        <p style={{color: 'blue'}}> My name is Mary Paul and I started coding about a year ago.  I am completing the UCF's Full Stack Web Development Course.  I currently 
            work as an Elementary School Teacher in the Gifted Department.  I have been a teacher for the past 15 years but
             I am looking forward to changing my career and expanding my skill set.  Please review some of my completed project below.

        </p>
      </section>
    );
  }
  
  export default About;