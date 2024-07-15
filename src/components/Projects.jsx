import ProjectCard from "./ProjectCard";
import confessionapp from "../assets/project-pics/confession-app.png"
import chatapp from "../assets/project-pics/chat-app.png";
import easydocs from "../assets/project-pics/easy-docs.png";

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
            
            <div className="h-[400px] flex my-2 mx-1 p-1 flex-wrap overflow-auto">
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
           
        )

    }

export default Projects;