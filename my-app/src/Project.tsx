import {useState} from 'react';
import { Link } from 'react-router-dom';

function Project(){
  const [project1,setProject1] = useState<string>("https://github.com/lyepez-glitch/Collaborative-Task-Management-App");
  return (
    <>
    <Link to={project1}>Project 1</Link>
    </>
  )
}
export default Project;