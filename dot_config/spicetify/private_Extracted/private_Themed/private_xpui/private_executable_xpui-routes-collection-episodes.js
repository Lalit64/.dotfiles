"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[1289],{27651:(e,t,a)=>{a.d(t,{u:()=>L});var r=a(59496),i=a(84875),l=a.n(i),n=a(68045),s=a(93163),o=a(3357),c=a(4289);const A="FvfvGU3jvHRskUU9v9_8",d="Q9AlbZn2EGzy3MTWXa8X",u="mxmxS0y8LiwSs5nueKPT",E="GXxVAveNFStY3pBI_NO4",T="eHcXC2s97InYP7rMNT0H";var g=a(4637);const L=(0,r.memo)((function(e){const{children:t,message:a,title:r,linkTitle:i,linkTo:L,onClick:D,renderInline:m=!1}=e,{isXSOnly:p,isSMOnly:h}=(0,o.e)(),C=p||h;return(0,g.jsxs)("section",{className:l()(A,{[d]:m}),children:[t,(0,g.jsx)(n.D,{as:"h1",variant:C?"cello":"alto",className:E,children:r}),(0,g.jsx)(n.D,{variant:C?"mesto":"ballad",className:T,children:a}),i&&(L||D)&&(0,g.jsx)(s.D,{colorSet:"invertedLight",className:u,href:L,onClick:D,component:c.Z,children:i})]})}))},87293:(e,t,a)=>{a.d(t,{$:()=>o,Q:()=>s});var r=a(59496),i=a(44438),l=a(76794),n=a(4637);const s=(0,r.createContext)({setSortState:()=>{throw new Error("setSortState must be used within a LibrarySortProvider")},sortState:l.oT.ADDED_AT}),o=r.memo((function({uri:e,children:t,defaultSortOption:a}){return(0,n.jsx)(i.r,{uri:e,defaultState:a,sortContext:s,children:t})}))},76794:(e,t,a)=>{a.d(t,{Aq:()=>d,Bf:()=>S,EY:()=>D,G5:()=>h,JV:()=>b,MY:()=>o,Ru:()=>c,ZP:()=>m,a6:()=>g,aY:()=>x,e3:()=>T,ei:()=>s,o$:()=>u,oT:()=>n,pT:()=>y,rJ:()=>P,u3:()=>f,w0:()=>C});var r=a(34194),i=a(79239),l=a(42720);let n;!function(e){e.SHOW_ALPHABETICAL="SHOW_ALPHABETICAL",e.BOOK_ALPHABETICAL="BOOK_ALPHABETICAL",e.EPISODE_ALPHABETICAL="EPISODE_ALPHABETICAL",e.PLAYLIST_ALPHABETICAL="PLAYLIST_ALPHABETICAL",e.ALBUM_ALPHABETICAL="ALBUM_ALPHABETICAL",e.ADDED_AT="ADDED_AT",e.CREATOR_NAME="CREATOR_NAME",e.CREATOR_NAME_ALPHABETICAL="CREATOR_NAME_ALPHABETICAL",e.ALBUM_CREATOR_NAME="ALBUM_CREATOR_NAME",e.RECENTLY_PLAYED="RECENTLY_PLAYED",e.MOST_RELEVANT="MOST_RELEVANT",e.CUSTOM_ORDER="CUSTOM_ORDER"}(n||(n={}));const s={"show-alphabetical":n.SHOW_ALPHABETICAL,"book-alphabetical":n.BOOK_ALPHABETICAL,"episode-alphabetical":n.EPISODE_ALPHABETICAL,"playlist-alphabetical":n.PLAYLIST_ALPHABETICAL,"album-alphabetical":n.ALBUM_ALPHABETICAL,"recently-added":n.ADDED_AT,"creator-name":n.CREATOR_NAME,"creator-name-alphabetical":n.CREATOR_NAME_ALPHABETICAL,"album-creator-name":n.ALBUM_CREATOR_NAME,"recently-played":n.RECENTLY_PLAYED,"playlist-most-relevant":n.MOST_RELEVANT,"playlist-custom-order":n.CUSTOM_ORDER},o={[n.RECENTLY_PLAYED]:{key:"recently-played",get value(){return r.ag.get("collection.sort.recently-played")}},[n.ADDED_AT]:{key:"recently-added",get value(){return r.ag.get("collection.sort.recently-added")}},[n.SHOW_ALPHABETICAL]:{key:"show-alphabetical",get value(){return r.ag.get("collection.sort.alphabetical")}},[n.BOOK_ALPHABETICAL]:{key:"book-alphabetical",get value(){return r.ag.get("collection.sort.alphabetical")}},[n.EPISODE_ALPHABETICAL]:{key:"episode-alphabetical",get value(){return r.ag.get("collection.sort.alphabetical")}},[n.PLAYLIST_ALPHABETICAL]:{key:"playlist-alphabetical",get value(){return r.ag.get("collection.sort.alphabetical")}},[n.ALBUM_CREATOR_NAME]:{key:"album-creator-name",get value(){return r.ag.get("collection.sort.creator")}},[n.CREATOR_NAME]:{key:"creator-name",get value(){return r.ag.get("collection.sort.creator")}},[n.CREATOR_NAME_ALPHABETICAL]:{key:"creator-name-alphabetical",get value(){return r.ag.get("collection.sort.alphabetical")}},[n.ALBUM_ALPHABETICAL]:{key:"album-alphabetical",get value(){return r.ag.get("collection.sort.alphabetical")}},[n.MOST_RELEVANT]:{key:"playlist-most-relevant",get value(){return r.ag.get("collection.sort.most-relevant")}},[n.CUSTOM_ORDER]:{key:"playlist-custom-order",get value(){return r.ag.get("collection.sort.custom-order")}}},c=[n.ADDED_AT,n.ALBUM_ALPHABETICAL,n.CREATOR_NAME],A={[n.ADDED_AT]:{field:i.lY.ADDED_AT,order:i.As.DESC},[n.ALBUM_ALPHABETICAL]:{field:i.lY.NAME,order:i.As.ASC},[n.CREATOR_NAME]:{field:i.lY.ARTIST_NAME,order:i.As.ASC}};const d=e=>{if(function(e){return c.includes(e)}(e))return A[e]},u=[n.ADDED_AT,n.CREATOR_NAME_ALPHABETICAL],E={[n.ADDED_AT]:{field:i.hx.ADDED_AT,order:i.As.DESC},[n.CREATOR_NAME_ALPHABETICAL]:{field:i.hx.NAME,order:i.As.ASC}};const T=e=>{if(function(e){return u.includes(e)}(e))return E[e]},g=[n.ADDED_AT,n.SHOW_ALPHABETICAL],L={[n.ADDED_AT]:{field:i.aW.ADDED_AT,order:i.As.DESC},[n.SHOW_ALPHABETICAL]:{field:i.aW.NAME,order:i.As.ASC}};const D=e=>{if(function(e){return g.includes(e)}(e))return L[e]},m=[n.ADDED_AT,n.BOOK_ALPHABETICAL],p={[n.ADDED_AT]:i.VN.ADDED_AT,[n.BOOK_ALPHABETICAL]:i.VN.NAME};const h=e=>{if(function(e){return m.includes(e)}(e))return p[e]},C=[n.MOST_RELEVANT,n.RECENTLY_PLAYED,n.ADDED_AT,n.PLAYLIST_ALPHABETICAL,n.CUSTOM_ORDER],_={[n.ADDED_AT]:{field:l.bD.ADDED_AT,order:l.As.DESC},[n.RECENTLY_PLAYED]:{field:l.bD.RECENTLY_PLAYED,order:l.As.ASC},[n.PLAYLIST_ALPHABETICAL]:{field:l.bD.NAME,order:l.As.ASC},[n.MOST_RELEVANT]:{field:l.bD.RELEVANCE,order:l.As.DESC},[n.CUSTOM_ORDER]:void 0};const y=e=>{if(function(e){return C.includes(e)}(e))return _[e]},x=n.ADDED_AT,f=n.ADDED_AT,P=n.ADDED_AT,S=n.MOST_RELEVANT,b=n.ADDED_AT},31823:(e,t,a)=>{a.d(t,{h:()=>E});var r=a(59496),i=a(32884),l=a(45541),n=a(16988),s=a(65830),o=a(87293),c=a(76794),A=a(4637);const d=r.memo((function({sortOptions:e,onSort:t}){const{sortState:a,setSortState:i}=(0,r.useContext)(o.Q),l=(0,r.useCallback)((e=>{const a=c.ei[e];t?.(a),i(a)}),[t,i]),n=e.map((e=>c.MY[e])),d=c.MY[a];return(0,A.jsx)(s.A,{options:n,onSelect:l,selected:d})})),u="collection-searchBar-searchBar",E=r.memo((function({canSort:e,canFilter:t,filterPlaceholder:a,sortOptions:s}){const{spec:o,logger:c}=(0,n.fU)(i.createDesktopSearchBarEventFactory,{}),E=(0,r.useCallback)((()=>{c.logInteraction(o.filterFieldFactory().keyStrokeFilter())}),[c,o]),T=(0,r.useCallback)((()=>{c.logInteraction(o.filterFieldFactory().hitClearFilter())}),[c,o]),g=(0,r.useCallback)((()=>{c.logInteraction(o.sortButtonFactory().hitSort())}),[c,o]);return(0,A.jsxs)("div",{className:u,children:[t?(0,A.jsx)(r.Suspense,{fallback:null,children:(0,A.jsx)(l.K,{placeholder:a,onFilter:E,onClear:T})}):null,e?(0,A.jsx)(d,{sortOptions:s,onSort:g}):null]})}))},52539:(e,t,a)=>{a.d(t,{$:()=>r.$,Q:()=>r.Q});var r=a(87293)},45204:(e,t,a)=>{a.d(t,{Aq:()=>r.Aq,Bf:()=>r.Bf,EY:()=>r.EY,G5:()=>r.G5,JV:()=>r.JV,Ru:()=>r.Ru,ZP:()=>r.ZP,a6:()=>r.a6,aY:()=>r.aY,e3:()=>r.e3,o$:()=>r.o$,oT:()=>r.oT,pT:()=>r.pT,rJ:()=>r.rJ,u3:()=>r.u3,w0:()=>r.w0});var r=a(76794)},36061:(e,t,a)=>{a.r(t),a.d(t,{default:()=>de});var r=a(59496),i=a(82304),l=a(34194),n=a(27651),s=a(88645),o=a(42528),c=a(93628),A=a(52539),d=a(45204),u=a(54838),E=a(61190),T=a(17),g=a(70134),L=a(91995),D=a(19244),m=a(33047),p=a(31823),h=a(15142),C=a(79239);const _={[C.yW.NAME]:o.hI.TITLE,[C.yW.SHOW_NAME]:o.hI.SHOW,[C.yW.ADDED_AT]:o.hI.ADDED_AT},y=[d.oT.ADDED_AT,d.oT.CREATOR_NAME,d.oT.EPISODE_ALPHABETICAL],x={[d.oT.ADDED_AT]:{field:C.yW.ADDED_AT,order:C.As.DESC},[d.oT.CREATOR_NAME]:{field:C.yW.SHOW_NAME,order:C.As.ASC},[d.oT.EPISODE_ALPHABETICAL]:{field:C.yW.NAME,order:C.As.ASC}},f=e=>{if(y.includes(e))return x[e]},P=e=>{if(!y.includes(e))return;const t=f(e);if(!t?.field)return;const a=_[t.field];if(!a)return;return o.Vd[a].map((e=>t.order?`${e} ${t.order}`:e)).join(",")},S="m9xwK71Ieq9cySIq4FAP",b="PkEMTu8sGqJeQWJ7HvEs",O="DbH2KkRA8yVWWpXGaNSW";var R=a(4637);const I=({metadata:e,canSort:t,backgroundColor:a,isPlaying:r,isOnline:i,togglePlay:n})=>{const s=(0,h.y)(),{uri:o,name:c}=e,A=e.totalLength>0;return(0,R.jsx)(D.o,{backgroundColor:a,children:(0,R.jsxs)(D.F,{children:[A&&(0,R.jsx)(m.$,{onClick:()=>n(),isPlaying:r,size:"lg",uri:o,disabled:!i,ariaPlayLabel:l.ag.get("playlist.a11y.play",c),ariaPauseLabel:l.ag.get("playlist.a11y.pause",c)}),t&&(0,R.jsx)("div",{className:O,children:(0,R.jsx)(p.h,{canSort:s.getCapabilities().canSort,canFilter:s.getCapabilities().canFilter,filterPlaceholder:l.ag.get("playlist.search_in_playlist"),sortOptions:y})})]})})};var M=a(49481),N=a(89662),k=a(31747),B=a(99727),v=a(36484),j=a(38930),H=a(39535);const w="p6DKqBcwmVtxmHt8ju43",U="_OxEpxzAgJiTENfolVUN";var Y=a(46779),W=a(10022),F=a(89161),V=a(27344),$=a(21298),G=a(33033),K=a(890),X=a(76946),q=a(31612),J=a(59676),Q=a(37042);const Z={small:64,standard:300,large:640,xlarge:1024},z=r.memo((function({index:e,contextUri:t,episode:a,onRemove:i,usePlayContextItem:l}){const n=(0,r.useRef)(a.duration.milliseconds-a.timeLeft.milliseconds),s=a.uri,[o,A]=(0,r.useState)(0===a.timeLeft.milliseconds),{filter:d}=(0,r.useContext)(c.fo),E=(0,Y.O1)(),T=(0,k.jh)(),L=(0,W.o)(),[D]=(0,h.Z)(s,!0),m=(0,Q.k)(a.uri,a.isPlayable),p=(0,u.k)(),C=(0,G.Y)((e=>{if(e?.item?.uri===a.uri){const t=(0,K.k)(e)??0;return n.current=t,t}return 0})),{isPlaying:_,isActive:y,togglePlay:x}=l({uri:s,index:e}),{isPlaying:f,isActive:P,togglePlay:S}=(0,g.n)({uri:s,pages:[{items:[{type:X.p.EPISODE,uri:s,uid:null,provider:null}]}]},{featureIdentifier:"your_library",referrerIdentifier:"your_library"});(0,r.useEffect)((()=>{D||i()}),[D,i]),(0,r.useEffect)((()=>{_||a.duration.milliseconds<=n.current&&A(!0)}),[_,a.duration.milliseconds]);const b=(0,r.useCallback)((e=>{e||(n.current=0),A(e)}),[]),O=(0,r.useCallback)((()=>{L({type:"click",targetUri:s,intent:"navigate"})}),[s,L]),I=(0,r.useCallback)((()=>{p?(L({type:"click",intent:_?"pause":"play"}),x()):(L({type:"click",intent:f?"pause":"play"}),S())}),[p,_,f,L,x,S]),M=(0,r.useCallback)((e=>(0,R.jsx)(J.o,{searchWords:[d],textToHighlight:e})),[d]),U=a.podcastSubscription?.isPaywalled??!1,z=a.podcastSubscription?.isUserSubscribed??!1,{badges:ee}=(0,q.r)({isExplicit:a.isExplicit,isMOGEFRestricted:a.is19PlusOnly,isPaywalled:U});let te=!1;return(y||!p&&P)&&(te=!0),D?(0,R.jsxs)(N.ZP,{value:"row",index:e,children:[(0,R.jsx)("hr",{className:w,"aria-hidden":!0}),(0,R.jsx)(F._,{menu:(0,R.jsx)(B.k,{uri:s,showUri:a.show?.uri,isPlayed:o,onMarkAsPlayed:b}),children:(0,R.jsx)(v.X,{requestId:a.requestId,index:e,uri:s,uid:s,size:T,images:a.images.map((e=>({url:e.url,width:e.width||(e.label?Z[e.label]:null),height:e.height||(e.label?Z[e.label]:null)}))),isPaywalled:U,isUserSubscribed:z,name:a.name,highlightText:M,showName:a.show?.name,showUri:a.show?.uri,description:a.description,isPlayable:m,fullyPlayed:o,durationMs:a.duration.milliseconds,releaseDate:a.release.date||"",resumePositionMs:n.current,handleDragStart:e=>{if(e.target!==e.currentTarget)return;let r=`${a.name}`;a.show&&(r+=` • ${a.show.name}`),E(e,[s],r,t)},handlePlaybackClick:I,handleClick:O,isCurrentlyPlaying:te,isPlaying:p?_:f,position:te?C:void 0,episodeSharingInfo:null,onMarkAsPlayed:b,badges:(0,R.jsxs)(R.Fragment,{children:[ee.explicit&&(0,R.jsx)(V.N,{}),ee.paid&&(0,R.jsx)(H.g,{}),ee.nineteen&&(0,R.jsx)($.X,{size:16})]}),playButtonWrapper:e=>(0,R.jsx)(j.l,{enabled:U&&!z,showUri:a.show?.uri||void 0,children:e})})})]}):null})),ee=r.memo((function({contextUri:e,usePlayContextItem:t}){const a=(0,r.useContext)(T.H),{sortState:i}=(0,r.useContext)(A.Q),[l,n]=(0,r.useState)({totalLength:0,unfilteredTotalLength:0,offset:0,items:[],limit:50}),s=(0,r.useRef)(!1),o=(0,r.useRef)(0),d=(0,r.useRef)(0),{filter:u}=(0,r.useContext)(c.fo),E=(0,r.useCallback)((()=>{d.current++}),[]),{ref:g,breakpoint:L}=(0,k.Db)({[k.Uo.MEDIUM]:0,[k.Uo.LARGE]:600}),D=(0,r.useCallback)(((e=!1)=>{const t=o.current;null!==t&&(s.current||(s.current=!0,(async e=>{const t=await a.getEpisodes({offset:e-d.current,limit:50,sort:f(i),filter:u});return d.current=0,t})(Number(t)).then((a=>{n((r=>{const i=Number(a.offset)+a.items.length,l=e?[]:[...r.items];return l.splice(Number(t),a.items.length,...a.items),o.current=i<a.totalLength?i:null,{...a,items:l}})),s.current=!1}))))}),[u,a,i]);return(0,r.useEffect)((()=>{o.current=0,D(!0)}),[D]),(0,R.jsx)(k.ZU.Provider,{value:L,children:(0,R.jsx)(N.ZP,{value:"track-list",children:(0,R.jsx)("div",{ref:g,children:(0,R.jsx)(M.C,{onReachBottom:D,triggerOnInitialLoad:!0,children:l.items.map(((a,r)=>(0,R.jsx)("div",{className:U,children:(0,R.jsx)(z,{index:r,episode:a,contextUri:e,onRemove:E,usePlayContextItem:t},`${a.uri}/${r}`)},`${r}${a.uri}`)))})})})})}));var te=a(68045),ae=a(49188),re=a(97054),ie=a(74684),le=a(6496),ne=a(96470);const se=({metadata:e,backgroundColor:t,isPlaying:a,isOnline:i,togglePlay:n})=>{const{uri:s,name:o,images:c,totalLength:A,owner:d}=e,u=(0,r.useMemo)((()=>({id:d.username,uri:d.uri,name:d.username,displayName:d.displayName||void 0,images:d.images||[]})),[d]);return(0,R.jsxs)(ae.gF,{backgroundColor:t,children:[(0,R.jsxs)(re.W,{children:[(0,R.jsx)(m.$,{size:"md",onClick:()=>n(),isPlaying:a,uri:s,disabled:!i,ariaPlayLabel:l.ag.get("playlist.a11y.play",o),ariaPauseLabel:l.ag.get("playlist.a11y.pause",o)}),(0,R.jsx)(ie.i,{text:o})]}),(0,R.jsx)(ae.Oz,{images:c,name:o,shape:le.K.ROUNDED_CORNERS,renderImage:()=>(0,R.jsx)(ne.$,{})}),(0,R.jsxs)(ae.sP,{children:[(0,R.jsx)(te.D,{variant:"mestoBold",children:l.ag.get("playlist")}),(0,R.jsx)(ae.xd,{canEdit:!1,onClick:()=>{},children:o}),(0,R.jsx)(ae.QS,{creators:[u],totalEpisodes:A})]})]})};var oe=a(5748),ce=a(45577);const Ae=({metadata:e,canSort:t})=>{const a=(0,E.Y5)("#006450"),s=(0,u.k)(),{sortState:d}=(0,r.useContext)(A.Q),{filter:T}=(0,r.useContext)(c.fo),{isPlaying:D,togglePlay:m,usePlayContextItem:p}=(0,g.n)({uri:e.uri,metadata:{[L.sb.SORTING_CRITERIA]:P(d),[L.sb.FILTERING_PREDICATE]:(0,o.aK)(T)}},{featureIdentifier:"your_library",referrerIdentifier:"your_library"});return(0,R.jsxs)("section",{className:b,"data-testid":"your-episodes-page",children:[(0,R.jsx)(oe.$,{children:l.ag.get("sidebar.your_episodes")}),(0,R.jsx)(se,{metadata:e,backgroundColor:a,isPlaying:D,isOnline:s,togglePlay:m}),(0,R.jsxs)("div",{className:S,children:[(0,R.jsx)(I,{metadata:e,backgroundColor:a,isPlaying:D,isOnline:s,togglePlay:m,canSort:t}),(0,R.jsx)("div",{className:"contentSpacing",children:e.totalLength>0?(0,R.jsx)(ee,{contextUri:e.uri,usePlayContextItem:p}):(0,R.jsx)(n.u,{message:l.ag.get("collection.empty-page.episodes-subtitle"),title:l.ag.get("collection.empty-page.episodes-title"),linkTo:"/genre/podcasts-web",linkTitle:l.ag.get("collection.empty-page.shows-cta"),renderInline:!0,children:(0,R.jsx)(i.G,{"aria-hidden":"true"})})})]})]})},de=(0,r.memo)((function(){const e=(0,r.useContext)(T.H).getCapabilities(),t=(0,ce.x)();return t?(0,R.jsx)(A.$,{uri:t.uri,defaultSortOption:d.oT.ADDED_AT,children:(0,R.jsx)(c.hz,{uri:t.uri,children:(0,R.jsx)(Ae,{metadata:t,canSort:e.canSortTracksAndEpisodes&&t.totalLength>0})})}):(0,R.jsx)(s.h,{hasError:!1,errorMessage:l.ag.get("error.not_found.title.page"),loadOffline:e.canModifyOffline})}))},3357:(e,t,a)=>{a.d(t,{e:()=>E});var r=a(81960);const i="(min-width: 0px)",l="(min-width: 0px) and (max-width: 767px)",n="(min-width: 768px)",s="(min-width: 768px) and (max-width: 1023px)",o="(min-width: 1024px)",c="(min-width: 1024px) and (max-width: 1279px)",A="(min-width: 1280px)",d="(min-width: 1280px) and (max-width: 1919px)",u="(min-width: 1920px)",E=()=>({isXS:(0,r.a)(i),isXSOnly:(0,r.a)(l),isSM:(0,r.a)(n),isSMOnly:(0,r.a)(s),isMD:(0,r.a)(o),isMDOnly:(0,r.a)(c),isLG:(0,r.a)(A),isLGOnly:(0,r.a)(d),isXL:(0,r.a)(u)})}}]);
//# sourceMappingURL=xpui-routes-collection-episodes.js.map