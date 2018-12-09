import {reqMainpage,reqCategory,reqSWtuijian10,reqSWtuijianmore} from '@/api'
import {MAIN_PAGE,CATEGORY,SWTUIJIAN10,SWTUIJIANMORE} from './mutation-type'

export default{
  //1.商家信息<br/>
  async getMainPage({commit}){
    const result= await reqMainpage();
    if(result.code===0){
      const mainData=result.data;
      commit(MAIN_PAGE,{mainData});
    }
  },
  //2分类页的数据<br/>
  async getCategory({commit}){
    const result= await reqCategory();
    if(result.code===0){
      const categoryData=result.data;
      commit(CATEGORY,{categoryData});
    }
  },
  //3、获取识物的数据，（默认加载10条）
  async getSWtuijian10({commit}){
    const result= await reqSWtuijian10();
    if(Number(result.code)===200){
      const data=result.data;
      commit(SWTUIJIAN10,{data});
    }
  },

  //3、获取识物的数据，（默认加载10条）
  async getSWtuijianMore({commit},{callback,page}){

    const result= await reqSWtuijianmore(page);
    if(Number(result.code)===200){
      const data=result.data;
      commit(SWTUIJIANMORE,{data});
      callback&&callback();
    }
  },

//5、保存用户信息<br/>
  getUserInfo({commit},user){
    commit(SAVE_USER,user);
  },

//9、实现自动登录，获取当前用户的异步action<br/>
  async getUserinfo({commit}){
    const result= await reqUserinfo();
    if(result.code===0){
      const user=result.data;
      commit(SAVE_USER,user);
    }
  },

//10.用户退出登录<br/>
  async getlogOut({commit}){
    const result= await reqLogout();
    if(result.code===0){
      commit(RESET_USER);
    }
  },
}

