import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers:{
        Authorization: 'Client-ID eLgexCbZqCEvsDtFCErOkbsFcf-8C3BZWDSrELo9JZo'
    }
})