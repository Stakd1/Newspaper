(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46a159aa"],{"32ff":function(a,t){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACN0lEQVRoQ+2XP4jUQBTG3xfYrcXSytoDK0HFRgsVm903wUawuEO0EBUsbGw8K6+yObFS7iyuWnybILoIglb+aa5Sq0Pt7LSxSTNPUhzkFm9n4oRNFiaQat58eb/vexMS0IJfWPD+KQK0nWBMICYQ6EAcoUADg7fHBIItDBRoJAFmvgDgMREd9u0HwKaIrPjW71fXCECaphuquly3GWvtUp7nX+vuq9Y3AmCMeUtEp+s2oqpnsix7V3dfBJh2zBjzvc787+5X1ZUsyzbnlsBgMDiaJMnB6gOTJLmkqtf+s4kfqvqMiPaMUVEUHyaTSeGj6X0GjDEPiei2j2gDNdvW2ut5nn9yadUBUJdYk+uqej/LslWXZgTYx6FfAF5aa7cB7KjqMSI6AeC8y9HKAW8tgS0Ad0Tk53SzaZquq+oNH4hWRgjAexE5NavBNE0Hqpq7INoA+GOtPe7zacDMTwBcmQUxdwAAz0XkosvZcp2ZlwFsdA3gkYjc9AEYDodHkiT50jWAByJy1weAmQ8A+N01AO/ve2ZmAOOuAbwRkbOeCawCuNcpgLIZAM5z4DP/pdbc30IVNy+Px+Otf7nLzOcAvPZJqU2AMokXqvpKVT8WRfGt3++fBFDeM8emCtYqgI/DrpoIMO2QMWbh/wc+E9GSK/qm1gHcEpF1l573Dw0zl+/uq0R0yCUauq6qT3u93tpoNNpxaXkDuITaWo8AbTm/+9yYQEwg0IE4QoEGBm+PCQRbGCiw8An8BZ1bLEC4+VMLAAAAAElFTkSuQmCC"},"60ba":function(a,t,e){},"71f1":function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"my"},[e("div",{staticClass:"portrait"},[e("div",{staticClass:"img-box",on:{click:a.logIn}},[e("img",{staticClass:"auto-img",attrs:{src:a.userImg,alt:""}})]),e("div",{staticClass:"uesr-name"},[e("span",[a._v(a._s(a.userName))])]),a._m(0)]),e("div",{staticClass:"meau"},[e("van-grid",[e("van-grid-item",{attrs:{clickable:"",icon:"envelop-o",info:"99+",text:"消息"}}),e("van-grid-item",{attrs:{clickable:"",icon:"star-o",text:"收藏"}}),e("van-grid-item",{attrs:{clickable:"",icon:"chat-o",text:"评论"}}),e("van-grid-item",{attrs:{clickable:"",icon:"underway-o",text:"历史"}})],1),e("van-cell-group",[e("van-cell",{attrs:{size:"large",title:"离线下载","is-link":""}}),e("van-cell",{attrs:{size:"large",title:"任务系统","is-link":""}}),e("van-cell",{attrs:{size:"large",title:"绑定邀请码","is-link":""}}),e("van-cell",{attrs:{size:"large",title:"推荐给好友","is-link":""}}),e("van-cell",{attrs:{size:"large",title:"设置","is-link":"",to:"seting"}})],1)],1)])},A=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"fans"},[e("span",[e("b",[a._v("0")]),a._v("关注 ")]),e("span",[e("b",[a._v("0")]),a._v("粉丝 ")])])}],s={name:"my",data:function(){return{userData:null,userImg:e("a6c1"),userName:"点击头像登录"}},mounted:function(){var a=localStorage.getItem("status");null!=a&&(this.userImg=e("32ff"),this.userData=JSON.parse(a),this.userName=this.userData.userName,this.userImg=this.userData.portrait)},methods:{logIn:function(){null===this.userData&&this.$router.push("login")}}},n=s,l=(e("9e36"),e("2877")),c=Object(l["a"])(n,i,A,!1,null,"44f0c97e",null);t["default"]=c.exports},"9e36":function(a,t,e){"use strict";var i=e("60ba"),A=e.n(i);A.a},a6c1:function(a,t){a.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=chunk-46a159aa.6ae560ef.js.map