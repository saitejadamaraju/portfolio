import PersonalDetails from "./PersonalDetails";
import Projects from "./Projects";
import Skills from "./Skills";
import Work from "./Work";


const Body = () =>
    {
        

        return(

            <div className="flex flex-col m-4 bg-black">
                 <PersonalDetails/>
                 <Skills/>
                 <Projects/>
                 <Work/>
            </div>
        )
    }

export default Body;