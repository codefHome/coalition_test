
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';


interface ChartDataType{
  name:string;
  description:string;
  status:string
}

interface DiagnosticListTableProps{
  diagonsticData:ChartDataType[]
}
export default function DiagnosticListTable({diagonsticData}:DiagnosticListTableProps) {
 const[chartData,setChartData]=useState<ChartDataType[]>(diagonsticData)
 useEffect(() =>{
  setChartData(diagonsticData)
 },[diagonsticData])
 console.log({chartData})
  return (
    <TableContainer className='overflow-y-auto scrollbar'>
      <Table stickyHeader sx={{
          '& thead th:first-child': {
            borderTopLeftRadius: '15px',
            borderBottomLeftRadius: '15px',
          },
          '& thead th:last-child': {
            borderTopRightRadius: '15px',
            borderBottomRightRadius: '15px',
          },
          '& thead th': {
            backgroundColor: '#f5f5f5',
            border:'none'
          },
          '& tbody td, & tbody th': {
            border: 'none',
          },
         
        }}
        aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Problem/Diagnosis</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Status</TableCell>
           
          </TableRow>
        </TableHead>

        <TableBody  >
          
            {chartData?.map((row) => (
            <TableRow
              key={row?.name}
            
            >
              <TableCell  scope="row">
                {row?.name}
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
           
            </TableRow>
          ))}
       
         
        </TableBody>
      </Table>
   
    </TableContainer>
  );
}
