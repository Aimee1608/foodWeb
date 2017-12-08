<template lang="html">
    <div  class="">
        <wbc-nav ></wbc-nav>
        <div class="container">
            <el-row  :gutter="30">
                <el-col :xs="24" :sm="16" class="recinfo" v-if="detailsList!=''?true:false">
                    <div class="bokpic">
                        <img :src="detailsList.img" alt="" class="fitImg">
                    </div>
                    <h1>{{detailsList.name}}</h1>
                    <div class="falisc">
                        <span>{{detailsList.click}}</span>浏览
                        <span>{{detailsList.collect}}</span>收藏
                        <!-- <span><a href="#" class="share"><i class="el-icon-share"></i>分享</a></span> -->
                        <!-- <span><a href="#" class="save"><i class="el-icon-star-off"></i>收藏</a></span> -->
                    </div>
                    <div class="retew">
                        <div class="auth">
                            <img :src="detailsList.headimgurl" alt="">
                            <span>{{detailsList.author}}</span>
                            <span>2017-10-17</span>
                        </div>
                        <div class="xdescribe">
                            {{detailsList.describe}}
                        </div>
                        <table  border="0" cellspacing="0" cellpadding="0" class="retamr">
    						<tr class="mtim">
        						   <td class="lirre" width="50%" ><span class="fwb">难度：</span>{{detailsList.complexity}}</td>
        						   <td>
        						        <span class="fwb">时间：</span>{{detailsList.handle_time}}
                                    </td>
    					    </tr>
    						<tr class="mtim">
            						<td width="50%"><h3 class="zfliao">食材</h3></td>
            						<td class="relative"></td>
    					    </tr>
    					     <tr width="50%"  v-for="(item,index) in detailsList.inventory" :key="index" v-if="index%2==0?true:false">
                                 <td class="lirre" >
                                     <span>{{item.food_name}}</span><span class='right'>{{item.food_how}}</span>
    					         </td>
                                 <td  >
                                    <span v-if="detailsList.inventory.length>index+1" >{{detailsList.inventory[index+1].food_name}}</span><span class='right' v-if="detailsList.inventory.length>index+1">{{detailsList.inventory[index+1].food_how}}</span>
                                 </td>
                            </tr>
                        </table>

                        <div class="itemstep">
                            <h2>{{detailsList.name}}</h2>
                            <el-row class="stepcont" :gutter="15" v-for="(item,index) in detailsList.step" :key="index">
                                <el-col :span="9" class="thumbnailImg">
                                    <img :src="detailsList.thumbnail[index]" alt="" class="fitImg">
                                </el-col>
                                <el-col :span="15">
                                    <p>
                                        <span class="fwb">{{index+1}}.</span>
                                        {{item}}
                                    </p>
                                </el-col>
                            </el-row>
                        </div>
                        <div class="xtip">
                            <h3>小贴士</h3>
                            <p>
                                {{detailsList.tip}}
                            </p>
                        </div>
                        <div class="authortip">
                            ©本菜谱的做法由 {{detailsList.author}} 编写，未经授权不得转载
                        </div>
                    </div>

                </el-col>
                <el-col :xs="24" :sm="16" v-else>
                    没有数据
                </el-col>
                <el-col :xs="24" :sm="8">
                    <div class="adsHear">
                        <img src="src/img/logo.png" alt="" class="fitImg">
                    </div>
                    <div class="top10">
                        <h3>十大热门菜谱</h3>
                        <ul class="clearfix">
                            <el-row :gutter="20">
                                <el-col :span="9">
    	                               <a :href="'#Itemlist?foodId='+topFood.fid" target="_blank"><img class="fitImg" :src="topFood.fimg" :alt="topFood.fname"></a>
                                </el-col>
                                <el-col :span="15">
                                    <a  :href="'#Itemlist?foodId='+topFood.fid" target="_blank">{{topFood.fname}}</a>
                                    <p></p>
                                </el-col>
                            </el-row>
    						<li :class="index==0?'btnone':''" v-for="(item,index) in topFood.flist" :key="item.fid"><a :href="'#Itemlist?foodId='+item.fid" target="_blank">{{item.fname}}</a></li>
    					</ul>
                    </div>
                    <div class="topSearch">
                        <h2>人气搜索</h2>
                        <ul class="clearfix">
                            <li  v-for="(item,index) in topSearchList" :key="item" :class="index%2==0?'':'brone'"><a :href="'#/Foodlist?keywords='+item" target="_blank">{{item}}</a></li>
                        </ul>
                    </div>
                </el-col>
            </el-row>
        </div>

        <wbc-footer></wbc-footer>
    </div>
</template>

<script>
import Header from '../publicTem/Header.vue'
import Footer from '../publicTem/Footer.vue'
import {FoodInfoData} from '../../pubJS/server.js'
export default {
    data (){
        return{
            foodId:'',
            detailsList:'',
            topSearchList:[//人气搜索
                '鱼香肉丝',
                '排骨',
                '可乐鸡翅',
                '麻辣香锅',
                '鸡蛋',
                '红烧肉',
                '面',
                '酸辣土豆丝',
                '土豆',
                '凉菜'
            ],
            topFood:{
                fid:40,
                fname:'老干妈烧带鱼',
                fimg:'https://h5php.xingyuanauto.com/food/public/upload/uploads/20170918/b6238c0ba73a986eeceba68ac5c456e5.jpg',
                flist:[
                    {fid:48,fname:'酸辣白菜帮'},
                    {fid:47,fname:'虎皮尖椒'},
                    {fid:45,fname:'干煸豆角'},
                    {fid:42,fname:'青红椒炒虾球'},
                    {fid:39,fname:'酱香牛腩'},
                    {fid:26,fname:'鱼头豆腐汤'},
                    {fid:22,fname:'糖醋排骨'},
                    {fid:16,fname:'蕃茄豆腐煲'},
                    {fid:11,fname:'麻辣香锅鸡翅'}
                ]
            }
        }
    },
    methods:{

    },
    components: {//子组件
          'wbc-nav': Header,//导航
          'wbc-footer':Footer
          // 'wbc-menu': Menu,
      },
   created() { //生命周期函数
      this.foodId = (this.$route.query.foodId==undefined?'':parseInt(this.$route.query.foodId));//获取传参的foodId
       FoodInfoData(this.foodId,(msg)=>{
           console.log(msg)
           this.detailsList = msg;
       });

   }
}
</script>

