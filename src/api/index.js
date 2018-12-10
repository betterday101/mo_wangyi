import Ajax from './ajax'

const BASE="163";
const BASEApi="api";
// 1、获取首页mainpage的数据
export const reqMainpage =()=> Ajax(`/mainpage`)

// 2、获取分类页的数据
export const reqCategory =(currentIndex)=> Ajax(`/category`,currentIndex)

// 3、获取识物的数据，（默认加载10条）
export const reqSWtuijian10 =()=> Ajax(BASE+`/topic/v1/find/recManual.json`)

export const reqSWtuijianmore =(page)=> Ajax(BASE+`/topic/v1/find/recAuto.json?page=${page}&size=5&exceptIds=5507,5286,4746,4745,5213,5252,518,5446,5288,4037,4035,4210,5339,4635,4640,3583,3860,4040,3438,4648,4489,4364,4513,2747,3882,4168,3773`)

// 6、用户名密码登陆<br/>
export const reqLoginPwd =({name,pwd,captcha})=> Ajax(BASEApi+'/login_pwd',{name,pwd,captcha},"POST")

// 7、发送短信验证码<br/>
export const reqSendCode =(phone)=> Ajax(BASEApi+'/sendcode',{phone})

// 8、手机号验证码登陆<br/>
export const reqLoginSms =(phone,code)=> Ajax(BASEApi+'/login_sms',{phone,code},"POST")

// 9、根据会话获取用户信息<br/>
export const reqUserinfo =()=> Ajax(BASEApi+'/userinfo');

// 10、用户登出<br/>
export const reqLogout =()=> Ajax(BASEApi+'/logout');
