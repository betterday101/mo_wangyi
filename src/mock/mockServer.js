import Mock from 'mockjs'
import mainData from './msite.json'


Mock.mock('/mainpage',{code:0,data:mainData});

// // 暴露评价接口: /shopratingsapiData.
// Mock.mock('/shopratings',{code:0,data:apiData.ratings});
// // 暴露商品接口: /shopgoods
// Mock.mock('/shopgoods',{code:0,data:apiData.goods} );

