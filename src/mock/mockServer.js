import Mock from 'mockjs'
import mainData from './msite.json'
import categoryData from './category.json'

// 暴露首页的数据
Mock.mock('/mainpage',{code:0,data:mainData});
// 暴露分类页的数据
Mock.mock('/category',{code:0,data:categoryData});

// // 暴露商品接口: /shopgoods
// Mock.mock('/shopgoods',{code:0,data:apiData.goods} );

