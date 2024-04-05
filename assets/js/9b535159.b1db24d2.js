"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[8594],{3211:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>o,contentTitle:()=>f,default:()=>l,frontMatter:()=>d,metadata:()=>r,toc:()=>c});var n=s(4848),t=s(8453);const d={description:"Diffing CVE-2023-21768 - The perfect diff (one line change only)"},f=void 0,r={id:"guides/Diffing afd.sys - CVE-2023-21768",title:"Diffing afd.sys - CVE-2023-21768",description:"Diffing CVE-2023-21768 - The perfect diff (one line change only)",source:"@site/docs/guides/Diffing afd.sys - CVE-2023-21768.md",sourceDirName:"guides",slug:"/guides/Diffing afd.sys - CVE-2023-21768",permalink:"/ghidriff/docs/guides/Diffing afd.sys - CVE-2023-21768",draft:!1,unlisted:!1,editUrl:"https://github.com/clearbluejar/ghidriff/tree/main/www/docs/docs/guides/Diffing afd.sys - CVE-2023-21768.md",tags:[],version:"current",frontMatter:{description:"Diffing CVE-2023-21768 - The perfect diff (one line change only)"},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/ghidriff/docs/category/guides"},next:{title:"Diffing an iOS dylib - CVE-2024-23218",permalink:"/ghidriff/docs/guides/Diffing an iOS dylib - CVE-2024-23218"}},o={},c=[];function a(e){const i={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:["Details of the CVE-2023-21768 (detailed in this blog ",(0,n.jsx)(i.a,{href:"https://securityintelligence.com/posts/patch-tuesday-exploit-wednesday-pwning-windows-ancillary-function-driver-winsock/",children:"post"}),"). What if you wanted to repeat this patch diff with ",(0,n.jsx)(i.code,{children:"ghidriff"}),"?"]}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["Download two versions of ",(0,n.jsx)(i.code,{children:"AFD.sys"})," (vulnerable and patched):"]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"wget https://msdl.microsoft.com/download/symbols/afd.sys/0C5C6994A8000/afd.sys -O afd.sys.x64.10.0.22621.1028\nwget https://msdl.microsoft.com/download/symbols/afd.sys/50989142A9000/afd.sys -O afd.sys.x64.10.0.22621.1415\n"})}),"\n",(0,n.jsxs)(i.ol,{start:"2",children:["\n",(0,n.jsxs)(i.li,{children:["Run ",(0,n.jsx)(i.code,{children:"ghidriff"}),":"]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"ghidriff afd.sys.x64.10.0.22621.1028 afd.sys.x64.10.0.22621.1415\n"})}),"\n",(0,n.jsxs)(i.ol,{start:"3",children:["\n",(0,n.jsx)(i.li,{children:"Review results"}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["The diff results are posted in this GitHub ",(0,n.jsx)(i.a,{href:"https://gist.github.com/clearbluejar/f6fecbc507a9f1a92c9231e3db7ef40d",children:"gist"}),". The vulnerable function  ",(0,n.jsx)(i.code,{children:"AfdNotifyRemoveIoCompletion"})," was identified here with a ",(0,n.jsx)(i.a,{href:"https://gist.github.com/clearbluejar/f6fecbc507a9f1a92c9231e3db7ef40d#afdnotifyremoveiocompletion-diff",children:"single line change"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["Want to see the entire diff in a side by side? ",(0,n.jsx)(i.a,{href:"https://diffpreview.github.io/?f6fecbc507a9f1a92c9231e3db7ef40d",children:"https://diffpreview.github.io/?f6fecbc507a9f1a92c9231e3db7ef40d"})," or jump to the ",(0,n.jsx)(i.a,{href:"https://diffpreview.github.io/?f6fecbc507a9f1a92c9231e3db7ef40d#d2h-703858:~:text=ProbeForWrite(*(PVOID%20*)(param_3%20%2B%200x18)%2C4%2C4)%3B",children:"single line change"})]})]})}function l(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8453:(e,i,s)=>{s.d(i,{R:()=>f,x:()=>r});var n=s(6540);const t={},d=n.createContext(t);function f(e){const i=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:f(e.components),n.createElement(d.Provider,{value:i},e.children)}}}]);