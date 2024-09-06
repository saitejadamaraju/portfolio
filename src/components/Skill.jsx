import { useState } from "react";


const Skill = ({detail}) =>
{
    const[hovered,setHovered] = useState(null);
    const {title,icon}= detail;
    return (

        <span 
            onMouseEnter={()=>{setHovered("true")}} 
            onMouseLeave={()=>{setHovered(null)}} 
            className="p-1 cursor-pointer relative">

        <span>
            <img className="h-[50px]  m-4" src={icon} alt={title}></img>
        </span>

        {hovered === "true" && 
          <span className="w-full absolute bottom-2 left-12  font-semibold  px-1 py-1 rounded">{title}</span>}
        
        </span>
    )
}

export default Skill;