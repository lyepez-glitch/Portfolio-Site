import {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Contact(){
  const [email,setEmail] = useState<string>("lucasyepez99@gmail.com");
  const [linkedIn,setLinkedIn]  = useState<string>("https://www.linkedin.com/in/lucas-yepez/")
  const [github,setGithub] = useState<string>("https://github.com/lyepez-glitch")
  const [name,setName] = useState<string>("")
  const [number,setNumber] = useState<string>("")
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false); // Track if submitted
  const [showSuccess, setShowSuccess] = useState<boolean>(false);  // For green flash
  const handleContactSubmit = async(e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
  try{
    const response = await axios.post("http://localhost:3000/users",{
      name: name,
      number:number
    });
    setName("");
    setNumber("");
    setIsSubmitted(true);
    setShowSuccess(true);
    // Flash success message for 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  }catch(error:unknown){
    if (error instanceof Error) {
      console.log('Error submitting: ', error.message);
    } else {
      console.log('Unknown error: ', error);
    }
  }


  }

  return(
    <>
    <h3>I would love to hear from you! Whether you have questions, ideas, or just want to chat about tech, feel free to reach out.</h3>
    <div>Email:{email}</div>
    <Link to={linkedIn}>LinkedIn</Link>
    <Link to={github}>GitHub</Link>
    <form onSubmit={handleContactSubmit}>
      <label htmlFor="name">Name: </label>
      <input onChange={(e)=>setName(e.target.value)} value={name} type="text" name="name"/>
      <label htmlFor="number">Phone Number: </label>
      <input onChange={(e)=>setNumber(e.target.value)} value={number} type="text" name="number"/>
    <button type="submit">Contact</button>
  </form>
  {showSuccess && <div className="success-flash">Form successfully submitted!</div>}

    </>
  )
}
export default Contact;