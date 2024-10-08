

const PersonalDetails = () =>
    {
        return(

            <div className="text-white mb-4">

                 <div className="m-1 my-2 flex flex-col bg-gray-700 rounded-md p-1">
                    <div className="flex bg-gray-800 rounded-md">
                        <h2 className="text-2xl md:text-3xl font-extrabold m-1 p-1">About Me</h2>
                    </div>
                    <p className=" text-sm md:text-lg m-1 font-semibold" >Hi, {"I'm"} Saiteja damaraju, a 3 years experienced Software Developer with a passion for creating innovative solutions in web development.I specialize in full-stack development, particularly in Java and Javascript frameworks. {"I'm"} dedicated to continuous learning and improving user experiences.</p>
                    <p className=" text-sm md:text-lg m-1 font-semibold" >Feel free to reach out to me through my email or connect with me on my socials.</p>
                 </div>

                 <div className="m-1 my-2 flex flex-col bg-gray-700 rounded-md p-1">
                    <div className="flex bg-gray-800 rounded-md">
                        <h2 className="text-2xl md:text-3xl font-extrabold m-1 p-1">Personal statement</h2>
                    </div>
                   <p className=" text-sm md:text-lg m-1 font-semibold">I am driven by a passion for solving complex problems and creating user-friendly applications. My goal is to become a lead software developer, guiding teams to build innovative and efficient solutions. I believe in collaboration, integrity, and continuous improvement, and strive to incorporate them into my work every day.</p>
                   <p className=" text-sm md:text-lg m-1 font-semibold" >My journey has taught me the value of persistence, effective communication, and adaptability. I am eager to bring my skills to a forward-thinking company where I can contribute to impactful projects and continue growing as a developer.</p>
                 </div>
            </div>

        )
    }

    export default PersonalDetails;