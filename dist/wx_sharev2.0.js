!function(a,b){"function"==typeof define&&(define.amd||define.cmd)?define(function(){return b(a)}):b(a,!0)}(this,function(a,b){function c(b,c,d){a.WeixinJSBridge?WeixinJSBridge.invoke(b,e(c),function(a){g(b,a,d)}):j(b,d)}function d(b,c,d){a.WeixinJSBridge?WeixinJSBridge.on(b,function(a){d&&d.trigger&&d.trigger(a),g(b,a,c)}):d?j(b,d):j(b,c)}function e(a){return a=a||{},a.appId=E.appId,a.verifyAppId=E.appId,a.verifySignType="sha1",a.verifyTimestamp=E.timestamp+"",a.verifyNonceStr=E.nonceStr,a.verifySignature=E.signature,a}function f(a){return{timeStamp:a.timestamp+"",nonceStr:a.nonceStr,"package":a.package,paySign:a.paySign,signType:a.signType||"SHA1"}}function g(a,b,c){var d,e,f;switch(delete b.err_code,delete b.err_desc,delete b.err_detail,d=b.errMsg,d||(d=b.err_msg,delete b.err_msg,d=h(a,d),b.errMsg=d),c=c||{},c._complete&&(c._complete(b),delete c._complete),d=b.errMsg||"",E.debug&&!c.isInnerInvoke&&alert(JSON.stringify(b)),e=d.indexOf(":"),f=d.substring(e+1)){case"ok":c.success&&c.success(b);break;case"cancel":c.cancel&&c.cancel(b);break;default:c.fail&&c.fail(b)}c.complete&&c.complete(b)}function h(a,b){var e,f,c=a,d=p[c];return d&&(c=d),e="ok",b&&(f=b.indexOf(":"),e=b.substring(f+1),"confirm"==e&&(e="ok"),"failed"==e&&(e="fail"),-1!=e.indexOf("failed_")&&(e=e.substring(7)),-1!=e.indexOf("fail_")&&(e=e.substring(5)),e=e.replace(/_/g," "),e=e.toLowerCase(),("access denied"==e||"no permission to execute"==e)&&(e="permission denied"),"config"==c&&"function not exist"==e&&(e="ok"),""==e&&(e="fail")),b=c+":"+e}function i(a){var b,c,d,e;if(a){for(b=0,c=a.length;c>b;++b)d=a[b],e=o[d],e&&(a[b]=e);return a}}function j(a,b){if(!(!E.debug||b&&b.isInnerInvoke)){var c=p[a];c&&(a=c),b&&b._complete&&delete b._complete,console.log('"'+a+'",',b||"")}}function k(){0!=D.preVerifyState&&(u||v||E.debug||"6.0.2">z||D.systemType<0||A||(A=!0,D.appId=E.appId,D.initTime=C.initEndTime-C.initStartTime,D.preVerifyTime=C.preVerifyEndTime-C.preVerifyStartTime,H.getNetworkType({isInnerInvoke:!0,success:function(a){var b,c;D.networkType=a.networkType,b="http://open.weixin.qq.com/sdk/report?v="+D.version+"&o="+D.preVerifyState+"&s="+D.systemType+"&c="+D.clientVersion+"&a="+D.appId+"&n="+D.networkType+"&i="+D.initTime+"&p="+D.preVerifyTime+"&u="+D.url,c=new Image,c.src=b}})))}function l(){return(new Date).getTime()}function m(b){w&&(a.WeixinJSBridge?b():q.addEventListener&&q.addEventListener("WeixinJSBridgeReady",b,!1))}function n(){H.invoke||(H.invoke=function(b,c,d){a.WeixinJSBridge&&WeixinJSBridge.invoke(b,e(c),d)},H.on=function(b,c){a.WeixinJSBridge&&WeixinJSBridge.on(b,c)})}var o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H;if(!a.jWeixin)return o={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest"},p=function(){var b,a={};for(b in o)a[o[b]]=b;return a}(),q=a.document,r=q.title,s=navigator.userAgent.toLowerCase(),t=navigator.platform.toLowerCase(),u=!(!t.match("mac")&&!t.match("win")),v=-1!=s.indexOf("wxdebugger"),w=-1!=s.indexOf("micromessenger"),x=-1!=s.indexOf("android"),y=-1!=s.indexOf("iphone")||-1!=s.indexOf("ipad"),z=function(){var a=s.match(/micromessenger\/(\d+\.\d+\.\d+)/)||s.match(/micromessenger\/(\d+\.\d+)/);return a?a[1]:""}(),A=!1,B=!1,C={initStartTime:l(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},D={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",preVerifyState:1,systemType:y?1:x?2:-1,clientVersion:z,url:encodeURIComponent(location.href)},E={},F={_completes:[]},G={state:0,data:{}},m(function(){C.initEndTime=l()}),H={config:function(a){E=a,j("config",a);var b=E.check===!1?!1:!0;m(function(){var a,d,e;if(b)c(o.config,{verifyJsApiList:i(E.jsApiList)},function(){F._complete=function(a){C.preVerifyEndTime=l(),G.state=1,G.data=a},F.success=function(){D.preVerifyState=0},F.fail=function(a){F._fail?F._fail(a):G.state=-1};var a=F._completes;return a.push(function(){k()}),F.complete=function(){for(var c=0,d=a.length;d>c;++c)a[c]();F._completes=[]},F}()),C.preVerifyStartTime=l();else{for(G.state=1,a=F._completes,d=0,e=a.length;e>d;++d)a[d]();F._completes=[]}}),E.beta&&n()},ready:function(a){0!=G.state?a():(F._completes.push(a),!w&&E.debug&&a())},error:function(a){"6.0.2">z||B||(B=!0,-1==G.state?a(G.data):F._fail=a)},checkJsApi:function(a){var b=function(a){var c,d,b=a.checkResult;for(c in b)d=p[c],d&&(b[d]=b[c],delete b[c]);return a};c("checkJsApi",{jsApiList:i(a.jsApiList)},function(){return a._complete=function(a){if(x){var c=a.checkResult;c&&(a.checkResult=JSON.parse(c))}a=b(a)},a}())},onMenuShareTimeline:function(a){d(o.onMenuShareTimeline,{complete:function(){c("shareTimeline",{title:a.title||r,desc:a.title||r,img_url:a.imgUrl||"",link:a.link||location.href,type:a.type||"link",data_url:a.dataUrl||""},a)}},a)},onMenuShareAppMessage:function(a){d(o.onMenuShareAppMessage,{complete:function(){c("sendAppMessage",{title:a.title||r,desc:a.desc||"",link:a.link||location.href,img_url:a.imgUrl||"",type:a.type||"link",data_url:a.dataUrl||""},a)}},a)},onMenuShareQQ:function(a){d(o.onMenuShareQQ,{complete:function(){c("shareQQ",{title:a.title||r,desc:a.desc||"",img_url:a.imgUrl||"",link:a.link||location.href},a)}},a)},onMenuShareWeibo:function(a){d(o.onMenuShareWeibo,{complete:function(){c("shareWeiboApp",{title:a.title||r,desc:a.desc||"",img_url:a.imgUrl||"",link:a.link||location.href},a)}},a)},onMenuShareQZone:function(a){d(o.onMenuShareQZone,{complete:function(){c("shareQZone",{title:a.title||r,desc:a.desc||"",img_url:a.imgUrl||"",link:a.link||location.href},a)}},a)},startRecord:function(a){c("startRecord",{},a)},stopRecord:function(a){c("stopRecord",{},a)},onVoiceRecordEnd:function(a){d("onVoiceRecordEnd",a)},playVoice:function(a){c("playVoice",{localId:a.localId},a)},pauseVoice:function(a){c("pauseVoice",{localId:a.localId},a)},stopVoice:function(a){c("stopVoice",{localId:a.localId},a)},onVoicePlayEnd:function(a){d("onVoicePlayEnd",a)},uploadVoice:function(a){c("uploadVoice",{localId:a.localId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},downloadVoice:function(a){c("downloadVoice",{serverId:a.serverId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},translateVoice:function(a){c("translateVoice",{localId:a.localId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},chooseImage:function(a){c("chooseImage",{scene:"1|2",count:a.count||9,sizeType:a.sizeType||["original","compressed"],sourceType:a.sourceType||["album","camera"]},function(){return a._complete=function(a){if(x){var b=a.localIds;b&&(a.localIds=JSON.parse(b))}},a}())},previewImage:function(a){c(o.previewImage,{current:a.current,urls:a.urls},a)},uploadImage:function(a){c("uploadImage",{localId:a.localId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},downloadImage:function(a){c("downloadImage",{serverId:a.serverId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},getNetworkType:function(a){var b=function(a){var c,d,e,b=a.errMsg;if(a.errMsg="getNetworkType:ok",c=a.subtype,delete a.subtype,c)a.networkType=c;else switch(d=b.indexOf(":"),e=b.substring(d+1)){case"wifi":case"edge":case"wwan":a.networkType=e;break;default:a.errMsg="getNetworkType:fail"}return a};c("getNetworkType",{},function(){return a._complete=function(a){a=b(a)},a}())},openLocation:function(a){c("openLocation",{latitude:a.latitude,longitude:a.longitude,name:a.name||"",address:a.address||"",scale:a.scale||28,infoUrl:a.infoUrl||""},a)},getLocation:function(a){a=a||{},c(o.getLocation,{type:a.type||"wgs84"},function(){return a._complete=function(a){delete a.type},a}())},hideOptionMenu:function(a){c("hideOptionMenu",{},a)},showOptionMenu:function(a){c("showOptionMenu",{},a)},closeWindow:function(a){a=a||{},c("closeWindow",{},a)},hideMenuItems:function(a){c("hideMenuItems",{menuList:a.menuList},a)},showMenuItems:function(a){c("showMenuItems",{menuList:a.menuList},a)},hideAllNonBaseMenuItem:function(a){c("hideAllNonBaseMenuItem",{},a)},showAllNonBaseMenuItem:function(a){c("showAllNonBaseMenuItem",{},a)},scanQRCode:function(a){a=a||{},c("scanQRCode",{needResult:a.needResult||0,scanType:a.scanType||["qrCode","barCode"]},function(){return a._complete=function(a){var b,c;y&&(b=a.resultStr,b&&(c=JSON.parse(b),a.resultStr=c&&c.scan_code&&c.scan_code.scan_result))},a}())},openProductSpecificView:function(a){c(o.openProductSpecificView,{pid:a.productId,view_type:a.viewType||0,ext_info:a.extInfo},a)},addCard:function(a){var e,f,g,h,b=a.cardList,d=[];for(e=0,f=b.length;f>e;++e)g=b[e],h={card_id:g.cardId,card_ext:g.cardExt},d.push(h);c(o.addCard,{card_list:d},function(){return a._complete=function(a){var c,d,e,b=a.card_list;if(b){for(b=JSON.parse(b),c=0,d=b.length;d>c;++c)e=b[c],e.cardId=e.card_id,e.cardExt=e.card_ext,e.isSuccess=e.is_succ?!0:!1,delete e.card_id,delete e.card_ext,delete e.is_succ;a.cardList=b,delete a.card_list}},a}())},chooseCard:function(a){c("chooseCard",{app_id:E.appId,location_id:a.shopId||"",sign_type:a.signType||"SHA1",card_id:a.cardId||"",card_type:a.cardType||"",card_sign:a.cardSign,time_stamp:a.timestamp+"",nonce_str:a.nonceStr},function(){return a._complete=function(a){a.cardList=a.choose_card_info,delete a.choose_card_info},a}())},openCard:function(a){var e,f,g,h,b=a.cardList,d=[];for(e=0,f=b.length;f>e;++e)g=b[e],h={card_id:g.cardId,code:g.code},d.push(h);c(o.openCard,{card_list:d},a)},chooseWXPay:function(a){c(o.chooseWXPay,f(a),a)}},b&&(a.wx=a.jWeixin=H),H});

/**
 * 极客之家 高端Javascript - 微信自定义分享
 * @copyright  Copyright (c) 2017 QIN TEAM (http://www.qinlinhui.cn)
 * @license    GUN  General Public License 2.0
 * @version    Id:  Type_model.php 2017-11-17 13:33:52
 *
 * @ url     获取用户签名地址
 * @ msg     用户签名数据
 * @ title   分享标题
 * @ link    分享跳转地址  默认一般是首页面地址
 * @ desc    分享描述  显示在标题下面显示  只有发送给朋友才能看到
 * @ imgUrl  分享图片
 * @ wx_appId    必填，公众号的唯一标识
 * @ wx_timestamp    必填，生成签名的时间戳
 * @ wx_nonceStr     必填，生成签名的随机串
 * @ wx_signature    必填，签名
 */
 (function(window, document) {
 	var WxShare = function(parameter) {
    // function getUrl() {
    //   if(parameter.img) {
    //     var url = window.location.href;
    //     var an = url.split('?')[0];
    //     var locationurl = an.split('index.html')[0];
    //     var imgurl = locationurl+parameter.img;
    //     return imgurl;
    //   } else {
    //     var imgurl = 'http://flow.xingyuanauto.com/weixin_serve/jssdk/img/share.png';
    //     return imgurl;
    //   }
    //  }

 			this.title = parameter.title ? parameter.title : 'xxx分享标题'; // 分享标题
 			this.link = parameter.link ? parameter.link : window.location.href.split('?')[0]; //跳转地址
 			this.desc = parameter.desc ? parameter.desc : 'xxx分享描述'; //分享描述
 			this.img = parameter.img ? window.location.href.split('?')[0].split('index.html')[0]+parameter.img : 'http://flow.xingyuanauto.com/weixin_serve/jssdk/img/share.png'; //分享图片
 			this.debug = parameter.debug ? parameter.debug : false; //是否开启dubug
 			this.menuList = parameter.menuList ? parameter.menuList : []; //要隐藏的菜单
			this.showShare();
 		};
 	WxShare.prototype = { //继承父类方法
 		constructor: WxShare,
 		showShare: function() {
 			const url = "http://aimee.qlh6.cn/foodWeb/index.html";
 			let _this = this;
 			$.post(url, function(msg) {
 				if (msg.start == 0) {
 					return msg.message;
 				}
 				sendAjax(_this, msg);
 			}, function(msg) {
 				return "Query Error";
 			}, 'json')
 		}
 	};
  /*
   * 注意：
   * 1. 所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。
   * 2. 如果发现在 Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级至 6.0.2.58 版本及以上。
   * 3. 常见问题及完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
   *
   * 开发中遇到问题详见文档“附录5-常见错误及解决办法”解决，如仍未能解决可通过以下渠道反馈：
   * 邮箱地址：weixin-open@qq.com
   * 邮件主题：【微信JS-SDK反馈】具体问题
   * 邮件内容说明：用简明的语言描述问题所在，并交代清楚遇到该问题的场景，可附上截屏图片，微信团队会尽快处理你的反馈。
   */

  function sendAjax(_this, secret) {
 		let wx_appId = secret.appId;
 		let wx_timestamp = secret.timestamp;
 		let wx_nonceStr = secret.nonceStr;
 		let wx_signature = secret.signature;

 		wx.config({
 			debug: _this.debug,
 			appId: wx_appId,
 			timestamp: wx_timestamp,
 			nonceStr: wx_nonceStr,
 			signature: wx_signature,
 			jsApiList: [
 			// 所有要调用的 API 都要加到这个列表中
 			'onMenuShareTimeline', //分享到朋友圈
 			'onMenuShareAppMessage', //发送给朋友
 			'onMenuShareQQ', //分享到QQ
 			'onMenuShareQZone', //分享到QQ空间
 			'onMenuShareWeibo', //分享到腾讯微博
 			'hideMenuItems' //隐藏功能Api
 			]
 		});

 		wx.ready(function() {
 			wx.hideMenuItems({ // 批量隐藏的菜单项，批量显示菜单项 wx.showMenuItems
 				// menuList: [
 				//     // 'menuItem:share:qq',//QQ
 				//     // "menuItem:share:appMessage",//发送给朋友
 				//     // 'menuItem:share:timeline', // 分享到朋友圈
 				//     // 'menuItem:share:weiboApp', //微博
 				//     // 'menuItem:favorite',//收藏
 				//     // 'menuItem:share:facebook',//FaceBook
 				//     // 'menuItem:share:QZone', //分享到QQ空间
 				//     // 'menuItem:copyUrl', // 复制链接
 				//     // 'menuItem:readMode', // 阅读模式
 				//   ],
 				menuList: _this.menuList,
 				success: function(res) {
 					// //隐藏分享后执行的回调函数
 					return true;
 				},
 				cancel: function() {
 					// //隐藏分享失败后执行的回调函数
 					return false;
 				}
 			});

 			var title = _this.title; // 分享标题
 			var link = _this.link; //跳转地址
 			var desc = _this.desc; // 分享描述
 			var imgUrl = _this.img; //图片分享地址

 			//分享到朋友圈
 			wx.onMenuShareTimeline({
 				title: title,
 				// 分享标题
 				link: link,
 				// 分享链接
 				desc: desc,
 				// 分享描述
 				imgUrl: imgUrl,
 				// 分享图标
 				success: function() {
 					// //用户确认分享后执行的回调函数
 					return true;
 				},
 				cancel: function() {
 					// //用户取消分享后执行的回调函数
 					return false;
 				}
 			});

 			//分享到朋友
 			wx.onMenuShareAppMessage({
 				title: title,
 				// 分享标题
 				desc: desc,
 				// 分享描述
 				link: link,
 				// 分享链接
 				imgUrl: imgUrl,
 				// 分享图标
 				type: '',
 				// 分享类型,music、video或link，不填默认为link
 				dataUrl: '',
 				// 如果type是music或video，则要提供数据链接，默认为空
 				success: function(data) {
 					// //用户确认分享后执行的回调函数
 					return true;
 				},
 				cancel: function() {
 					// //用户取消分享后执行的回调函数
 					return false;
 				}
 			});

 			//分享到QQ
 			wx.onMenuShareQQ({
 				title: title,
 				// 分享标题
 				desc: desc,
 				// 分享描述
 				link: link,
 				// 分享链接
 				imgUrl: imgUrl,
 				// 分享图标
 				success: function() {
 					// //用户确认分享后执行的回调函数
 					return true;
 				},
 				cancel: function() {
 					// //用户取消分享后执行的回调函数
 					return false;
 				}
 			});

 			//分享到QQ空间
 			wx.onMenuShareQZone({
 				title: title,
 				// 分享标题
 				desc: desc,
 				// 分享描述
 				link: link,
 				// 分享链接
 				imgUrl: imgUrl,
 				// 分享图标
 				success: function() {
 					// //用户确认分享后执行的回调函数
 					return true;
 				},
 				cancel: function() {
 					// //用户取消分享后执行的回调函数
 					return false;
 				}
 			});

 			//分享到腾讯微博
 			wx.onMenuShareWeibo({
 				title: title,
 				// 分享标题
 				desc: desc,
 				// 分享描述
 				link: link,
 				// 分享链接
 				imgUrl: imgUrl,
 				// 分享图标
 				success: function() {
 					// //用户确认分享后执行的回调函数
 					return true;
 				},
 				cancel: function() {
 					// //用户取消分享后执行的回调函数
 					return false;
 				}
 			});
 		});
 	};
  function SourceUrl(){ //获取访问地址
      var url = window.location.href;
      var an = url.split('?')[0];
      var locationurl = an.split('index.html')[0]; //截取index.html
      return locationurl;
   };
 	window.WxShare = WxShare;
 }(window, document));
