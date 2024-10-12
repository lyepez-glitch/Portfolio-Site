import {useState} from 'react';
import { Link } from 'react-router-dom';

function Contact(){
  const [email,setEmail] = useState<string>("lucasyepez99@gmail.com");
  const [linkedIn,setLinkedIn]  = useState<string>("https://www.linkedin.com/in/lucas-yepez/")
  const [github,setGithub] = useState<string>("https://github.com/lyepez-glitch")

  return(
    <>
    <h3>I would love to hear from you! Whether you have questions, ideas, or just want to chat about tech, feel free to reach out.</h3>
    <div>Email:{email}</div>
    <Link to={linkedIn}>LinkedIn</Link>
    <Link to={github}>GitHub</Link>

    </>
  )
}
export default Contact;