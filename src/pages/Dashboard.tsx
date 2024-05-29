
import { useQuery } from '@tanstack/react-query'
import DashboardHeader from './DashboardHeader'
import MainBody from './MainBody'
import { fetchAllData } from '../api/testApi'

const Dashboard = () => {
  const{data,isLoading}= useQuery({
    queryKey:['testKey'],
    queryFn:()=> fetchAllData()
  })

  
  return (
    <div className='flex flex-col w-full p-2'>
        <DashboardHeader/>

       { isLoading ? <div>Loading ....</div> : <MainBody data={data}/>}
    </div>
  )
}

export default Dashboard