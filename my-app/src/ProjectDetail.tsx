import { Link } from 'react-router-dom';
type ProjDetailProps = {
  project:{
    id: string,
    title: string,
    desc:string,
    demo: string;
    challenges: string,
    techUsed: string,
    features: string,
    viewCode: string
  }
}

function ProjectDetail({project}:ProjDetailProps){
  return (
    <>
    <div>Challenges:{project.challenges}</div>
    <div>Tech used:{project.techUsed}</div>
    <div>Features:{project.features}</div>
    <Link to={project.demo}>View demo</Link>
    <Link to={project.viewCode}>View Code</Link>
    </>

  )
}

export default ProjectDetail;