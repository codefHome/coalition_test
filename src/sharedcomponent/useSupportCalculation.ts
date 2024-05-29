/* eslint-disable @typescript-eslint/no-explicit-any */

const useCalculation = (activeData:any[]) =>{

    const tempData = activeData[0].diagnosis_history.map((diagnosis:any) => {
        return diagnosis?.temperature?.value;
      });
      
      const averageTemperature = (tempData.reduce((a:number, b:number) => {
        return a + b;
      }, 0) / tempData.length).toFixed(2);
      const resipData = activeData[0].diagnosis_history.map((diagnosis:any) => {
        return diagnosis?.respiratory_rate?.value;
      });
      
      const averageResip = (resipData.reduce((a:number, b:number) => {
        return a + b;
      }, 0) / resipData.length).toFixed(2);
      const heartData = activeData[0].diagnosis_history.map((diagnosis:any) => {
        return diagnosis?.heart_rate?.value;
      });
      
      const averageHeart = (heartData.reduce((a:number, b:number) => {
        return a + b;
      }, 0) / heartData.length).toFixed(2);
    return{
averageTemperature,
averageResip,
averageHeart

    }
}
export default useCalculation