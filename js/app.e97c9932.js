(function(t){function e(e){for(var i,r,n=e[0],s=e[1],c=e[2],m=0,A=[];m<n.length;m++)r=n[m],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&A.push(l[r][0]),l[r]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);p&&p(e);while(A.length)A.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,n=1;n<a.length;n++){var s=a[n];0!==l[s]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},l={app:0},o=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/Smart-city-app/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],s=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var p=s;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0d5b":function(t,e,a){},"244d":function(t,e,a){"use strict";a("0d5b")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500"}},[a("v-toolbar",{attrs:{color:"indigo",dark:""}},[a("v-app-bar-nav-icon"),a("v-toolbar-title",[t._v("Smart Schaffhausen")]),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-magnify")])],1)],1),a("router-view")],1)],1)],1)},o=[],r=a("2877"),n=a("6544"),s=a.n(n),c=a("7496"),p=a("5bc1"),m=a("8336"),A=a("b0af"),u=a("132d"),h=a("f6c4"),S=a("2fa4"),g=a("71d9"),d=a("2a7f"),E={},U=Object(r["a"])(E,l,o,!1,null,null,null),x=U.exports;s()(U,{VApp:c["a"],VAppBarNavIcon:p["a"],VBtn:m["a"],VCard:A["a"],VIcon:u["a"],VMain:h["a"],VSpacer:S["a"],VToolbar:g["a"],VToolbarTitle:d["a"]});var k=a("f309");i["a"].use(k["a"]);var y=new k["a"]({}),C=a("8c4f"),K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Dashboard")},I=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{dense:""}},t._l(t.cards,(function(e){return a("v-col",{key:e.title,attrs:{cols:e.flex}},[a("a",{attrs:{href:e.link}},[a("v-card",[a("v-img",{staticClass:"white--text align-end",attrs:{src:e.src,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"200px"}},[a("v-card-title",{domProps:{textContent:t._s(e.title)}})],1)],1)],1)])})),1)],1)},Q=[],b={name:"Dashboard",data:function(){return{cards:[{title:"Pay for parking",src:"https://www.keflatwork.com/wp-content/uploads/2020/04/shutterstock_401478484.jpg",flex:12,link:"parking"},{title:"Weather",src:"https://media.istockphoto.com/vectors/vectot-weather-widget-for-smartphone-vector-id475696742?k=20&m=475696742&s=612x612&w=0&h=UD0dyd1VRDkBtI2EvsKNpyB79aNTbE0fCcQXYoO_kAA=",flex:6,link:"/weather"},{title:"Report a problem",src:"https://www.budgetinsurance.com/wp-content/uploads/2019/06/potholes-main-article-image.jpg",flex:6,link:"/problem"},{title:"Buy train ticket",src:"data:image/jpeg;base64,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",flex:6,link:"/train"},{title:"Make doctor appointment",src:"https://media.istockphoto.com/photos/doctor-holding-digital-tablet-at-meeting-room-picture-id1189304032?k=20&m=1189304032&s=612x612&w=0&h=ovTNnR0JX2cRZkzMBed9exRO_PamZLlysLDFkXesr4Q=",flex:6,link:"/doctor"},{title:"Tax service",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTkbKQJ_s82vDq6gyDhB96vDc2eLdVbQ3d9g&usqp=CAU",flex:6,link:"/tax"},{title:"Telecommunications",src:"http://www.oecd.org/media/oecdorg/about/impactstories/impact-story-mexico-cover.jpg",flex:6,link:"/telecomm"},{title:"Activities",src:"https://images.squarespace-cdn.com/content/v1/5c32d9575417fcc685dac97e/1547436976604-7MJYJM9H4KGGFU0JPVF7/Fun_Activities_Family_Day.jpg",flex:6,link:"/activities"}]}}},M=b,w=a("99d9"),B=a("62ad"),F=a("a523"),J=a("adda"),f=a("0fd9"),V=Object(r["a"])(M,v,Q,!1,null,"0eeb35ac",null),L=V.exports;s()(V,{VCard:A["a"],VCardTitle:w["c"],VCol:B["a"],VContainer:F["a"],VImg:J["a"],VRow:f["a"]});var R={name:"Home",components:{Dashboard:L}},j=R,W=Object(r["a"])(j,K,I,!1,null,null,null),Y=W.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("Weather")],1)},T=[],z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-h5"},[t._v(" San Francisco ")]),a("v-list-item-subtitle",[t._v("Mon, 12:30 PM, Mostly sunny")])],1)],1),a("v-card-text",[a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"text-h2",attrs:{cols:"6"}},[t._v(" 23°C ")]),a("v-col",{attrs:{cols:"6"}},[a("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/sun.png",alt:"Sunny image",width:"92"}})],1)],1)],1),a("v-list-item",[a("v-list-item-icon",[a("v-icon",[t._v("mdi-send")])],1),a("v-list-item-subtitle",[t._v("23 km/h")])],1),a("v-list-item",[a("v-list-item-icon",[a("v-icon",[t._v("mdi-cloud-download")])],1),a("v-list-item-subtitle",[t._v("48%")])],1),a("v-slider",{staticClass:"mx-4",attrs:{max:6,"tick-labels":t.labels,ticks:""},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}}),a("v-list",{staticClass:"transparent"},t._l(t.forecast,(function(e){return a("v-list-item",{key:e.day},[a("v-list-item-title",[t._v(t._s(e.day))]),a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-subtitle",{staticClass:"text-right"},[t._v(" "+t._s(e.temp)+" ")])],1)})),1),a("v-divider")],1)},G=[],O={name:"Weather",data:function(){return{labels:["SU","MO","TU","WED","TH","FR","SA"],time:0,forecast:[{day:"Tuesday",icon:"mdi-white-balance-sunny",temp:"24°/12°"},{day:"Wednesday",icon:"mdi-white-balance-sunny",temp:"22°/14°"},{day:"Thursday",icon:"mdi-cloud",temp:"25°/15°"}]}}},Z=O,q=a("ce7e"),N=a("8860"),H=a("da13"),P=a("5d23"),X=a("34c3"),_=a("ba0d"),$=Object(r["a"])(Z,z,G,!1,null,"a0cdc650",null),tt=$.exports;s()($,{VCard:A["a"],VCardText:w["b"],VCol:B["a"],VDivider:q["a"],VIcon:u["a"],VImg:J["a"],VList:N["a"],VListItem:H["a"],VListItemContent:P["a"],VListItemIcon:X["a"],VListItemSubtitle:P["b"],VListItemTitle:P["c"],VRow:f["a"],VSlider:_["a"]});var et={name:"WeatherPage",components:{Weather:tt}},at=et,it=Object(r["a"])(at,D,T,!1,null,null,null),lt=it.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("l-map",{staticStyle:{height:"350px"},attrs:{zoom:t.zoom,center:t.center}},[a("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),t._l(t.problems,(function(e){return a("l-marker",{key:e.name,attrs:{"lat-lng":e.markerLatLng}},[a("l-popup",[t._v(t._s(e.name))])],1)}))],2),a("ProblemList",{attrs:{problems:t.problems}})],1)},rt=[],nt=a("e11e"),st=a("2699"),ct=a("a40a"),pt=a("4e2b"),mt=a("f60f"),At=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"root"}},[a("h3",[t._v("Problems reported in this area:")]),t._l(t.problems,(function(e){return a("v-card",{key:e.name,staticClass:"mx-auto problem-card",attrs:{"max-width":"344",outlined:""}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("div",{staticClass:"text-overline mb-4"},[t._v(" Issue ")]),a("v-list-item-title",{staticClass:"text-h5 mb-1"},[t._v(" "+t._s(e.name)+" ")]),a("v-list-item-subtitle",[t._v(t._s(e.description))])],1),a("v-list-item-content",{attrs:{tile:""}},[a("img",{staticStyle:{"max-width":"100%",width:"40px"},attrs:{src:e.picture_url}})])],1),a("v-card-actions",[a("v-btn",{attrs:{outlined:"",rounded:"",text:""}},[t._v(" Details ")])],1)],1)}))],2)},ut=[],ht={name:"ProblemList",props:{problems:Array}},St=ht,gt=(a("244d"),Object(r["a"])(St,At,ut,!1,null,"fed4defc",null)),dt=gt.exports;s()(gt,{VBtn:m["a"],VCard:A["a"],VCardActions:w["a"],VListItem:H["a"],VListItemContent:P["a"],VListItemSubtitle:P["b"],VListItemTitle:P["c"]}),delete nt["Icon"].Default.prototype._getIconUrl,nt["Icon"].Default.mergeOptions({iconRetinaUrl:a("584d"),iconUrl:a("6397"),shadowUrl:a("e2b9")});var Et={name:"ReportProblemPage",components:{ProblemList:dt,LMap:st["a"],LTileLayer:ct["a"],LMarker:pt["a"],LPopup:mt["a"]},data:function(){return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',zoom:20,center:[47.69548,8.63317],markerLatLng:[47.69548,8.63317],problems:[{name:"Trashcan",markerLatLng:[47.69548,8.63317],description:"There is an overflowed trashcan",picture_url:"https://libreshot.com/wp-content/uploads/2014/06/trash-can.jpg"},{name:"Problem 2",markerLatLng:[47.695,8.63317],description:"There is a pitfall",picture_url:"https://www.fivestarautosalvage.co.uk/wp-content/uploads/2018/09/pothole.jpg"},{name:"Problem 3",markerLatLng:[47.69548,8.633],description:"There is not clean street",picture_url:"https://www.thecourier.com.au/images/transform/v1/resize/frm/storypad-qtXAEZC67LbMeemRuC2bYX/a1f06b16-a939-4567-b556-c85aaf00f085.jpg/w1200_h678_fmax.jpg"}]}}},Ut=Et,xt=Object(r["a"])(Ut,ot,rt,!1,null,null,null),kt=xt.exports,yt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Ct=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],Kt={},It=Object(r["a"])(Kt,yt,Ct,!1,null,null,null),vt=It.exports;i["a"].use(C["a"]);var Qt=[{path:"/",name:"Home",component:Y},{path:"/weather",name:"Weather",component:lt},{path:"/problem",name:"ReportProblemPage",component:kt},{path:"/about",name:"About",component:vt}],bt=new C["a"]({mode:"history",base:"/Smart-city-app/",routes:Qt}),Mt=bt;a("6cc5");i["a"].config.productionTip=!1,new i["a"]({vuetify:y,router:Mt,render:function(t){return t(x)}}).$mount("#app")}});
//# sourceMappingURL=app.e97c9932.js.map