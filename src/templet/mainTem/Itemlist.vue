<template lang="html">
    <div  class="">
        <wbc-nav ></wbc-nav>
        <el-row class="container" >
            <el-col :xs="24" :sm="16" class="recinfo">
                <div class="bokpic">
                    <img src="src/img/food/main.jpg" alt="" class="fitImg">
                </div>
                <h1>蔬菜扇贝柱粥#kitchenAid的美食故事#</h1>
                <div class="falisc">
                    <span>805</span>浏览
                    <span>48</span>收藏
                    <span><a href="#" class="share"><i class="el-icon-share"></i>分享</a></span>
                    <span><a href="#" class="save"><i class="el-icon-star-off"></i>收藏</a></span>
                </div>
                <div class="retew">
                    <div class="auth">
                        <img src="src/img/tou.png" alt="">
                        <span>康昵称</span>
                        <span>2017-10-17</span>
                    </div>
                    <div class="xdescribe">
                        这次用胡萝卜、玉米粒、西兰花和香菇以及扇贝柱煲粥，扇贝柱是CLEARWATER加拿大进口海鲜，扇贝柱是扇贝肉下面有一个与贝壳相连的圆柱形肉。扇贝柱晒干就是干贝，也称为瑶柱。扇贝柱吃起来爽口，味道鲜美，营养很丰富，它富含碳水化合物，有健脑的功效，还能活血、暖胃。据说人们吃了贝类食物后，会有一种清爽宜人的感觉，所以吃了扇贝还能解除烦恼。
                    </div>
                    <table  border="0" cellspacing="0" cellpadding="0" class="retamr">
						<tr class="mtim">
    						   <td class="lirre" width="50%" ><span class="fwb">难度：</span>配菜(中级)  </td>
    						   <td>
    						        <span class="fwb">时间：</span>1小时以上
                                </td>
					    </tr>
						<tr class="mtim">
        						<td width="50%"><h3 class="zfliao">食材</h3></td>
        						<td class="relative"></td>
					    </tr>
					     <tr>
                             <td class="lirre">
                                 <span><a target="_blank" title="胡萝卜的做法大全" href="http://www.douguo.com/ingredients/胡萝卜">胡萝卜</a></span><span class='right'>1根</span>
					         </td>
                             <td>
                                 <span><a target="_blank" title="玉米的做法大全" href="http://www.douguo.com/ingredients/玉米">玉米</a></span><span class='right'>1根</span>
        					</td>
                        </tr>
                        <tr>
                            <td class="lirre">
                                <span><a target="_blank" title="干香菇的做法大全" href="http://www.douguo.com/ingredients/干香菇">干香菇</a></span><span class='right'>50克</span>
        					</td>
                            <td>
                                <span><a target="_blank" title="西兰花的做法大全" href="http://www.douguo.com/ingredients/西兰花">西兰花</a></span><span class='right'>80克</span>
        					</td>
                        </tr>
                        <tr>
                            <td class="lirre">
                                <span><label class="fcbm inblok">盐</label></span><span class='right'>适量</span>
        					</td>
                            <td>
                                <span><a target="_blank" title="姜丝的做法大全" href="http://www.douguo.com/ingredients/姜丝">姜丝</a></span><span class='right'>少许</span>
        					</td>
                        </tr>
                        <tr>
                            <td class="lirre">
                                <span><label class="fcbm inblok">料酒</label></span><span class='right'>少许</span>
        					</td>
                            <td></td>
                        </tr>
                    </table>
                    <div class="itemstep">
                        <h2>蔬菜扇贝柱粥#kitchenAid的美食故事#的做法步骤</h2>
                        <el-row class="stepcont" :gutter="15" v-for="(o,index) in 6" key="o">
                            <el-col :span="9">
                                <img src="src/img/food/1.jpg" alt="" class="fitImg">
                            </el-col>
                            <el-col :span="15">
                                <p>
                                    <span class="fwb">{{index+1}}.</span>
                                    用来煲粥的主要材料：CLEARWATER加拿大进口海鲜的扇贝柱、大米、胡萝卜、玉米和西兰花
                                </p>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="xtip">
                        <h3>小贴士</h3>
                        <p>
                            1 煮粥要大火烧开，再转小火煮，放几滴油，可以让粥更顺滑，也可以让蔬菜更好味道
                            2 蔬菜不用煮很久，我把大米煮开花再放蔬菜，西兰花撕成小朵，很容易煮熟，西兰花最后放，好看又好吃
                        </p>
                    </div>
                    <div class="authortip">
                        ©本菜谱的做法由 康妮陈 编写，未经授权不得转载
                    </div>
                </div>

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
	                               <a href="http://www.douguo.com/cookbook/206667.html"><img class="fitImg" src="http://cp1.douguo.net/upload/caiku/9/a/8/200_9a9d77658ef91ccc8c9b4ce6fbc99368.jpg" alt="可乐鸡翅[简单到没下过厨也会做]"></a>
                            </el-col>
                            <el-col :span="15">
                                <a href="http://www.douguo.com/cookbook/206667.html" target="_blank">可乐鸡翅[简单到没下过厨也会做]</a>
                                <p></p>
                            </el-col>
                        </el-row>
						<li class="btnone"><a href="http://www.douguo.com/cookbook/1430609.html" target="_blank">蛋黄酥#约会MOF#</a></li>
						<li ><a href="http://www.douguo.com/cookbook/1064542.html" target="_blank">川味家常菜~麻婆豆腐</a></li>
						<li ><a href="http://www.douguo.com/cookbook/1181198.html" target="_blank">可乐鸡翅</a></li>
						<li ><a href="http://www.douguo.com/cookbook/1404305.html" target="_blank">六寸戚风蛋糕～超详细版</a></li>
						<li ><a href="http://www.douguo.com/cookbook/1343671.html" target="_blank">简单．生活（私人谱，请勿发图）</a></li>
						<li ><a href="http://www.douguo.com/cookbook/700725.html" target="_blank">蛋黄酥</a></li>
						<li ><a href="http://www.douguo.com/cookbook/219102.html" target="_blank">红烧肉</a></li>
						<li ><a href="http://www.douguo.com/cookbook/206683.html" target="_blank">地三鲜</a></li>
						<li ><a href="http://www.douguo.com/cookbook/1082147.html" target="_blank">懒人糖醋排骨：无油更健康</a></li>
					</ul>
                </div>
                <div class="topSearch">
                    <h2>人气搜索</h2>
                    <ul class="clearfix">
                        <li class="btnone"><a href="/search/recipe/快手菜" target="_blank">快手菜</a></li>
                        <li class="btnone brone"><a href="/search/recipe/早餐" target="_blank">早餐</a></li>
                        <li><a href="/search/recipe/辣" target="_blank">辣</a></li>
                        <li class="brone"><a href="/search/recipe/牛肉" target="_blank">牛肉</a></li>
                        <li><a href="/search/recipe/鱼香茄子" target="_blank">鱼香茄子</a></li>
                        <li class="brone"><a href="/caipu/年夜饭" target="_blank">年夜饭</a></li>
                        <li><a href="/search/recipe/家常菜" target="_blank">家常菜</a></li>
                        <li class="brone"><a href="/search/recipe/芝士蛋糕" target="_blank">芝士蛋糕</a></li>
                        <li><a href="/search/recipe/酸梅汤" target="_blank">酸梅汤</a></li>
                        <li class="brone"><a href="/search/recipe/面条" target="_blank">面条</a></li>
                    </ul>
                </div>
            </el-col>
        </el-row>
        <wbc-footer></wbc-footer>
    </div>
</template>

<script>
import Header from '../publicTem/Header.vue'
import Footer from '../publicTem/Footer.vue'
export default {
    data (){
        return{

        }
    },
    components: {
          'wbc-nav': Header,//导航
          'wbc-footer':Footer
          // 'wbc-menu': Menu,
      }
}
</script>

<style lang="css">
.bokpic{
    height:400px;
    margin-bottom: 26px;
}
.recinfo{
    padding-right:30px;
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
    border:1px solid #666;
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
	/*width: 255px;*/
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
.topSearch {
	/*width: 300px;*/
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
</style>
