import React from "react"
import projects from "../data/projects"
import Project from "./project"

const ProjectNumber = ({ number }) => (
  <div className="mt-4">
    <div className="px-3">
      <h2 className="text-2xl text-red-900">Project {number}</h2>
    </div>
    <div className="flex flex-wrap items-stretch mt-4">
      {projects
        .filter(project => project.number === +number)
        .map(project => {
          return <Project key={project.image} project={project} />
        })}
    </div>
  </div>
)
export default ProjectNumber
