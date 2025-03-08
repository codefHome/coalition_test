
import { DownloadIcon } from "../assets/icons/DownloadIcon"

interface LabResultRowProps{
    name:string;
}
const LabResultRow = ({name}:LabResultRowProps) => {
  const handleDownload = () => {
    const content = `Lab Result: ${name}\nDate: ${new Date().toLocaleDateString()}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${name.toLowerCase().replace(/\s+/g, '_')}_lab_result.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className='flex justify-between items-center'>
        <text className="text-sm">{name}</text>
        <div onClick={handleDownload} className="cursor-pointer">
          <DownloadIcon/>
        </div>
    </div>
  )
}

export default LabResultRow