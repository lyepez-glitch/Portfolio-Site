import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import ProjectDetail from './ProjectDetail';
type ProjectType = {
  id: string,
  title:string,
  path: string,
  desc: string,
  demo: string,
  challenges: string,
  techUsed: string,
  features: string,
  viewCode: string
}

function Project(){
  const [projects,setProjects] = useState<ProjectType[]>([])
  const [projDetailsId,setProjDetailsId] = useState<string>("");
  useEffect(() => {
    setProjects([{id:"1",title:"title1",path:"path1",desc:"proj 1 desc",demo:"demo",challenges:"challenge 1",techUsed:"tech used 1",features:" features 1",viewCode:""}])
    },[]);

  return (
    <>
    <Link to="/">Back</Link>
    <div className = "projectsContainer">
      {

        projects.map(proj=>
          <ul className="card">
            <li>title:{proj.title}</li>
            <li>path:<Link to={proj.path}>Click Here</Link></li>
            <li>description:{proj.desc}</li>
            <li>Live demo: {proj.demo}</li>

            {
              projDetailsId === proj.id?(
                <ProjectDetail project={proj}/>
              ):(
                <li onClick={(e)=>setProjDetailsId(proj.id)}>View Project Details</li>
              )
            }
          </ul>
        )
      }
    </div>

    </>

  )
}
export default Project;