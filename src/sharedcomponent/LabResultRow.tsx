
import { DownloadIcon } from "../assets/icons/DownloadIcon"

interface LabResultRowProps{
    name:string;
}
const LabResultRow = ({name}:LabResultRowProps) => {
  return (
    <div className='flex justify-between items-center'>
        <text className="text-sm">{name}</text>
        <DownloadIcon/>
    </div>
  )
}

export default LabResultRow