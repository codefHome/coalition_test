import { Typography } from "@mui/material";
import { ReactNode } from "react";

interface TitleWithIconProps{
  
    icon:ReactNode;
    title:string;
}
const TitleWithIcon = ({icon,title}:TitleWithIconProps) => {
  return (
    <div className='flex gap-[9px] py-3 px-4 rounded-[41px] hover:bg-[#01F0D0] cursor-pointer'>
{icon}
<Typography>{title}</Typography>
    </div>
  )
}

export default TitleWithIcon