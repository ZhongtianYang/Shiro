import{j as t}from"./index-Bv95bFYi.js";import{W as i,M as m,G as a}from"./Gallery-BHgTWze5.js";import"./image-DYLRkmyE.js";import"./helper-CaAdfMs7.js";import"./lodash-B3VVwmZe.js";import"./request-BaIgPWdV.js";import"./toast-DcnsCoJV.js";import"./StyledButton-UszMzkUx.js";import"./motion-minimal-Dou77nS9.js";import"./env-CUAg77w2.js";import"./viewport-Cdg5FG6T.js";import"./use-is-unmounted-DaqUP80-.js";const n=()=>Math.floor(Math.random()*255).toString(16).padStart(2,"0"),o=Array.from({length:10}).map((r,e)=>({src:`https://loremflickr.com/640/480/city?${e}`,height:480,width:640,type:"image",accent:`#${n()}`})),p=()=>t.jsx("div",{className:"inline-block overflow-hidden border border-accent",style:{width:"600px"},children:t.jsx(i,{children:t.jsx(m,{images:o,children:t.jsx(a,{images:o.map(r=>({...r,url:r.src,name:r.src,footnote:r.src}))})})})});p.meta={title:"Gallery",description:"Gallery component"};export{p as Demo1};
