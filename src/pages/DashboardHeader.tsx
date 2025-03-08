
import testLog from '../assets/TestLogo.svg'
import { HomeIcon } from '../assets/icons/HomeIcon'
import TitleWithIcon from '../sharedcomponent/TitleWithIcon'
import seniorWoman from '../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png'
import { Divider, Typography, IconButton, Drawer } from '@mui/material'
import { SettingIcon } from '../assets/icons/SettingIcon'
import { VerticalDotIcon } from '../assets/icons/VerticalDot'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'

const DashboardHeader = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [mobileOpen, setMobileOpen] = useState(false)

    const headers=[
        {title:"Overview", icon:<HomeIcon/>},
        {title:"Patients", icon:<HomeIcon/>},
        {title:"Schedule", icon:<HomeIcon/>},
        {title:"Message", icon:<HomeIcon/>},
        {title:"Transaction", icon:<HomeIcon/>},
    ]

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const drawer = (
        <div className='p-4 space-y-4'>
            {headers.map(item => (
                <div
                    key={item.title.toLowerCase()}
                    onClick={() => {
                        navigate(`/${item.title.toLowerCase()}`)
                        handleDrawerToggle()
                    }}
                    className={`${location.pathname === `/${item.title.toLowerCase()}` ? 'bg-[#01F0D0]' : ''} whitespace-nowrap px-2 py-1 rounded-md`}
                >
                    <TitleWithIcon title={item.title} icon={item.icon} />
                </div>
            ))}
        </div>
    )

    return (
        <div className="flex w-full flex-wrap justify-between items-center rounded-[41px] pl-5 py-[10px] bg-white mt-[23px] md:flex-nowrap">
            <div className="flex justify-between w-full md:w-auto items-center">
                <img className='w-[150px] md:w-[211px]' src={testLog} alt='Test Logo'/>
                <span className='md:hidden mr-7'>
                <IconButton 
                    color="inherit"
                    aria-label="open drawer"
                    edge="end"
                    onClick={handleDrawerToggle}
                >
                    <MenuIcon />
                </IconButton>
                </span>
              
            </div>
            <div className='hidden md:flex gap-[10px] md:gap-[19px] overflow-x-auto'>
                {headers?.map(item => (
                    <div
                        key={item.title.toLowerCase()}
                        onClick={() => navigate(`/${item.title.toLowerCase()}`)}                
                        className={`${location.pathname === `/${item.title.toLowerCase()}` ? 'bg-[#01F0D0]' : ''} whitespace-nowrap px-2 py-1 rounded-md`}
                    >
                        <TitleWithIcon title={item.title} icon={item.icon} />
                    </div>
                ))}
            </div>
            <div className='flex justify-center items-center gap-3 mr-2 mt-2 md:mt-0'>
                <img src={seniorWoman} alt='Senior Woman' className='w-[35px] h-[35px] md:w-[44px] md:h-[44px]'/>
                <span className='flex flex-col ml-2'>
                    <Typography className='text-sm md:text-base'>Dr.Jose Simmons</Typography>
                    <Typography className='text-xs md:text-sm'>General Practitioner </Typography>
                </span>
                <Divider orientation='vertical' sx={{w:'1px', height:'44px', margionX:'19px'}} className='hidden md:block' />
                <span className='flex gap-3'>
                    <SettingIcon/>
                    <VerticalDotIcon/>
                </span>
            </div>
            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                }}
            >
                {drawer}
            </Drawer>
        </div>
    )
}

export default DashboardHeader