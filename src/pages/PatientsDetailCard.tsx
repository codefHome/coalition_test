import { Button, } from '@mui/material'
import { BirthIcon } from '../assets/icons/BirthIcon'
import { GenderIcon } from '../assets/icons/GenderIcon'
import { InsuranceIcon } from '../assets/icons/InsuranceIcon'
import { PhoneIcon } from '../assets/icons/PhoneIcon'
import PatientDetainMinCard from '../sharedcomponent/PatientDetainMinCard'
import LabResultRow from '../sharedcomponent/LabResultRow'
import { convertDateFormat } from '../assets/utils/date'
import { useState } from 'react'
interface PatientsDetailCardProps{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    activeData:any[]
}
const PatientsDetailCard = ({activeData}:PatientsDetailCardProps) => {
    const [showAll, setShowAll] = useState(false)
    const patientData = activeData?.[0] || {}
    const patientsDetail=[
        {label:'Date of Birth', value:convertDateFormat(patientData?.date_of_birth) || 'N/A', icon:<BirthIcon/>},
        {label:'Gender', value:patientData?.gender || 'N/A', icon:<GenderIcon/>},
        {label:'Phone Number', value:patientData?.phone_number || 'N/A', icon:<PhoneIcon/>},
        {label:'Insurance', value:patientData?.insurance || 'N/A', icon:<InsuranceIcon/>},
    ]
    const allPatientsDetail = [
        ...patientsDetail,
        {label:'Blood Type', value:patientData?.blood_type || 'N/A', icon:<BirthIcon/>},
        {label:'Allergies', value:patientData?.allergies?.join(', ') || 'None', icon:<GenderIcon/>},
        {label:'Medical History', value:patientData?.medical_history?.join(', ') || 'None', icon:<PhoneIcon/>},
        {label:'Current Medications', value:patientData?.current_medications?.join(', ') || 'None', icon:<PhoneIcon/>},
        {label:'Primary Care Doctor', value:patientData?.primary_care_doctor || 'N/A', icon:<InsuranceIcon/>},
    ]
    const displayedDetails = showAll ? allPatientsDetail : patientsDetail
    return (
        <div className='flex flex-col'>
            <div className='flex flex-col bg-[#F6F8FA]'>
                <div className='flex flex-col rounded-lg bg-white py-8 px-5'>
                    <img src={patientData?.profile_picture} alt={`${patientData?.name || 'Patient'} photo`} width='150px' height='150px'/>
                    <text className='text-2xl font-bold mt-6 mb-8'>{patientData?.name || 'N/A'}</text>
                    <div className='flex flex-col gap-6'>
                        {displayedDetails?.map(item => (
                            <PatientDetainMinCard 
                                key={item.label}
                                label={item?.label}
                                birthDate={item?.value}
                                icon={item?.icon} 
                            />
                        ))}
                    </div>
                    <Button 
                        onClick={() => setShowAll(!showAll)}
                        sx={{textTransform:'none', px:'20px',py:'11px',bgcolor:'#01F0D0',borderRadius:'41px',mt:'40px'}}
                    >
                        {showAll ? 'Show Less Information' : 'Show All Information'}
                    </Button>
                </div>
            </div>
            <div className="flex flex-col bg-white rounded-lg mt-8 p-5 h-[296px]">
                <text className='text-2xl font-bold mb-4'>
                    Lab Results 
                </text>
                <div className='flex flex-col gap-6 overflow-y-auto scrollbar'>
                    {patientData?.lab_results?.map((item:any) => (
                        <LabResultRow key={item} name={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PatientsDetailCard