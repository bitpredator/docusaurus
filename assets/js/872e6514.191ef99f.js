"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[78471],{49184:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var o=s(12901),t=s(62540),i=s(43023);let l={mdx:{format:"md"},date:"2019-04-10T20:00"},c="V2 Changelog",r={authorsImageUrls:[]},d=[{value:"<code>siteConfig.js</code> changes",id:"siteconfigjs-changes",level:3},{value:"Migration Guide",id:"migration-guide",level:3},{value:"Presets",id:"presets",level:3}];function a(e){let n={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h3,{id:"siteconfigjs-changes",children:[(0,t.jsx)(n.code,{children:"siteConfig.js"})," changes"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"siteConfig.js"})," renamed to ",(0,t.jsx)(n.code,{children:"docusaurus.config.js"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Remove the following config options:\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"docsUrl"}),". Use the plugin option on ",(0,t.jsx)(n.code,{children:"docusaurus-plugin-content-docs"})," instead."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"customDocsPath"}),". Use the plugin option on ",(0,t.jsx)(n.code,{children:"docusaurus-plugin-content-docs"})," instead."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"sidebars.json"})," now has to be explicitly loaded by users and passed into the plugin option on ",(0,t.jsx)(n.code,{children:"docusaurus-plugin-content-docs"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"headerLinks"})," doc, page, blog is deprecated and has been to moved into ",(0,t.jsx)(n.code,{children:"themeConfig"})," under the name ",(0,t.jsx)(n.code,{children:"navbar"}),". The syntax is now:"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"themeConfig: {\n  navbar: {\n    title: 'Docusaurus',\n    logo: {\n      alt: 'Docusaurus Logo',\n      src: 'img/docusaurus.svg',\n    },\n    links: [\n      {to: 'docs/introduction', label: 'Docs', position: 'left'},\n      {to: 'blog', label: 'Blog', position: 'left'},\n      {to: 'feedback', label: 'Feedback', position: 'left'},\n      {\n        href: 'https://github.com/facebook/docusaurus',\n        label: 'GitHub',\n        position: 'right',\n      },\n    ],\n  },\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"migration-guide",children:"Migration Guide"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Work in Progress"})}),"\n",(0,t.jsx)(n.h3,{id:"presets",children:"Presets"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Add presets for plugins that follow the ",(0,t.jsx)(n.a,{href:"https://babeljs.io/docs/en/presets",children:"Babel preset convention"}),"."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var o=s(63696);let t={},i=o.createContext(t);function l(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),o.createElement(i.Provider,{value:n},e.children)}},12901:e=>{e.exports=JSON.parse('{"permalink":"/changelog/V2 Changelog","source":"@site/changelog/source/V2 Changelog.md","title":"V2 Changelog","description":"siteConfig.js changes","date":"2019-04-10T20:00:00.000Z","tags":[],"hasTruncateMarker":true,"authors":[],"frontMatter":{"mdx":{"format":"md"},"date":"2019-04-10T20:00"},"unlisted":false,"prevItem":{"title":"2.0.0-alpha.19","permalink":"/changelog/2.0.0-alpha.19"},"listPageLink":"/changelog/page/5"}')}}]);