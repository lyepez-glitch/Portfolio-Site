import {useState} from 'react';
import { FaReact } from "react-icons/fa";
function About(){
  type ProjectType = {
    title:string
  }

  const [bio,setBio] = useState<string>("Hi, I'm Lucas Yepez, a passionate Full Stack Developer with a love for creating intuitive and efficient web applications. With a background in both front-end and back-end technologies, I enjoy working on projects that challenge me to solve complex problems and deliver seamless user experiences. I am constantly learning new tools and frameworks to stay at the cutting edge of web development.When I'm not coding, you can find me exploring the latest tech trends, diving into creative side projects, or collaborating with like-minded developers. My goal is to build solutions that make an impact and help people in meaningful ways.Let's connect and create something amazing together!")

  const [certs,setCerts] = useState<ProjectType[]>([])
    const [backgrounds,setBackgrounds] = useState<string[]>([])
  return (
    <>
    <h3>About:{bio}</h3>
    <ul>
      <li><FaReact /> React</li>
    </ul>
    <ul>
      Certs:
      {
        certs.map(cert=>
          <li>{cert.title}</li>
          )
      }

    </ul>
    <ul>
      Background:
      {
        backgrounds.map(background=>
          <li>{background}</li>
          )
      }
    </ul>
    </>
  )
}
export default About;