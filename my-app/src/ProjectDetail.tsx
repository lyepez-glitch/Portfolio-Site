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
    <div className="projDetailsContainer">
      <div>Challenges:{project.challenges}</div>
      <br/>
      <div>Tech used:{project.techUsed}</div>
      <br/>
      <div>Features:{project.features}</div>
      <br/>
      <Link to={project.demo}>View demo</Link>
      <br/>
      <br/>
      <Link to={project.viewCode}>View Code</Link>
    </div>

    </>

  )
}

export default ProjectDetail;