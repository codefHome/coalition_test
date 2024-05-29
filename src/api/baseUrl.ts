import axios from 'axios'
import {Buffer} from 'buffer'
const userName=import.meta.env.VITE_USER_NAME;
const password=import.meta.env.VITE_PASSWORD;
const token=Buffer.from(`${userName}:${password}`,'utf-8').toString('base64')

const httpClient = axios.create({
    baseURL:'https://fedskillstest.coalitiontechnologies.workers.dev',
    headers:{
        Authorization:`Basic ${token}`
    }
})

export default httpClient