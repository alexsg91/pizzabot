(function(t){function e(e){for(var i,s,c=e[0],r=e[1],p=e[2],u=0,g=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&g.push(a[s][0]),a[s]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);l&&l(e);while(g.length)g.shift()();return o.push.apply(o,p||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,c=1;c<n.length;c++){var r=n[c];0!==a[r]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},a={app:0},o=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/pizzabot/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var l=r;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0deb":function(t,e,n){t.exports=n.p+"img/basilico.089c10bb.png"},1:function(t,e){},"11a3":function(t,e,n){t.exports=n.p+"img/grana.95ba11cf.png"},1857:function(t,e,n){t.exports=n.p+"img/salmone.65a09026.png"},1942:function(t,e,n){"use strict";var i=n("b2cc"),a=n.n(i);a.a},"1be2":function(t,e,n){t.exports=n.p+"img/patate_arrosto.79a5c981.png"},"1bfe":function(t,e,n){t.exports=n.p+"img/gamberetti.17a4d024.png"},"1c40":function(t,e,n){},2:function(t,e){},"25e6":function(t,e,n){t.exports=n.p+"img/panna.a133d419.png"},"2e58":function(t,e,n){t.exports=n.p+"img/cozze.3dcfa2a8.png"},3:function(t,e){},3241:function(t,e,n){t.exports=n.p+"img/cipolle.c565d269.png"},"381d":function(t,e,n){t.exports=n.p+"img/surimi.18ce3139.png"},"3a97":function(t,e,n){t.exports=n.p+"img/acciughe.0152807b.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("router-view")],1)},o=[],s=(n("e319"),n("2877")),c=n("6544"),r=n.n(c),p=n("7496"),l={},u=Object(s["a"])(l,a,o,!1,null,"1e870d37",null),g=u.exports;r()(u,{VApp:p["a"]});var f=n("f309");n("bf40");i["a"].use(f["a"]);var d=new f["a"]({icons:{iconfont:"md"},theme:{dark:!1},themes:{light:{primary:"#4682b4",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"}}}),m=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("div",{staticClass:"text-center title-box"},[n("div",{staticClass:"darkBg pb-4"},[n("p",{staticClass:"pt-12 textWhite titolo"},[t._v("PizzaBot 3000")]),n("v-divider",{staticClass:"mx-auto",attrs:{color:"white",width:"300px"}}),n("h3",{staticClass:"textWhite textFont"},[t._v("Fatti una pizza emozionante")])],1),n("v-row",{staticClass:"mt-8",staticStyle:{"min-height":"60px"}},[n("v-row",{staticClass:"mx-auto my-auto",staticStyle:{"max-width":"800px"},attrs:{"no-gutters":""}},[n("v-col",{staticClass:"my-auto",attrs:{cols:"12",md:"6",lg:"3",xl:"3"}},[n("v-btn",{staticClass:"foodButton mt-4 mt-lg-0",style:t.activeColor("rgb(208, 36, 32)",t.vegetables),attrs:{height:t.vegetables?"60px":"40px"},on:{click:function(e){return t.toggleVeg()}}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-leaf")]),t._v(" Verdure ")],1)],1),n("v-col",{staticClass:"my-auto",attrs:{cols:"12",md:"6",lg:"3",xl:"3"}},[n("v-btn",{staticClass:"foodButton mt-4 mt-lg-0",style:t.activeColor("rgb(208, 36, 32)",t.latticini),attrs:{height:t.latticini?"60px":"40px"},on:{click:function(e){return t.toggleLact()}}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-cheese")]),t._v(" Latticini ")],1)],1),n("v-col",{staticClass:"my-auto",attrs:{cols:"12",md:"6",lg:"3",xl:"3"}},[n("v-btn",{staticClass:"foodButton mt-4 mt-lg-0",style:t.activeColor("rgb(208, 36, 32)",t.meat),attrs:{height:t.meat?"60px":"40px"},on:{click:function(e){return t.toggleMeat()}}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-cow")]),t._v(" Carne ")],1)],1),n("v-col",{staticClass:"my-auto",attrs:{cols:"12",md:"6",lg:"3",xl:"3"}},[n("v-btn",{staticClass:"foodButton mt-4 mt-lg-0",style:t.activeColor("rgb(208, 36, 32)",t.fish),attrs:{height:t.fish?"60px":"40px"},on:{click:function(e){return t.toggleFish()}}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-fish")]),t._v(" Pesce ")],1)],1)],1)],1),n("div",{staticClass:"my-2",staticStyle:{height:"20px"}},[n("p",{directives:[{name:"show",rawName:"v-show",value:!t.foodHint,expression:"!foodHint"}],staticClass:"textWhite hint textFont"},[t._v("seleziona un ingrediente")])]),n("div",{staticClass:"mt-6 mx-auto"},[n("div",{staticClass:"col-6 mx-auto ingNumberRow"},[n("label",{staticClass:"text-center textWhite ingredientsNumber textFont",attrs:{for:"slider"}},[t._v("NUMERO INGREDIENTI: "+t._s(t.numberOfToppings))]),n("v-slider",{attrs:{id:"slider",max:"10",color:"#fee119","track-color":"white",required:""},model:{value:t.numberOfToppings,callback:function(e){t.numberOfToppings=e},expression:"numberOfToppings"}}),n("div",{staticStyle:{height:"20px"}},[n("p",{directives:[{name:"show",rawName:"v-show",value:!t.numbHint,expression:"!numbHint"}],staticClass:"textWhite hint textFont"},[t._v("Quanti ingredienti vuoi?")])])],1)]),n("v-row",[n("v-btn",{staticClass:"mt-4 mb-6 text-center mx-auto ingredientsNumber textFont",staticStyle:{"border-radius":"40px","font-weight":"bold"},attrs:{height:"70px",href:"#result",disabled:!t.valid,color:"#fee119",width:"30%",tile:""},on:{click:function(e){return t.createPizza()}}},[t._v(" Fame ")])],1)],1),n("div",{attrs:{id:"resultBackground"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.generated,expression:"generated"}],staticClass:"container"},[n("v-row",{staticClass:"pa-4 mx-auto pa-md-12",attrs:{id:"result"}},[n("v-col",{staticClass:"mb-12",attrs:{cols:"12"}},[n("h1",{staticClass:"text-center titolo"},[t._v("la tua Pizza")])]),n("v-col",{staticClass:"mx-auto pa-4 pa-lg-12 textFont ingredients",attrs:{cols:"12"}},[n("v-row",{staticClass:"ma-xs-2 ma-sm-4 mx-md-6 mx-lg-12 mx-xl-12"},[n("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[n("v-btn",{staticClass:"mb-6 text-center mx-auto textFont",staticStyle:{"border-radius":"40px","font-weight":"bold"},attrs:{height:"50px",color:"#fee119","min-width":"200px",width:"100%",tile:""},on:{click:function(e){return t.saveJPEG()}}},[t._v(" Salva pizza ")])],1),n("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[n("v-btn",{staticClass:"mb-6 text-center mx-auto textFont",staticStyle:{"border-radius":"40px","font-weight":"bold"},attrs:{height:"50px",color:"#fee119","min-width":"200px",width:"100%",tile:""},on:{click:function(e){return t.createPizza()}}},[t._v(" Rigenera ")])],1)],1),n("div",{staticClass:"text-left mx-auto resultcontainer"},[n("p",{staticClass:"pizzatitle"},[t._v("BASE")]),t.basePizza?n("p",{staticClass:"text-capitalize"},[t._v(t._s(t._f("underSpace")(t.basePizza)))]):t._e(),n("p",{staticClass:"pizzatitle pt-4"},[t._v("CONDIMENTO")]),t._l(t.toppingList,(function(e){return n("span",{key:e,staticClass:"text-capitalize text-center"},[t._v(" "+t._s(t._f("underSpace")(e))+" ")])}))],2)],1),n("v-col",{staticClass:"pa-12 unclickable",attrs:{cols:"12"}},[n("canvas",{ref:"can",staticStyle:{margin:"auto"},attrs:{width:"500",height:"500"}})])],1)],1)])])},v=[],b=(n("caad"),n("a434"),n("d3b7"),n("25f0"),n("2532"),n("2909")),x=n("7a94"),w={name:"Home",data:function(){return{generated:!1,numberOfToppings:0,latticini:!1,meat:!1,fish:!1,vegetables:!1,warning:!1,base:["pomodoro_e_mozzarella","bianca","rossa"],listaVerdure:["cipolle","peperoni","melanzane","zucchine","carciofi","olive","olive_verdi","funghi_champignon","patate_arrosto","patate_fritte","pomodorini","pesto","rucola","basilico"],listaFrutta:["ananas","pere"],listaLatticini:["gorgonzola","ricotta","provola","pecorino","grana","panna","bufala"],listaCarni:["cavallo","wurstel","pancetta","speck","salame","salsiccia_fresca","guanciale","prosciutto_cotto","prosciutto_crudo","mortadella"],listaPesci:["tonno","salmone","gamberi","gamberetti","surimi","acciughe","cozze","calamari","vongole"],listaPrioritaria:["pesto"],basePizza:null,toppingList:[],canvasRef:null,canvasInstance:null}},computed:{canvasSize:function(){return window.innerWidth.toString()+"px"},foodHint:function(){return!!(this.meat||this.fish||this.vegetables||this.latticini)},numbHint:function(){return!!this.numberOfToppings},valid:function(){return!(!this.foodHint||!this.numbHint)}},components:{},methods:{toggleMeat:function(){this.meat?this.meat=!1:this.meat=!0},toggleFish:function(){this.fish?this.fish=!1:this.fish=!0},toggleLact:function(){this.latticini?this.latticini=!1:this.latticini=!0},toggleVeg:function(){this.vegetables?this.vegetables=!1:this.vegetables=!0},activeColor:function(t,e){return e?"color: white; background-color :"+t:"background-color : white"},activeIcon:function(t){return t?"color: white":void 0},saveJPEG:function(){var t=this.$refs.can,e=1,n=t.toDataURL({multiplier:e,width:t.width,height:t.height,left:0,top:0,format:"jpg"}),i=document.createElement("a");i.download="pizza"+Date.now()+".png",i.href=n,document.body.appendChild(i),i.click(),document.body.removeChild(i)},addImageTopping:function(t,e){setTimeout((function(){var i=new Image;i.crossOrigin="Anonymous",i.src=n("b991")("./"+t+".png"),i.onload=function(t){t=new x["fabric"].Image(i,{left:0,top:0,scaleX:window.innerWidth>576?.5:.25,scaleY:window.innerWidth>576?.5:.25,selectable:!1,eventable:!1,src:i.src,id:0}),e.add(t)}}),200)},addImageBase:function(t,e){setTimeout((function(){var i=new Image;i.crossOrigin="Anonymous",i.src=n("e251")("./"+t+".png"),i.onload=function(t){t=new x["fabric"].Image(i,{left:0,top:0,scaleX:window.innerWidth>576?.5:.25,scaleY:window.innerWidth>576?.5:.25,selectable:!1,eventable:!1,src:i.src,id:0}),e.add(t)}}),100)},createPizza:function(){if(this.vegetables||this.meat||this.fish||this.latticini){this.canvasRef&&this.canvasInstance&&this.canvasInstance.clear(),this.canvasRef||this.canvasInstance||(this.canvasRef=this.$refs.can,this.canvasInstance=new x["fabric"].Canvas(this.canvasRef));var t=Math.floor(Math.random()*this.base.length),e=this.base[t];this.basePizza=e,this.addImageBase(e,this.canvasInstance);var n=[],i=[];for(this.toppingList=[],this.warning=!1,this.vegetables&&(n.push.apply(n,Object(b["a"])(this.listaVerdure)),n.push.apply(n,Object(b["a"])(this.listaFrutta))),this.meat&&n.push.apply(n,Object(b["a"])(this.listaCarni)),this.latticini&&n.push.apply(n,Object(b["a"])(this.listaLatticini)),this.fish&&n.push.apply(n,Object(b["a"])(this.listaPesci)),s=0;s<this.numberOfToppings;s++){var a=Math.floor(Math.random()*n.length);if(i.push(n[a]),n.splice(a,1),this.toppingList.push(i[s]),this.listaPrioritaria.includes(i[s])){var o=i[s];this.addImageTopping(o,this.canvasInstance),console.log(o)}}console.log(i);var s=0;for(s=0;s<i.length;s++)if(!this.listaPrioritaria.includes(i[s])){var c=i[s];this.addImageTopping(c,this.canvasInstance),console.log(c)}this.generated=!0}else this.warning=!0}},filters:{underSpace:function(t){return t.replaceAll("_"," ")}}},_=w,z=(n("1942"),n("8336")),y=n("62ad"),C=n("ce7e"),O=n("132d"),k=n("0fd9"),P=n("ba0d"),I=Object(s["a"])(_,h,v,!1,null,"d50825ce",null),S=I.exports;r()(I,{VBtn:z["a"],VCol:y["a"],VDivider:C["a"],VIcon:O["a"],VRow:k["a"],VSlider:P["a"]}),i["a"].use(m["a"]);var j=[{path:"/",name:"Home",component:S}],T=new m["a"]({mode:"history",base:"/pizzabot/",routes:j}),F=T;n("7e79");i["a"].config.productionTip=!1,new i["a"]({vuetify:d,router:F,render:function(t){return t(g)}}).$mount("#app")},"60d0":function(t,e,n){t.exports=n.p+"img/mortadella.4b137783.png"},"61d0":function(t,e,n){t.exports=n.p+"img/gamberi.fd1395d3.png"},"62f6":function(t,e,n){t.exports=n.p+"img/tonno.05260fb0.png"},6352:function(t,e,n){t.exports=n.p+"img/rucola.ed8adc61.png"},6376:function(t,e,n){t.exports=n.p+"img/wurstel.b477c38d.png"},"6f05":function(t,e,n){t.exports=n.p+"img/pomodoro_e_mozzarella.4060e401.png"},"6f59":function(t,e,n){t.exports=n.p+"img/pomodorini.99425e4f.png"},"717f":function(t,e,n){t.exports=n.p+"img/pancetta.06a3d6fc.png"},7293:function(t,e,n){t.exports=n.p+"img/funghi_champignon.0241dd90.png"},"78e8":function(t,e,n){t.exports=n.p+"img/provola.5135537d.png"},"7e30":function(t,e,n){t.exports=n.p+"img/bianca.a4f17691.png"},"7e79":function(t,e,n){},8222:function(t,e,n){t.exports=n.p+"img/pere.5c1d5fad.png"},"8e6e":function(t,e,n){t.exports=n.p+"img/speck.32489168.png"},"8fea":function(t,e,n){t.exports=n.p+"img/zucchine.fc260d60.png"},"9aa7":function(t,e,n){t.exports=n.p+"img/rossa.9d277582.png"},ac0f:function(t,e,n){t.exports=n.p+"img/gorgonzola.57096b23.png"},b2cc:function(t,e,n){},b60c:function(t,e,n){t.exports=n.p+"img/olive_verdi.e8317f73.png"},b619:function(t,e,n){t.exports=n.p+"img/guanciale.3829bf0b.png"},b704:function(t,e,n){t.exports=n.p+"img/ananas.445727fa.png"},b991:function(t,e,n){var i={"./acciughe.png":"3a97","./ananas.png":"b704","./basilico.png":"0deb","./bufala.png":"f3a4","./calamari.png":"f0a9","./capperi.png":"bfff","./carciofi.png":"c3cc","./cavallo.png":"c38e","./cipolle.png":"3241","./cozze.png":"2e58","./funghi_champignon.png":"7293","./gamberetti.png":"1bfe","./gamberi.png":"61d0","./gorgonzola.png":"ac0f","./grana.png":"11a3","./guanciale.png":"b619","./melanzane.png":"c24b","./mortadella.png":"60d0","./olive_nere.png":"f1dd","./olive_verdi.png":"b60c","./pancetta.png":"717f","./panna.png":"25e6","./patate_arrosto.png":"1be2","./patatine_fritte.png":"c5b6","./pecorino.png":"e4e4","./peperoni.png":"c369","./pere.png":"8222","./pesto.png":"f60f","./pomodorini.png":"6f59","./prosciutto_cotto.png":"c147","./prosciutto_crudo.png":"fb71","./provola.png":"78e8","./ricotta.png":"de63","./rucola.png":"6352","./salame.png":"c3b8","./salmone.png":"1857","./salsiccia_fresca.png":"c1ac","./speck.png":"8e6e","./surimi.png":"381d","./tonno.png":"62f6","./vongole.png":"cbe6","./wurstel.png":"6376","./zucchine.png":"8fea"};function a(t){var e=o(t);return n(e)}function o(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=o,t.exports=a,a.id="b991"},bfff:function(t,e,n){t.exports=n.p+"img/capperi.1034e948.png"},c147:function(t,e,n){t.exports=n.p+"img/prosciutto_cotto.11f5692a.png"},c1ac:function(t,e,n){t.exports=n.p+"img/salsiccia_fresca.0ded15d9.png"},c24b:function(t,e,n){t.exports=n.p+"img/melanzane.f8d0b755.png"},c369:function(t,e,n){t.exports=n.p+"img/peperoni.bd5374fd.png"},c38e:function(t,e,n){t.exports=n.p+"img/cavallo.9a5f2da0.png"},c3b8:function(t,e,n){t.exports=n.p+"img/salame.f0579ca9.png"},c3cc:function(t,e,n){t.exports=n.p+"img/carciofi.16db3c80.png"},c5b6:function(t,e,n){t.exports=n.p+"img/patatine_fritte.fd210d84.png"},cbe6:function(t,e,n){t.exports=n.p+"img/vongole.ffa87c52.png"},de63:function(t,e,n){t.exports=n.p+"img/ricotta.a92db8a3.png"},e251:function(t,e,n){var i={"./bianca.png":"7e30","./pomodoro_e_mozzarella.png":"6f05","./rossa.png":"9aa7"};function a(t){var e=o(t);return n(e)}function o(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=o,t.exports=a,a.id="e251"},e319:function(t,e,n){"use strict";var i=n("1c40"),a=n.n(i);a.a},e4e4:function(t,e,n){t.exports=n.p+"img/pecorino.0f6026f9.png"},f0a9:function(t,e,n){t.exports=n.p+"img/calamari.35874cf7.png"},f1dd:function(t,e,n){t.exports=n.p+"img/olive_nere.fd13c039.png"},f3a4:function(t,e,n){t.exports=n.p+"img/bufala.413eb53e.png"},f60f:function(t,e,n){t.exports=n.p+"img/pesto.9bb9d5f4.png"},fb71:function(t,e,n){t.exports=n.p+"img/prosciutto_crudo.3d0e614b.png"}});
//# sourceMappingURL=app.5709d84c.js.map