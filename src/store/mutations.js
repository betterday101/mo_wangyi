import {MAIN_PAGE, CATEGORY, SWTUIJIAN10, SWTUIJIANMORE,RESET_USER,SAVE_USER} from "./mutation-type";
export default{
    //1.获取首页数据
    [MAIN_PAGE](state,{mainData}){
      state.mainPage=mainData;
    },
   //2.获取分类页数据
    [CATEGORY](state,{categoryData}){
      state.category=categoryData;
    },

    //3、获取识物的数据，（默认加载10条）
    [SWTUIJIAN10](state,{data}){
      state.swtuijian10=data;
    },

    //4、获取更多识物的数据
    [SWTUIJIANMORE](state,{data}){
      state.swtuijianmore.hasMore=data.hasMore;
      // data.result=data.result.filter((itemone)=>{
      //  return itemone.topics=itemone.topics.filter(()=>{
      //       return itemone!==null
      //     });
      // })
      if(!state.swtuijianmore.result)
      {
         state.swtuijianmore.result=data.result
      }else{
        // state.swtuijianmore.result.push(...data.result);
        // state.swtuijianmore.result = [...state.swtuijianmore.result, ...data.result]
        state.swtuijianmore = {hasMore: data.hasMore, result: [...state.swtuijianmore.result, ...data.result]}
      }

    },

    [SAVE_USER](state,user){
      state.user=user;
    },
    [RESET_USER](state){
      state.user={};
    },

}
