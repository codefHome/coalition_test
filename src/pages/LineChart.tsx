import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Divider, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, } from 'recharts';
import { UpArrow } from '../assets/icons/UpArrow';
import DropDownField from '../sharedcomponent/DropDownField';
import { DownArrow } from '../assets/icons/DownArrow';

interface ChartProps{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chartData:any[]
}

const MyLineChart = ({chartData}:ChartProps) => {
  return (
    <div className='flex gap-3'>
        <div className='flex flex-col'>
           <span className='flex w-full justify-between items-center px-8'>
           <Typography >Blood Pressure</Typography>
           <DropDownField/>
           </span>
        <LineChart width={526} height={298} data={chartData}>
      <XAxis dataKey="date" />
      <YAxis />
      <CartesianGrid strokeDasharray="" vertical={false} />
      <Tooltip />
      <Line type="monotone" dataKey="diastolic" stroke="#C26EB4" />
      <Line type="monotone" dataKey="systolic" stroke="#8C6FE6" />
    </LineChart>
        </div>
  
    <div className='flex flex-col mt-6 ml-4 gap-3'>
        <span className='flex items-center'>
        <FiberManualRecordIcon sx={{color:'#C26EB4',width:'14px',height:'14px'}}/>
        <Typography>Systolic</Typography>
        </span>
        <Typography>
            160
        </Typography>
        <span className='flex gap-1 items-center'>
       <UpArrow/>
       <Typography>Higher than Average</Typography>
       </span>
<Divider sx={{height:'1px', width:'208px',my:'20px'}}/>
<span className='flex items-center'>
        <FiberManualRecordIcon sx={{color:'#8C6FE6',width:'14px',height:'14px'}}/>
        <Typography>Diastolic</Typography>
        </span>
        <Typography>
            78
        </Typography>
       <span className='flex gap-1  items-center'>
       <DownArrow/>
       <Typography>Lower than Average</Typography>
       </span>
    </div>
    </div>
  
  );
};

export default MyLineChart;