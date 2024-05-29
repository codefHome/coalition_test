import httpClient from "./baseUrl"

export const fetchAllData = async () =>{
    try{
        const response = await httpClient.get('/');
        return response.data;
    }catch(error){
        return error
    }
}