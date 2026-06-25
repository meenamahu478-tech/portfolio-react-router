import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  if (!project) return <h1>Project Not Found</h1>;

  return (
    <div>
      <h1 className="text-3xl text-blue-400">{project.title}</h1>
      <p className="mt-4 text-gray-400">{project.desc}</p>
    </div>
  );
}

export default ProjectDetails;