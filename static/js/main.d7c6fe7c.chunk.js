(this["webpackJsonpfind-mask"]=this["webpackJsonpfind-mask"]||[]).push([[0],{153:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(9),s=a.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(31),i=a(22),l=a(7),d={SET_MAP_CENTER:"[MAP] SET_MAP_CENTER",SET_DISTANCE:"[MAP] SET_DISTANCE",SET_MASK_TYPE:"[MAP] SET_MASK_TYPE",TOGGLE_DRAWER:"[MAP] TOGGLE_DRAWER"},u={mapCenter:{lat:25.03418,lng:121.554517},distance:{meter:500},maskType:"adult",drawerOpen:!1},p={ActionType:d,ActionCreator:{setMapCenter:function(e){return{type:d.SET_MAP_CENTER,Data:e}},setDistance:function(e){return{type:d.SET_DISTANCE,Data:e}},setMaskType:function(e){return{type:d.SET_MASK_TYPE,Data:e}},toggleDrawer:function(){return{type:d.TOGGLE_DRAWER}}},Reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.SET_MAP_CENTER:return Object(l.a)(Object(l.a)({},e),{},{mapCenter:t.Data});case d.SET_DISTANCE:return Object(l.a)(Object(l.a)({},e),{},{distance:t.Data});case d.SET_MASK_TYPE:return Object(l.a)(Object(l.a)({},e),{},{maskType:t.Data});case d.TOGGLE_DRAWER:return Object(l.a)(Object(l.a)({},e),{},{drawerOpen:!e.drawerOpen});default:return e}},Selector:{getMapCenter:function(e){return e.Map.mapCenter},getDistance:function(e){return e.Map.distance},getMaskType:function(e){return e.Map.maskType},getDrawerOpen:function(e){return e.Map.drawerOpen}},AsyncMethods:{}},j=a(45),h=a.n(j),m=a(58),_=a(15),O=a(16),b=a(87),f=a.n(b);function v(e){return g.apply(this,arguments)}function g(){return(g=Object(m.a)(h.a.mark((function e(t){var a,r,n,c,s,o,i,l,d,u,p,j,m,_,O;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.headers,r=void 0===a?{}:a,n=t.url,c=t.params,s=t.data,o=t.method,i=t.timeout,l=void 0===i?3e3:i,d=t.baseURL,u=void 0===d?"http://localhost:8009":d,p=t.resolve,j=t.reject,e.prev=1,m=n.startsWith("http"),e.next=5,f()({method:o,url:n,baseURL:m?void 0:u,headers:r,params:c,data:s,timeout:l});case 5:if(204!==(_=e.sent).status){e.next=10;break}p({}),e.next=20;break;case 10:return e.prev=10,e.next=13,_.data;case 13:O=e.sent,p(O),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(10),p({});case 20:e.next=25;break;case 22:e.prev=22,e.t1=e.catch(1),j(e.t1);case 25:case"end":return e.stop()}}),e,null,[[1,22],[10,17]])})))).apply(this,arguments)}var x=function(){function e(){Object(_.a)(this,e)}return Object(O.a)(e,null,[{key:"fetchGet",value:function(e){var t=e.url,a=e.params,r=e.resolve,n=e.reject,c=e.timeout;return v({url:t,resolve:r,reject:n,method:"GET",params:a,timeout:void 0===c?void 0:c})}},{key:"fetchPost",value:function(e){var t=e.url,a=e.params,r=e.jsonBody,n=e.resolve,c=e.reject,s=e.timeout;return v({url:t,resolve:n,reject:c,method:"POST",params:a,data:r,timeout:void 0===s?void 0:s})}},{key:"fetchPut",value:function(e){var t=e.url,a=e.params,r=e.jsonBody,n=e.resolve,c=e.reject,s=e.timeout;return v({url:t,resolve:n,reject:c,method:"PUT",params:a,data:r,timeout:void 0===s?void 0:s})}},{key:"fetchPatch",value:function(e){var t=e.url,a=e.params,r=e.jsonBody,n=e.resolve,c=e.reject,s=e.timeout;return v({url:t,resolve:n,reject:c,method:"PATCH",params:a,data:r,timeout:void 0===s?void 0:s})}},{key:"fetchDelete",value:function(e){var t=e.url,a=e.params,r=e.jsonBody,n=e.resolve,c=e.reject,s=e.timeout;return v({url:t,resolve:n,reject:c,method:"DELETE",params:a,data:r,timeout:void 0===s?void 0:s})}}]),e}(),A={getStores:function(){return new Promise((function(e,t){return x.fetchGet({url:"https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json",resolve:e,reject:t})}))}},k=a(88),y={SET_MASK_DATA:"[MASK] SET_MASK_DATA"},T={setMaskData:function(e){return{type:y.SET_MASK_DATA,Data:e}}},N={maskData:[]},S={getMaskData:function(){return Object(m.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=P(),e.next=3,A.getStores();case 3:return a=e.sent,t(T.setMaskData(a.features)),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))()}},E={ActionType:y,ActionCreator:T,Reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.SET_MASK_DATA:return Object(l.a)(Object(l.a)({},e),{},{maskData:t.Data});default:return e}},Selector:{getMaskData:function(e){return e.Mask.maskData},getNearByMasks:function(e){var t=e.Mask.maskData,a=e.Map.distance.meter,r=e.Map.mapCenter;return t.filter((function(e){return Object(k.getDistance)({latitude:r.lat,longitude:r.lng},{latitude:e.geometry.coordinates[1],longitude:e.geometry.coordinates[0]})<=a}))}},AsyncMethods:S},D={SET_CUSTOMER_DATA:"[CUSTOMER] SET_CUSTOMER_DATA",SET_SINGLE_CUSTOMER:"[CUSTOMER] SET_SINGLE_CUSTOMER"},M={customerData:[],queryInfo:{},singleCustomer:{}},C={ActionType:D,ActionCreator:{setCustomerData:function(e){return{type:D.SET_CUSTOMER_DATA,Data:e}},setSingleCustomer:function(e){return{type:D.SET_SINGLE_CUSTOMER,Data:e}}},Reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D.SET_CUSTOMER_DATA:return Object(l.a)(Object(l.a)({},e),{},{customerData:t.Data});case D.SET_SINGLE_CUSTOMER:return Object(l.a)(Object(l.a)({},e),{},{singleCustomer:t.Data});default:return e}},Selector:{getCustomerData:function(e){return e.Customer.customerData},getSingleCustomer:function(e){return e.Customer.singleCustomer}},AsyncMethods:{}},w={TOGGLE_DRAWER:"[GLOBAL] TOGGLE_DRAWER",OPEN_LOADING_BLOCK:"[GLOBAL] OPEN_LOADING_BLOCK",CLOSE_LOADING_BLOCK:"[GLOBAL] CLOSE_LOADING_BLOCK"},R={drawerOpen:!1,loadingBlockOpen:!1},L={ActionType:w,ActionCreator:{toggleDrawer:function(){return{type:w.TOGGLE_DRAWER}},openLoadingBlock:function(){return{type:w.OPEN_LOADING_BLOCK}},closeLoadingBlock:function(){return{type:w.CLOSE_LOADING_BLOCK}}},Reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.TOGGLE_DRAWER:return Object(l.a)(Object(l.a)({},e),{},{drawerOpen:!e.drawerOpen});case w.OPEN_LOADING_BLOCK:return Object(l.a)(Object(l.a)({},e),{},{loadingBlockOpen:!0});case w.CLOSE_LOADING_BLOCK:return Object(l.a)(Object(l.a)({},e),{},{loadingBlockOpen:!1});default:return e}},Selector:{getDrawerOpen:function(e){return e.Screen.Global.drawerOpen},getLoadingBlockOpen:function(e){return e.Screen.Global.loadingBlockOpen}}},G=Object(i.b)({Global:L.Reducer}),B=Object(i.b)({Map:p.Reducer,Mask:E.Reducer,Place:C.Reducer,Screen:G}),I=void 0,P=function(){return I.dispatch},U=function(){return I=Object(i.c)(B,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},K=a(26),z=a(25),Q=a(39),W=a.n(Q),H=a(6),Y=a(192),X=a(193),J=a(2),V=Object(H.a)({root:{padding:"10px"}})(Y.a),F=function(e){Object(K.a)(a,e);var t=Object(z.a)(a);function a(){var e;Object(_.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={value:e.props.value},e.handleChange=function(t,a){var r=t.target.value;e.setState({value:r}),e.props.onChange&&e.props.onChange(r)},e}return Object(O.a)(a,[{key:"render",value:function(){return Object(J.jsx)(V,{variant:"filled",fullWidth:!0,value:this.state.value,onChange:this.handleChange,children:(this.props.data||[]).map((function(e,t){return Object(J.jsx)(X.a,{value:e.value,children:e.label},"item-".concat(t))}))})}}]),a}(n.a.Component),q=a.p+"static/media/phone-solid.ac5f8fa5.svg",Z=a.p+"static/media/phone.8c708213.svg",$=a.p+"static/media/setting.366de0c8.svg",ee=a(194),te=function(e){Object(K.a)(a,e);var t=Object(z.a)(a);function a(){var e;Object(_.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).handleClick=function(t,a){return function(r){var n=t.lat,c=t.lng;a({lat:n,lng:c,fly:!0}),e.props.toggleDrawer&&e.props.toggleDrawer()}},e.getMedicalStores=function(){return e.props.nearByMasks.map((function(e){return Object(l.a)(Object(l.a)({lat:e.geometry.coordinates[1],lng:e.geometry.coordinates[0]},e.properties),{},{name:e.properties.name,address:e.properties.address,time:"08:00~21:30",phone:e.properties.phone,leftMask:{adult:e.properties.mask_adult,children:e.properties.mask_child}})}))},e}return Object(O.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=this.props.actions,r=a.setDistance,n=a.setMaskType,c=this.getMedicalStores();return Object(J.jsxs)("div",{className:W.a.content,children:[Object(J.jsxs)("div",{className:W.a.search_root,children:[Object(J.jsx)("div",{children:"\u8ddd\u96e2"}),Object(J.jsx)(F,{value:2,data:[{value:1,label:"100m"},{value:2,label:"500m"},{value:3,label:"1km"},{value:4,label:"3km"}],onChange:function(e){1===e?r({meter:100}):2===e?r({meter:500}):3===e?r({meter:1e3}):4===e&&r({meter:3e3})}}),Object(J.jsx)("div",{className:"mt-12",children:"\u53e3\u7f69\u985e\u5225"}),Object(J.jsx)(F,{value:1,data:[{value:1,label:"\u6210\u4eba"},{value:2,label:"\u5152\u7ae5"},{value:3,label:"\u6210\u4eba\u8207\u5152\u7ae5"}],onChange:function(e){1===e?n("adult"):2===e?n("child"):3===e&&n("adult & child")}})]}),Object(J.jsxs)("div",{className:"px-8 py-4",children:["\u5171 ",c?c.length:0," \u5bb6\u53ef\u8cb7\u53e3\u7f69"]}),c.map((function(a,r){return Object(J.jsxs)("div",{className:W.a.card_root,onClick:e.handleClick(a,t.actions.setMapCenter),children:[Object(J.jsxs)("div",{className:"flex",children:[Object(J.jsx)("div",{className:"flex-1",style:{fontWeight:900,color:"#848484"},children:a.name}),Object(J.jsx)("a",{href:"tel:+886-".concat(a.phone),onClick:function(e){e.stopPropagation()},children:Object(J.jsx)("img",{src:Z,style:{paddingRight:"3px",paddingLeft:"3px"},height:"20px",alt:"\u96fb\u8a71"})})]}),Object(J.jsx)("div",{style:{paddingTop:"2px"},children:Object(J.jsx)("div",{style:{fontSize:"10px",color:"#848484"},children:a.address})}),Object(J.jsxs)("div",{className:"flex items-center",style:{paddingTop:"2px",paddingBottom:"2px"},children:[Object(J.jsx)("img",{src:q,style:{paddingRight:"3px",paddingLeft:"3px"},height:"10px",alt:"\u96fb\u8a71\u5716\u793a"}),Object(J.jsx)("div",{style:{verticalAlign:"middle",fontSize:"10px",color:"#a3a3a3"},children:a.phone})]}),Object(J.jsxs)("div",{className:"flex",children:[Object(J.jsxs)("div",{className:W.a.adult_mask,children:[Object(J.jsx)("div",{className:"flex flex-1",children:"\u6210\u4eba\u53e3\u7f69"}),Object(J.jsxs)("div",{children:[a.leftMask.adult,"\u500b"]})]}),Object(J.jsxs)("div",{className:W.a.children_mask,children:[Object(J.jsx)("div",{className:"flex flex-1",children:"\u5152\u7ae5\u53e3\u7f69"}),Object(J.jsxs)("div",{children:[a.leftMask.children,"\u500b"]})]})]})]},"card-".concat(r))}))]})}}]),a}(n.a.Component),ae=function(e){Object(K.a)(a,e);var t=Object(z.a)(a);function a(){var e;Object(_.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).toggleDrawer=function(){return e.props.actions.toggleDrawer()},e}return Object(O.a)(a,[{key:"render",value:function(){return Object(J.jsx)(ee.a,{anchor:"left",open:this.props.drawerOpen,onOpen:this.toggleDrawer,onClose:this.toggleDrawer,children:Object(J.jsx)(te,Object(l.a)(Object(l.a)({},this.props),{},{toggleDrawer:this.toggleDrawer}))})}}]),a}(n.a.Component),re=Object(o.b)((function(e){return{center:p.Selector.getMapCenter(e),drawerOpen:p.Selector.getDrawerOpen(e),maskData:E.Selector.getMaskData(e),nearByMasks:E.Selector.getNearByMasks(e)}}),(function(e){var t={setMapCenter:p.ActionCreator.setMapCenter,setDistance:p.ActionCreator.setDistance,setMaskType:p.ActionCreator.setMaskType,toggleDrawer:p.ActionCreator.toggleDrawer};return{actions:Object(i.a)(t,e),dispatch:e}}))((function(e){return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("div",{className:"hidden-xs-only",children:Object(J.jsx)(te,Object(l.a)({},e))}),Object(J.jsxs)("div",{className:"hidden-sm-and-up",children:[Object(J.jsx)(ae,Object(l.a)({},e)),Object(J.jsx)("div",{className:W.a.setting,onClick:function(){return setTimeout(e.actions.toggleDrawer,100)},children:Object(J.jsx)("img",{src:$,height:"20px",alt:"\u8a2d\u5b9a"})})]})]})})),ne=a(67),ce=a.n(ne),se=function(e){Object(K.a)(a,e);var t=Object(z.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(O.a)(a,[{key:"render",value:function(){return Object(J.jsxs)("div",{className:"sm:flex xs:flex-col mb-4",children:[Object(J.jsxs)("div",{children:["| \u53e3\u7f69\u5730\u5716 ver 1.0 by",Object(J.jsx)("a",{className:ce.a.link,href:"https://github.com/andrew781026/findMask",target:"_blank",rel:"noopener noreferrer",children:"Andrew"})]}),Object(J.jsx)("div",{children:Object(J.jsx)("span",{className:"sm:pl-12",children:"| \u8cc7\u6599\u4f86\u6e90 : \u885b\u798f\u90e8"})})]})}}]),a}(n.a.Component),oe=function(){return Object(J.jsx)("div",{className:"flex px-8 h-28 bg-black z-20 fixed pin-b pin-r ".concat(ce.a.root),children:Object(J.jsx)(se,{})})},ie=a(196),le=a(34),de=a.n(le),ue=a.p+"static/media/bulletin.fd160de6.jpg",pe=a(40),je=a.n(pe),he=function(){function e(){Object(_.a)(this,e)}return Object(O.a)(e,null,[{key:"format",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY/MM/DD";return e?je()(e).format(t):e}},{key:"getWeekDayStr",value:function(e){return{0:"\u65e5",1:"\u4e00",2:"\u4e8c",3:"\u4e09",4:"\u56db",5:"\u4e94",6:"\u516d"}[je()(e).weekday()]}},{key:"yesterday",value:function(){return je()().add(-1,"d").toDate()}},{key:"nextWeek",value:function(){return je()().add(7,"d").toDate()}},{key:"startOf",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"d";return je()(e).startOf(t).toDate()}},{key:"endOf",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"d";return je()(e).endOf(t).toDate()}}]),e}(),me=function(e){return"".concat(he.format(e,"MM/DD"),"(").concat(he.getWeekDayStr(e),")")},_e=function(e){return Object(J.jsxs)("div",{className:"flex h-80 shadow-b z-20 relative ".concat(de.a.root),children:[Object(J.jsxs)("div",{className:"flex-col p-12 absolute pin-l font-900 text-white",children:[Object(J.jsxs)("div",{className:"flex items-start",children:[Object(J.jsx)("img",{className:"pr-4",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAIAAACA18GRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAExSURBVEhLY2DbnkMtNOTMSrm02OBwK5ogEHHtyMu4vEz9QAOaOBDhNOvLnx8FV1ejCQKR4K6i////R52fhyYOROhmWR7tyr6yQnR3KcQsn9NTc6+sREbie8ogZoWemx15fi7Pzny4XhSzos/P+/fvH1Cp9sGmt7++5F5duf75BSAXGSjsq/7x91fE+TlH390Fcne9vgbXjmLWxhdQne13dhRdWw1Elz49gYjAQdWNDRCpe1/fQESALoVoRzFr56urEGmSgPy+Koj2IWTW8qenO+7sJAZ9+P2NgFluJychC+JBD769HTVrmJu18cVFoNya5+f67+0lBn38/R2oHnt+jL2w4N9/UDlBPNjz+jpcO4pZQGRzrCfv6sqCq6uIQTEX5vPuLIDrRTeLEkQ9s7bnAADezOZBisoYGwAAAABJRU5ErkJggg==",alt:"\u65e5\u66c6\u5716\u793a"}),"2020/"]}),Object(J.jsx)("div",{className:"text-xl my-4",children:me(new Date)}),Object(J.jsxs)("div",{className:"font-500",style:{fontSize:"12px"},children:["\u5982\u4eca\u65e5\u8cfc\u8cb7\uff0c\u4e0b\u6b21\u6700\u5feb\u53ef\u8cfc\u8cb7\u65e5\u70ba",me(he.nextWeek())]})]}),Object(J.jsx)(ie.a,{xsDown:!0,children:Object(J.jsxs)("div",{className:de.a.right_content,children:[Object(J.jsxs)("div",{className:"flex-col flex-1 text-white mt-4 mx-8",children:[Object(J.jsx)("p",{className:de.a.right_p,children:"\u6c11\u773e\u6301\u672c\u4eba \u300c\u5065\u4fdd\u5361\u300d \uff0c\u6bcf\u4eba\u73fe\u8cfc 2 \u7247\uff0c7 \u5929\u5167\u4e0d\u53ef\u91cd\u8907\u8cfc\u8cb7 "}),Object(J.jsx)("p",{className:de.a.right_p,children:"\u53ef\u59d4\u8a17\u89aa\u53cb\u4ee3\u70ba\u8cfc\u8cb7\uff0c\u4e00\u4eba\u9650\u4ee3\u6301\u4e00\u5f35\u5065\u4fdd\u5361 "}),Object(J.jsx)("p",{className:de.a.right_p,children:"\u5152\u7ae5\u53e3\u7f69\u50c5\u9650 12 \u6b72\u4ee5\u4e0b\u5152\u7ae5\u5065\u4fdd\u5361\u8cfc\u8cb7"})]}),Object(J.jsxs)("div",{className:de.a.link,children:[Object(J.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAUCAIAAAAcIrrpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAGVSURBVDhPrZTZTsJAFIa9oqXL8GKtoGFRIKKiRcQHYHGPCRoUE+J2gYkmBmIRXOLyev7TskyHtoIh+S6G08OXmX9OOxcqajNkSl1FlxtJ6T4jXyXJ7jz/dCodOQgL3VzgZ8dGeM+rJ4tcz8S6sm67hI4hN5bFVpauX7dCJUfbxLqKju2I7Q0s6M+SJrwYMKrVKNs2TXbOjYhP69AptThb/EtX0pR6QmpmpNs02Q8P60o1GvguALYI/HTIXjTpiWyEjzzZo7dJXZ/bqEh3abYfeOrIYQRJU0s3h+yDj2tCL4fhUE4HrmaG+wtw1w1dYjuL7NXjBTs4lboKlmuF7R/ioiNHEeHNcrWypKyrZzG6No3gwyrNy9sFxnSD+YILa1QQ9mh6vwrydcrR74TXKRcJ6uoYtqtPWVfO4/LlEi5nVHSD10k3KXoc5soQHM2O6fFhbHd1a3emQazpV2oxHBDvA9vjg1t2PevdxCtlbtK83ObLizGdNSXic1+EEcO3iGvwwUVnAym+PxgUru6Pp+5/zFRX1H4BiyrG5MSrwYQAAAAASUVORK5CYII=",alt:"\u5065\u4fdd\u7f72\u516c\u544a\u9023\u7d50"}),Object(J.jsx)("a",{href:ue,target:"_blank",rel:"noopener noreferrer",className:de.a.link_text,children:Object(J.jsx)("span",{children:"\u885b\u670d\u90e8\u516c\u544a\u9023\u7d50"})})]})]})})]})},Oe=a(52),be=a.n(Oe),fe=function(e){return Object(J.jsxs)("div",{className:be.a.root,children:[Object(J.jsx)("div",{className:be.a.many_mask,children:"31 ~"}),Object(J.jsx)("div",{className:be.a.less_mask,children:"1 ~ 30"}),Object(J.jsx)("div",{className:be.a.no_mask,children:"\u7121\u5eab\u5b58"})]})},ve=a(92),ge=a.n(ve),xe=a(93),Ae=a.n(xe),ke=(a(152),a(49)),ye=a.n(ke),Te=a(29),Ne=a.n(Te),Se=a.p+"static/media/clock-regular.0d4adac4.svg",Ee=a.p+"static/media/adult-face.64025627.svg",De=a.p+"static/media/child-face.400e717f.svg",Me=function(e){var t=e.medicalStore;return Object(J.jsxs)("div",{className:Ne.a.card_root,children:[Object(J.jsxs)("div",{className:Ne.a.text_root,children:[Object(J.jsx)("div",{className:"pb-4",children:Object(J.jsx)("span",{className:Ne.a.text_name,children:t.name})}),Object(J.jsx)("div",{className:"pb-4",children:Object(J.jsx)("span",{className:Ne.a.text_address,children:t.address})}),Object(J.jsxs)("div",{className:"flex",children:[Object(J.jsxs)("div",{className:"flex-1 flex items-center",children:[Object(J.jsx)("img",{className:"px-4",height:"12px",src:Se,alt:"\u6642\u9418 :\u3000"}),Object(J.jsx)("span",{className:Ne.a.time_letter,children:t.time})]}),Object(J.jsxs)("div",{className:"flex-1 flex items-center",children:[Object(J.jsx)("img",{className:"px-4",src:q,height:"12px",alt:"\u96fb\u8a71 : "}),Object(J.jsx)("span",{className:Ne.a.phone_letter,children:t.phone})]})]})]}),Object(J.jsxs)("div",{className:"flex",children:[Object(J.jsxs)("div",{className:Ne.a.adult_mask,children:[Object(J.jsx)("div",{children:"\u6210\u4eba\u53e3\u7f69\u6578\u91cf"}),Object(J.jsxs)("div",{className:"w-full flex items-end pt-4",children:[Object(J.jsx)("div",{className:"flex flex-1 justify-center items-center",children:Object(J.jsx)("img",{src:Ee,height:"37px",alt:"\u6210\u4eba\u982d\u50cf"})}),Object(J.jsxs)("div",{children:[Object(J.jsx)("span",{className:"text-16 pr-4",children:t.leftMask.adult})," \u500b"]})]})]}),Object(J.jsxs)("div",{className:Ne.a.children_mask,children:[Object(J.jsx)("div",{children:"\u5152\u7ae5\u53e3\u7f69\u6578\u91cf"}),Object(J.jsxs)("div",{className:"w-full flex items-end pt-4",children:[Object(J.jsx)("div",{className:"flex flex-1 justify-center items-center",children:Object(J.jsx)("img",{src:De,height:"40px",alt:"\u5152\u7ae5\u982d\u50cf"})}),Object(J.jsxs)("div",{children:[Object(J.jsx)("span",{className:"text-16 pr-4",children:t.leftMask.children})," \u500b"]})]})]})]})]})},Ce=a(94),we=function(e){Object(K.a)(a,e);var t=Object(z.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(O.a)(a,[{key:"componentDidUpdate",value:function(e){if(e.coords===this.props.coords)return null;if(this.props.isGeolocationAvailable)if(this.props.isGeolocationEnabled){if(this.props.coords){var t=this.props.coords.latitude,a=this.props.coords.longitude;this.props.actions.setMapCenter({lat:t,lng:a,fly:!0})}}else;else;}},{key:"render",value:function(){return null}}]),a}(n.a.Component),Re=Object(o.b)(null,(function(e){var t={setMapCenter:p.ActionCreator.setMapCenter};return{actions:Object(i.a)(t,e),dispatch:e}}))(Object(Ce.geolocated)({positionOptions:{enableHighAccuracy:!1},userDecisionTimeout:5e3})(we)),Le={};function Ge(e,t){var a=null;return function(){var r=this,n=arguments;clearTimeout(a),a=setTimeout((function(){return e.apply(r,n)}),t)}}var Be=function(e){Object(K.a)(a,e);var t=Object(z.a)(a);function a(){var e;Object(_.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).map=null,e.layerGroup=null,e.icons={},e.state={lat:e.props.center.lat,lng:e.props.center.lng,zoom:17},e.getIcon=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"green",a=e.icons[t];if(a)return a;var r=new ye.a.Icon({iconUrl:"https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-".concat(t,".png"),shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]});return e.icons[t]=r,r},e.getMedicalStores=function(){return e.props.nearByMasks.map((function(e){return Object(l.a)(Object(l.a)({lat:e.geometry.coordinates[1],lng:e.geometry.coordinates[0]},e.properties),{},{name:e.properties.name,address:e.properties.address,time:"08:00~21:30",phone:e.properties.phone,leftMask:{adult:e.properties.mask_adult,children:e.properties.mask_child}})}))},e.getMarker=function(t){var a,r=e.getIcon("green"),n=e.getIcon("gold"),c=e.getIcon("red"),s=e.props.maskType,o=t.leftMask.adult,i=t.leftMask.children;return ye.a.marker([t.lat,t.lng],{icon:(a=function(e){return"child"===e?i:"adult"===e?o:i+o}(s),a>30?r:a<=30&&a>0?n:c)})},e.renderMarker=function(){var t=e.getMedicalStores();e.layerGroup.clearLayers(),t.forEach((function(t){var a=e.getMarker(t).addTo(e.layerGroup),r=ge.a.renderToString(Object(J.jsx)(Me,{medicalStore:t}));a.bindPopup(r,{className:"popupCustom"}),t.lat===e.props.center.lat&&t.lng===e.props.center.lng&&a.openPopup()}))},e}return Object(O.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.AsyncMethods.getMaskData().then().catch((function(e){return console.error(e)}));var t=ye.a.map("mapid").setView([this.state.lat,this.state.lng],this.state.zoom);ye.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1}).addTo(t),t.on("moveend",(function(a){var r=t.getCenter();e.setState({lat:r.lat,lng:r.lng}),e.props.actions.setMapCenter(r)})),this.map=t,this.layerGroup=ye.a.layerGroup().addTo(t)}},{key:"componentDidUpdate",value:function(e){var t=this;this.map&&(this.props.center.fly&&this.map.flyTo(this.props.center,18),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,a=Le["".concat(e)];if(a)return a;var r=Ge((function(e){return e()}),t);return Le["".concat(e)]=r,r}("renderMarker")((function(){return t.renderMarker(t.map)})))}},{key:"render",value:function(){return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(Re,{}),Object(J.jsx)("div",{id:"mapid",className:Ae.a.content})]})}}]),a}(n.a.Component),Ie=Object(o.b)((function(e){return{center:p.Selector.getMapCenter(e),maskType:p.Selector.getMaskType(e),maskData:E.Selector.getMaskData(e),nearByMasks:E.Selector.getNearByMasks(e)}}),(function(e){var t={setMapCenter:p.ActionCreator.setMapCenter};return{actions:Object(i.a)(t,e),dispatch:e}}))(Be),Pe=function(e){return Object(J.jsxs)("div",{className:"flex-col relative h-screen w-screen",children:[Object(J.jsx)(_e,{}),Object(J.jsx)(oe,{}),Object(J.jsx)(fe,{}),Object(J.jsx)(re,{}),Object(J.jsx)(Ie,{})]})},Ue=(a(153),a(154),a(155),a(156),Object(J.jsx)(o.a,{store:U(),children:Object(J.jsx)(Pe,{})}));s.a.render(Ue,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},29:function(e,t,a){e.exports={adult_mask:"Tooltip_adult_mask__2xWlT",children_mask:"Tooltip_children_mask__3W61D",text_name:"Tooltip_text_name__1sRnT",text_address:"Tooltip_text_address__6QtQh",time_letter:"Tooltip_time_letter__3WnV2",phone_letter:"Tooltip_phone_letter__OMrgf",card_root:"Tooltip_card_root__2KC-4",text_root:"Tooltip_text_root__10nka"}},34:function(e,t,a){e.exports={root:"Toolbar_root__RBAOB",center_content:"Toolbar_center_content__2DNCu",center_span:"Toolbar_center_span__ACh1S",right_content:"Toolbar_right_content__2-Ayx",tooltip_span:"Toolbar_tooltip_span__3cSGP",tooltip_button:"Toolbar_tooltip_button__1xvBj",tooltip:"Toolbar_tooltip__1ToF6",input:"Toolbar_input__1T2Fv",link:"Toolbar_link__sFkFj",link_text:"Toolbar_link_text__3pVTn",right_p:"Toolbar_right_p__pK4SD"}},39:function(e,t,a){e.exports={content:"Navbar_content__zed77",setting:"Navbar_setting__1KffL",adult_mask:"Navbar_adult_mask__2CaqS",children_mask:"Navbar_children_mask__Zu0ks",search_root:"Navbar_search_root__2THiG",card_root:"Navbar_card_root__2fg19"}},52:function(e,t,a){e.exports={root:"Hint_root__2JxGt",all_type:"Hint_all_type__36N_U",many_mask:"Hint_many_mask__97h0_",less_mask:"Hint_less_mask__13wLS",no_mask:"Hint_no_mask__31RI6"}},67:function(e,t,a){e.exports={root:"Footer_root__1raA_",link:"Footer_link__19_ri"}},93:function(e,t,a){e.exports={content:"Map_content__3NY0G",adult_mask:"Map_adult_mask__3DSUL",children_mask:"Map_children_mask__1tT2R",card_root:"Map_card_root__27zLj",text_root:"Map_text_root__2qRJy",marker:"Map_marker__Kq2pV"}}},[[157,1,2]]]);
//# sourceMappingURL=main.d7c6fe7c.chunk.js.map