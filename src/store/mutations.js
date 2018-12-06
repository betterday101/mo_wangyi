import {MAIN_PAGE} from "./mutation-type";
export default{

    [MAIN_PAGE](state,{mainData}){
      state.mainPage=mainData;
    },


}
