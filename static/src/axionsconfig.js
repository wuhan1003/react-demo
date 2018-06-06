import React from 'react';
import axios from 'axios';
const axiosConfig = axios.interceptors.request.use(
    config=>{console.log(config);
    return config;  //不加这句会报错
},
    err=>Promise.reject(err)
);

export default axiosConfig;