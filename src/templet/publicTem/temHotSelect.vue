<template>
    <el-row class="smallselectBox"  >
        <el-col :xs="6" :sm="4" :md="3" v-for="(item, index) in headclassList" :key="item.id">
            <a :href="'#/Foodlist?classId='+item.id" target="_blank">
                <img class="fitImg" src="src/img/logo.png" alt="">
                <p>{{item.class_name}}</p>
            </a>
        </el-col>
    </el-row>
</template>

<script>
import {classList} from '../../pubJS/server.js'
    export default {
        data() { //选项 / 数据
            return {
                headclassList:''
            }
        },
        methods: { //事件处理器

        },
        components: { //定义组件

        },
        created() { //生命周期函数
            classList((msg)=>{
                this.headclassList = msg[0].class_names.concat(msg[1].class_names)
                console.log(msg);
            })
        }
    }
</script>

<style>
.smallselectBox a{
    display: block;
}
.smallselectBox img{
    background:#fff;
}
.smallselectBox{
    background:#f4f0ec;
    padding:10px;
    box-sizing: border-box;
}
.smallselectBox .el-col{
    /*margin:10px 0;*/
    padding:10px;
}
 .smallselectBox p{
    text-align: center;
}
</style>
