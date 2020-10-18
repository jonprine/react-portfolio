import React from 'react';
import profileImage from "../../assets//profilepic.jpg";


function About() {
  return (
    <section>
      <h1 id="about">Who am I?</h1>
      <img src={profileImage} className="my-2" style={{ width: "20%" }} alt="cover" />
    </section>
  );
}

export default About;