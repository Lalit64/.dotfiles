"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[7704],{96038:(e,t,n)=>{n.r(t),n.d(t,{SKELETON_CARDS_COUNT:()=>St,SKELETON_SHELVES_COUNT:()=>yt,SKELETON_SHORTCUTS_COUNT:()=>vt,default:()=>_t});var s=n(59496),a=n(84875),i=n.n(a),o=n(83016),r=n(27887),c=n(34194),l=n(5748),u=n(78870),m=n(17458),d=n(46829),h=n(76946),x=n(20574),g=n(41917),j=n(12798),p=n(57759),f=n(68295),v=n(8662),y=n(26142),S=n(89161),C=n(50786),N=n(63337),_=n(50102),k=n(48161),P=n(14852),b=n(16442);const E="view-homeShortcutsGrid-shortcuts",w="view-homeShortcutsGrid-grid",T="view-homeShortcutsGrid-shortcutLink",B="view-homeShortcutsGrid-shortcut",L="view-homeShortcutsGrid-draggable",I="view-homeShortcutsGrid-imageContainer",M="view-homeShortcutsGrid-imageWrapper",O="view-homeShortcutsGrid-image",U="view-homeShortcutsGrid-main",A="view-homeShortcutsGrid-nameWrapper",D="view-homeShortcutsGrid-name",F="EzRmGRncgnv1zFgF4dqE",H="bPmmKmSPLKMhtJSaUJRX",J="vpQWUBWS_lXRLZMRJT7w",R="GSv7K805J9Jw7LB9tn2A",W="view-homeShortcutsGrid-PlayButtonContainer",z="s9c9x_mJq197U2hBzGtV";var G=n(4637);const $=(0,s.memo)((function({item:e}){const t=(0,k._)(e.uri),n=e.duration_ms??0,{isPlaying:s,isActive:a}=(0,b.$o)(e.uri),[i]=(0,P.z)(1e4,(t=>t.item?.uri===e.uri)),o=e.resume_point?.resume_position_ms??0,r=s||a?i:o,c=Math.round(100/(n/r)),l=t===_.Om.YES,u=n&&r>0;return l||u?(0,G.jsxs)("div",{className:J,children:[l?(0,G.jsx)(C.E,{iconSize:16,semanticColor:"textSubdued"}):null,u?(0,G.jsx)(N.k,{className:R,value:c,semanticColor:"essentialBase"}):null]}):null}));var q=n(90641),Y=n(92053),Z=n(68045),K=n(68810),V=n(85442),X=n(40698),Q=n(27794),ee=n(34025),te=n(70134),ne=n(16988),se=n(11064),ae=n(88406),ie=n(49706);const oe=(0,s.memo)((function({images:e=[],fallbackIcon:t=g.U}){const n=(0,ie.X)(e);return(0,G.jsx)("div",{className:I,children:(0,G.jsx)("div",{className:M,children:(0,G.jsx)(ae.E,{className:O,src:n?.url,loading:"lazy",testid:"shortcut-image",children:(0,G.jsx)(t,{"aria-hidden":!0})})})})}));var re=n(46779),ce=n(10022),le=n(70883);const ue=s.memo((function({index:e,item:t,fallbackIcon:n,showPlayButton:a,extraContent:o,onContextMenu:r=(()=>{}),onTouchStart:l=(()=>{}),onTouchEnd:u=(()=>{})}){const m=(0,Y.s0)(),d=(0,ce.o)(),{setColorFromUri:h,resetColor:g,clearColor:j}=(0,x.WQ)(),p=(0,Q.G3)(t.uri,t.release_date,t.resume_point?.resume_position_ms,t.resume_point?.fully_played),{spec:f,logger:y}=(0,ne.fU)(K.createDesktopShortcutsPlayNavCardEventFactory,{data:{position:e,uri:t.uri}}),{isPlaying:S,isActive:C,togglePlay:N}=(0,te.n)({uri:t.uri},{featureIdentifier:"home",referrerIdentifier:"home"}),_=(0,v.EC)(t.uri),k=_?.type,P=(0,q.v9)(V.br),b=c.ag.getLocale(),E=(0,se.S9)({featureFlag:P,locale:b,entity:k,type:"link"});const w=(0,s.useCallback)((()=>{d({targetUri:t.uri,intent:"navigate",type:"click"});const e=f.hitUiNavigate({destination:t.uri});let n;y.logInteraction(e),_&&(n=_.toURLPath(!0));const s=E?`/${ee.F0}${b}${n}`:n;s&&m(s)}),[t.uri,y,m,d,f,_,E,b]),I=(0,s.useCallback)((()=>{h(t.uri)}),[t.uri,h]);(0,s.useEffect)((()=>()=>{j()}),[j]);const M=(0,ne.Wi)(f),O=(0,re.O1)([t.uri],t.name);return(0,G.jsx)("div",{ref:M,className:B,onContextMenu:r,onTouchStart:l,onTouchEnd:u,onMouseEnter:I,onMouseLeave:g,children:(0,G.jsxs)("div",{className:L,onDragStart:O,children:[(0,G.jsx)(oe,{images:t.images,fallbackIcon:n}),(0,G.jsxs)("div",{className:U,children:[(0,G.jsxs)("div",{className:A,children:[(0,G.jsxs)("div",{className:D,children:[p&&(0,G.jsx)(Q.Rd,{className:H}),(0,G.jsx)(le.Link,{to:t.uri,onClick:w,title:t.name,children:(0,G.jsx)(Z.D,{as:"p",variant:"balladBold",className:F,children:t.name})})]}),o||null]}),a&&(0,G.jsx)("div",{className:i()(W,{[z]:S}),children:(0,G.jsx)(X.f,{isPlaying:S,onClick:function(){d({targetUri:t.uri,intent:S?"pause":"play",type:"click"});const e=f.playButtonFactory();let n;n=S?e.hitPause({itemToBePaused:t.uri}):C?e.hitResume({itemToBeResumed:t.uri}):e.hitPlay({itemToBePlayed:t.uri});const s=y.logInteraction(n);N({loggingParams:s})}})})]}),(0,G.jsx)("div",{onClick:w,className:T})]})})}));var me=n(48944),de=n(30547),he=n(99727),xe=n(30930),ge=n(74253);const je=s.memo((function(e){return(0,v.zO)(e.item.uri)?(0,G.jsx)(ue,{...e,fallbackIcon:g.U}):(0,y.MW)(e.item.uri)?(0,G.jsx)(S._,{menu:(0,G.jsx)(y.XL,{}),children:(0,G.jsx)(ue,{...e,fallbackIcon:g.U})}):(0,G.jsx)(S._,{menu:(0,G.jsx)(xe.X,{uri:e.item.uri}),children:(0,G.jsx)(ue,{...e,fallbackIcon:g.U})})})),pe=s.memo((function(e){return(0,G.jsx)(S._,{menu:(0,G.jsx)(me.Y,{uri:e.item.uri}),children:(0,G.jsx)(ue,{...e,fallbackIcon:j.c})})})),fe=s.memo((function(e){return(0,G.jsx)(S._,{menu:(0,G.jsx)(de.m,{uri:e.item.uri}),children:(0,G.jsx)(ue,{...e,fallbackIcon:p.a})})})),ve=s.memo((function(e){return(0,G.jsx)(S._,{menu:(0,G.jsx)(ge.M,{uri:e.item.uri}),children:(0,G.jsx)(ue,{...e,fallbackIcon:f.J,showPlayButton:!1})})})),ye=s.memo((function(e){return e.item.podcast?(0,G.jsx)(ve,{index:e.index,shouldSetBackgroundColor:e.shouldSetBackgroundColor,item:e.item.podcast,showPlayButton:e.showPlayButton}):(0,G.jsx)(S._,{menu:(0,G.jsx)(he.k,{uri:e.item.uri}),children:(0,G.jsx)(ue,{...e,fallbackIcon:f.J,extraContent:(0,G.jsx)($,{...e})})})}));var Se=n(49767),Ce=n(52265);const Ne="J6UEDIqMSJhYlwGoeUZB",_e="ZjFf4lVC48DSryAjP9qB",ke=s.memo((function(e){const t=(0,Ce.x)(),n={...e.item,...t};return(0,G.jsx)(ue,{...e,item:n,fallbackIcon:()=>(0,G.jsx)("div",{className:Ne,children:(0,G.jsx)(Se.P,{iconSize:32,className:_e})})})}));var Pe=n(54838),be=n(46351);const Ee=24,we=270;function Te(e){if(null===e)return{cssProperties:{"--min-column-width":"270px","--item-height":"80px","--column-gap":"24px","--row-gap":"16px"},showPlayButton:!0};const t=e.offsetWidth,n=t<600?200:we;const s=Math.min(Math.floor((t+Ee)/(n+Ee)),3),a=t>=858?80:64;return{cssProperties:{"--min-column-width":`${n}px`,"--item-height":`${a}px`,"--column-gap":"24px","--row-gap":`${64===a?12:16}px`},showPlayButton:(t-(s-1)*Ee)/s>=we}}function Be(){const e=(0,s.useRef)(null),[t,n]=(0,s.useState)(Te(null)),a=(0,s.useCallback)((()=>{null!==e.current&&n(Te(e.current))}),[]),i=(0,s.useCallback)((t=>{e.current=t,a()}),[a]);return(0,m.a)((()=>a())),[t,i]}const Le=e=>{if(null!==e&&"object"==typeof e){const{type:t,name:n}=e;return t===h.p.YOUR_EPISODES&&"string"==typeof n}return!1},Ie=s.memo((function({title:e,tagline:t,items:n}){const{fetchMultipleColors:a}=(0,x.WQ)(),i=!(0,Pe.k)(),o=e??(()=>{const e=(new Date).getHours();let t=c.ag.get("home.evening");return e>=5&&e<12?t=c.ag.get("home.morning"):e>=12&&e<18&&(t=c.ag.get("home.afternoon")),t})(),[r,l]=Be();return(0,s.useEffect)((()=>{const e=n?.map(x.lh)||[];a(e)}),[n,a]),i||!n?.length?null:(0,G.jsxs)("section",{className:E,"aria-label":o,ref:l,children:[(0,G.jsx)(be.r,{title:o,titleVariant:"alto",tagline:t}),(0,G.jsx)("div",{className:w,style:r.cssProperties,children:n.filter(((e,t)=>Le(e)||!e.error)).filter(((e,t)=>t<6)).map(((e,t)=>{if(Le(e))return(0,G.jsx)(ke,{index:t,item:e,showPlayButton:r.showPlayButton,shouldSetBackgroundColor:0===t},`${t}-${e.uri}`);const n=function(e){const t=((0,v.EC)(e)||{}).type;switch(t){case v.JM.ARTIST:return fe;case v.JM.ALBUM:case v.JM.COLLECTION_ALBUM:return pe;case v.JM.PLAYLIST:case v.JM.PLAYLIST_V2:return je;case v.JM.SHOW:return ve;case v.JM.EPISODE:return ye;case v.JM.COLLECTION:return je;default:return console.warn(`Unable to resolve entity shortcut from ${e} of type "${t||"unknown"}"`),ve}}(e.uri);return(0,G.jsx)(n,{index:t,item:e,showPlayButton:r.showPlayButton,shouldSetBackgroundColor:0===t},`${t}-${e.uri}`)}))})]})})),Me=e=>(0,G.jsx)(u.L,{onError:e=>{(0,d.vK)(e,"HomeShortcutsGrid")},children:(0,G.jsx)(Ie,{...e})});var Oe=n(30380),Ue=n(25503);const Ae="zUf7jtv9GPOKC1jYO5TO",De="T8QLel3PoQTgJUpGYj7Q",Fe=(0,s.memo)((({isLoading:e})=>{const t=(0,Oe.h)("shimmer");return(0,G.jsx)("div",{className:I,children:(0,G.jsx)("div",{ref:t,className:i()(M,{[De]:e})})})})),He=(0,s.memo)((({isLoading:e})=>(0,G.jsx)("div",{className:i()(B,Ae),"data-testid":"skeleton-shortcut",children:(0,G.jsxs)("div",{className:L,children:[(0,G.jsx)(Fe,{isLoading:e}),(0,G.jsx)("div",{className:U,children:(0,G.jsx)(Ue.C,{as:"p",variant:"balladBold",className:F,isLoading:e})})]})}))),Je="v7dc5ekmeBiAYnLzV8oT",Re=(0,s.memo)((({shortcutCount:e})=>{const[t,n]=Be();return(0,G.jsxs)("section",{className:E,ref:n,children:[(0,G.jsx)(Ue.C,{as:"h2",variant:"alto",className:Je,charCount:25,isLoading:!0}),(0,G.jsx)("div",{className:w,style:t.cssProperties,children:[...new Array(e).keys()].slice(0,6).map(((e,t)=>(0,G.jsx)(He,{isLoading:!0},t)))})]})}));var We=n(88645),ze=n(12764),Ge=n(519),$e=n(63786),qe=n(4578),Ye=n(26183),Ze=n(88761),Ke=n(1989),Ve=n(2534),Xe=n(90258),Qe=n(96039),et=n(19139),tt=n(47871),nt=n(57654);const st=({spec:e,section:t,index:n})=>{const a=(0,o.W6)(tt.ty,{loadingValue:!1})?Qe.N:et.q;return(0,s.useMemo)((()=>t.sectionItems.items.some((e=>(0,nt.d)(e.content)))),[t.sectionItems])?(0,G.jsx)(ne.Nh,{spec:e.shelvesFactory(),children:(0,G.jsx)(a,{total:t.sectionItems.totalCount,seeAllUri:t.uri,pageId:t.uri,title:t.data.title?.text??"",index:n,id:t.uri,children:t.sectionItems.items.map(nt.x).filter((e=>!!e))})}):null};var at=n(70223);const it=({spec:e,section:t,index:n})=>(0,G.jsx)(ne.Nh,{spec:e.shelvesFactory(),children:(0,G.jsx)(at.default,{title:t.data.title?.text??void 0,showAll:!1,index:n})});var ot=n(54197);const rt=({spec:e,greeting:t,section:n})=>(0,G.jsx)(ne.Nh,{spec:e.shortcutsFactory(),children:(0,G.jsx)(Me,{items:n.sectionItems.items.map(ot.lh),title:t??void 0})});var ct=n(14408);const lt=(0,s.lazy)((async()=>{const{FeatureActivationShelf:e}=await Promise.all([n.e(1814),n.e(8228)]).then(n.bind(n,43700));return{default:e}})),ut=({spec:e,greeting:t,section:n,index:a})=>{const i=(0,y._n)();switch(n.data?.__typename){case"HomeGenericSectionData":return(0,G.jsx)(st,{spec:e,section:(0,ct.f)(n,n.data),index:a});case"HomeFeatureActivationSectionData":return(0,Ve.wW)()?(0,G.jsx)(s.Suspense,{fallback:null,children:(0,G.jsx)(lt,{})}):null;case"HomeShortsSectionData":return(0,G.jsx)(rt,{spec:e,greeting:t,section:(0,ct.f)(n,n.data)});case"HomeRecentlyPlayedSectionData":return(0,G.jsx)(it,{spec:e,section:(0,ct.f)(n,n.data),index:a});case"HomeFeedBaselineSectionData":case"HomeNativeAdsSectionData":case"HomeOnboardingSectionData":case"HomeOnboardingSectionDataV2":return null;case"HomeYourDJSectionData":{if(!i)return null;const t=(0,ct.f)(n,n.data),{data:s,sectionItems:a}=t,o=a.items[0];if("PlaylistResponseWrapper"===o.content.__typename&&"Playlist"===o.content.data.__typename){const{data:t}=o.content;return(0,G.jsx)(y.KE,{spec:e,shelfTitle:s.title?.text??"",title:t.name,description:t.description??""})}return null}case null:case void 0:return null;default:return(0,Xe._)(n.data),null}},mt=({spec:e,greeting:t,container:n})=>{const{spec:a,logger:i}=(0,ne.fU)(Ze.createDesktopHomeFeatureActivationShelfEventFactory,{});return(0,s.useEffect)((()=>{(0,Ke.wW)()&&i.logImpression(a.impressionElementFactory().impression())}),[a,i]),(0,G.jsx)(G.Fragment,{children:n.sections.items.map(((n,s)=>(0,G.jsx)(ut,{spec:e,greeting:t,section:n,index:s},`${s}-${n.uri}`)))})};var dt=n(52745),ht=n(5031);const xt=(0,s.memo)((({cardCount:e})=>(0,G.jsx)(ht.X,{isLoading:!0,children:[...new Array(e).keys()].map(((e,t)=>(0,G.jsx)(dt.A,{isLoading:!0},t)))})));var gt=n(38412),jt=n(32317);const pt=()=>(0,o.W6)(tt.Jw)===tt.pF.ONHOME?(0,G.jsx)(jt.w,{children:(0,G.jsx)(gt.M,{onSearch:!1})}):null;var ft=n(18237);const vt=6,yt=6,St=6,Ct=(0,s.memo)((({shortcutCount:e,shelfCount:t,cardCount:n})=>(0,G.jsx)("section",{"data-testid":"home-page",children:(0,G.jsx)("div",{className:ft.Z.home,children:(0,G.jsxs)("div",{className:i()(ft.Z.content,"contentSpacing"),children:[(0,G.jsx)(Re,{shortcutCount:e}),[...new Array(t).keys()].map(((e,t)=>(0,G.jsx)(xt,{cardCount:n},t)))]})})}))),Nt=({spec:e})=>{(0,ze.z)("home");const{data:t,error:n,loading:s}=(0,qe.b3)({timeZone:(0,Ye.L7)()},{cacheTime:Ye.us,staleTime:Ye.fS});if(s)return(0,G.jsx)(Ct,{shortcutCount:vt,shelfCount:yt,cardCount:St});if(null!==n)return(0,G.jsx)(We.h,{hasError:!0,errorMessage:c.ag.get("error.generic")});const a=t?.home;return"HomeResponsePayload"!==a?.__typename||0===a.sectionContainer.sections.totalCount||0===a.sectionContainer.sections.items.length?(0,G.jsx)(We.h,{hasError:!0,errorMessage:c.ag.get("error.generic")}):(0,G.jsx)("section",{"data-testid":"home-page",children:(0,G.jsx)("div",{className:ft.Z.home,children:(0,G.jsx)("div",{className:i()(ft.Z.content,"contentSpacing"),children:(0,G.jsx)(mt,{spec:e,greeting:a.greeting?.text??null,container:a.sectionContainer})})})})},_t=()=>{const{spec:e}=(0,ne.fU)(r.createDesktopHomeEventFactory,{data:{identifier:"home",uri:"spotify:home"}}),t=(0,o.W6)(tt.yg),n=(0,$e.S)(t);return(0,G.jsx)(ne.Nh,{spec:e,children:(0,G.jsxs)(Ge.q,{config:n,children:[(0,G.jsx)(l.$,{children:c.ag.get("page.generic-title")}),(0,G.jsx)(s.Suspense,{fallback:null,children:(0,G.jsx)(pt,{})}),(0,G.jsx)(Nt,{spec:e})]})})}}}]);
//# sourceMappingURL=home-v2.js.map