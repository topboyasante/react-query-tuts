import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:4000",
});

export const request = ({...options}) => {
    client.defaults.headers.common.Authorization = `Bearer token` // bearer token, fetch from localstorage
    const onSuccess = response => response
    const onError = error =>{
        return error
    }
    return client(options).then(onSuccess).catch(onError)
};
