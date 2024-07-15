import useAppStore from "../zustand/useAppStore";
import PersonalDetails from "./PersonalDetails";
import Projects from "./Projects";
import Skills from "./Skills";
import Work from "./Work";

const SideBarData = () => {

    const{selectedOption} = useAppStore();

    return (
        <div>
          {selectedOption=="Me" && <PersonalDetails/>}

          {selectedOption=="Skills" && <Skills/>}

          {selectedOption=="Work" && (
                <Work/>
            
            )}
          {selectedOption=="Projects" && (
            //   <div className="overflow-auto">
                 <Projects/>
              //</div>
             
          )}
        </div>
    )
}

export default SideBarData;