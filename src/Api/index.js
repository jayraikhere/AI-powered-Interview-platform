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

export const editProfile = (formData,userId) =>
    API.patch(`/user/${userId}/edit`, formData)
        .then((res) => {
            // console.log(res.data);
            // const data = res.data;
            // localStorage.setItem('profile', data);
            // localStorage.setItem('profile', JSON.stringify(res.data.user));
            return res.data;
        })
        .catch((err) => {
            return err.response.data;
        });


export const Forgetpassword = (formData) =>
    API.post("/user/forgetpassword", formData)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err.response.data;
        });
export const resetpassword = (formData, token) =>
    API.post(`/user/resetpassword/${token}`, formData)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err.response.data;
        });

export const changePassword = (formData) =>
    API.post(`/user/changepassword`, formData)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err.response.data;
        });

export const getUser = (userId) =>
    API.get(`/user/${userId}`, userId)
        .then((res) => {
            // console.log(res.data);
            return res.data;
        })
        .catch((err) => {
            return err.response.data;
        });

export const publishUser = (userId, formData) =>
    API.post(`/user/${userId}/publish`, formData)
        .then((res) => {
            // console.log(res.data);
            return res.data;
            })
        .catch((err) => {
            return err.response.data;
        });

export const getPublishProfiles = () =>
    API.get("/getprofiles")
        .then((res) => {
            // console.log(res.data);
            return res.data;
            })
        .catch((err) => {
            return err.response.data;
        });