<style lang="css">
.bokpic{
    height:400px;
    margin-bottom: 26px;
    box-shadow: 0px 1px 3px rgba(100,100,100,0.3);
    -webkit-box-shadow: 0px 1px 3px rgba(100,100,100,.3);
}
.recinfo{
    /*padding-right:30px;*/
}
.recinfo h1{
    font-size: 24px;
    margin-bottom: 26px;
}
.recinfo .falisc{
    margin-bottom: 26px;
}
.recinfo .falisc span{
    color:#A37011;
    font-size: 24px;
    padding-right: 3px;
}
.
.recinfo .falisc span:nth-child(2){
    padding-left: 40px;
}
.recinfo .falisc .save,.recinfo .falisc .share{
    width:80px;
    height:32px;
    background-color: #A37011;
    color:#fff;
    vertical-align: middle;
    line-height: 32px;
    font-size: 12px;
    letter-spacing:5px;
    text-align: center;
    margin-left:14px;
    border-radius: 3px;
    float:right;
}
.adsHear{
    width:100%;
    height:250px;
    background:#fff;
    margin-bottom: 30px;
    box-shadow: 0px 1px 3px rgba(100,100,100,0.3);
    -webkit-box-shadow: 0px 1px 3px rgba(100,100,100,.3);
}
.retew{
    background:#fff;
    width:100%;
    font-size: 14px;
    box-shadow: 0px 1px 3px rgba(100,100,100,0.3);
    -webkit-box-shadow: 0px 1px 3px rgba(100,100,100,.3);
    border-radius: 3px;
    margin-bottom:20px;
    padding-bottom:25px;

}
.retew .auth{
    padding:20px;
    /*margin-bottom: 20px;*/
}
.retew .auth img{
    width:36px;
    height:36px;
    border-radius: 50%;
    /*border:1px solid #666;*/
    margin-right:15px;
    vertical-align: top;
}
.retew .auth span:nth-child(3){
    float:right;
}
.xdescribe{
    line-height: 180%;
    text-indent: 2em;
    padding:0 20px 20px 20px;

}
/*******表格********/
.retamr {
	margin-left: 1px;
	border-bottom: 1px solid #e5e5e5;
	color: #999;
    width: 100%;
    margin-bottom:30px;
}

.retamr span {
	padding-right: 10px;
}

.retamr td {
	border-top: 1px solid #e5e5e5;
	padding: 12px 0 12px 20px;
}
.retamr ul{
    width:100%;
}
.retamr li{
    width:50%;
    border-top: 1px solid #e5e5e5;
	padding: 12px 0 12px 20px;
    box-sizing: border-box;
}
.retamr .mtim {
	background: #f8f8f8;
	color: #333;
}
.lirre{
    border-right:1px solid #e5e5e5;
}
.retamr span{
    padding-right: 10px;
}
.itemstep{
    font-size:14px;
    color:#333;
    padding:0 20px;
    margin-bottom: 30px;
}
.itemstep h2{
    font-weight: bold;
}
.itemstep .stepcont{
    padding-top:20px;
    padding-bottom:20px;
    border-bottom: 1px dotted #e5e5e5;
}
.itemstep p{
    line-height: 180%;
    word-wrap: break-word;
    text-align: justify;
}
.itemstep .thumbnailImg{
    height: 150px;
}
.xtip{
    margin:0 20px 15px 20px;
    padding-bottom:15px;
    border-bottom: 1px dotted #e5e5e5;
}
.xtip h3{
    margin-bottom:11px;
    font-weight: bold;
}
.xtip p{
    line-height: 180%;
}
.authortip{
    font-size: 12px;
    line-height: 30px;
    margin-left: 20px;
    color:#999;
}
/*******右侧****/
.top10 {
	margin-bottom:30px;
}

.top10 h3 {
	font-size: 14px;
	width: 300px;
	padding-bottom: 3px;
	margin-bottom: 5px;
	display: inline-block;
}

.top10 h3 span {
	font-size: 12px;
}

.top10 ul {
	/*width: 260px;*/
	font-size: 14px;
	background-color: #fff;
	border: 1px solid #ebebea;
	padding: 20px 20px 5px 20px;
}
.top10 .shxs{
    margin-top:19px;
    height:90px;
}
.top10 li {
    width:100%;
	height: 44px;
	line-height: 44px;
	float: left;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	padding-left: 5px;
	border-top: 1px solid #ebebea;
}
.topSearch h2 {
	font-size: 14px;
	padding-bottom: 3px;
	margin-bottom: 5px;
	display: inline-block;
}

.topSearch h2 span {
	font-size: 12px;
}

.topSearch ul {
	font-size: 14px;
	background-color: #fff;
	border: 1px solid #ebebea;
	padding: 7px 20px;
}

.topSearch li {
    box-sizing: border-box;
    width:50%;
	height: 44px;
	line-height: 44px;
	float: left;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	padding-left: 10px;
	border-top: 1px solid #ebebea;
	border-right: 1px solid #ebebea;
}
.topSearch li:first-child,.topSearch li:nth-child(2){
    border-top: none!important;
}
</style>
