import{_ as D}from"./delete-icon.57bd1fa0.js";import{g as L}from"./ak.db6abe61.js";import{b as P,c as F}from"./gift.4e037fb0.js";import{h as M}from"./moment.9709ab41.js";import{_ as T,r as c,k as Y,u as $,b as i,o as j,c as B,h as n,e as a,w as s,s as N,t as m,i as f,p as U,q as V}from"./index.272efec0.js";import"./request.d529e952.js";const E=r=>(U("data-v-f87f8841"),r=r(),V(),r),H={class:"root"},O={class:"flex-end search-wrap"},J=["src"],K={style:{display:"flex","justify-content":"center","align-items":"center"}},Q=["src"],W={class:"flex-center"},X=E(()=>n("div",{class:"delete"},[n("img",{class:"delete-icon",src:D,alt:""}),f(" \u5220\u9664 ")],-1)),Z={class:"pagination-wrap"},ee={__name:"giftSRList",setup(r){const h={common:"\u666E\u901A\u793C\u5238",other:"\u7279\u6B8A\u793C\u5238"},u=c([]),p=c(7),_=c(1),g=c(1),d=async()=>{const e={type:"other",limit:p.value,page:_.value},o=await P(e);u.value=o.data,g.value=o.total};Y(()=>{d()});const v=e=>M(e).utc().format("YYYY/MM/DD HH:mm:ss"),b=e=>e+1,y={background:"#FAFAFA"};c(1);const x=e=>{d(),console.log(`${e} items per page`)},C=e=>{console.log(`current page: ${e}`),d()},k=async e=>{await F({id:e}),d()},S=$(),R=e=>{S.push({path:"/uploadGift",query:{id:e.id,img:e.img,name:e.name,num:e.num,possible:e.possible,type:e.type}})};return(e,o)=>{const w=i("router-link"),l=i("el-table-column"),I=i("el-button"),q=i("el-popconfirm"),z=i("el-table"),G=i("el-pagination");return j(),B("div",H,[n("div",O,[a(w,{to:"/uploadGift?add=true&giftType=other"},{default:s(()=>[n("img",{class:"add_gift_btn",src:N(L)("add_gift_btn.png"),alt:""},null,8,J)]),_:1})]),a(z,{"header-cell-style":y,data:u.value,style:{width:"100%"}},{default:s(()=>[a(l,{type:"index",label:"\u5E8F\u53F7",width:"80",index:b}),a(l,{prop:"name",label:"\u793C\u52B5\u540D\u79F0",width:"230",align:"center"}),a(l,{label:"\u7C7B\u578B",width:"180",align:"center"},{default:s(({row:t})=>[n("div",null,m(h[t.type]),1)]),_:1}),a(l,{label:"\u793C\u52B5\u56FE\u7247",width:"180",align:"center"},{default:s(({row:t})=>[n("div",K,[n("img",{class:"gift-img",src:t.img||"/images/01.png",alt:""},null,8,Q)])]),_:1}),a(l,{label:"\u65F6\u95F4",align:"center"},{default:s(({row:t})=>[n("div",null,m(v(t.date)),1)]),_:1}),a(l,{fixed:"right",align:"right"},{default:s(({row:t})=>[n("div",W,[a(I,{class:"btn-green",onClick:A=>R(t)},{default:s(()=>[f("\u4FEE\u6539")]),_:2},1032,["onClick"]),a(q,{onConfirm:A=>k(t.id),title:"\u662F\u5426\u786E\u8BA4\u5220\u9664?"},{reference:s(()=>[X]),_:2},1032,["onConfirm"])])]),_:1})]),_:1},8,["data"]),n("div",Z,[a(G,{currentPage:_.value,"onUpdate:currentPage":o[0]||(o[0]=t=>_.value=t),"page-size":p.value,"onUpdate:page-size":o[1]||(o[1]=t=>p.value=t),"page-sizes":[10,15,20],background:"",layout:"total, prev, pager, next, jumper",total:g.value,onSizeChange:x,onCurrentChange:C},null,8,["currentPage","page-size","total"])])])}}},ie=T(ee,[["__scopeId","data-v-f87f8841"]]);export{ie as default};
