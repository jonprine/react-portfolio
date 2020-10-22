import React from 'react';
import profileImage from "../../assets/profilepic.jpg";


function About() {
  return (
    <section className='title'>
      <h1 id="about">Who am I?</h1>
      <center><img src={profileImage} roundedCircle style={{ width: "14%" }} alt="cover" /></center>
      <p>Jon Prine</p>
      <p>Full Stack Web Developer</p>
      <p>I've worked in the music industry for 12 years and explorting opportunties to expand within my current job as well as look for other opportunties.</p>
      
    </section>
  );
}

export default About;