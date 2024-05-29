import { Typography } from "@mui/material";
import { ReactNode } from "react";

interface PatientDetainMinCardProps{
    icon:ReactNode;
    label:string;
    birthDate:string;
    
}
const PatientDetainMinCard = ({icon,label,birthDate}:PatientDetainMinCardProps) => {
  return (
    <div className="flex gap-4">
        {icon}
        <span className='flex flex-col'>
            <Typography>{label}</Typography>
            <Typography>{birthDate}</Typography>
        </span>
    </div>
  )
}

export default PatientDetainMinCard