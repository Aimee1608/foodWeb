webpackJsonp([0],{mGwb:function(t,e,n){"use strict";var a=n("mtWM"),o=n.n(a);e.a={GetFocus:function(){return o.a.get("GetFocus")},Recommend:function(){return o.a.get("Recommend")},classList:function(){return o.a.get("class_list")},IndexShowList:function(t){var e=t.pageId;return o.a.get("IndexShowList?pageId="+e)},searchShowList:function(t){var e=t.pageId,n=t.classId,a=t.name;return o.a.get(n||a?"show_list?pageId="+e+"&class_id="+n+"&name="+a:"IndexShowList?pageId="+e)},FoodInfoData:function(t){var e=t.id;return o.a.get("FoodInfoData?id="+e)},suggestionBack:function(t){var e=t.email,n=t.content;return o.a.post("GetLeave?email="+e+"&content="+n)}}}});