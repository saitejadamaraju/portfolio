import ProjectCard from "./ProjectCard";
import project from "../assets/project.png";
import {projects} from "../utils/ProjectData";

const Projects = () =>
    {
       
        return(
            <>
            <h2 className="text-2xl md:text-3xl text-white font-extrabold flex items-center ml-10">
                        <span>Projects</span>
                        <img className="h-[50px] ml-2" src={project}></img>
            </h2>
            <div className="flex my-2 mx-1 p-1 flex-wrap">
                
                {projects && projects.length > 0 ? (
                                        projects.map((project) => (
                                        <ProjectCard key={project?.id} data={project}/>
                                        ))
                                    ) : (
                                        <div className="text-xl font-bold text-white font-style: italic">
                                            No confessions yet.
                                        </div>
                                    )}
            </div>
            </>
           
        )

    }

export default Projects;