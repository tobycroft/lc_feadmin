import{p as o}from"./index.4de482d6.js";import{r as n}from"./school.49559a87.js";const s=async e=>await n.post("https://api.ps.familyeducation.org.cn/v1/tag/info/list",e),a=o("useStudyStore",{state:()=>({tagList:{}}),actions:{async tagInfoListAPI(){const e=await s({});this.tagList=e}},persist:!0});export{a as u};
