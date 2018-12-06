import axios from "axios";

export default function ajax(url,data={},method="GET"){
  //设置get请求
 return  new Promise((resolve,reject)=>{
   let promise;
   if(method==="GET"){
     let queryUrl="";
     // Object.keys(data).forEach(item=>{
     //   queryUrl+=`${key}=${data[key]}&`
     // });
     //reduce
     queryUrl= Object.keys(data).reduce((pre,key)=>{return pre+=`${key}=${data[key]}&`},"");
     if(queryUrl){
       queryUrl=queryUrl.substring(0,queryUrl.length-1);
       url+="?"+queryUrl;
     }
     promise= axios.get(url);
   }
   else{
     //设置post请求
     promise=axios.post(url,data);
   }
   promise.then((response)=>{
       resolve(response.data);
   }).catch(e=>{
       reject(e)
   })

 })
}

