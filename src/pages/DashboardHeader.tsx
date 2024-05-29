
import testLog from '../assets/TestLogo.svg'
import { HomeIcon } from '../assets/icons/HomeIcon'
import TitleWithIcon from '../sharedcomponent/TitleWithIcon'
import seniorWoman from '../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png'
import { Divider, Typography } from '@mui/material'
import { SettingIcon } from '../assets/icons/SettingIcon'

import { VerticalDotIcon } from '../assets/icons/VerticalDot'
const DashboardHeader = () => {
    const headers=[
        {title:"Overview", icon:<HomeIcon/>},
        {title:"Patients", icon:<HomeIcon/>},
        {title:"Schedule", icon:<HomeIcon/>},
        {title:"Message", icon:<HomeIcon/>},
        {title:"Transaction", icon:<HomeIcon/>},
    ]
  return (
   
<div className="flex w-full flex-wrap justify-between items-center rounded-[41px]  pl-5 py-[10px] bg-white mt-[23px]">
    <img  className='' src={testLog} alt='Test Logo' width='211px' height='48px'/>
    <div className='flex justify-between'>
        <div className='flex gap-[19px]'>
        {headers?.map(item => (
    <TitleWithIcon title={item.title} icon={item.icon} />
))}
        </div>

    </div>
    <div className='flex justify-center items-center gap-3 mr-2'>
        <img src={seniorWoman} alt='Senior Woman' width='44px' height='44px'/>
        <span className='flex flex-col ml-2'>
            <Typography>Dr.Jose Simmons</Typography>
            <Typography>General Practitioner </Typography>
           

        </span>
        <Divider orientation='vertical' sx={{w:'1px', height:'44px', margionX:'19px'}} />
        <span className='flex gap-3'>
            <SettingIcon/>
            <VerticalDotIcon/>
        </span>
    </div>
</div>

  
  )
}

export default DashboardHeader