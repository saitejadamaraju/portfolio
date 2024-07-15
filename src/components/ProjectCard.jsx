

// eslint-disable-next-line react/prop-types
const ProjectCard=({data})=>
    {
        // eslint-disable-next-line react/prop-types
        const {name,image,content,link} = data;
            console.log(name);
            return(
                 
                <div className="text-white bg-gray-700 h-[360px] w-[300px] flex flex-col items-center rounded-lg mx-auto my-2 ">
                    <img className=" w-full  rounded-lg" src={image} alt="confession-app"></img>
                    <p className="font-bold p-1 mx-1">{name}</p>
                    <p className="font-semibold p-1 mx-1">{content}</p>
                    <a target="_blank" href={link}><button className="py-1 px-1 font-semibold bg-white text-black m-1 rounded-md">check it out</button></a>
                </div>

            )
    }

    export default ProjectCard;