webpackJsonp([2],{162:function(e,t,o){function n(e){o(238)}var s=o(164)(o(185),o(224),n,null,null);e.exports=s.exports},164:function(e,t){e.exports=function(e,t,o,n,s){var a,i=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(a=e,i=e.default);var l="function"==typeof i?i.options:i;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),n&&(l._scopeId=n);var c;if(s?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=c):o&&(c=o),c){var d=l.functional,u=d?l.render:l.beforeCreate;d?l.render=function(e,t){return c.call(t),u(e,t)}:l.beforeCreate=u?[].concat(u,c):[c]}return{esModule:a,exports:i,options:l}}},165:function(e,t,o){function n(e){for(var t=0;t<e.length;t++){var o=e[t],n=d[o.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](o.parts[s]);for(;s<o.parts.length;s++)n.parts.push(a(o.parts[s]));n.parts.length>o.parts.length&&(n.parts.length=o.parts.length)}else{for(var i=[],s=0;s<o.parts.length;s++)i.push(a(o.parts[s]));d[o.id]={id:o.id,refs:1,parts:i}}}}function s(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function a(e){var t,o,n=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(n){if(f)return v;n.parentNode.removeChild(n)}if(g){var a=h++;n=p||(p=s()),t=i.bind(null,n,a,!1),o=i.bind(null,n,a,!0)}else n=s(),t=r.bind(null,n),o=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else o()}}function i(e,t,o,n){var s=o?"":n.css;if(e.styleSheet)e.styleSheet.cssText=x(t,s);else{var a=document.createTextNode(s),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function r(e,t){var o=t.css,n=t.media,s=t.sourceMap;if(n&&e.setAttribute("media",n),s&&(o+="\n/*# sourceURL="+s.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=o(177),d={},u=l&&(document.head||document.getElementsByTagName("head")[0]),p=null,h=0,f=!1,v=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,o){f=o;var s=c(e,t);return n(s),function(t){for(var o=[],a=0;a<s.length;a++){var i=s[a],r=d[i.id];r.refs--,o.push(r)}t?(s=c(e,t),n(s)):s=[];for(var a=0;a<o.length;a++){var r=o[a];if(0===r.refs){for(var l=0;l<r.parts.length;l++)r.parts[l]();delete d[r.id]}}}};var x=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}()},166:function(e,t,o){"use strict";o.d(t,"g",function(){return a}),o.d(t,"f",function(){return i}),o.d(t,"e",function(){return l}),o.d(t,"a",function(){return r}),o.d(t,"d",function(){return c}),o.d(t,"c",function(){return d}),o.d(t,"b",function(){return u});var n=o(44),s="https://h5php.xingyuanauto.com/FlowProject/food/public/index.php/port/",a=function(e){if(sessionStorage.getItem("GetFocus")){var t=JSON.parse(sessionStorage.getItem("GetFocus"));e&&e(t)}else{n.a.http.get("https://h5php.xingyuanauto.com/FlowProject/food/public/index.php/port/food/GetFocus").then(function(e){return e.json()}).then(function(t){1001==t.code?(sessionStorage.setItem("GetFocus",JSON.stringify(t.data)),e&&e(t.data)):alert("查询失败")})}},i=function(e){if(sessionStorage.getItem("Recommend")){var t=JSON.parse(sessionStorage.getItem("Recommend"));e&&e(t)}else{n.a.http.get("https://h5php.xingyuanauto.com/FlowProject/food/public/index.php/port/food/Recommend").then(function(e){return e.json()}).then(function(t){1001==t.code?(sessionStorage.setItem("Recommend",JSON.stringify(t.data)),e&&e(t.data)):alert("查询失败")})}},r=function(e){if(sessionStorage.getItem("classList")){var t=JSON.parse(sessionStorage.getItem("classList"));e&&e(t)}else{n.a.http.get("https://h5php.xingyuanauto.com/FlowProject/food/public/index.php/port/food/class_list").then(function(e){return e.json()}).then(function(t){1001==t.code?(sessionStorage.setItem("classList",JSON.stringify(t.data)),e&&e(t.data)):alert("查询失败")})}},l=function(e,t){if(sessionStorage.getItem("IndexShowList")){var o=JSON.parse(sessionStorage.getItem("IndexShowList"));t&&t(o)}else{var a=s+"food/IndexShowList?pageId="+e;n.a.http.get(a).then(function(e){return e.json()}).then(function(e){1001==e.code?(sessionStorage.setItem("IndexShowList",JSON.stringify(e.data)),t&&t(e.data)):alert("查询失败")})}},c=function(e,t,o,a){if(""!=o||""!=t)var i=s+"food/show_list?pageId="+e+"&class_id="+o+"&name="+t;else var i=s+"food/IndexShowList?pageId="+e;n.a.http.get(i).then(function(e){return e.json()}).then(function(e){a&&a(e)})},d=function(e,t){var o=s+"food/FoodInfoData?id="+e;n.a.http.get(o).then(function(e){return e.json()}).then(function(e){1001==e.code?t&&t(e.data):alert("查询失败")})},u=function(e,t,o){var a=s+"food/GetLeave?email="+e+"&content="+t;n.a.http.post(a).then(function(e){return e.json()}).then(function(e){1001==e.code?o&&o(e):alert("查询失败")})}},167:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},methods:{},components:{},created:function(){}}},168:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(166);t.default={data:function(){return{headclassList:"",restaurants:[],state:"",isCollapse:!0,isOpen:!1,path:"",pMenu:!1}},watch:{},methods:{hoverFun:function(){this.isOpen=!0},leaveFun:function(){this.isOpen=!1},clickMenu:function(){this.pMenu?this.pMenu=!1:this.pMenu=!0},querySearch:function(e,t){var o=this.restaurants;t(e?o.filter(this.createFilter(e)):o)},createFilter:function(e){return function(t){return 0===t.value.indexOf(e.toLowerCase())}},loadAll:function(){return[{value:"可乐鸡翅"},{value:"红烧肉"},{value:"冬瓜丸子汤"},{value:"鱼香肉丝"},{value:"麻辣香锅"},{value:"酸辣土豆丝"},{value:"排骨"},{value:"鱼"},{value:"面包"},{value:"凉菜"}]},handlesearchSelect:function(e){""!=this.state&&void 0!=this.state&&null!=this.state&&this.$router.push({path:"/Foodlist?keywords="+this.state})},handleIconClick:function(e){""!=this.state&&void 0!=this.state&&null!=this.state&&this.$router.push({path:"/Foodlist?keywords="+this.state})}},mounted:function(){this.restaurants=this.loadAll()},components:{},created:function(){var e=this;o.i(n.a)(function(t){e.headclassList=t,e.path=e.$router.currentRoute.path})}}},169:function(e,t,o){t=e.exports=o(43)(),t.push([e.i,".longPage{background:#f8f8f7;margin-top:30px;text-align:center}.link{margin:15px 0}.Recordnumber{margin:20px 0}.link a{padding:10px}",""])},170:function(e,t,o){t=e.exports=o(43)(),t.push([e.i,".headBack{width:100%;background:#eef1f6;margin-bottom:30px;box-shadow:0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04)}.headBox a{color:#48576a}.headBox .is-active{color:#a37011}.headBox>ul{height:60px;display:inline-block}.headBox>ul li>a{display:inline-block;padding:10px 20px}.headBox>ul li{display:inline-block;position:relative;border-bottom:5px solid transparent}.headBox>ul li:hover{border-bottom:5px solid #a37011}.headBox>ul li a.active{color:#a37011}.headBox>ul li.noPadSearch:hover{border-bottom:5px solid transparent}.selectBoxShow{box-sizing:border-box;overflow:hidden;position:absolute;padding:0 5px;top:110%;height:0;background:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);z-index:999;transition:all .3s ease-out}.selectBoxShow a{color:#a37011}.selectBoxShow.show{height:366px}.headBox>ul li.noPadSearch{padding:0;top:16px;margin-left:30px}.selectBox{border-bottom:1px solid #f1f1f1;display:block;width:390px;min-height:70px;padding:10px;cursor:default}.selectBox a{display:inline-block;padding:2px 4px;margin:2px 0}.selectBox a:hover{background-color:#a37011;color:#fff}.selectMore{margin-left:-5px;margin-right:-5px;text-align:center;padding:10px 0;background:#f1f1f1}.selectMore:hover{background:#a37011;color:#fff}.selectMore:hover a{color:#fff}.logoImg{width:160px;height:50px;display:inline-block;padding:5px;vertical-align:top}.logoImg img{width:100%;height:100%}.mobileBox{position:relative;padding-bottom:10px}.mobileBox .logoBox{height:100px;text-align:center}.mobileBox .logoBox img{height:100%;width:auto}.hideMenu{position:relative;width:100%}.hideMenu ul>li{background:#fff;border-bottom:1px solid #f1f1f1;padding:10px}.hideMenu ul>li a{color:#48576a;display:inline-block;width:100%;height:100%}.hideMenu ul>li a.active{color:#a37011}.hideMenu ul{width:100%;position:absolute;left:0;top:100%;box-sizing:border-box;z-index:999;border:1px solid #f1f1f1;box-shadow:0 2px 6px 0 rgba(0,0,0,.12),0 0 8px 0 rgba(0,0,0,.04);display:none}.hideMenu>i{position:absolute;left:10px;top:10px;width:30px;height:30px;font-size:16px}.mobileBox .searchBox{padding-left:40px;width:100%;box-sizing:border-box}.hideMenu ul.pshow,.mobileBox .searchBox .el-autocomplete{display:block}@media screen and (max-width:766px){.headBox{display:none}.mobileBox{display:block}}@media screen and (min-width:767px){.headBox{display:block}.mobileBox{display:none}}",""])},171:function(e,t,o){function n(e){o(175)}var s=o(164)(o(167),o(173),n,null,null);e.exports=s.exports},172:function(e,t,o){function n(e){o(176)}var s=o(164)(o(168),o(174),n,null,null);e.exports=s.exports},173:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"longPage"},[o("el-row",{staticClass:"container"},[o("el-col",{attrs:{span:24}},[o("div",{staticClass:"link"},[o("a",{attrs:{href:"#/About",target:"_blank"}},[e._v("关于美食美荟")]),e._v(" "),o("a",{attrs:{href:"#/Advertising",target:"_blank"}},[e._v("广告合作")]),e._v(" "),o("a",{attrs:{href:"#/Suggestion",target:"_blank"}},[e._v("意见反馈")]),e._v(" "),o("a",{attrs:{href:"#/FriendsLink",target:"_blank"}},[e._v("友情链接")])]),e._v(" "),o("div",{staticClass:"Recordnumber"},[o("p",[e._v("托管于"),o("a",{attrs:{href:"https://github.com/Aimee1608/foodWeb"}},[e._v("GitHub")]),e._v(" , "),o("a",{attrs:{href:"https://tongji.baidu.com"}},[e._v("百度统计")]),e._v(" 提供网站统计服务  ©2017 美食美荟 由 "),o("a",{attrs:{href:"https://cn.vuejs.org/"}},[e._v("Vue")]),e._v(" 搭建,京ICP备17071595号\n                Made by Aimee")])])])],1)],1)},staticRenderFns:[]}},174:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"headBack"},[o("div",{staticClass:"container"},[o("div",{staticClass:"headBox"},[e._m(0),e._v(" "),o("ul",[o("li",[o("a",{class:"/"==e.path?"active":"",attrs:{href:"#/"}},[e._v("首页")])]),e._v(" "),o("li",[o("a",{class:"/Foodlist"==e.path?"active":"",attrs:{href:"#/Foodlist"}},[e._v("菜谱")])]),e._v(" "),o("li",[o("a",{class:"/Select"==e.path?"active":"",attrs:{href:"#/Select"},on:{mouseover:e.hoverFun,mouseout:e.leaveFun}},[e._v("分类 "),o("i",{class:e.isOpen?"el-icon-caret-top":"el-icon-caret-bottom"})]),e._v(" "),o("div",{class:e.isOpen?"selectBoxShow show":"selectBoxShow",on:{mouseover:e.hoverFun,mouseout:e.leaveFun}},[e._l(e.headclassList,function(t,n){return n<=3?o("el-row",{key:t.id,staticClass:"selectBox",attrs:{gutter:10}},[o("el-col",{staticClass:"smalltitle",attrs:{span:6}},[e._v("\n                                    "+e._s(t.class_name)+"\n                                ")]),e._v(" "),o("el-col",{attrs:{span:18}},[o("el-row",{attrs:{gutter:10}},e._l(t.class_names,function(t,n){return o("el-col",{key:t.id,attrs:{span:8}},[o("a",{attrs:{href:"#/Foodlist?classId="+t.id}},[e._v(e._s(t.class_name))])])}))],1)],1):e._e()}),e._v(" "),e._m(1)],2)]),e._v(" "),o("li",[o("a",{class:"/Hotnews"==e.path?"active":"",attrs:{href:"#/Hotnews"}},[e._v("热门文章")])]),e._v(" "),o("li",{staticClass:"noPadSearch"},[o("div",{staticClass:"searchBox"},[o("el-row",{staticClass:"demo-autocomplete"},[o("el-col",[o("el-autocomplete",{staticClass:"inline-input",attrs:{"fetch-suggestions":e.querySearch,placeholder:"请输入内容",icon:"search","on-icon-click":e.handleIconClick},on:{select:e.handlesearchSelect},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}})],1)],1)],1)])])]),e._v(" "),o("div",{staticClass:"mobileBox"},[e._m(2),e._v(" "),o("div",{staticClass:"hideMenu"},[o("i",{staticClass:"el-icon-menu",on:{click:e.clickMenu}}),e._v(" "),o("ul",{class:e.pMenu?"pshow":""},[o("li",[o("a",{class:"/"==e.path?"active":"",attrs:{href:"#/"}},[e._v("首页")])]),e._v(" "),o("li",[o("a",{class:"/Foodlist"==e.path?"active":"",attrs:{href:"#/Foodlist"}},[e._v("菜谱")])]),e._v(" "),o("li",[o("a",{class:"/Select"==e.path?"active":"",attrs:{href:"#/Select"}},[e._v("分类")])]),e._v(" "),o("li",[o("a",{class:"/Hotnews"==e.path?"active":"",attrs:{href:"#/Hotnews"}},[e._v("热门文章")])])]),e._v(" "),o("div",{staticClass:"searchBox"},[o("el-row",{staticClass:"demo-autocomplete"},[o("el-col",[o("el-autocomplete",{staticClass:"inline-input",attrs:{"fetch-suggestions":e.querySearch,placeholder:"请输入内容",icon:"search","on-icon-click":e.handleIconClick},on:{select:e.handlesearchSelect},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}})],1)],1)],1)])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("span",{staticClass:"logoImg"},[o("img",{staticClass:"fitImg",attrs:{src:"src/img/logoHead.png",alt:""}})])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"selectMore"},[o("a",{attrs:{href:"#/Select"}},[e._v("查看更多")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"logoBox"},[o("img",{attrs:{src:"src/img/logoHead.png",alt:""}})])}]}},175:function(e,t,o){var n=o(169);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);o(165)("e131519c",n,!0)},176:function(e,t,o){var n=o(170);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);o(165)("10810c10",n,!0)},177:function(e,t){e.exports=function(e,t){for(var o=[],n={},s=0;s<t.length;s++){var a=t[s],i=a[0],r=a[1],l=a[2],c=a[3],d={id:e+":"+s,css:r,media:l,sourceMap:c};n[i]?n[i].parts.push(d):o.push(n[i]={id:i,parts:[d]})}return o}},185:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(172),s=o.n(n),a=o(171),i=o.n(a),r=o(166);t.default={name:"Select",data:function(){return{selectList:""}},components:{"wbc-nav":s.a,"wbc-footer":i.a},created:function(){var e=this;o.i(r.a)(function(t){e.selectList=t})}}},205:function(e,t,o){t=e.exports=o(43)(),t.push([e.i,".selectList{border-bottom:1px dotted #e5e5e5;margin-bottom:20px;padding-bottom:20px}.selectList h1{width:300px;padding:17px 0 8px;font-size:16px;margin-bottom:8px;font-weight:700}.selectList .el-col{padding:10px;text-align:center}.selectList .el-col img{height:60px;margin-bottom:10px}.selectList i{padding:3px 5px;display:inline-block}.selectList i:hover{background:#a37011;color:#fff}",""])},224:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"static"},[o("wbc-nav"),e._v(" "),o("el-row",{staticClass:"container"},[o("el-col",{attrs:{span:24}},e._l(e.selectList,function(t,n){return o("div",{key:t.id,staticClass:"selectList"},[o("h1",[e._v(e._s(t.class_name))]),e._v(" "),o("el-row",e._l(t.class_names,function(t,n){return o("el-col",{key:t.id,attrs:{xs:6,sm:3}},[o("a",{attrs:{href:"#/Foodlist?classId="+t.id}},[o("img",{staticClass:"fitImg",attrs:{src:t.image,onerror:"this.onerror=null;this.src='src/img/logo.png'"}}),e._v(" "),o("i",[e._v(e._s(t.class_name))])])])}))],1)}))],1),e._v(" "),o("wbc-footer")],1)},staticRenderFns:[]}},238:function(e,t,o){var n=o(205);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);o(165)("24fb122e",n,!0)}});