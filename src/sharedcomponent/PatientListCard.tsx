import { Typography } from "@mui/material";
import HorizonDotIcon from "../assets/icons/HorizonDot";

interface PatientListCardProps {
  alt: string;
  src: string;
  name: string;
  age: number;
  gender: string;
  handleClick:(name:string) => void;
}
const PatientListCard = ({
  alt,
  src,
  name,
  age,
  gender,
  handleClick
}: PatientListCardProps) => {
  return (
    <div className="flex justify-between cursor-pointer" onClick={() =>handleClick(name)}>
      <div className="flex">
        <img src={src} alt={alt} width="48px" height="48px" className="rounded-[50%]" />
        <span className="flex flex-col ml-3">
          <Typography>{name}</Typography>
          <Typography>
            {gender}, {age}
          </Typography>
        </span>
      </div>
      <HorizonDotIcon />
    </div>
  );
};

export default PatientListCard;
