import Vue from 'vue'

// @param {[type]} id [数据id]
// @param {[Function]} callback [回调参数]
// @return {[type]} [返回类型]
//焦点图
let portUrl = "https://h5php.xingyuanauto.com/FlowProject/food/public/index.php/port/";
const GetFocus = (callback) =>{
    if(sessionStorage.getItem('GetFocus')){
        var data = JSON.parse(sessionStorage.getItem('GetFocus'));
        callback && callback(data)
    }else{
        let url = portUrl+"food/GetFocus";
        Vue.http.get(url).then(response => response.json()).then(num => {
            if(num.code==1001){
                sessionStorage.setItem('GetFocus',JSON.stringify(num.data));
                callback && callback(num.data)
            }else{
                alert("查询失败")
            }
        })
    }
}
//今日列表
const Recommend = (callback) =>{
    if(sessionStorage.getItem('Recommend')){
        var data = JSON.parse(sessionStorage.getItem('Recommend'));
        callback && callback(data)
    }else{
        let url = portUrl+"food/Recommend";
        Vue.http.get(url).then(response => response.json()).then(num => {
            if(num.code==1001){
                sessionStorage.setItem('Recommend',JSON.stringify(num.data));
                callback && callback(num.data)
            }else{
                alert("查询失败")
            }
        })
    }
}

//分类列表
const classList = (callback) =>{
    // console.log(666,sessionStorage.getItem('classList'))
    if(sessionStorage.getItem('classList')){
        var data = JSON.parse(sessionStorage.getItem('classList'));
        callback && callback(data)
    }else{
        let url = portUrl+"food/class_list";
        Vue.http.get(url).then(response => response.json()).then(num => {
            // console.log(num);
            if(num.code==1001){
                sessionStorage.setItem('classList',JSON.stringify(num.data));
                callback && callback(num.data)
            }else{
                alert("查询失败")
            }
        })
    }

}

//最新菜谱--首页
const IndexShowList = (pageId,callback) =>{
    // console.log(pageId);
    if(sessionStorage.getItem('IndexShowList')){
        var data = JSON.parse(sessionStorage.getItem('IndexShowList'));
        callback && callback(data)
    }else{
        let url = portUrl + "food/IndexShowList?pageId="+pageId;
        Vue.http.get(url).then(response => response.json()).then(num => {
            if(num.code==1001){
                sessionStorage.setItem('IndexShowList',JSON.stringify(num.data));
                callback && callback(num.data)
            }else{
                alert("查询失败")
            }
        })
    }
}
//根据分类，关键字查询菜谱
const searchShowList = (pageId,name,classId,callback) =>{
    // console.log(pageId);
    if(classId!=''||name!=''){
        var url = portUrl + "food/show_list?pageId="+pageId+"&class_id="+classId+"&name="+name;
    }else{
        var url = portUrl + "food/IndexShowList?pageId="+pageId;
    }
    Vue.http.get(url).then(response => response.json()).then(num => {
        // if(num.code==1001){
            callback && callback(num)
        // }else{
        //     alert("查询失败")
        // }
    })
}
//菜单详情
const FoodInfoData = (foodId,callback) =>{
    let url = portUrl + "food/FoodInfoData?id="+foodId;
    Vue.http.get(url).then(response => response.json()).then(num => {
        // console.log(num);
        if(num.code==1001){
            callback && callback(num.data)
        }else{
            alert("查询失败")
        }
    })
}

export  {GetFocus,Recommend,IndexShowList,classList,searchShowList,FoodInfoData}
