import { Typography } from "@mui/material";
import { ReactNode } from "react";
import { DownArrow } from "../assets/icons/DownArrow";

interface DiagnosisHistoryCardProps{
    boxColor:boolean;
    icon:ReactNode;
    title:string;
    value:string;
    status?:string;
    needStatusIcon?:boolean;
    needF:boolean;
}

const DiagnosisHistoryCard = ({boxColor=false,needF,icon,title,value,status='Normal',needStatusIcon=false}:DiagnosisHistoryCardProps) => {

  return (
    <div className={`flex flex-col w-[228px] h-[242px] p-4 ${boxColor ? 'bg-[#E0F3FA]' : 'bg-[#FFE6E9]'}  rounded-lg border`}>
<span className="mb-4">{icon}</span>
<Typography>{title}</Typography>

{!needF ?  <text className="text-18 font-bold mb-[17px]">{value}</text> : <text className="text-18 font-bold mb-[17px]">{value}&deg;F</text>  }
<span className='flex gap-1 items-center'>
    {needStatusIcon && <DownArrow/>}
<Typography>{status}</Typography>
</span>

    </div>
  )
}

export default DiagnosisHistoryCard