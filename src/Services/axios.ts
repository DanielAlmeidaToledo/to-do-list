import axios from "axios";
import { apiURL } from "../Helpers/globals";

export const api = axios.create({
    baseURL: apiURL,
    headers: {
        "Content-Type": "application/json",
    },
});
