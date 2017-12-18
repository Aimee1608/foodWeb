<template>
    <el-row>
        <el-col :span="24"  v-for="(item, index) in temHotFoodList" :key="index">
            <el-row :gutter="10"  class="smallImg">
                <el-col :span="4" >
                    <a :href="'#/Itemlist?foodId='+item.data[0].id" target="_blank"><img class="fitImg" :src="item.data[0].img" alt=""></a>
                </el-col>
                <el-col :span="8">
                    <p>{{listName[index]}}<a :href="'#/Foodlist?keywords='+listName[index]" target="_blank">更多>></a></p>
                </el-col>
                <el-col :span="4" v-for="(ditem,i) in item.data" :key="ditem.id" v-if="i<=2&&i<item.data.length-1?true:false">
                    <a :href="'#/Itemlist?foodId='+item.data[i+1].id" target="_blank"><img class="fitImg" :src="item.data[i+1].img" alt=""></a>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
import {searchShowList} from '../../pubJS/server.js'
    export default {
        data() { //选项 / 数据
            return {
                listName:[
                    '麻辣香锅',
                    '鱼',
                    '排骨'
                ],
                temHotFoodList:[],//最新列表
            }
        },
        methods: { //事件处理器
            getHotFoodList:function(){
                if(this.listName.length>0){
                    for(var i=0;i<this.listName.length;i++){
                        var fname = this.listName[i];
                        // console.log(fname);
                        searchShowList(0,fname,'',(result)=>{
                                if(result.code==1001){
                                    // console.log(fname);
                                    this.temHotFoodList = this.temHotFoodList.concat({name:fname,data:result.data});
                                    // console.log(this.temHotFoodList)
                                }
                        })
                    }
                }
            }
        },
        components: { //定义组件

        },
        created() { //生命周期函数
            this.getHotFoodList();
        }
    }
</script>

<style>
.smallImg {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #e4e4e4;
}
.smallImg .el-col{
    height:100px;
}
.smallImg .el-col p a{
    margin-left:10px;
}
.smallImg .el-col p a:hover{
    text-decoration: underline;
}
</style>
