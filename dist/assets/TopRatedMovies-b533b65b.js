import{e as g,u as l,n as m,j as a,W as x,C as h,S as j,P,g as f,h as S,k as C,l as R}from"./index-4ce18bd8.js";function v(){const[t,n]=g.useState(1),{mediaType:i}=l(),{data:r,isLoading:s,isFetching:o,isError:d,isSuccess:u}=m({mediaType:i,pageNum:t}),c=(e,p)=>{n(p)};return a.jsx(x,{children:a.jsxs(h,{status:{isLoading:s,isFetching:o,isError:d,isSuccess:u},children:[a.jsx(j,{spacing:2,marginY:4,alignItems:"center",children:a.jsx(P,{onChange:c,disabled:s,shape:"rounded",count:5,renderItem:e=>a.jsx(f,{slots:{previous:S,next:C},...e})})}),a.jsx(R,{data:r})]})})}export{v as default};
