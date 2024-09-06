import Skill from "./Skill";

const SkillsCard = ({ name,data }) => {
    return (
        <div className="h-[400px] w-[350px] bg-gray-800 m-1 rounded-md">
            <h2 className="text-lg font-bold m-1">{name}</h2>
            <div className="grid grid-cols-3 gap-4 m-1">
                {data.map((item) => (
                    <Skill key={item.id} detail={item} />
                ))}
            </div>
        </div>
    );
};

export default SkillsCard;
