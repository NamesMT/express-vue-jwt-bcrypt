(function(){var e={422:function(e){e.exports={getErr:(e,t=!1)=>t?e.errors[0].message:e.errors[0],isEmptyArray:(e,t)=>{for(i=0,count=0;i<e.length;++i)if(!e[i]||"object"===typeof e[i]&&0===Object.keys(e[i]).length){if(!t)return!0;++count}if(count===e.length)return!0},pick:(e,t)=>t.reduce(((t,r)=>({...t,[r]:e[r]})),{})}},673:function(e,t,r){"use strict";var a=r(963),n=r(252);const o={class:"bg-white pb-4 px-4 rounded-md w-full"};function s(e,t,r,a,s,i){const l=(0,n.up)("Header"),d=(0,n.up)("router-view"),c=(0,n.up)("ErrorPopup");return(0,n.wg)(),(0,n.j4)("div",null,[(0,n.Wm)("div",o,[(0,n.Wm)(l,{onLogoutClicked:i.doLogout,onConfirmPatch:i.applyChanged,onSearch:i.searchUpdate,changed_ids:s.changed_ids,title:e.$route.name},null,8,["onLogoutClicked","onConfirmPatch","onSearch","changed_ids","title"]),(0,n.Wm)(d,{onLoginSubmit:i.doLogin,onDataChanged:i.markChanged,changed_ids:s.changed_ids,users:s.users,table_show:["Username","Email","Birthdate"]},null,8,["onLoginSubmit","onDataChanged","changed_ids","users"])]),s.error_popup?((0,n.wg)(),(0,n.j4)(c,{key:0,onClick:t[1]||(t[1]=e=>s.error_popup=""),error_popup:s.error_popup},null,8,["error_popup"])):(0,n.kq)("",!0)])}var i=r(669),l=r.n(i),d=r(577);const c={class:"flex justify-between w-full pt-6"},u={class:"ml-3 font-bold"},p={class:"w-full flex justify-end px-2 mt-2"};function h(e,t,r,a,o,s){const i=(0,n.up)("DotDown"),l=(0,n.up)("SearchBar");return(0,n.wg)(),(0,n.j4)(n.HY,null,[(0,n.Wm)("div",c,[(0,n.Wm)("p",u,(0,d.zw)(r.title),1),(0,n.Wm)(i,{onLogoutClicked:t[1]||(t[1]=t=>e.$emit("logout-clicked"))})]),(0,n.Wm)("div",p,[(0,n.Wm)(l,{onSearch:t[2]||(t[2]=t=>e.$emit("search",t))})]),r.changed_ids.size?((0,n.wg)(),(0,n.j4)("button",{key:0,onClick:t[3]||(t[3]=t=>e.$emit("confirm-patch")),class:"bg-indigo-200 px-5 fixed rounded-t-lg"}," Changes detected for user(s) with id: "+(0,d.zw)([...r.changed_ids])+", click to update! ",1)):(0,n.kq)("",!0)],64)}const g={class:"w-full sm:w-64 inline-block relative"},m=(0,n.Wm)("div",{class:"pointer-events-none absolute pl-3 inset-y-0 left-0 flex items-center px-2 text-gray-300"},[(0,n.Wm)("svg",{class:"fill-current h-3 w-3",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 511.999 511.999"},[(0,n.Wm)("path",{d:"M508.874 478.708L360.142 329.976c28.21-34.827 45.191-79.103 45.191-127.309C405.333 90.917 314.416 0 202.666 0S0 90.917 0 202.667s90.917 202.667 202.667 202.667c48.206 0 92.482-16.982 127.309-45.191l148.732 148.732c4.167 4.165 10.919 4.165 15.086 0l15.081-15.082c4.165-4.166 4.165-10.92-.001-15.085zM202.667 362.667c-88.229 0-160-71.771-160-160s71.771-160 160-160 160 71.771 160 160-71.771 160-160 160z"})])],-1);function f(e,t,r,o,s,i){return(0,n.wg)(),(0,n.j4)("div",g,[(0,n.wy)((0,n.Wm)("input",{onInput:t[1]||(t[1]=t=>e.$emit("search",s.searchbarvalue)),id:"searchbar",type:"text",class:"\r\n\t\t\t\tleading-snug\r\n\t\t\t\tborder border-gray-300\r\n\t\t\t\tblock\r\n\t\t\t\tw-full\r\n\t\t\t\tappearance-none\r\n\t\t\t\tbg-gray-100\r\n\t\t\t\ttext-sm text-gray-600\r\n\t\t\t\tpy-1\r\n\t\t\t\tpx-4\r\n\t\t\t\tpl-8\r\n\t\t\t\trounded-lg\r\n\t\t\t",placeholder:"Search","onUpdate:modelValue":t[2]||(t[2]=e=>s.searchbarvalue=e)},null,544),[[a.nr,s.searchbarvalue]]),m])}var w={name:"SearchBar",data(){return{searchbarvalue:""}}};w.render=f;var b=w;const v={class:"relative"},y=(0,n.Wm)("svg",{width:"14",height:"4",viewBox:"0 0 14 4",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,n.Wm)("g",{opacity:"0.4"},[(0,n.Wm)("circle",{cx:"2.19796",cy:"1.80139",r:"1.38611",fill:"#222222"}),(0,n.Wm)("circle",{cx:"11.9013",cy:"1.80115",r:"1.38611",fill:"#222222"}),(0,n.Wm)("circle",{cx:"7.04991",cy:"1.80115",r:"1.38611",fill:"#222222"})])],-1),x={key:1,class:"absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20"};function k(e,t,r,a,o,s){return(0,n.wg)(),(0,n.j4)("div",v,[(0,n.Wm)("button",{onClick:t[1]||(t[1]=e=>o.dotOpen=!o.dotOpen)},[y]),o.dotOpen?((0,n.wg)(),(0,n.j4)("div",{key:0,onClick:t[2]||(t[2]=e=>o.dotOpen=!1),class:"fixed inset-0 h-full w-full z-10"})):(0,n.kq)("",!0),o.dotOpen?((0,n.wg)(),(0,n.j4)("div",x,[(0,n.Wm)("a",{onClick:t[3]||(t[3]=t=>e.$emit("logout-clicked")),href:"#",class:"block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"}," Log out ")])):(0,n.kq)("",!0)])}var _={name:"DotDown",data(){return{dotOpen:!1}}};_.render=k;var C=_,W={name:"Header",emits:["search","confirm-patch","logout-clicked"],data(){return{dotOpen:!1}},props:{title:String,changed_ids:Set},components:{SearchBar:b,DotDown:C}};W.render=h;var j=W;const L={id:"pagination",class:"w-full flex justify-center border-t border-gray-100 pt-4 items-center"},O=(0,n.Wm)("svg",{class:"h-6 w-6",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,n.Wm)("g",{opacity:"0.4"},[(0,n.Wm)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9 12C9 12.2652 9.10536 12.5196 9.29289 12.7071L13.2929 16.7072C13.6834 17.0977 14.3166 17.0977 14.7071 16.7072C15.0977 16.3167 15.0977 15.6835 14.7071 15.293L11.4142 12L14.7071 8.70712C15.0977 8.31659 15.0977 7.68343 14.7071 7.29289C14.3166 6.90237 13.6834 6.90237 13.2929 7.29289L9.29289 11.2929C9.10536 11.4804 9 11.7348 9 12Z",fill:"#2C2C2C"})])],-1),U=(0,n.Wm)("svg",{class:"h-6 w-6",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,n.Wm)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M15 12C15 11.7348 14.8946 11.4804 14.7071 11.2929L10.7071 7.2929C10.3166 6.9024 9.6834 6.9024 9.2929 7.2929C8.9024 7.6834 8.9024 8.3166 9.2929 8.7071L12.5858 12L9.2929 15.2929C8.9024 15.6834 8.9024 16.3166 9.2929 16.7071C9.6834 17.0976 10.3166 17.0976 10.7071 16.7071L14.7071 12.7071C14.8946 12.5196 15 12.2652 15 12Z",fill:"#18A0FB"})],-1);function E(e,t,r,a,o,s){return(0,n.wg)(),(0,n.j4)("div",L,[O,((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(r.pages,(e=>((0,n.wg)(),(0,n.j4)("p",{class:["leading-relaxed cursor-pointer mx-2 text-sm hover:text-blue-600",{"text-blue-600":e===r.currentpage}],key:e},(0,d.zw)(e),3)))),128)),U])}var S={name:"Pagination",props:{pages:Number,currentpage:Number}};S.render=E;var $=S;const P={class:"absolute top-0 inset-x-0 text-center h-auto"},z={class:"py-1 px-4 bg-red-300 rounded-b-md shadow-xl"};function B(e,t,r,a,o,s){return(0,n.wg)(),(0,n.j4)("div",P,[(0,n.Wm)("p",z,(0,d.zw)(r.error_popup),1)])}var q={name:"ErrorPopup",props:{error_popup:String}};q.render=B;var D=q,H=r(422);const F=l().create({withCredentials:!0});var M={name:"App",components:{Header:j,Pagination:$,ErrorPopup:D},data(){return{pages:6,users:[],changed_ids:new Set,changed_users:{},searchvalue:"",error_popup:""}},methods:{pushError(e){console.error(e),this.error_popup=e},async getUsers(e){try{return(await F.get("//task.namesmt.ga:2222/api?q="+(e??""))).data}catch(t){this.pushError("Failed to retrieve Users: "+t.response.data.message),"unauthenticated"===t.response.data.message&&this.$router.push("/front2/login")}},async patchUser(e){try{return(await F.patch("//task.namesmt.ga:2222/api",{user:e})).data}catch(t){this.pushError("Failed to send patch request: "+t.response.data.message)}},async big_patchUser(e){try{return(await F.patch("//task.namesmt.ga:2222/api/big",{users:e})).data}catch(t){this.pushError(`Failed to send (big) patch request: ${t.response.data.message}, Errors: ${t.response.data.errors}`),(0,H.isEmptyArray)([t.response.data.updated])||(t.response.data.updated.forEach((e=>{this.changed_ids.delete(e)})),t.response.data.updated_uid.forEach((e=>{this.changed_users.delete(e)})))}},async reloadUsers(e){this.users=await this.getUsers(e),this.changed_ids.clear()},searchUpdate(e){this.searchvalue=e,this.reloadUsers(e)},markChanged(e){this.changed_ids.add(e.id),this.changed_users[e.id]=e},async applyChanged(){this.error_popup="",await this.big_patchUser(this.changed_users)&&this.reloadUsers(this.searchvalue)},async doLogin(e){try{(await F.post("https://task.namesmt.ga/api/",e)).data&&(this.$router.push("/front2/"),this.reloadUsers(this.searchvalue),this.error_popup="")}catch(t){this.pushError("Failed to send post request (Login): "+t.response.data.message)}},doLogout(){F.post("https://task.namesmt.ga/api/logout").then((()=>{this.$router.push("/front2/login")})).catch((e=>{this.pushError("Failed to send post request (Logout)")}))}},created(){setTimeout((()=>{"/front2/"===this.$route.path&&this.reloadUsers()}),0)}};M.render=s;var A=M,I=r(119);const T={class:"mb-4"},V=(0,n.Wm)("label",{class:"block font-light mb-2",for:"email"},"Email",-1),Y={class:"mb-4"},K=(0,n.Wm)("label",{class:"block font-light mb-2",for:"password"},"Password",-1),N=(0,n.Wm)("div",{class:""},[(0,n.Wm)("button",{class:"bg-indigo-600 hover:bg-blue-700 text-white font-light py-2 px-6 rounded",type:"submit"}," LOGIN ")],-1);function Z(e,t,r,o,s,i){return(0,n.wg)(),(0,n.j4)("form",{onSubmit:t[3]||(t[3]=(0,a.iM)((t=>e.$emit("login-submit",s.data)),["prevent"]))},[(0,n.Wm)("div",T,[V,(0,n.wy)((0,n.Wm)("input",{class:"w-full border-gray-500 border p-4 font-light focus:outline-none focus:ring-1",type:"text",name:"email",placeholder:"Email","onUpdate:modelValue":t[1]||(t[1]=e=>s.data.email=e)},null,512),[[a.nr,s.data.email]])]),(0,n.Wm)("div",Y,[K,(0,n.wy)((0,n.Wm)("input",{class:"w-full border-gray-500 border p-4 font-light focus:outline-none focus:ring-1",type:"password",name:"password",placeholder:"Password","onUpdate:modelValue":t[2]||(t[2]=e=>s.data.password=e)},null,512),[[a.nr,s.data.password]])]),N],32)}var G={name:"Login",data(){return{data:{email:"",password:""}}}};G.render=Z;var X=G;const J=(0,n.HX)("data-v-bb0b9864");(0,n.dD)("data-v-bb0b9864");const Q={class:"overflow-x-auto mt-6"},R={class:"table-auto border-collapse w-full"},ee={class:"text-base font-medium text-gray-700 text-left"},te={class:"text-sm font-normal text-gray-700"};(0,n.Cn)();const re=J(((e,t,r,o,s,i)=>((0,n.wg)(),(0,n.j4)("div",Q,[(0,n.Wm)("table",R,[(0,n.Wm)("thead",null,[(0,n.Wm)("tr",ee,[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(r.table_show,(e=>((0,n.wg)(),(0,n.j4)("th",{class:"border border-gray-400 px-4 py-2 bg-gray-200",key:e},(0,d.zw)(e),1)))),128))])]),(0,n.Wm)("tbody",te,[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(r.users,(t=>((0,n.wg)(),(0,n.j4)("tr",{onInput:r=>e.$emit("data-changed",t),class:"hover:bg-gray-100 border-b border-gray-200 py-10",key:t.id,"data-id":t.id},[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(r.table_show,(e=>((0,n.wg)(),(0,n.j4)("td",{class:"border border-gray-400 px-4 py-4",key:e},[(0,n.wy)((0,n.Wm)("input",{class:{"bg-yellow-100 hover:bg-yellow-200":r.changed_ids.has(t.id)},type:"text","onUpdate:modelValue":r=>t[e.toLowerCase()]=r},null,10,["onUpdate:modelValue"]),[[a.nr,t[e.toLowerCase()]]])])))),128))],40,["onInput","data-id"])))),128))])])]))));var ae={name:"Body",props:{users:Array,table_show:Array,changed_ids:Set},data(){return{user:"MT"}},methods:{log(e){console.log(e)}}};ae.render=re,ae.__scopeId="data-v-bb0b9864";var ne=ae;const oe=[{path:"/front2/login",name:"Login",component:X},{path:"/front2/",name:"Users Table",component:ne}],se=(0,I.p7)({history:(0,I.PO)("/"),routes:oe});var ie=se;(0,a.ri)(A).use(ie).mount("#app")}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,a,n,o){if(!a){var s=1/0;for(d=0;d<e.length;d++){a=e[d][0],n=e[d][1],o=e[d][2];for(var i=!0,l=0;l<a.length;l++)(!1&o||s>=o)&&Object.keys(r.O).every((function(e){return r.O[e](a[l])}))?a.splice(l--,1):(i=!1,o<s&&(s=o));i&&(e.splice(d--,1),t=n())}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[a,n,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,o,s=a[0],i=a[1],l=a[2],d=0;for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(l)var c=l(r);for(t&&t(a);d<s.length;d++)o=s[d],r.o(e,o)&&e[o]&&e[o][0](),e[s[d]]=0;return r.O(c)},a=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(673)}));a=r.O(a)})();
//# sourceMappingURL=app.5a73da09.js.map