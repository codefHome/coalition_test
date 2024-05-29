import { Button, } from '@mui/material'
import { BirthIcon } from '../assets/icons/BirthIcon'
import { GenderIcon } from '../assets/icons/GenderIcon'
import { InsuranceIcon } from '../assets/icons/InsuranceIcon'
import { PhoneIcon } from '../assets/icons/PhoneIcon'
import PatientDetainMinCard from '../sharedcomponent/PatientDetainMinCard'
import LabResultRow from '../sharedcomponent/LabResultRow'
import { convertDateFormat } from '../assets/utils/date'
interface PatientsDetailCardProps{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    activeData:any[]
}
const PatientsDetailCard = ({activeData}:PatientsDetailCardProps) => {
    const patientsDetail=[
        {label:'Date Of Birth', value:convertDateFormat(activeData[0]?.date_of_birth),icon:<BirthIcon/>},
        {label:'Gender', value:activeData[0]?.gender,icon:<GenderIcon/>},
        {label:'Contact Info', value:activeData[0]?.phone_number,icon:<PhoneIcon/>},
        {label:'Emergency Contacts', value:activeData[0]?.emergency_contact,icon:<PhoneIcon/>},
        {label:'Insurance Provider', value:activeData[0]?.insurance_type,icon:<InsuranceIcon/>},
    ]

  return (
    
   <div className='flex flex-col bg-[#F6F8FA]'>
     <div className='flex flex-col rounded-lg bg-white py-8 px-5'>
        <img src={activeData[0]?.profile_picture} alt='Jessica Taylor photo' width='150px' height='150px'/>
<text className='text-2xl font-bold mt-6 mb-8'>Jessica Taylor</text>
<div className='flex flex-col gap-6'>
    {patientsDetail?.map(item => (
        <PatientDetainMinCard label={item?.label}
         birthDate={item?.value}
         icon={item?.icon} />
    ))}
</div>
<Button sx={{textTransform:'none', px:'20px',py:'11px',bgcolor:'#01F0D0',borderRadius:'41px',mt:'40px'}}>Show All Information</Button>
    </div>
    <div className="flex flex-col bg-white  rounded-lg mt-8 p-5 h-[296px]">
<text className='text-2xl font-bold mb-4'>
   Lab Results 
</text>
<div className='flex flex-col gap-6 overflow-y-auto scrollbar'>
{activeData[0]?.lab_results?.map((name:string) => (
    <LabResultRow name={name}/>
))}
</div>
    </div>
   </div>
  )
}

export default PatientsDetailCard