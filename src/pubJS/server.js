import Vue from 'vue'

// @param {[type]} id [数据id]
// @param {[Function]} callback [回调参数]
// @return {[type]} [返回类型]
//焦点图
const GetFocus = (callback) =>{
    let url = "https://h5php.xingyuanauto.com/food/public/index.php/port/food/GetFocus";
    Vue.http.get(url).then(response => response.json()).then(num => {
        if(num.code==1001){
            callback && callback(num.data)
        }else{
            alert("查询失败")
        }
    })
}
//今日列表
const Recommend = (callback) =>{
    let url = "https://h5php.xingyuanauto.com/food/public/index.php/port/food/Recommend";
    Vue.http.get(url).then(response => response.json()).then(num => {
        if(num.code==1001){
            callback && callback(num.data)
        }else{
            alert("查询失败")
        }
    })
}

//分类列表
const classList = (callback) =>{
    let url = "https://h5php.xingyuanauto.com/food/public/index.php/port/food/class_list";
    Vue.http.get(url).then(response => response.json()).then(num => {
        // console.log(num);
        if(num.code==1001){
            callback && callback(num.data)
        }else{
            alert("查询失败")
        }
    })
}
//最新菜谱
const IndexShowList = (pageId,callback) =>{
    // console.log(pageId);
    let url = "https://h5php.xingyuanauto.com/food/public/index.php/port/food/IndexShowList?pageId="+pageId;
    Vue.http.get(url).then(response => response.json()).then(num => {

        if(num.code==1001){
            callback && callback(num.data)
        }else{
            alert("查询失败")
        }
    })
}
//根据分类，关键字查询菜谱
const searchShowList = (pageId,name,classId,callback) =>{
    // console.log(pageId);
    if(classId!=''||name!=''){
        var url = "https://h5php.xingyuanauto.com/food/public/index.php/port/food/show_list?pageId="+pageId+"&class_id="+classId+"&name="+name;
    }else{
        var url = "https://h5php.xingyuanauto.com/food/public/index.php/port/food/IndexShowList?pageId="+pageId;
    }
    Vue.http.get(url).then(response => response.json()).then(num => {
        // if(num.code==1001){
            callback && callback(num)
        // }else{
        //     alert("查询失败")
        // }
    })
}

export  {GetFocus,Recommend,IndexShowList,classList,searchShowList}
