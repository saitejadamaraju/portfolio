import infosys from "../assets/infosys.svg"
const Work = () =>
    {
        return (
            <div className="text-white m-2">
                <div className="flex">
                    <h2 className="text-3xl font-extrabold m-1">Experience</h2>
                </div>
                <div className="h-[350px] px-8 md:px-14 py-2 bg-gray-700 rounded-md overflow-auto my-2">
                    <div className="bg-gray-800 p-2 rounded-md">
                        <a className="cursor-pointer" target="_blank" href="https://www.infosys.com/"><img className="h-[20px]" src={infosys}></img></a>
                        <span className="text-lg font-bold">senior systems engineer</span>
                        <div className="text-xs font-semibold flex space-x-2">
                            <span>August 2021 - Present | Fulltime | Hybrid </span>
                        </div>
                    </div>
                    <div className="font-semibold">
                        <ul className="py-4 space-y-4 md:space-y-0">
                            <li>- Worked as a “Full-stack Developer” to develop and enhance functionalities in the Infrastructure Management Project.</li>
                            <li>- Designed and developed robust web APIs using Java, ensuring seamless communication between various system components.</li>
                            <li>- Utilized PostgreSQL for database management, implementing efficient data storage and retrieval mechanisms to enhance system performance.</li>
                            <li>- Automated solutions for critical operational workflows, including database patching and new user onboarding processes, resulting in a 80% reduction in manual efforts for database patching and a 40% reduction for new user onboarding.</li>
                            <li>- Designed intuitive dashboards within monitoring applications to showcase real-time alerts from diverse sources, increasing user comprehension by 30% through enhanced visibility of alert origins and volume.</li>
                            <li>- Developed a user-friendly report generation feature allowing users to download data from dashboards with customizable filters, streamlining the data retrieval process and improving efficiency by 40%.</li>
                            <li>- Actively involved in the maintenance of the application, undertaking responsibility for debugging and resolving production issues to ensure seamless and uninterrupted processing.</li>
                            <li>- Collaborated effectively with cross-functional teams to understand and incorporate specific client requirements into deliverables, ensuring alignment with business needs.</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

export default Work;