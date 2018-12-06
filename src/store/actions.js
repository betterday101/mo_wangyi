import {reqMainpage} from '@/api'
import {MAIN_PAGE} from './mutation-type'

export default{
  //商家信息<br/>
  async getMainPage({commit}){
    const result= await reqMainpage();
    if(result.code===0){
      const mainData=result.data;
      commit(MAIN_PAGE,{mainData});
    }
  },
}
