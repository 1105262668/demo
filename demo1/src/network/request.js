import axios from 'axios'


export function request(config){
	const instance = axios.create({
		baseURL:'http://localhost:3000',
		timeOut:500,
		withCredentials: true
	});
	// instance.interceptors.request.use(config=>{
	// 	// 在发送请求之前做些什么
	// 	// config.headers= sessionStorage.getItem("token"); 
	// 	return config;
	// 	}, err=>{
	// 	// 对请求错误做些什么
	// 	return Promise.reject(err);
	// });
		
	// 	// 添加响应拦截器
	// instance.interceptors.response.use(res=>{
	// 	// 对响应数据做点什么
	// 	return response;
	// 	}, err=> {
	// 	// 对响应错误做点什么
	// 	return Promise.reject(err);
	// });

	return instance(config)
}



