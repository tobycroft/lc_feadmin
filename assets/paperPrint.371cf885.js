import{_ as U}from"./time-icon.80f3a1b0.js";import{_ as b,r as _,k,b as c,o as y,c as x,h as t,e as i,s as w,w as g,v as L,t as W,p as V,q}from"./index.46ff00ed.js";import{r as G}from"./request.ee69824f.js";import{h as f}from"./moment.9709ab41.js";const j="/images/certificate_border.png",H=async p=>await G("https://api.lc.familyeducation.org.cn/v1/user/print/list",p);const P=p=>(V("data-v-f1dc1c83"),p=p(),q(),p),K={class:"root"},B={class:"flex search-wrap"},X={class:"time-wrap"},Y=P(()=>t("img",{class:"time-icon",src:U,alt:""},null,-1)),z=P(()=>t("span",{class:"time-char"},"\u7B5B\u9009\u65F6\u95F4",-1)),$=P(()=>t("span",{style:{margin:"0 12px"}},"-",-1)),J=P(()=>t("div",{style:{display:"flex","justify-content":"center","align-items":"center"}},[t("img",{class:"gift-img",src:j,alt:""})],-1)),Z={class:"btn-wrap"},Q=["onClick"],ee=["onClick"],ne={class:"pagination-wrap"},se={__name:"paperPrint",setup(p){const u=_(""),S=_(""),C=_(""),D=_(7),v=_(1),E=_(1),A=_([]),l=async()=>{const a={limit:D.value,page:v.value,start_date:u.value,end_date:S.value,phone:C.value},n=await H(a);n.data&&n.data.length&&(A.value=n.data),E.value=n.total};k(()=>{l()});const I=a=>f(a).utc().format("YYYY/MM/DD HH:mm:ss"),T=a=>a+1,h={background:"#FAFAFA"},M=a=>{console.log(`${a} items per page`),l()},N=a=>{console.log(`current page: ${a}`),l()},O=(a="",n="",d="")=>{var r=new Image;r.setAttribute("crossOrigin","anonymous"),r.onload=async function(){var o=document.createElement("canvas");o.width=r.width,o.height=r.height;const R=f(d).format("YYYY\u5E74MM\u6708DD\u65E5");var s=o.getContext("2d");s.drawImage(r,0,0,r.width,r.height),s.font="120px STXingkai",s.textAlign="right",s.fillText(a,655,1050),s.textAlign="left",s.fillText(n,865,1050),await document.fonts.load(s.font),s.font="120px serif",s.fillText("&",735,1050),s.font="80px serif",s.fillText(R,515,1220);var e=o.toDataURL("image/png"),m=document.createElement("a"),F=new MouseEvent("click");m.download="\u8BC1\u4E66.png",m.href=e,m.dispatchEvent(F)},r.src=new URL("/images/certificate_border.png",self.location).href};return(a,n)=>{const d=c("el-date-picker"),r=c("el-input"),o=c("el-table-column"),R=c("el-table"),s=c("el-pagination");return y(),x("div",K,[t("div",B,[t("div",X,[Y,z,i(d,{clearable:"",class:"time-input",modelValue:u.value,"onUpdate:modelValue":n[0]||(n[0]=e=>u.value=e),type:"datetime",placeholder:"\u8BF7\u9009\u62E9\u8D77\u59CB\u65F6\u95F4",onChange:l},null,8,["modelValue"]),$,i(d,{class:"time-input",modelValue:S.value,"onUpdate:modelValue":n[1]||(n[1]=e=>S.value=e),type:"datetime",placeholder:"\u8BF7\u9009\u62E9\u7ED3\u675F\u65F6\u95F4",onChange:l},null,8,["modelValue"])]),i(r,{modelValue:C.value,"onUpdate:modelValue":n[2]||(n[2]=e=>C.value=e),class:"search-input",placeholder:"\u641C\u7D22\u624B\u673A\u53F7","suffix-icon":w(L),onChange:l},null,8,["modelValue","suffix-icon"])]),i(R,{"header-cell-style":h,data:A.value,style:{width:"100%"}},{default:g(()=>[i(o,{type:"index",label:"\u5E8F\u53F7",width:"80",index:T}),i(o,{prop:"wx_name",label:"\u7528\u6237\u540D",width:"150"}),i(o,{prop:"phone",width:"180",label:"\u624B\u673A\u53F7"}),i(o,{prop:"couple_name",label:"\u4F34\u4FA3\u540D\u79F0"}),i(o,{label:"\u8BC1\u4E66\u56FE\u7247",align:"center"},{default:g(()=>[J]),_:1}),i(o,{label:"\u65F6\u95F4",width:"200",align:"center"},{default:g(({row:e})=>[t("div",null,W(I(e.date)),1)]),_:1}),i(o,{label:"\u64CD\u4F5C",align:"center",width:"230"},{default:g(({row:e})=>[t("div",Z,[t("div",{class:"save-btn",onClick:m=>O(e.wx_name,e.couple_name,e.date)},"\u4FDD\u5B58\u56FE\u7247",8,Q),t("div",{class:"btn-complete",onClick:m=>O(e.wx_name,e.couple_name,e.date)},"\u6253\u5370\u8BC1\u4E66",8,ee)])]),_:1})]),_:1},8,["data"]),t("div",ne,[i(s,{currentPage:v.value,"onUpdate:currentPage":n[3]||(n[3]=e=>v.value=e),"page-size":D.value,"onUpdate:pageSize":n[4]||(n[4]=e=>D.value=e),"page-sizes":[10,15,20],background:"",layout:"total, prev, pager, next, jumper",total:E.value,onSizeChange:M,onCurrentChange:N},null,8,["currentPage","page-size","total"])])])}}},re=b(se,[["__scopeId","data-v-f1dc1c83"]]);export{re as default};
