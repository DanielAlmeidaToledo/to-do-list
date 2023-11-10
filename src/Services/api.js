import axios from 'axios'
import { apiURL } from '../Helpers/globals'

export default axios.create({
    baseURL: apiURL
})