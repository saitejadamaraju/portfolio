import ProjectCard from "./ProjectCard";
import confessionapp from "../assets/project-pics/confession-app.png"
import chatapp from "../assets/project-pics/chat-app.png";
import easydocs from "../assets/project-pics/easy-docs.png";
import project from "../assets/project.png";

const Projects = () =>
    {
        const projects = [
            {
               id:"1",
               name:"Confession app",
               image:confessionapp,
               content:"Confession app makes people confess or recieve confessions to someone anonymously through a generated link",
               link:"https://confession-app-u9bl.onrender.com/home",                
            },
            {
                id:"2",
                name:"Chat app",
                image:chatapp,
                content:"Chat app is a real-time text chatting app , Using which you can chat with others.",
                link:"https://secrets-b29v.onrender.com/",                
             },
             {
                id:"3",
                name:"Easy docs",
                image:easydocs,
                content:"Easy docs is a real-time document editor which has feature like sharing document, real-time editing and downloading the document.",
                link:"https://easy-docs.onrender.com/",                
             }
             
         ]

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