
import { useQuery } from '@tanstack/react-query'
import MainBody from './MainBody'
import { fetchAllData } from '../api/testApi'

const Dashboard = () => {
  const{data,isLoading}= useQuery({
    queryKey:['testKey'],
    queryFn:()=> fetchAllData()
  })

  return (
    <div className='flex flex-col w-full px-2 md:px-4 lg:px-6 space-y-4'>
      { isLoading ? <div className="flex justify-center items-center min-h-[200px]">Loading ....</div> : <MainBody data={data}/>}
    </div>
  )
}

export default Dashboard