import profile from '../assets/img/profile.PNG';
import resume from '../assets/IDEMUDIA OSAMHIEMEN (MERN STACK DEVELOPER).pdf';

function About() {
  return (
    <>
      <h1>About Me</h1>
      <img src={profile} alt="Osamahiemen Idemudia" />
      <p>
        My name is <strong>Osamahiemen Idemudia</strong>. I am a Full Stack Web Developer (MERN Stack) 
        and a former architecture graduate with a strong passion for technology and problem-solving.
      </p>
      <p>
        I have experience as a Coding Bootcamp Intern and Tutor, where I developed and taught projects including 
        weather apps, calculators, to-do lists, and blogging applications using HTML, CSS, JavaScript, React, Node.js, and MongoDB.
      </p>
      <a href={resume} download>Download My Resume</a>
    </>
  );
}

export default About;
