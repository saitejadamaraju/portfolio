import reacticon from "../assets/reactjs.svg"
import tailwindcss from "../assets/tailwindcss.svg"
import html from "../assets/html.svg"
import javascript from "../assets/javascript.svg"
import springboot from "../assets/springboot.svg"
import java from "../assets/java.svg"
import postgresql from "../assets/postgresql.svg"
import nodejs from "../assets/nodejs.svg"
import expressjs from "../assets/expressjs.svg"
import mongodb from "../assets/mongodb.svg"
import techstack from "../assets/techstack.png"
import clang from "../assets/c-lang.png"
import python from "../assets/python.png"
import { useState } from "react"

const Skills = ()=>
    {
        const[hovered,setHovered] = useState(null);

        return(

            <div className="text-white space-y-10 py-4">
                <h2 className="text-2xl md:text-3xl font-extrabold flex items-center ml-10">
                        <span>Tech Stack</span>
                        <img className=" h-[50px] ml-2" src={techstack}></img>
                </h2>
                
                {/* <div className="flex justify-center"> */}

                <div className="flex my-2 mx-1 p-1 flex-wrap justify-center">
                    <div className=" h-[400px] w-[350px] bg-gray-800 m-1 rounded-md">
                        <h2 className="text-lg font-bold m-1">Frontend</h2>
                        <div className="grid grid-cols-3 gap-4 m-1">
                        <span 
                            onMouseEnter={()=>{setHovered("reactjs")}} 
                            onMouseLeave={()=>{setHovered(null)}} 
                            className="p-1 cursor-pointer relative">
                                <span><img className="h-[60px]  m-4" src={reacticon} alt="React Icon"></img></span>
                            {hovered === "reactjs" && 
                              <span className="w-full absolute bottom-2 left-12  font-semibold  px-1 py-1 rounded">{" React JS "}</span>}
                        </span>

                        <span 
                            onMouseEnter={()=>{setHovered("tailwindcss")}} 
                            onMouseLeave={()=>{setHovered(null)}} 
                            className="p-1 cursor-pointer relative">
                                <span><img className="h-[60px]  m-4" src={tailwindcss} alt="tailwindcss"></img></span>
                            {hovered === "tailwindcss" && 
                              <span className="w-full absolute bottom-2 left-12  font-semibold  px-1 py-1 rounded">{" Tailwind CSS "}</span>}
                        </span>

                        <span 
                            onMouseEnter={()=>{setHovered("html")}} 
                            onMouseLeave={()=>{setHovered(null)}} 
                            className="p-1 cursor-pointer relative">
                                <span><img className="h-[60px]  m-4" src={html} alt="html"></img></span>
                            {hovered === "html" && 
                              <span className="w-full absolute bottom-2 left-12 font-semibold  px-1 py-1 rounded">{" HTML "}</span>}
                        </span>

                        <span 
                            onMouseEnter={()=>{setHovered("javascript")}} 
                            onMouseLeave={()=>{setHovered(null)}} 
                            className="p-1 cursor-pointer relative">
                                <span><img className="h-[60px]  m-4" src={javascript} alt="javascript"></img></span>
                            {hovered === "javascript" && 
                              <span className="w-full absolute bottom-2 left-12  font-semibold  px-1 py-1 rounded">{" Javascript "}</span>}
                        </span>
                        </div>

                    </div>

                    <div className=" h-[400px] w-[350px] bg-gray-800 m-1 rounded-md">
                        <h2 className="text-lg font-bold m-1">Backend</h2>
                        <div className="grid grid-cols-3 gap-4 m-1">
                        <span 
                            onMouseEnter={()=>{setHovered("springboot")}} 
                            onMouseLeave={()=>{setHovered(null)}} 
                            className="p-1 cursor-pointer relative">
                                <span><img className="h-[50px]  m-4" src={springboot} alt="springboot"></img></span>
                            {hovered === "springboot" && 
                              <span className="w-full absolute bottom-2 left-12  font-semibold  px-1 py-1 rounded">{" Spring Boot "}</span>}
                        </span>

                        <span 
                            onMouseEnter={()=>{setHovered("java")}} 
                            onMouseLeave={()=>{setHovered(null)}} 
                            className="p-1 cursor-pointer relative">
                                <span><img className="h-[50px]  m-4" src={java} alt="java"></img></span>
                            {hovered === "java" && 
                              <span className="w-full absolute bottom-2 left-12  font-semibold  px-1 py-1 rounded">{" Java "}</span>}
                        </span>

                        <span 
                            onMouseEnter={()=>{setHovered("postgresql")}} 
                            onMouseLeave={()=>{setHovered(null)}} 
                            className="p-1 cursor-pointer relative">
                                <span><img className="h-[50px]  m-4" src={postgresql} alt="postgresql"></img></span>
                            {hovered === "postgresql" && 
                              <span className="w-full absolute bottom-2 left-12  font-semibold  px-1 py-1 rounded">{" Postgresql "}</span>}
                        </span>

                        <span 
                            onMouseEnter={()=>{setHovered("nodejs")}} 
                            onMouseLeave={()=>{setHovered(null)}} 
                            className="p-1 cursor-pointer relative">
                                <span><img className="h-[50px]  m-4" src={nodejs} alt="nodejs"></img></span>
                            {hovered === "nodejs" && 
                              <span className="w-full absolute bottom-2 left-12  font-semibold  px-1 py-1 rounded">{" Node Js "}</span>}
                        </span>

                        <span 
                            onMouseEnter={()=>{setHovered("expressjs")}} 
                            onMouseLeave={()=>{setHovered(null)}} 
                            className="p-1 cursor-pointer relative">
                                <span><img className="h-[50px]  m-4" src={expressjs} alt="expressjs"></img></span>
                            {hovered === "expressjs" && 
                              <span className="w-full absolute bottom-2 left-12 font-semibold  px-1 py-1 rounded">{" Express JS "}</span>}
                        </span>

                        <span 
                            onMouseEnter={()=>{setHovered("mongodb")}} 
                            onMouseLeave={()=>{setHovered(null)}} 
                            className="p-1 cursor-pointer relative">
                                <span><img className="h-[50px]  m-4" src={mongodb} alt="mongodb"></img></span>
                            {hovered === "mongodb" && 
                              <span className="w-full absolute bottom-2 left-12 font-semibold  px-1 py-1 rounded">{" Mongo DB "}</span>}
                        </span>
                        </div>

                        
                    </div>

                    <div className="  h-[400px] w-[350px] bg-gray-800 m-1 rounded-md">
                        <h2 className="text-lg font-bold m-1">Others</h2>
                        <div className="grid grid-cols-3 gap-4 m-1">
                        <span 
                            onMouseEnter={()=>{setHovered("python")}} 
                            onMouseLeave={()=>{setHovered(null)}} 
                            className="p-1 cursor-pointer relative">
                                <span><img className="h-[50px]  m-4" src={python} alt="python"></img></span>
                            {hovered === "python" && 
                              <span className="w-full absolute bottom-2 left-12  font-semibold  px-1 py-1 rounded">{" Python "}</span>}
                        </span>

                        <span 
                            onMouseEnter={()=>{setHovered("clang")}} 
                            onMouseLeave={()=>{setHovered(null)}} 
                            className="p-1 cursor-pointer relative">
                                <span><img className="h-[50px] m-4" src={clang} alt="clang"></img></span>
                            {hovered === "clang" && 
                              <span className="w-full absolute bottom-2 left-12  font-semibold  px-1 py-1 rounded">{" C Language "}</span>}
                        </span>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }

export default Skills;