import { useState } from "react";
import useAppStore from "../zustand/useAppStore";
import details from "../assets/details.png"
import skills from "../assets/skills.png"
import experience from "../assets/experience.png"
import project from "../assets/project.png"

const Sidebar = () =>
    {
        
        const[hovered,setHovered] = useState(null);
        const{setSelectedOption} = useAppStore();
       

        
          
         return(
               
            <div className = "md:w-1/12 rounded-2xl  bg-gray-700">
                <ul className="flex flex-row md:flex-col justify-between items-center w-full h-full p-2">
                    <li 
                        onMouseEnter={()=>{setHovered("Details")}} 
                        onMouseLeave={()=>{setHovered(null)}} 
                        className="p-1 cursor-pointer relative">
                            <span onClick={()=>setSelectedOption("Me")}><img className="h-[20px] sm:h-[30px] sm:hover:h-[35px] md:h-[40px] hover:h-[25px] md:hover:h-[45px]" src={details}></img></span>
                            {hovered === "Details" && 
                              <span className="absolute bottom-2 left-12 bg-gray-900 text-white font-semibold px-2 py-1 rounded">{"Me"}</span>}
                    </li>
                    <li 
                        onMouseEnter={()=>{setHovered("Skills")}} 
                        onMouseLeave={()=>{setHovered(null)}} 
                        className="p-1 cursor-pointer relative">
                            <span onClick={()=>setSelectedOption("Skills")}><img className="h-[20px] sm:h-[30px] sm:hover:h-[35px] md:h-[50px] hover:h-[25px] md:hover:h-[55px]" src={skills}></img></span>
                            {hovered === "Skills" && 
                              <span className="absolute bottom-2 left-12 bg-gray-900 text-white font-semibold px-2 py-1 rounded">{"Skills"}</span>}
                    </li>
                    <li 
                        onMouseEnter={()=>{setHovered("Work")}} 
                        onMouseLeave={()=>{setHovered(null)}} 
                        className="p-1 cursor-pointer relative">
                            <span onClick={()=>setSelectedOption("Work")}><img className="h-[20px] sm:h-[30px] sm:hover:h-[35px] md:h-[50px] hover:h-[25px] md:hover:h-[55px]" src={experience}></img></span>
                            {hovered === "Work" && 
                              <span className="absolute bottom-2 left-12 bg-gray-900 text-white font-semibold px-2 py-1 rounded">{"Experience"}</span>}
                    </li>
                    <li 
                        onMouseEnter={()=>{setHovered("Projects")}} 
                        onMouseLeave={()=>{setHovered(null)}} 
                        className="p-1 cursor-pointer relative">
                            <span onClick={()=>setSelectedOption("Projects")}><img className="h-[20px] sm:h-[30px] sm:hover:h-[35px] md:h-[50px] hover:h-[25px] md:hover:h-[55px]" src={project}></img></span>
                            {hovered === "Projects" && 
                              <span className="absolute bottom-2 left-12 bg-gray-900 text-white font-semibold px-2 py-1 rounded">{"Projects"}</span>}
                    </li>
                </ul>
            </div>
          )
    }
export default Sidebar;