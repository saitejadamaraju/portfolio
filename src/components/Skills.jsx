import techstack from "../assets/techstack.png"
import SkillsCard from "./SkillsCard"
import {backend,frontend,others} from "../utils/SkillData"

const Skills = ()=>
    {
        
        return(

            <div className="text-white space-y-10 py-4">
                <h2 className="text-2xl md:text-3xl font-extrabold flex items-center ml-10">
                        <span>Tech Stack</span>
                        <img className=" h-[50px] ml-2" src={techstack}></img>
                </h2>
                <div className="flex my-2 mx-1 p-1 flex-wrap justify-center">
                    <SkillsCard key="1" name="Frontend" data={frontend}></SkillsCard>
                    <SkillsCard key="2" name="Backend" data={backend}></SkillsCard>
                    <SkillsCard key="3" name="Others" data={others}></SkillsCard>
                </div>
                
            </div>
        )
    }

export default Skills;