import{g as E}from"./ak.db6abe61.js";import{u,m as D,E as p,_ as A,r as g,b as m,o as v,c as R,h as a,e as c,w as l,C as O,i as P,p as I,q as M}from"./index.6717ac94.js";import{r as f}from"./request.30f34286.js";const N=async o=>await f("https://api.lc.familyeducation.org.cn/v1/user/auth/login",o);function T(){const o=u(),s=async(n,i)=>await N({phone:n,password:i}),t=n=>{const i=/^[1][3-9][\d]{9}/;return n?i.test(n)||p.error("\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E"):p.error("\u8BF7\u8F93\u5165\u624B\u673A\u53F7"),i.test(n)},e=n=>{if(!n)p.error("\u8BF7\u8F93\u5165\u5BC6\u7801");else return!0},d=D();return{onSubmit:async(n,i)=>{if(!t(n)||!e(i))return;const _=await s(n,i);_.token?(d.getLoginInfo(_.token,_.uid),o.push({path:"/studySearch"})):p.error("\u65E0\u767B\u5F55\u6743\u9650")}}}const F={setup(){const o=g(""),s=g(""),{onSubmit:t}=T();return{getImageUrl:E,phoneRef:o,passwordRef:s,onSubmit:t}}},C=o=>(I("data-v-22c609ec"),o=o(),M(),o),h={class:"main-wrap"},U=["src"],L={class:"login-wrap"},V=C(()=>a("h2",{class:"title"},"\u664B\u6C5F\u5E02\u65B0\u664B\u5BB6\u5EAD\u80FD\u529B\u4FC3\u8FDB\u5E73\u53F0",-1)),k={class:"login-box"},b=C(()=>a("h3",null,"\u767B\u5F55\u540E\u53F0\u7BA1\u7406",-1)),y=["src"],w=["src"];function x(o,s,t,e,d,S){const n=m("el-input"),i=m("el-button"),_=m("el-checkbox");return v(),R("div",{class:"root",style:O(`background-image: url(${e.getImageUrl("login-bg.png")})`)},[a("div",h,[a("img",{class:"people-img",src:e.getImageUrl("login-people.png"),alt:""},null,8,U),a("div",L,[V,a("div",k,[b,c(n,{maxlength:"11",modelValue:e.phoneRef,"onUpdate:modelValue":s[0]||(s[0]=r=>e.phoneRef=r),clearable:"",type:"text",class:"login-input",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},{prefix:l(()=>[a("img",{class:"icon",src:e.getImageUrl("login-phone.png"),alt:""},null,8,y)]),_:1},8,["modelValue"]),c(n,{maxlength:"11",modelValue:e.passwordRef,"onUpdate:modelValue":s[1]||(s[1]=r=>e.passwordRef=r),clearable:"",type:"text",class:"login-input",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},{prefix:l(()=>[a("img",{class:"icon",src:e.getImageUrl("login-password.png"),alt:""},null,8,w)]),_:1},8,["modelValue"]),c(i,{class:"login-btn",onClick:s[2]||(s[2]=r=>e.onSubmit(e.phoneRef,e.passwordRef))},{default:l(()=>[P("\u767B\u5F55")]),_:1}),c(_,null,{default:l(()=>[P("\u4E0B\u6B21\u81EA\u52A8\u767B\u5F55")]),_:1})])])])],4)}const H=A(F,[["render",x],["__scopeId","data-v-22c609ec"]]);export{H as default};
