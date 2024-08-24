"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40151],{16652:(e,t,n)=>{n.d(t,{Z:()=>u});var l=n(24246);n(27378);var r=n(40624),o=n(14929),c=n(4646),s=n(36712);let i={tocCollapsibleButton:"tocCollapsibleButton_IbtT",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_Nor3"};function a(e){var t,n,{collapsed:o}=e,c=function(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["collapsed"]);return(0,l.jsx)("button",(t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},l=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),l.forEach(function(t){var l;l=n[t],t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l})}return e}({type:"button"},c),n=n={className:(0,r.Z)("clean-btn",i.tocCollapsibleButton,!o&&i.tocCollapsibleButtonExpanded,c.className),children:(0,l.jsx)(s.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n.push.apply(n,l)}return n})(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}),t))}let d={tocCollapsible:"tocCollapsible_BEWm",tocCollapsibleContent:"tocCollapsibleContent_FG8F",tocCollapsibleExpanded:"tocCollapsibleExpanded_FzA_"};function u({toc:e,className:t,minHeadingLevel:n,maxHeadingLevel:s}){let{collapsed:i,toggleCollapsed:u}=(0,o.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,r.Z)(d.tocCollapsible,!i&&d.tocCollapsibleExpanded,t),children:[(0,l.jsx)(a,{collapsed:i,onClick:u}),(0,l.jsx)(o.z,{lazy:!0,className:d.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(c.Z,{toc:e,minHeadingLevel:n,maxHeadingLevel:s})})]})}},41124:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(24246);n(27378);var r=n(4646);function o({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return(0,l.jsx)("div",{className:"tableOfContentsInline_2sru",children:(0,l.jsx)(r.Z,{toc:e,minHeadingLevel:t,maxHeadingLevel:n,className:"table-of-contents",linkClassName:null})})}},4646:(e,t,n)=>{n.d(t,{Z:()=>u});var l=n(24246),r=n(27378),o=n(73919);function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},l=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),l.forEach(function(t){var l;l=n[t],t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l})}return e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n.push.apply(n,l)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}function i(e){let t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}var a=n(41428);let d=r.memo(function e({toc:t,className:n,linkClassName:r,isChild:o}){return t.length?(0,l.jsx)("ul",{className:o?void 0:n,children:t.map(t=>(0,l.jsxs)("li",{children:[(0,l.jsx)(a.Z,{to:`#${t.id}`,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:t.value}}),(0,l.jsx)(e,{isChild:!0,toc:t.children,className:n,linkClassName:r})]},t.id))}):null});function u(e){var{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:u,minHeadingLevel:b,maxHeadingLevel:v}=e,p=function(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]);let f=(0,o.L)(),h=null!=b?b:f.tableOfContents.minHeadingLevel,m=null!=v?v:f.tableOfContents.maxHeadingLevel,j=function({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return(0,r.useMemo)(()=>(function e({toc:t,minHeadingLevel:n,maxHeadingLevel:l}){return t.flatMap(t=>{let r=e({toc:t.children,minHeadingLevel:n,maxHeadingLevel:l});return t.level>=n&&t.level<=l?[s(c({},t),{children:r})]:r})})({toc:function(e){let t=e.map(e=>s(c({},e),{parentIndex:-1,children:[]})),n=Array(7).fill(-1);t.forEach((e,t)=>{let l=n.slice(2,e.level);e.parentIndex=Math.max(...l),n[e.level]=t});let l=[];return t.forEach(e=>{let{parentIndex:n}=e,r=function(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["parentIndex"]);n>=0?t[n].children.push(r):l.push(r)}),l}(e),minHeadingLevel:t,maxHeadingLevel:n}),[e,t,n])}({toc:t,minHeadingLevel:h,maxHeadingLevel:m});return!function(e){let t=(0,r.useRef)(void 0),n=function(){let e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,r.useEffect)(()=>{e.current=t?0:document.querySelector(".navbar").clientHeight},[t]),e}();(0,r.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:l,linkActiveClassName:r,minHeadingLevel:o,maxHeadingLevel:c}=e;function s(){let e=Array.from(document.getElementsByClassName(l)),s=function(e,{anchorTopOffset:t}){var n,l,r;let o=e.find(e=>i(e).top>=t);return o?(r=i(o)).top>0&&r.bottom<window.innerHeight/2?o:null!==(n=e[e.indexOf(o)-1])&&void 0!==n?n:null:null!==(l=e[e.length-1])&&void 0!==l?l:null}(function({minHeadingLevel:e,maxHeadingLevel:t}){let n=[];for(let l=e;l<=t;l+=1)n.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:o,maxHeadingLevel:c}),{anchorTopOffset:n.current}),a=e.find(e=>s&&s.id===decodeURIComponent(e.href.substring(e.href.indexOf("#")+1)));e.forEach(e=>{e===a?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)})}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}},[e,n])}((0,r.useMemo)(()=>{if(a&&u)return{linkClassName:a,linkActiveClassName:u,minHeadingLevel:h,maxHeadingLevel:m}},[a,u,h,m])),(0,l.jsx)(d,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},l=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),l.forEach(function(t){var l;l=n[t],t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l})}return e}({toc:j,className:n,linkClassName:a},p))}},6698:(e,t,n)=>{n.d(t,{Z:()=>s});var l=n(24246);n(27378);var r=n(40624);let o="dot_giz1",c="bar_rrRL";function s({children:e,minHeight:t,url:n="http://localhost:3000",style:s,bodyStyle:i}){var a,d;return(0,l.jsxs)("div",{className:"browserWindow_my1Q",style:(a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},l=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),l.forEach(function(t){var l;l=n[t],t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l})}return e}({},s),d=d={minHeight:t},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(d)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n.push.apply(n,l)}return n})(Object(d)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(d,e))}),a),children:[(0,l.jsxs)("div",{className:"browserWindowHeader_jXSR",children:[(0,l.jsxs)("div",{className:"buttons_uHc7",children:[(0,l.jsx)("span",{className:o,style:{background:"#f25f58"}}),(0,l.jsx)("span",{className:o,style:{background:"#fbbe3c"}}),(0,l.jsx)("span",{className:o,style:{background:"#58cb42"}})]}),(0,l.jsx)("div",{className:(0,r.Z)("browserWindowAddressBar_Pd8y","text--truncate"),children:n}),(0,l.jsx)("div",{className:"browserWindowMenuIcon_Vhuh",children:(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:c}),(0,l.jsx)("span",{className:c}),(0,l.jsx)("span",{className:c})]})})]}),(0,l.jsx)("div",{className:"browserWindowBody_Idgs",style:i,children:e})]})}},1439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>b});var l=n(24246),r=n(71670),o=n(6698),c=n(41124),s=n(16652);let i={toc_min_heading_level:2,toc_max_heading_level:6},a=void 0,d={id:"toc/toc-test-good",title:"toc-test-good",description:"Test the TOC behavior of a real-world MD doc with valid headings",source:"@site/_dogfooding/_docs tests/toc/toc-test-good.mdx",sourceDirName:"toc",slug:"/toc/toc-test-good",permalink:"/tests/docs/toc/toc-test-good",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1724508501e3,frontMatter:{toc_min_heading_level:2,toc_max_heading_level:6},sidebar:"sidebar",previous:{title:"toc-test-bad",permalink:"/tests/docs/toc/toc-test-bad"}},u={},b=[{value:"lvl 2",id:"lvl-2",level:2},{value:"lvl 3",id:"lvl-3",level:3},{value:"lvl 4",id:"lvl-4",level:4},{value:"lvl 5",id:"lvl-5",level:5},{value:"lvl 6",id:"lvl-6",level:6},{value:"lvl 2",id:"lvl-2-1",level:2},{value:"lvl 3",id:"lvl-3-1",level:3},{value:"lvl 4",id:"lvl-4-1",level:4},{value:"lvl 5",id:"lvl-5-1",level:5},{value:"lvl 6",id:"lvl-6-1",level:6}];function v(e){let t={h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",hr:"hr",p:"p",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:"Test the TOC behavior of a real-world MD doc with valid headings"}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h2,{id:"lvl-2",children:"lvl 2"}),"\n",(0,l.jsx)(t.h3,{id:"lvl-3",children:"lvl 3"}),"\n",(0,l.jsx)(t.h4,{id:"lvl-4",children:"lvl 4"}),"\n",(0,l.jsx)(t.h5,{id:"lvl-5",children:"lvl 5"}),"\n",(0,l.jsx)(t.h6,{id:"lvl-6",children:"lvl 6"}),"\n",(0,l.jsx)(t.h2,{id:"lvl-2-1",children:"lvl 2"}),"\n",(0,l.jsx)(t.h3,{id:"lvl-3-1",children:"lvl 3"}),"\n",(0,l.jsx)(t.h4,{id:"lvl-4-1",children:"lvl 4"}),"\n",(0,l.jsx)(t.h5,{id:"lvl-5-1",children:"lvl 5"}),"\n",(0,l.jsx)(t.h6,{id:"lvl-6-1",children:"lvl 6"}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.p,{children:"INLINE:"}),"\n","\n","\n",(0,l.jsx)(o.Z,{children:(0,l.jsx)(c.Z,{toc:b,minHeadingLevel:2,maxHeadingLevel:6})}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.p,{children:"COLLAPSIBLE:"}),"\n","\n",(0,l.jsx)(o.Z,{children:(0,l.jsx)(s.Z,{toc:b,minHeadingLevel:2,maxHeadingLevel:6})})]})}function p(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(v,{...e})}):v(e)}p.displayName="MDXContent(_dogfooding/_docs tests/toc/toc-test-good.mdx)"},71670:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>c});var l=n(27378);let r={},o=l.createContext(r);function c(e){let t=l.useContext(o);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),l.createElement(o.Provider,{value:t},e.children)}}}]);