import{d as L,_ as R,u as S,r as u,a as w,b as d,o as a,c as l,e as h,w as r,F as k,f as $,g,h as s,n as y,t as C,i as b,j as x,k as F,R as V,l as I,m as M,p as T,q as j}from"./index.272efec0.js";const B=L({name:"CustomMenu",setup(){const t=S(),_=(e,o)=>{console.log(e,o)},f=(e,o)=>{console.log(e,o)},c=u(w[0].children),p=u();return{handleOpen:_,handleClose:f,menuListRef:c,activeMenuItem:p,handleMenuTitle:e=>e&&e.meta&&e.meta.title?e.meta.title:"\u672A\u547D\u540D",onSubMenuClick:e=>{console.log("routerPath :>> ",e),p.value=e,t.replace(e)}}}}),N={class:"el-menu-contrainer"},O={key:0},E={class:"fz"},z={key:1};function D(t,_,f,c,p,v){const m=d("el-menu-item"),e=d("el-sub-menu"),o=d("el-menu");return a(),l("div",N,[h(o,{"default-active":"2",class:"el-menu-vertical-demo","background-color":"#FD98B8","text-color":"#FFEFF4","active-text-color":"#fff",onOpen:t.handleOpen,onClose:t.handleClose},{default:r(()=>[(a(!0),l(k,null,$(t.menuListRef,n=>(a(),l("div",{key:n.path},[n.children?(a(),l("div",O,[n.meta.hiden?x("",!0):(a(),g(e,{key:0,index:n.path},{title:r(()=>[s("i",{class:y(["iconfont",n.meta.icon])},null,2),s("span",E,C(t.handleMenuTitle(n)),1)]),default:r(()=>[(a(!0),l(k,null,$(n.children,i=>(a(),l(k,{key:i.path},[i.meta.hiden?x("",!0):(a(),g(m,{key:0,class:y(["menu-item-style",{"active-bg-style":t.activeMenuItem===i.path}]),index:i.path,onClick:ee=>t.onSubMenuClick(i.path)},{default:r(()=>[b(C(i.meta.title),1)]),_:2},1032,["class","index","onClick"]))],64))),128))]),_:2},1032,["index"]))])):(a(),l("div",z,[n.meta.hiden?x("",!0):(a(),g(m,{key:0,class:y(["menu-parent-item-style",{"active-bg-style":t.activeMenuItem===n.path}]),index:n.path,onClick:i=>t.onSubMenuClick(n.path)},{default:r(()=>[s("i",{class:y(["iconfont",n.meta.icon])},null,2),b(" "+C(n.meta.title),1)]),_:2},1032,["class","index","onClick"]))]))]))),128))]),_:1},8,["onOpen","onClose"])])}const q=R(B,[["render",D],["__scopeId","data-v-515f95d5"]]);const A={name:"CustomLayout",components:{CustomMenu:q},setup(){const t=u("\u5B66\u4E60\u7BA1\u7406/\u5B66\u4E60\u7ED3\u679C\u67E5\u8BE2"),_=S();F(()=>{_.afterEach(e=>{if(console.log("to :>> ",e),e.matched.length){let o="";for(let n of e.matched)o?o=o.concat("/"+n.meta.title):o=n.meta.title;t.value=o}})}),console.log(t);const f=u(),c=u(""),p=u(""),v=u("");return{RouterLink:V,RouterView:I,projectImgRef:c,projectNameRef:p,userAvatarRef:v,schoolUserInfoRef:f,exitSystem:()=>{console.log("login() :>> ",M()),M().getLoginInfo("",-1,""),_.push({path:"/login"})},navTitle:t}}},U=t=>(T("data-v-18769bd7"),t=t(),j(),t),G={class:"custom-layout-container"},H={class:"flex-start align-start"},J={class:"flex1"},K={class:"flex"},Q={class:"project-info-box flex-start"},W={class:"project-title-style"},X={class:"user-info-box flex-start"},Y=U(()=>s("div",{class:"user-info-style flex-start"},[s("p",{class:"user-name-style"},"\u664B\u6C5F\u5E02\u65B0\u664B\u5BB6\u5EAD\u80FD\u529B\u4FC3\u8FDB\u5E73\u53F0")],-1)),Z={class:"router-view-box"};function P(t,_,f,c,p,v){const m=d("CustomMenu"),e=d("el-button"),o=d("RouterView"),n=d("el-scrollbar");return a(),l("div",G,[s("main",H,[h(m),s("div",J,[s("header",K,[s("div",Q,[s("p",W,C(c.navTitle),1)]),s("div",X,[Y,h(e,{class:"exit-btn-style",type:"primary",link:"",onClick:c.exitSystem},{default:r(()=>[b("[\u9000\u51FA]")]),_:1},8,["onClick"])])]),s("div",Z,[h(n,{class:"el-scroll-bar-style"},{default:r(()=>[h(o)]),_:1})])])])])}const ne=R(A,[["render",P],["__scopeId","data-v-18769bd7"]]);export{ne as default};
