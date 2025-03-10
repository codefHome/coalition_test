/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography } from "@mui/material";
import { SearchIcon } from "../assets/icons/SearchIcon";
// import emily from '../assets/Layer 8.png'
import PatientListCard from "../sharedcomponent/PatientListCard";
import MyLineChart from "./LineChart";
import { HeartBPMIcon } from "../assets/icons/HeartBPMIcon";
import { TemperatureIcon } from "../assets/icons/TemperatureIcon";
import { RespiratoryIcon } from "../assets/icons/RespiratoryIcon";
import DiagnosisHistoryCard from "../sharedcomponent/DiagnosisHistoryCard";
import DiagnosticListTable from "./DiagnosticListTable";
import PatientsDetailCard from "./PatientsDetailCard";
import { useEffect, useState } from "react";
import useCalculation from "../sharedcomponent/useSupportCalculation";
interface MainBodyProps {
  data: any[];
  // initialData:any[]
}

const MainBody = ({ data }: MainBodyProps) => {
  const initialData = data[0];
  const [activeData, setActiveData] = useState<any[]>([initialData]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const filtered = data?.filter(item =>
      item?.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchQuery, data]);
  const [chartData, setChartData] = useState<any[]>(
    initialData?.diagnosis_history?.map((singleData: any) => ({
      date: `${singleData?.month.split("").splice(0, 3).join("")}, ${
        singleData?.year
      }`,
      diastolic: singleData?.blood_pressure?.diastolic?.value,
      systolic: singleData?.blood_pressure?.systolic?.value,
    }))
  );

  const handleClick = (name: string) => {
    setActiveData(data?.filter((item) => item?.name === name));
    setChartData(
      data
        ?.filter((item) => item?.name === name)[0]
        ?.diagnosis_history?.map((singleData: any) => ({
          date: `${singleData?.month.split("").splice(0, 3).join("")}, ${
            singleData?.year
          }`,
          diastolic: singleData?.blood_pressure?.diastolic?.value,
          systolic: singleData?.blood_pressure?.systolic?.value,
        }))
    );
  };
  const { averageTemperature, averageResip, averageHeart } =
    useCalculation(activeData);
console.log({activeData})
  const diagnosisHistory = [
    {
      title: "Respiratory Rate",
      value: `${averageResip} bpm`,
      status: "Normal",
      boxColor: true,
      needStatusIcon: false,
      icon: <RespiratoryIcon />,
      needF: false,
    },
    {
      title: "Temperature",
      value: `${averageTemperature}`,
      status: "Normal",
      boxColor: false,
      needStatusIcon: false,
      icon: <TemperatureIcon />,
      needF: true,
    },
    {
      title: "Heart Rate",
      value: `${averageHeart} bpm`,
      status: "Lower than Average",
      boxColor: false,
      needStatusIcon: true,
      icon: <HeartBPMIcon />,
      needF: false,
    },
  ];



  return (
    <div className="flex flex-col lg:flex-row gap-4 mt-8">
      <div className="flex flex-col w-full lg:w-1/5 bg-white rounded-md p-5">
        <div className="flex w-full  items-center">
          <Typography className="">Patients</Typography>
          <div className="flex w-full relative">
            <input
              type="text"
              placeholder="Search patients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3 ml-2 py-1 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-[#01F0D0] pr-8"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[35px] mt-[43px] overflow-y-auto scrollbar h-[400px] lg:h-[1000px]">
          {filteredData?.map((item) => (
            <PatientListCard
              handleClick={() => handleClick(item?.name)}
              src={item?.profile_picture}
              name={item?.name}
              age={item?.age}
              gender={item?.gender}
              alt="Patient photo"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-3/5">
        <div className="flex flex-col w-full bg-white rounded-lg p-5">
          <Typography>Diagnosis History</Typography>
          <div className="flex flex-col bg-[#F4F0FE] mt-3 rounded-md">
            <MyLineChart chartData={chartData} />
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-[21px] mt-5">
            {diagnosisHistory?.map((item) => (
              <DiagnosisHistoryCard
                boxColor={item?.boxColor}
                title={item?.title}
                value={item?.value}
                status={item?.status}
                icon={item?.icon}
                needStatusIcon={item?.needStatusIcon}
                needF={item?.needF}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col p-5 h-[349px] mb-2 rounded-lg opacity-1 bg-white mt-8">
          <text className="text-xl font-bold mb-10">Diagnostic List</text>
          <DiagnosticListTable
            diagonsticData={activeData[0]?.diagnostic_list ?? []}
          />
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-1/5">
        <PatientsDetailCard activeData={activeData} />
      </div>
    </div>
  );
};

export default MainBody;

