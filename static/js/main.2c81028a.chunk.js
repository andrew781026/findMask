(this["webpackJsonpfind-mask"]=this["webpackJsonpfind-mask"]||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/adult-face.e9100273.svg"},101:function(e,t,a){e.exports=a.p+"static/media/child-face.4856657c.svg"},108:function(e,t,a){e.exports=a(162)},159:function(e,t,a){},160:function(e,t,a){},161:function(e,t,a){},162:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),c=a.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(33),l=a(18),i=a(12),p={SET_MAP_CENTER:"[MAP] SET_MAP_CENTER",SET_DISTANCE:"[MAP] SET_DISTANCE",SET_MASK_TYPE:"[MAP] SET_MASK_TYPE",TOGGLE_DRAWER:"[MAP] TOGGLE_DRAWER"},u={mapCenter:{lat:25.03418,lng:121.554517},distance:{meter:500},maskType:"adult",drawerOpen:!1},m={ActionType:p,ActionCreator:{setMapCenter:function(e){return{type:p.SET_MAP_CENTER,Data:e}},setDistance:function(e){return{type:p.SET_DISTANCE,Data:e}},setMaskType:function(e){return{type:p.SET_MASK_TYPE,Data:e}},toggleDrawer:function(){return{type:p.TOGGLE_DRAWER}}},Reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.SET_MAP_CENTER:return Object(i.a)({},e,{mapCenter:t.Data});case p.SET_DISTANCE:return Object(i.a)({},e,{distance:t.Data});case p.SET_MASK_TYPE:return Object(i.a)({},e,{maskType:t.Data});case p.TOGGLE_DRAWER:return Object(i.a)({},e,{drawerOpen:!e.drawerOpen});default:return e}},Selector:{getMapCenter:function(e){return e.Map.mapCenter},getDistance:function(e){return e.Map.distance},getMaskType:function(e){return e.Map.maskType},getDrawerOpen:function(e){return e.Map.drawerOpen}},AsyncMethods:{}},d=a(46),_=a.n(d),h=a(57),f=a(17),E=a(10),g=a(86),v=a.n(g);function A(e){return O.apply(this,arguments)}function O(){return(O=Object(h.a)(_.a.mark((function e(t){var a,n,r,o,c,s,l,i,p,u,m,d,h,f,E;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.headers,n=void 0===a?{}:a,r=t.url,o=t.params,c=t.data,s=t.method,l=t.timeout,i=void 0===l?3e3:l,p=t.baseURL,u=void 0===p?"http://localhost:8009":p,m=t.resolve,d=t.reject,e.prev=1,h=r.startsWith("http"),e.next=5,v()({method:s,url:r,baseURL:h?void 0:u,headers:n,params:o,data:c,timeout:i});case 5:if(204!==(f=e.sent).status){e.next=10;break}m({}),e.next=20;break;case 10:return e.prev=10,e.next=13,f.data;case 13:E=e.sent,m(E),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(10),m({});case 20:e.next=25;break;case 22:e.prev=22,e.t1=e.catch(1),d(e.t1);case 25:case"end":return e.stop()}}),e,null,[[1,22],[10,17]])})))).apply(this,arguments)}var k=function(){function e(){Object(f.a)(this,e)}return Object(E.a)(e,null,[{key:"fetchGet",value:function(e){var t=e.url,a=e.params,n=e.resolve,r=e.reject,o=e.timeout;return A({url:t,resolve:n,reject:r,method:"GET",params:a,timeout:void 0===o?void 0:o})}},{key:"fetchPost",value:function(e){var t=e.url,a=e.params,n=e.jsonBody,r=e.resolve,o=e.reject,c=e.timeout;return A({url:t,resolve:r,reject:o,method:"POST",params:a,data:n,timeout:void 0===c?void 0:c})}},{key:"fetchPut",value:function(e){var t=e.url,a=e.params,n=e.jsonBody,r=e.resolve,o=e.reject,c=e.timeout;return A({url:t,resolve:r,reject:o,method:"PUT",params:a,data:n,timeout:void 0===c?void 0:c})}},{key:"fetchPatch",value:function(e){var t=e.url,a=e.params,n=e.jsonBody,r=e.resolve,o=e.reject,c=e.timeout;return A({url:t,resolve:r,reject:o,method:"PATCH",params:a,data:n,timeout:void 0===c?void 0:c})}},{key:"fetchDelete",value:function(e){var t=e.url,a=e.params,n=e.jsonBody,r=e.resolve,o=e.reject,c=e.timeout;return A({url:t,resolve:r,reject:o,method:"DELETE",params:a,data:n,timeout:void 0===c?void 0:c})}}]),e}(),b={getStores:function(){return new Promise((function(e,t){return k.fetchGet({url:"https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json",resolve:e,reject:t})}))}},y=a(87),T={SET_MASK_DATA:"[MASK] SET_MASK_DATA"},N={setMaskData:function(e){return{type:T.SET_MASK_DATA,Data:e}}},x={maskData:[]},S={getMaskData:function(){return Object(h.a)(_.a.mark((function e(){var t,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=U(),e.next=3,b.getStores();case 3:return a=e.sent,t(N.setMaskData(a.features)),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))()}},M={ActionType:T,ActionCreator:N,Reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T.SET_MASK_DATA:return Object(i.a)({},e,{maskData:t.Data});default:return e}},Selector:{getMaskData:function(e){return e.Mask.maskData},getNearByMasks:function(e){var t=e.Mask.maskData,a=e.Map.distance.meter,n=e.Map.mapCenter;return t.filter((function(e){return Object(y.getDistance)({latitude:n.lat,longitude:n.lng},{latitude:e.geometry.coordinates[1],longitude:e.geometry.coordinates[0]})<=a}))}},AsyncMethods:S},j={SET_CUSTOMER_DATA:"[CUSTOMER] SET_CUSTOMER_DATA",SET_SINGLE_CUSTOMER:"[CUSTOMER] SET_SINGLE_CUSTOMER"},C={customerData:[],queryInfo:{},singleCustomer:{}},D={ActionType:j,ActionCreator:{setCustomerData:function(e){return{type:j.SET_CUSTOMER_DATA,Data:e}},setSingleCustomer:function(e){return{type:j.SET_SINGLE_CUSTOMER,Data:e}}},Reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.SET_CUSTOMER_DATA:return Object(i.a)({},e,{customerData:t.Data});case j.SET_SINGLE_CUSTOMER:return Object(i.a)({},e,{singleCustomer:t.Data});default:return e}},Selector:{getCustomerData:function(e){return e.Customer.customerData},getSingleCustomer:function(e){return e.Customer.singleCustomer}},AsyncMethods:{}},w={TOGGLE_DRAWER:"[GLOBAL] TOGGLE_DRAWER",OPEN_LOADING_BLOCK:"[GLOBAL] OPEN_LOADING_BLOCK",CLOSE_LOADING_BLOCK:"[GLOBAL] CLOSE_LOADING_BLOCK"},R={drawerOpen:!1,loadingBlockOpen:!1},L={ActionType:w,ActionCreator:{toggleDrawer:function(){return{type:w.TOGGLE_DRAWER}},openLoadingBlock:function(){return{type:w.OPEN_LOADING_BLOCK}},closeLoadingBlock:function(){return{type:w.CLOSE_LOADING_BLOCK}}},Reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.TOGGLE_DRAWER:return Object(i.a)({},e,{drawerOpen:!e.drawerOpen});case w.OPEN_LOADING_BLOCK:return Object(i.a)({},e,{loadingBlockOpen:!0});case w.CLOSE_LOADING_BLOCK:return Object(i.a)({},e,{loadingBlockOpen:!1});default:return e}},Selector:{getDrawerOpen:function(e){return e.Screen.Global.drawerOpen},getLoadingBlockOpen:function(e){return e.Screen.Global.loadingBlockOpen}}},G=Object(l.b)({Global:L.Reducer}),B=Object(l.b)({Map:m.Reducer,Mask:M.Reducer,Place:D.Reducer,Screen:G}),I=void 0,U=function(){return I.dispatch},P=a(25),K=a(26),z=a(27),Q=a(42),H=a.n(Q),X=a(5),W=a(193),V=a(194),Y=Object(X.a)({root:{padding:"10px"}})(W.a),J=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(P.a)(this,(e=Object(K.a)(t)).call.apply(e,[this].concat(r)))).state={value:a.props.value},a.handleChange=function(e,t){var n=e.target.value;a.setState({value:n}),a.props.onChange&&a.props.onChange(n)},a}return Object(z.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement(Y,{variant:"filled",fullWidth:!0,value:this.state.value,onChange:this.handleChange},(this.props.data||[]).map((function(e,t){return r.a.createElement(V.a,{key:"item-".concat(t),value:e.value},e.label)})))}}]),t}(r.a.Component),F=a(60),Z=a.n(F),q=a(91),$=a.n(q),ee=a(92),te=a.n(ee),ae=a(195),ne=a(197),re=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(P.a)(this,(e=Object(K.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e,t){return function(a){var n=e.lat,r=e.lng;t({lat:n,lng:r,fly:!0})}},a.getMedicalStores=function(){return a.props.nearByMasks.map((function(e){return Object(i.a)({lat:e.geometry.coordinates[1],lng:e.geometry.coordinates[0]},e.properties,{name:e.properties.name,address:e.properties.address,time:"08:00~21:30",phone:e.properties.phone,leftMask:{adult:e.properties.mask_adult,children:e.properties.mask_child}})}))},a}return Object(z.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=this.props.actions,n=a.setDistance,o=a.setMaskType,c=this.getMedicalStores();return r.a.createElement("div",{className:H.a.content},r.a.createElement("div",{className:H.a.search_root},r.a.createElement("div",null,"\u8ddd\u96e2"),r.a.createElement(J,{value:2,data:[{value:1,label:"100m"},{value:2,label:"500m"},{value:3,label:"1km"},{value:4,label:"3km"}],onChange:function(e){1===e?n({meter:100}):2===e?n({meter:500}):3===e?n({meter:1e3}):4===e&&n({meter:3e3})}}),r.a.createElement("div",{className:"mt-12"},"\u53e3\u7f69\u985e\u5225"),r.a.createElement(J,{value:1,data:[{value:1,label:"\u6210\u4eba"},{value:2,label:"\u5152\u7ae5"},{value:3,label:"\u6210\u4eba\u8207\u5152\u7ae5"}],onChange:function(e){1===e?o("adult"):2===e?o("child"):3===e&&o("adult & child")}})),r.a.createElement("div",{className:"px-8 py-4"},"\u5171 ",c?c.length:0," \u5bb6\u53ef\u8cb7\u53e3\u7f69"),c.map((function(a,n){return r.a.createElement("div",{className:H.a.card_root,key:"card-".concat(n),onClick:e.handleClick(a,t.actions.setMapCenter)},r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"flex-1",style:{fontWeight:900,color:"#848484"}},a.name),r.a.createElement("a",{href:"tel:+886-".concat(a.phone),onClick:function(e){e.stopPropagation()}},r.a.createElement("img",{src:$.a,style:{paddingRight:"3px",paddingLeft:"3px"},height:"20px",alt:"\u96fb\u8a71"}))),r.a.createElement("div",{style:{paddingTop:"2px"}},r.a.createElement("div",{style:{fontSize:"10px",color:"#848484"}},a.address)),r.a.createElement("div",{className:"flex items-center",style:{paddingTop:"2px",paddingBottom:"2px"}},r.a.createElement("img",{src:Z.a,style:{paddingRight:"3px",paddingLeft:"3px"},height:"10px",alt:"\u96fb\u8a71\u5716\u793a"}),r.a.createElement("div",{style:{verticalAlign:"middle",fontSize:"10px",color:"#a3a3a3"}},a.phone)),r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:H.a.adult_mask},r.a.createElement("div",{className:"flex flex-1"},"\u6210\u4eba\u53e3\u7f69"),r.a.createElement("div",null,a.leftMask.adult,"\u500b")),r.a.createElement("div",{className:H.a.children_mask},r.a.createElement("div",{className:"flex flex-1"},"\u5152\u7ae5\u53e3\u7f69"),r.a.createElement("div",null,a.leftMask.children,"\u500b"))))})))}}]),t}(r.a.Component),oe=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(P.a)(this,(e=Object(K.a)(t)).call.apply(e,[this].concat(r)))).toggleDrawer=function(){return a.props.actions.toggleDrawer()},a}return Object(z.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement(ae.a,{anchor:"left",open:this.props.drawerOpen,onOpen:this.toggleDrawer,onClose:this.toggleDrawer},r.a.createElement(re,this.props))}}]),t}(r.a.Component),ce=Object(s.b)((function(e){return{center:m.Selector.getMapCenter(e),drawerOpen:m.Selector.getDrawerOpen(e),maskData:M.Selector.getMaskData(e),nearByMasks:M.Selector.getNearByMasks(e)}}),(function(e){var t={setMapCenter:m.ActionCreator.setMapCenter,setDistance:m.ActionCreator.setDistance,setMaskType:m.ActionCreator.setMaskType,toggleDrawer:m.ActionCreator.toggleDrawer};return{actions:Object(l.a)(t,e),dispatch:e}}))((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne.a,{xsDown:!0},r.a.createElement(re,e)),r.a.createElement(ne.a,{smUp:!0},r.a.createElement(oe,e),r.a.createElement("div",{className:H.a.setting,onClick:function(){return setTimeout(e.actions.toggleDrawer,100)}},r.a.createElement("img",{src:te.a,height:"20px",alt:"\u8a2d\u5b9a"}))))})),se=a(67),le=a.n(se),ie=function(e){function t(){return Object(f.a)(this,t),Object(P.a)(this,Object(K.a)(t).apply(this,arguments))}return Object(z.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sm:flex xs:flex-col mb-4"},r.a.createElement("div",null,"| \u53e3\u7f69\u5730\u5716 ver 1.0 by",r.a.createElement("a",{className:le.a.link,href:"https://github.com/andrew781026/findMask",target:"_blank"},"Andrew")),r.a.createElement("div",null,r.a.createElement("span",{className:"sm:pl-12"},"| \u8cc7\u6599\u4f86\u6e90 : \u885b\u798f\u90e8")))}}]),t}(r.a.Component),pe=function(){return r.a.createElement("div",{className:"flex px-8 h-28 bg-black z-20 fixed pin-b pin-r ".concat(le.a.root)},r.a.createElement(ie,null))},ue=a(36),me=a.n(ue),de=a(93),_e=a.n(de),he=a(94),fe=a.n(he),Ee=a(95),ge=a.n(Ee),ve=(a(96),function(e){return r.a.createElement("div",{className:"flex h-80 shadow-b z-20 relative ".concat(me.a.root)},r.a.createElement("div",{className:"flex-col p-12 absolute pin-l font-900 text-white"},r.a.createElement("div",{className:"flex items-start"},r.a.createElement("img",{className:"pr-4",src:ge.a,alt:"\u65e5\u66c6\u5716\u793a"}),"2020/"),r.a.createElement("div",{className:"text-xl my-4"},"02/10(\u4e00)"),r.a.createElement("div",{className:"font-500",style:{fontSize:"12px"}},"\u5982\u4eca\u65e5\u8cfc\u8cb7\uff0c\u4e0b\u6b21\u6700\u5feb\u53ef\u8cfc\u8cb7\u65e5\u70ba02/17(\u4e00)")),r.a.createElement(ne.a,{xsDown:!0},r.a.createElement("div",{className:me.a.right_content},r.a.createElement("div",{className:"flex-col flex-1 text-white mt-4 mx-8"},r.a.createElement("p",{className:me.a.right_p},"\u6c11\u773e\u6301\u672c\u4eba \u300c\u5065\u4fdd\u5361\u300d \uff0c\u6bcf\u4eba\u73fe\u8cfc 2 \u7247\uff0c7 \u5929\u5167\u4e0d\u53ef\u91cd\u8907\u8cfc\u8cb7 "),r.a.createElement("p",{className:me.a.right_p},"\u53ef\u59d4\u8a17\u89aa\u53cb\u4ee3\u70ba\u8cfc\u8cb7\uff0c\u4e00\u4eba\u9650\u4ee3\u6301\u4e00\u5f35\u5065\u4fdd\u5361 "),r.a.createElement("p",{className:me.a.right_p},"\u5152\u7ae5\u53e3\u7f69\u50c5\u9650 12 \u6b72\u4ee5\u4e0b\u5152\u7ae5\u5065\u4fdd\u5361\u8cfc\u8cb7")),r.a.createElement("div",{className:me.a.link},r.a.createElement("img",{src:_e.a,alt:"\u5065\u4fdd\u7f72\u516c\u544a\u9023\u7d50"}),r.a.createElement("a",{href:fe.a,className:me.a.link_text},r.a.createElement("span",null,"\u885b\u670d\u90e8\u516c\u544a\u9023\u7d50"))))))}),Ae=a(52),Oe=a.n(Ae),ke=function(e){return r.a.createElement("div",{className:Oe.a.root},r.a.createElement("div",{className:Oe.a.many_mask},"31 ~"),r.a.createElement("div",{className:Oe.a.less_mask},"1 ~ 30"),r.a.createElement("div",{className:Oe.a.no_mask},"\u7121\u5eab\u5b58"))},be=a(97),ye=a.n(be),Te=a(98),Ne=a.n(Te),xe=(a(158),a(48)),Se=a.n(xe),Me=a(32),je=a.n(Me),Ce=a(99),De=a.n(Ce),we=a(100),Re=a.n(we),Le=a(101),Ge=a.n(Le),Be=function(e){var t=e.medicalStore;return r.a.createElement("div",{className:je.a.card_root},r.a.createElement("div",{className:je.a.text_root},r.a.createElement("div",{className:"pb-4"},r.a.createElement("span",{className:je.a.text_name},t.name)),r.a.createElement("div",{className:"pb-4"},r.a.createElement("span",{className:je.a.text_address},t.address)),r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"flex-1 flex items-center"},r.a.createElement("img",{className:"px-4",height:"12px",src:De.a,alt:"\u6642\u9418 :\u3000"}),r.a.createElement("span",{className:je.a.time_letter},t.time)),r.a.createElement("div",{className:"flex-1 flex items-center"},r.a.createElement("img",{className:"px-4",src:Z.a,height:"12px",alt:"\u96fb\u8a71 : "}),r.a.createElement("span",{className:je.a.phone_letter},t.phone)))),r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:je.a.adult_mask},r.a.createElement("div",null,"\u6210\u4eba\u53e3\u7f69\u6578\u91cf"),r.a.createElement("div",{className:"w-full flex items-end pt-4"},r.a.createElement("div",{className:"flex flex-1 justify-center items-center"},r.a.createElement("img",{src:Re.a,height:"37px",alt:"\u6210\u4eba\u982d\u50cf"})),r.a.createElement("div",null,r.a.createElement("span",{className:"text-16 pr-4"},t.leftMask.adult)," \u500b"))),r.a.createElement("div",{className:je.a.children_mask},r.a.createElement("div",null,"\u5152\u7ae5\u53e3\u7f69\u6578\u91cf"),r.a.createElement("div",{className:"w-full flex items-end pt-4"},r.a.createElement("div",{className:"flex flex-1 justify-center items-center"},r.a.createElement("img",{src:Ge.a,height:"40px",alt:"\u5152\u7ae5\u982d\u50cf"})),r.a.createElement("div",null,r.a.createElement("span",{className:"text-16 pr-4"},t.leftMask.children)," \u500b")))))},Ie=a(102),Ue=function(e){function t(){return Object(f.a)(this,t),Object(P.a)(this,Object(K.a)(t).apply(this,arguments))}return Object(z.a)(t,e),Object(E.a)(t,[{key:"componentDidUpdate",value:function(e){if(e.coords===this.props.coords)return null;if(this.props.isGeolocationAvailable)if(this.props.isGeolocationEnabled){if(this.props.coords){var t=this.props.coords.latitude,a=this.props.coords.longitude;this.props.coords.altitude,this.props.coords.heading,this.props.coords.speed;this.props.actions.setMapCenter({lat:t,lng:a,fly:!0})}}else;else;}},{key:"render",value:function(){return null}}]),t}(r.a.Component),Pe=Object(s.b)(null,(function(e){var t={setMapCenter:m.ActionCreator.setMapCenter};return{actions:Object(l.a)(t,e),dispatch:e}}))(Object(Ie.geolocated)({positionOptions:{enableHighAccuracy:!1},userDecisionTimeout:5e3})(Ue)),Ke=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(P.a)(this,(e=Object(K.a)(t)).call.apply(e,[this].concat(o)))).map=null,a.layerGroup=null,a.icons={},a.state={lat:a.props.center.lat,lng:a.props.center.lng,zoom:17},a.getIcon=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"green",t=a.icons[e];if(t)return t;var n=new Se.a.Icon({iconUrl:"https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-".concat(e,".png"),shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]});return a.icons[e]=n,n},a.getMedicalStores=function(){return a.props.nearByMasks.map((function(e){return Object(i.a)({lat:e.geometry.coordinates[1],lng:e.geometry.coordinates[0]},e.properties,{name:e.properties.name,address:e.properties.address,time:"08:00~21:30",phone:e.properties.phone,leftMask:{adult:e.properties.mask_adult,children:e.properties.mask_child}})}))},a.getMarker=function(e){var t,n=a.getIcon("green"),r=a.getIcon("gold"),o=a.getIcon("red"),c=a.props.maskType,s=e.leftMask.adult,l=e.leftMask.children;return Se.a.marker([e.lat,e.lng],{icon:(t=function(e){return"child"===e?l:"adult"===e?s:l+s}(c),t>30?n:t<=30&&t>0?r:o)})},a.renderMarker=function(){var e=a.getMedicalStores();a.layerGroup.clearLayers(),e.forEach((function(e){var t=a.getMarker(e).addTo(a.layerGroup),n=ye.a.renderToString(r.a.createElement(Be,{medicalStore:e}));t.bindPopup(n,{className:"popupCustom"}),e.lat===a.props.center.lat&&e.lng===a.props.center.lng&&a.props.center.fly}))},a}return Object(z.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this;M.AsyncMethods.getMaskData().then().catch((function(e){return console.error(e)}));var t=Se.a.map("mapid").setView([this.state.lat,this.state.lng],this.state.zoom);Se.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1}).addTo(t),t.on("moveend",(function(a){var n=t.getCenter();e.setState({lat:n.lat,lng:n.lng}),e.props.actions.setMapCenter(n)})),this.map=t,this.layerGroup=Se.a.layerGroup().addTo(t)}},{key:"componentDidUpdate",value:function(e){this.map&&(this.props.center.fly&&this.map.flyTo(this.props.center,18),this.renderMarker(this.map))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Pe,null),r.a.createElement("div",{id:"mapid",className:Ne.a.content}))}}]),t}(r.a.Component),ze=Object(s.b)((function(e){return{center:m.Selector.getMapCenter(e),maskType:m.Selector.getMaskType(e),maskData:M.Selector.getMaskData(e),nearByMasks:M.Selector.getNearByMasks(e)}}),(function(e){var t={setMapCenter:m.ActionCreator.setMapCenter};return{actions:Object(l.a)(t,e),dispatch:e}}))(Ke),Qe=function(e){return r.a.createElement("div",{className:"flex-col relative h-screen w-screen"},r.a.createElement(ve,null),r.a.createElement(pe,null),r.a.createElement(ke,null),r.a.createElement(ce,null),r.a.createElement(ze,null))},He=(a(159),a(160),a(161),r.a.createElement(s.a,{store:I=Object(l.c)(B,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},r.a.createElement(Qe,null)));c.a.render(He,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},32:function(e,t,a){e.exports={adult_mask:"Tooltip_adult_mask__3__B1",children_mask:"Tooltip_children_mask__3tqRH",text_name:"Tooltip_text_name__Woje3",text_address:"Tooltip_text_address__15glN",time_letter:"Tooltip_time_letter__3gx6D",phone_letter:"Tooltip_phone_letter__1I7rS",card_root:"Tooltip_card_root__14UF3",text_root:"Tooltip_text_root__Z6Rn_"}},36:function(e,t,a){e.exports={root:"Toolbar_root__1zS0b",center_content:"Toolbar_center_content__1Z9ZB",center_span:"Toolbar_center_span__Tmb10",right_content:"Toolbar_right_content__hqXVo",tooltip_span:"Toolbar_tooltip_span__3y1y1",tooltip_button:"Toolbar_tooltip_button__-1ysB",tooltip:"Toolbar_tooltip__26eL1",input:"Toolbar_input__2Qdoz",link:"Toolbar_link__nGVsi",link_text:"Toolbar_link_text__nguVe",right_p:"Toolbar_right_p__28X5d"}},42:function(e,t,a){e.exports={content:"Navbar_content__23tnZ",setting:"Navbar_setting__1ZBRj",adult_mask:"Navbar_adult_mask__1IcB6",children_mask:"Navbar_children_mask__1WUQT",search_root:"Navbar_search_root__3wQju",card_root:"Navbar_card_root__3Cpq3"}},52:function(e,t,a){e.exports={root:"Hint_root__1iNzE",all_type:"Hint_all_type__2FPlQ",many_mask:"Hint_many_mask__HNzHy",less_mask:"Hint_less_mask__26fPB",no_mask:"Hint_no_mask__18wmg"}},60:function(e,t,a){e.exports=a.p+"static/media/phone-solid.584f89de.svg"},67:function(e,t,a){e.exports={root:"Footer_root__3es0p",link:"Footer_link__flc3M"}},91:function(e,t,a){e.exports=a.p+"static/media/phone.578398ce.svg"},92:function(e,t,a){e.exports=a.p+"static/media/setting.6f1fd6d2.svg"},93:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAUCAIAAAAcIrrpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAGVSURBVDhPrZTZTsJAFIa9oqXL8GKtoGFRIKKiRcQHYHGPCRoUE+J2gYkmBmIRXOLyev7TskyHtoIh+S6G08OXmX9OOxcqajNkSl1FlxtJ6T4jXyXJ7jz/dCodOQgL3VzgZ8dGeM+rJ4tcz8S6sm67hI4hN5bFVpauX7dCJUfbxLqKju2I7Q0s6M+SJrwYMKrVKNs2TXbOjYhP69AptThb/EtX0pR6QmpmpNs02Q8P60o1GvguALYI/HTIXjTpiWyEjzzZo7dJXZ/bqEh3abYfeOrIYQRJU0s3h+yDj2tCL4fhUE4HrmaG+wtw1w1dYjuL7NXjBTs4lboKlmuF7R/ioiNHEeHNcrWypKyrZzG6No3gwyrNy9sFxnSD+YILa1QQ9mh6vwrydcrR74TXKRcJ6uoYtqtPWVfO4/LlEi5nVHSD10k3KXoc5soQHM2O6fFhbHd1a3emQazpV2oxHBDvA9vjg1t2PevdxCtlbtK83ObLizGdNSXic1+EEcO3iGvwwUVnAym+PxgUru6Pp+5/zFRX1H4BiyrG5MSrwYQAAAAASUVORK5CYII="},94:function(e,t,a){e.exports=a.p+"static/media/bulletin.02e4973d.jpg"},95:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAIAAACA18GRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAExSURBVEhLY2DbnkMtNOTMSrm02OBwK5ogEHHtyMu4vEz9QAOaOBDhNOvLnx8FV1ejCQKR4K6i////R52fhyYOROhmWR7tyr6yQnR3KcQsn9NTc6+sREbie8ogZoWemx15fi7Pzny4XhSzos/P+/fvH1Cp9sGmt7++5F5duf75BSAXGSjsq/7x91fE+TlH390Fcne9vgbXjmLWxhdQne13dhRdWw1Elz49gYjAQdWNDRCpe1/fQESALoVoRzFr56urEGmSgPy+Koj2IWTW8qenO+7sJAZ9+P2NgFluJychC+JBD769HTVrmJu18cVFoNya5+f67+0lBn38/R2oHnt+jL2w4N9/UDlBPNjz+jpcO4pZQGRzrCfv6sqCq6uIQTEX5vPuLIDrRTeLEkQ9s7bnAADezOZBisoYGwAAAABJRU5ErkJggg=="},98:function(e,t,a){e.exports={content:"Map_content__3G1Qr",adult_mask:"Map_adult_mask__3iVo5",children_mask:"Map_children_mask__2zy1i",card_root:"Map_card_root__1GwH5",text_root:"Map_text_root__2ohUx",marker:"Map_marker__1_Oj1"}},99:function(e,t,a){e.exports=a.p+"static/media/clock-regular.54749a5a.svg"}},[[108,1,2]]]);
//# sourceMappingURL=main.2c81028a.chunk.js.map