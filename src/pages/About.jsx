import profile from '../assets/img/profile.PNG'

function About() {
  return (
    <div>
      <h1>About Me</h1>
      <img src={profile} alt="Photo of Your Osamahiemen Idemudia" />
      <p>
        My name is <strong>Osamahiemen Idemudia</strong>. I am a Full Stack Web
        Developer (MERN Stack) and a former architecture graduate with a strong
        passion for technology and problem-solving. I transitioned into web
        development to leverage my creativity and analytical skills in building
        functional and accessible web applications.
      </p>

      <p>
        I have experience as a Coding Bootcamp Intern and Tutor, where I
        developed and taught projects including weather apps, calculators, to-do
        lists, and blogging applications using HTML, CSS, JavaScript, React,
        Node.js, and MongoDB.
      </p>

      <a href="#" target="_blank">
        Download My Resume
      </a>
    </div>
  );
}

export default About;
