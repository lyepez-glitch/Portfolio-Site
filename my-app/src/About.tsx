import {useState} from 'react';

function About(){
  const [about,setAbout] = useState<string>("Hi, I'm [Your Name], a passionate Full Stack Developer with a love for creating intuitive and efficient web applications. With a background in both front-end and back-end technologies, I enjoy working on projects that challenge me to solve complex problems and deliver seamless user experiences. I am constantly learning new tools and frameworks to stay at the cutting edge of web development.When I'm not coding, you can find me exploring the latest tech trends, diving into creative side projects, or collaborating with like-minded developers. My goal is to build solutions that make an impact and help people in meaningful ways.Let's connect and create something amazing together!")
  return (
    <>
    <h3>About:{about}</h3>
    </>
  )
}
export default About;