(function(e){function t(t){for(var n,o,s=t[0],l=t[1],c=t[2],m=0,p=[];m<s.length;m++)o=s[m],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},i=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/5e-homebrew-items/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"31e5":function(e,t,a){"use strict";var n=a("3ea9"),r=a.n(n);r.a},"3b7f":function(e,t,a){"use strict";var n=a("b322"),r=a.n(n);r.a},"3ea9":function(e,t,a){},"50fd":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("ce5b"),i=a.n(r);a("d1e78"),a("bf40");n["default"].use(i.a);var o={icons:{iconfont:"md"},theme:{dark:"dark"===localStorage.getItem("theme"),themes:{light:{primary:"#004d00",secondary:"#4D0026",accent:"#004d00"},dark:{primary:"#004d00",secondary:"#4D0026",accent:"#009900"}}}},s=new i.a(o),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("v-app",[a("div",[a("AppBar",{on:{"toggle-drawer":e.updateDrawer}}),a("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:e.openDrawer,callback:function(t){e.openDrawer=t},expression:"openDrawer"}},[a("NavList"),a("v-footer",{attrs:{absolute:""}},[e._v(" Version "+e._s(e.version)+" ")])],1),a("Item",{staticClass:"item-container"})],1)])],1)},c=[],u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app-bar",{attrs:{color:"#004d00",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){return e.$emit("toggle-drawer")}}}),a("img",{attrs:{src:e.logo}}),a("div",{staticClass:"title"},[a("v-toolbar-title",[e._v("5e Homebrew Items")])],1),a("v-spacer"),a("v-btn",{attrs:{color:"#004d00",depressed:""},on:{click:e.switchTheme}},[a("v-icon",[e._v(" invert_colors ")])],1)],1)},m=[],p={name:"AppBar",data:function(){return{logo:a("9b19")}},methods:{switchTheme:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark,localStorage.setItem("theme",this.$vuetify.theme.dark?"dark":"light")}}},d=p,f=(a("3b7f"),a("2877")),v=Object(f["a"])(d,u,m,!1,null,"651954c1",null),h=v.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"row-container"},[n("v-text-field",{staticClass:"name-input",attrs:{color:"accent",label:"Name",rules:e.reqRules},model:{value:e.item.name,callback:function(t){e.$set(e.item,"name",t)},expression:"item.name"}}),n("v-select",{staticClass:"type-input",attrs:{color:"accent",label:"Item Type",items:e.itemTypes,rules:e.reqRules},on:{change:e.changeItemType},model:{value:e.item.itemType,callback:function(t){e.$set(e.item,"itemType",t)},expression:"item.itemType"}}),n("v-select",{staticClass:"type-input",attrs:{color:"accent",label:"Rarity",items:e.rarities,rules:e.reqRules},model:{value:e.item.rarity,callback:function(t){e.$set(e.item,"rarity",t)},expression:"item.rarity"}},[n("v-tooltip",{attrs:{slot:"append-outer",bottom:""},slot:"append-outer",scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[n("v-icon",e._g({directives:[{name:"attrs",rawName:"v-attrs",value:r,expression:"attrs"}]},a),[e._v("info")])]}}])},[n("div",[n("img",{attrs:{src:a("6b2c"),alt:"Suggested Bonus and Spell Level"}})])])],1)],1),n("v-textarea",{attrs:{color:"accent",label:"Description",hint:"Markdown Syntax: **Bold**, ~~Strikethrough~~, *Italics*, > Quote, - Bullet List","persistent-hint":"",rules:e.reqRules,rows:1},model:{value:e.item.description,callback:function(t){e.$set(e.item,"description",t)},expression:"item.description"}}),n("div",{staticClass:"row-container"},[n("v-switch",{staticClass:"toggle-item",attrs:{color:"accent",label:"Require Attunement","hide-details":""},model:{value:e.item.reqAttune,callback:function(t){e.$set(e.item,"reqAttune",t)},expression:"item.reqAttune"}}),n("v-text-field",{directives:[{name:"show",rawName:"v-show",value:e.item.reqAttune,expression:"item.reqAttune"}],attrs:{color:"accent",label:"Attune Requirement",hint:"Any additional requirements for attunement","persistent-hint":""},model:{value:e.item.attuneRequirements,callback:function(t){e.$set(e.item,"attuneRequirements",t)},expression:"item.attuneRequirements"}})],1),n("v-autocomplete",{directives:[{name:"show",rawName:"v-show",value:"Weapon"===e.item.itemType,expression:"item.itemType === 'Weapon'"}],attrs:{color:"accent",label:"Weapon Type",items:e.weaponTypes},model:{value:e.item.itemSubType,callback:function(t){e.$set(e.item,"itemSubType",t)},expression:"item.itemSubType"}}),n("v-autocomplete",{directives:[{name:"show",rawName:"v-show",value:"Armour"===e.item.itemType,expression:"item.itemType === 'Armour'"}],attrs:{color:"accent",label:"Armour Type",items:e.armourTypes},model:{value:e.item.itemSubType,callback:function(t){e.$set(e.item,"itemSubType",t)},expression:"item.itemSubType"}}),n("div",{staticClass:"action-container"},[n("div",{staticClass:"actions-left"},[n("v-btn",{attrs:{color:"primary",dark:""},on:{click:e.loadExample}},[e._v("Load Example")]),n("v-btn",{staticStyle:{"margin-left":"8px"},attrs:{color:"primary",dark:""},on:{click:e.exportAsImage}},[e._v(" Save As Image ")])],1),n("div",{staticClass:"actions-right"},[n("v-btn",{attrs:{color:"primary",dark:""},on:{click:e.importConfig}},[e._v("Import")]),n("input",{ref:"uploader",staticStyle:{display:"none"},attrs:{type:"file",accept:"application/JSON"},on:{change:e.onFileUpload}}),n("v-btn",{staticStyle:{"margin-left":"8px"},attrs:{color:"primary",dark:""},on:{click:e.exportConfig}},[e._v("Export")])],1)]),n("div",{staticClass:"stat-block-container"},[n("StatBlock",{attrs:{id:"statBlock",item:e.item}})],1)],1)},y=[],g=(a("b0c0"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"stat-block-wrapper"},[a("div",{attrs:{id:"image-container"}},[a("StatBlockBorder"),a("div",{staticClass:"content-container"},[a("div",{staticClass:"name accent-color"},[e._v(e._s(e.item.name))]),a("span",{staticClass:"subtext"},[e._v(" "+e._s(e.item.itemType)+" "),e.item.itemSubType.length>0?a("span",[e._v(" ("+e._s(e.item.itemSubType)+") ")]):e._e(),e.item.itemType.length>0?a("span",[e._v(",")]):e._e(),e._v(" "+e._s(e.item.rarity)+" "),e.item.reqAttune?a("span",[e._v(" (requires attunement"),e.item.attuneRequirements.length>0?a("span",[e._v(" "+e._s(e.item.attuneRequirements))]):e._e(),e._v(") ")]):e._e()]),a("hr",{staticClass:"line-break"}),a("markdown-it-vue-light",{staticClass:"markdown-body description",attrs:{content:e.item.description}})],1),a("StatBlockBorder")],1)])}),w=[],k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"border-style"})},x=[],S={name:"StatBlockBorder"},_=S,T=(a("f4fa"),Object(f["a"])(_,k,x,!1,null,"da7de598",null)),C=T.exports,R=a("eb52"),q=a.n(R),A=(a("490b"),{name:"StatBlock",props:["item"],components:{StatBlockBorder:C,MarkdownItVueLight:q.a}}),B=A,O=(a("31e5"),Object(f["a"])(B,g,w,!1,null,null,null)),j=O.exports,$=a("c0e9"),L=a.n($),I={name:"Item",components:{StatBlock:j},data:function(){return{item:{name:"",description:"",reqAttune:!1,attuneRequirements:"",rarity:"",itemType:"",itemSubType:""},reqRules:[function(e){return!!e||"Required"}],rarities:["Common","Uncommon","Rare","Very Rare","Legendary","Artifact"],itemTypes:["Wonderous","Armour","Weapon"],armourTypes:["Padded","Leather","Studded Leather","Hide","Chain Shirt","Scale Mail","Breastplate","Half Plate","Ring Mail","Chain Mail","Splint","Plate","Shield"],weaponTypes:["Club","Dagger","Greatclub","Handaxe","Javelin","Light Hammer","Mace","Quarterstaff","Sickle","Spear","Crossbow, Light","Dart","Shortbow","Sling","Battleaxe","Flail","Glaive","Greataxe","Greatsword","Halberd","Lance","Longsword","Maul","Morningstar","Pike","Rapier","Scimitar","Shortsword","Trident","War Pick","Warhammer","Whip","Blowgun","Crossbow, hand","Crossbow, heavy","Longbow","Net"]}},methods:{changeItemType:function(){this.itemSubType=""},exportConfig:function(){var e=null!=this.item.name?"".concat(encodeURIComponent(this.item.name),".json"):"no_name.json",t=document.createElement("a"),a=new Blob([JSON.stringify(this.item)],{type:"application/json;charset=utf-8;"});t.href=URL.createObjectURL(a),t.download=e,document.body.appendChild(t),t.click()},importConfig:function(){this.$refs.uploader.click()},onFileUpload:function(e){var t=this,a=new FileReader;a.onload=function(e){try{t.item=JSON.parse(e.target.result)}catch(a){alert("Error Parsing File"),console.error(a)}},a.readAsText(e.target.files[0])},loadExample:function(){this.item={name:"Flame Tongue",reqAttune:!0,itemType:"Weapon",attuneRequirements:"",rarity:"Rare",description:"You can use a bonus action to speak this magic sword's command word, causing flames to erupt from the blade. These flames shed bright light in a 40-foot radius and dim light for an additional 40 feet. While the sword is ablaze, it deals an extra 2d6 fire damage to any target it hits. The flames last until you use a bonus action to speak the command word again or until you drop or sheathe the sword."},this.item.itemSubType="Rapier"},exportAsImage:function(){var e=this;window.scrollTo(0,0);var t=document.querySelector("#image-container");L()(t,{backgroundColor:null,width:t.clientWidth,height:t.clientHeight,scrollX:0,scrollY:0}).then((function(t){var a="".concat(e.item.name,".png"),n=t.toDataURL("image/png",1),r=document.createElement("a");"string"===typeof r.download?(r.href=n,r.download=a,document.body.appendChild(r),r.click(),document.body.removeChild(r)):window.open(n)}))}}},D=I,E=(a("967a"),Object(f["a"])(D,b,y,!1,null,"5f3f9608",null)),M=E.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-list",[a("v-list-item",{attrs:{href:"https://tjcowx.github.io/5e-homebrew-monsters/"}},[a("v-list-item-content",[e._v("5e Homebrew Monsters")])],1),a("v-divider"),a("v-list-item",{attrs:{href:"https://github.com/TJCowx/5e-homebrew-items"}},[a("v-list-item-content",[e._v("View on Github")])],1)],1)},P=[],W={name:"NavList"},H=W,J=Object(f["a"])(H,N,P,!1,null,null,null),U=J.exports,F=a("9224"),G={name:"App",components:{AppBar:h,Item:M,NavList:U},data:function(){return{openDrawer:!1,version:F["a"]}},methods:{updateDrawer:function(){this.openDrawer=!this.openDrawer}}},V=G,Q=(a("034f"),Object(f["a"])(V,l,c,!1,null,null,null)),Y=Q.exports;n["default"].config.productionTip=!1,new n["default"]({vuetify:s,render:function(e){return e(Y)}}).$mount("#app")},"6b2c":function(e,t,a){e.exports=a.p+"img/rarity-suggestion.aab633b9.png"},"85ec":function(e,t,a){},9224:function(e){e.exports=JSON.parse('{"a":"1.1.2"}')},"967a":function(e,t,a){"use strict";var n=a("50fd"),r=a.n(n);r.a},"9b19":function(e,t,a){e.exports=a.p+"img/logo.86606679.svg"},b322:function(e,t,a){},c5a9:function(e,t,a){},f4fa:function(e,t,a){"use strict";var n=a("c5a9"),r=a.n(n);r.a}});
//# sourceMappingURL=app.378d2244.js.map