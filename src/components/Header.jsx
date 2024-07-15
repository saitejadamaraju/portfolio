import pic from "../assets/Dp.jpg"
import linkedin from "../assets/linkedin.svg"
import github from "../assets/github.svg"
import gmail from "../assets/gmail.png"

const Header = () =>
{

    return(
        <div className="h-[100px] md:h-[150px] mx-1 my-2 flex justify-between rounded-lg  bg-gray-700">
            {/* info */}
            <div className="w-9/12 flex flex-col justify-center text-white ml-10">
                <p className="md:text-2xl text-lg font-bold">Saiteja Damaraju</p>
                <div className="flex flex-col">
                    <div className="flex my-1">
                        <a className=" font-semibold  m-1" href="mailto:teja8065@gmail.com"><img className="h-[25px] md:h-[30px]" src={gmail} alt="linkedin"></img></a>
                        <a className=" font-semibold  m-1" target="_blank" href="https://www.linkedin.com/in/saiteja-damaraju-137b40200/"><img className="h-[25px] md:h-[30px]" src={linkedin} alt="linkedin"></img></a>
                        <a className=" font-semibold  m-1" target="_blank" href="https://github.com/saitejadamaraju"><img className="h-[25px] md:h-[30px]"src={github} alt="github"></img></a>
                    </div>
                    <div className="">
                        <a className="underline" target="_blank" href="https://drive.google.com/file/d/1tnry0Pesp5AyI7Ubb9K39KittKl4aRU6/view?usp=drive_link">Resume</a>
                    </div>
                </div>
            </div>

            {/* photo */}
            <div className='w-3/12 flex justify-center items-center'>
                <img className="mr-2 h-[75px] md:h-[120px] rounded border-2 border-black" src={pic} alt="Profile Pic"></img>
            </div>
      </div>    
    )
}

export default Header;