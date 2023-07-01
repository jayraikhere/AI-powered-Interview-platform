import axios from "axios";
import { baseUrl } from "../Constants/baseUrl.js";

axios.defaults.withCredentials = true;

const API = axios.create({ baseURL: baseUrl, withcredentials: true });

API.interceptors.request.use((req) => {
    const token = JSON.parse(localStorage.getItem('profile'))?.token;
    if (token) {
        req.headers.authorization = `Bearer ${token}`;
    }

    return req;
});


export const signup = (formData) =>
    API.post("/user/signup", formData)
        .then((res) => {
            const data = res.data;
            localStorage.setItem('profile', JSON.stringify(data));
            return res.data;
        })
        .catch((err) => {
            return err.response.data;
        });

export const login = (formData) =>
    API.post("/user/login", formData)
        .then((res) => {
            const data = res.data;
            localStorage.setItem('profile', JSON.stringify(data));
            return res.data;
        })
        .catch((err) => {
            return err.response.data;
        });

export const Intro = (response) =>
        API.post("/Intro", response)
            .then((res) => {
                const data = res.data;
                return res.data;
            })
            .catch((err) => {
                return err.response.data;
            });

