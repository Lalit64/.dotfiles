"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[5713],{94958:(e,t,a)=>{a.d(t,{V:()=>E,e:()=>D});var i=a(59496),s=a(90641),o=a(66527),n=a(8662),r=a(16406),l=a(22465),c=a(99727),d=a(36484),u=a(38930),g=a(50274),m=a(39535),p=a(46779),h=a(10022),x=a(60960),y=a(91404),b=a(89161),k=a(27344),j=a(21298),f=a(89662),v=a(31747),P=a(14852),C=a(16988),S=a(67053),w=a(31612),N=a(92780),I=a(4637);function D(e){return{uri:e.uri,name:e.name,trailer:e.trailer,showTypes:e.showTypes}}const A=e=>`activation-trigger-mme-${e}`,E=i.memo((function({index:e=-1,showMetadata:t,episode:a,usePlayContextItem:E,status:R,variant:U}){const F=(0,N.E)(),B=a.playedState.playPositionMilliseconds,O=a.uri,T=(0,i.useRef)(null),[L,M]=(0,i.useState)(a.playedState.state===S.sY.Completed),_=(0,p.O1)(),z=(0,x.g)(),G=(0,v.jh)(),W=(0,h.o)(),H=(0,s.I0)(),{UBIFragment:K,spec:X,logger:Z}=(0,C.fU)(o.createDesktopEpisodeBlockEventFactory,{data:{uri:O,reason:a.requestId||"",position:e}}),Y=(0,C.Wi)(X),{isActive:V,isPlaying:q,togglePlay:$}=E({uri:O}),[Q]=(0,P.z)(1e4,(e=>e?.item?.uri===O));(0,i.useEffect)((()=>{q&&(T.current=Q)}),[q,Q]),(0,i.useEffect)((()=>{!q&&T.current&&a.duration.milliseconds<=T.current&&M(!0)}),[q,a.duration.milliseconds]);const J=(0,i.useCallback)((e=>{e||(T.current=0),M(e)}),[]),ee=D(t),te=(0,y.s)({...a,coverArt:{sources:a.coverArt}},ee),ae=(0,i.useCallback)((()=>{if(a.episodeType===S.Wf.Episode&&F)g.y.set((()=>({triggerId:A(a.uri),triggerAction:null})));else if(z)te();else{let e;e=q?X.playButtonFactory().hitPause({itemToBePaused:O}):V?X.playButtonFactory().hitResume({itemToBeResumed:O}):X.playButtonFactory().hitPlay({itemToBePlayed:O});const t=Z.logInteraction(e);W({targetUri:O,intent:q?"pause":"play",type:"click"}),$({loggingParams:t})}}),[V,te,W,$,O,q,z,a,F,Z,X]),ie=(0,i.useCallback)((()=>{Z.logInteraction(X.hitUiNavigate({destination:O})),W({type:"click",targetUri:O,intent:"navigate"})}),[O,W,Z,X]),se=a.podcastSubscription?.isPaywalled??!1,oe=a.podcastSubscription?.isUserSubscribed??!1,ne=se&&!oe,re=se&&z,{badges:le}=(0,w.r)({contentRating:a.contentRating?.label,isPaywalled:se}),ce=(0,i.useCallback)((()=>H((0,r.RM)(t.uri))),[t.uri,H]),de=(0,i.useCallback)((e=>{let i=e;return(ne||re)&&(i=(0,I.jsx)(u.l,{enabled:!0,showUri:t.uri,children:i})),!a.playability.playable&&le.nineteen&&(i=(0,I.jsx)("div",{onClick:e=>{e.stopPropagation(),ce()},children:e})),i=(0,I.jsx)(l.D,{id:A(O),targetURI:(0,n.EC)(O),children:i}),i}),[O,ne,re,t.uri,le.nineteen,a.playability.playable,ce]);return(0,I.jsx)(K,{spec:X,children:(0,I.jsx)(f.ZP,{value:"row",index:e,children:(0,I.jsx)(b._,{onShow:()=>{Z.logInteraction(X.secondaryHitUiReveal())},menu:(0,I.jsx)(c.k,{uri:O,showUri:t.uri,sharingInfo:a.sharingInfo,isPlayed:L,onMarkAsPlayed:J}),children:(0,I.jsx)(d.X,{ref:Y,requestId:a.requestId,index:e,uri:O,size:G,images:a.coverArt||[],name:a.name,showName:t.name,description:a.description,isPlayable:a.playability.playable||ne,fullyPlayed:L,durationMs:a.duration.milliseconds,releaseDate:a.releaseDate?.isoString||"",resumePositionMs:T.current??B,handleDragStart:e=>{if(e.target!==e.currentTarget)return;const i=`${a.name} • ${t.name}`;_(e,[O],i,t.uri)},handlePlaybackClick:ae,handleClick:ie,isCurrentlyPlaying:V,isPaywalled:se,isUserSubscribed:oe,isPlaying:q,position:q?Q:void 0,episodeSharingInfo:a.sharingInfo,onMarkAsPlayed:J,contentInformation:a.contentInformation,badges:(0,I.jsxs)(I.Fragment,{children:[le.explicit&&(0,I.jsx)(k.N,{}),le.paid&&(0,I.jsx)(m.g,{}),le.nineteen&&(0,I.jsx)(j.X,{size:16})]}),playButtonWrapper:de,onMoreButtonClick:()=>{Z.logInteraction(X.moreButtonFactory().hitUiReveal())},status:R,variant:U})})})})}))},12280:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Oa});var i=a(59496),s=a(90641),o=a(92053),n=a(69052),r=a(2962),l=a(34194),c=a(5748),d=a(88645),u=a(84875),g=a.n(u),m=a(68045),p=a(58967),h=a(67880),x=a(10707),y=a(97223),b=a(10022),k=a(97034),j=a(64120),f=a(50292),v=a(27344),P=a(8225),C=a(39687);const S="_yl4tOZxcpoUt28k6B8I",w="lcJflizNrSwDM9yPNk6h",N="ret7iHkCxcJvsZU14oPY";var I=a(4637);const D=({rating:e,className:t,onClick:a})=>{if(!e)return null;const i=Boolean(e.rating?.rating);return(0,I.jsxs)("button",{className:g()(S,t),onClick:a,children:[(0,I.jsx)(m.D,{dir:"auto",variant:"mestoBold",children:e.averageRating?.showAverage?l.ag.formatNumber(e.averageRating.average,{maximumFractionDigits:1}):l.ag.get("web-player.audiobooks.noRating")}),i?(0,I.jsx)(P.u,{iconSize:16,className:g()(w)}):(0,I.jsx)(C.G,{iconSize:16,className:g()(w)}),e.averageRating?.showAverage&&(0,I.jsxs)(m.D,{variant:"mesto",className:g()(N),children:["(",l.ag.formatNumberCompact(Number(e.averageRating.totalRatings)),")"]})]})};var A=a(29424),E=a(6496),R=a(54095),U=a(76946);const F="SpVoh9vvBN0kIwzfCiBh",B="nsGHaEmn310z9W4RMbb8",O="PfYVlZzroXSurDmS_kxY",T="kCT99_BcJQtW47mEfVF6",L="gmDgEbPyRXNixmjYAT9f",M="XlZGcb86bItwlMPQ2jOf",_="VGTtqfOlX2jIbpff6mPP",z="aexqooSgfdW95poEaxjH",G="Fui2wGupk4F1Khigbrhj",W="jWcvSz47NFpbLjnkFT1O",H="Oo6MP8F01W5uGlnw8dag";var K=a(36270),X=a(21298),Z=a(62543),Y=a(31612),V=a(40698);let q;!function(e){e.SMALL="small",e.LARGE="large"}(q||(q={}));const $=({images:e,title:t,contentRating:a,duration:i,moreButton:s,onClick:o,onContextMenu:n,onTouchStart:r,onTouchEnd:l,isPlaying:c,isActive:d,size:u,className:p,label:h,isPlayable:x=!0})=>{const y=u===q.LARGE?"md":"sm",{badges:b}=(0,Y.r)({contentRating:a});return(0,I.jsxs)("div",{"data-testid":"trailer-component",className:g()(F,p,{[B]:d}),onContextMenu:n,onTouchStart:r,onTouchEnd:l,children:[(0,I.jsxs)("div",{className:T,children:[(0,I.jsxs)("div",{className:z,children:[(0,I.jsx)(E.O,{type:U.p.EPISODE,title:t,className:g()(_,{[H]:u===q.SMALL,[W]:u===q.LARGE}),size:R.m$.SIZE_56,images:e,shape:E.K.ROUNDED_CORNERS}),(0,I.jsx)("div",{className:G,children:(0,I.jsx)(V.f,{"data-testid":"trailer-play-button",version:K.ul.transparent,size:y,isPlaying:c,onClick:o,disabled:!x})})]}),(0,I.jsxs)("div",{children:[(0,I.jsx)("div",{className:L,children:(0,I.jsx)(m.D,{dir:"auto",className:O,variant:"balladBold",children:t})}),(0,I.jsxs)("div",{className:M,children:[(0,I.jsx)(Z.V,{text:h}),b.explicit&&(0,I.jsx)(v.N,{}),b.nineteen&&(0,I.jsx)(X.X,{}),(0,I.jsx)(m.D,{dir:"auto",variant:"mesto",children:(0,I.jsx)(A.nL,{durationMs:i})})]})]})]}),s]})};var Q=a(31747),J=a(82543),ee=a(70134),te=a(16988),ae=a(60130);const ie=({htmlDescription:e,narrators:t,spec:a})=>{const s=(0,b.o)(),o=(0,te.$P)(),n=(0,i.useCallback)((e=>{s({intent:"expand-description",type:"click"});const t=a.seeMoreButtonFactory();o.logInteraction(e?t.hitUiReveal():t.hitUiHide())}),[o,s,a]);return(0,I.jsxs)(I.Fragment,{children:[t.length?(0,I.jsx)(m.D,{as:"p",variant:"ballad",children:l.ag.get("web-player.audiobooks.narratedByX",t.join(l.ag.getSeparator()))}):null,e&&(0,I.jsx)(ae.o,{maxLines:4,content:e,htmlContent:e,onExpanded:n})]})};var se=a(19244),oe=a(15142),ne=a(22259);const re=i.memo((function({uri:e,size:t=ne.q.md,className:a,onClick:s}){const[o,n]=(0,oe.Z)(e),r=(0,b.o)(),l=(0,i.useCallback)((()=>{r({targetUri:e,intent:o?"unsave":"save",type:"click"}),n(!o)}),[r,e,o,n]);return(0,I.jsx)(ne.o,{className:a,isFollowing:o,onFollow:l,onClick:s,uri:e,size:t})}));var le=a(19525);const ce="8px",de="bUYG1AgkIOioFe_UYEO7";var ue=a(658),ge=a(91012),me=a(50102),pe=a(33047),he=a(17657),xe=a(93163),ye=a(75946),be=a(60960),ke=a(17213);const je="iZut9Dh2KEjNVhDUxzWw";function fe({uri:e,price:t,size:a,spec:i,logger:s,onPlayback:o}){const n=(0,ke.k)(),r=(0,be.g)(),c=0===t?.finalPrice?.amount,d=c?i.getButtonFactory({uri:e}):i.buyButtonFactory({uri:e}),u=(0,he.y1)((async()=>{if(s.logInteraction(d.hitShowPaywall({paywalledItem:e})),r)o();else{try{t?.finalPrice?await(0,ye.Q)({show_uri:e,currency:t.finalPrice.currency,price:t.finalPrice.amount}):n(l.ag.get("error.generic"))}catch(e){n(l.ag.get("error.generic"))}o()}}),2e3,{leading:!0,trailing:!1});return(0,I.jsx)(xe.D,{buttonSize:a,className:je,style:{flexShrink:0},onClick:u,children:c?l.ag.get("web-player.audiobooks.buyFree"):l.ag.get("web-player.audiobooks.buy")})}const ve=({uri:e,isLocked:t,price:a,isPlaying:i,onPlayback:s,logger:o,spec:n,size:r="lg"})=>t?(0,I.jsx)(fe,{size:r,uri:e,price:a,logger:o,spec:n,onPlayback:s}):(0,I.jsx)(pe.$,{size:r,isPlaying:i,uri:e,onClick:s});var Pe=a(23706),Ce=a(54838);const Se=i.memo((({price:e})=>e.finalPrice&&e.finalListPrice?0===e.finalPrice.amount&&0===e.finalListPrice.amount?(0,I.jsxs)("div",{className:de,children:[(0,I.jsx)(m.D,{variant:"cello",semanticColor:"textBase",children:l.ag.get("audiobook.freePriceDescription")}),(0,I.jsx)(m.D,{variant:"mesto",children:l.ag.get("audiobook.freePriceExplanation")})]}):(0,I.jsxs)("div",{className:de,children:[(0,I.jsx)(m.D,{variant:"canon",semanticColor:"textBase",children:e.finalPrice.formattedPrice}),e.finalPrice.amount<e.finalListPrice.amount&&(0,I.jsxs)(m.D,{variant:"ballad",semanticColor:"textSubdued",children:[l.ag.get("web-player.audiobooks.retailPrice"),":"," ",(0,I.jsx)("span",{style:{textDecoration:"line-through"},children:e.finalListPrice.formattedPrice})]})]}):null)),we=i.memo((function({backgroundColor:e,uri:t,name:a,isPlaying:s,togglePlay:o,isLocked:n,price:r,spec:c}){const[d,u]=(0,oe.Z)(t),g=!(0,Ce.k)(),m=n&&r,p=(0,b.o)(),h=(0,te.$P)(),y=(0,i.useCallback)((()=>{p({targetUri:t,intent:d?"unsave":"save",type:"click"});const e=c.saveToLibraryButtonFactory();d?h.logInteraction(e.hitUnfollow({itemToBeUnfollowed:t})):h.logInteraction(e.hitFollow({itemToBeFollowed:t})),u(!d)}),[p,t,d,c,u,h]),k=(0,i.useCallback)(((e,a)=>{const i=c.downloadButtonFactory();a===me.mc.ADD?h.logInteraction(i.hitDownload({itemToDownload:t})):a===me.mc.REMOVE?h.logInteraction(i.hitRemoveDownload({itemToRemoveFromDownloads:t})):a===me.mc.NO_PERMISSION&&h.logInteraction(i.hitUiReveal())}),[h,c,t]),j=(0,i.useCallback)((()=>{const e=c.contextButtonFactory().hitUiReveal();h.logInteraction(e)}),[h,c]);return(0,I.jsxs)(se.o,{backgroundColor:e,style:{"--action-bar-padding-bottom":ce},children:[(0,I.jsxs)(se.F,{children:[(0,I.jsx)(ve,{uri:t,isLocked:n,price:r,isPlaying:s,onPlayback:o,logger:h,spec:c}),(0,I.jsx)(Pe.r,{children:(0,I.jsx)(ue.H,{isAdded:d,onClick:y,disabled:g,size:ue.q.md,isAudiobook:!0})},"follow-button"),!n&&(0,I.jsx)(re,{uri:t,onClick:k}),(0,I.jsx)(ge.yj,{menu:(0,I.jsx)(le.X,{uri:t}),children:(0,I.jsx)(x.z,{label:l.ag.get("more.label.context",a),onClick:j})})]}),m&&(0,I.jsx)(Se,{price:r})]})}));var Ne=a(49188),Ie=a(97054),De=a(74684);const Ae=i.memo((function({coverArt:e,name:t,authorName:a,uri:i,backgroundColor:s,isPlaying:o,togglePlay:n,isLocked:r,price:c,logger:d,spec:u}){return(0,I.jsxs)(Ne.gF,{backgroundColor:s,children:[(0,I.jsxs)(Ie.W,{children:[(0,I.jsx)(ve,{uri:i,isLocked:r,price:c,isPlaying:o,onPlayback:n,logger:d,spec:u,size:"md"}),(0,I.jsx)(De.i,{text:t,dragUri:i,dragLabel:t})]}),(0,I.jsx)(ge._P,{menu:(0,I.jsx)(le.X,{uri:i}),children:(0,I.jsx)(Ne.Oz,{images:e,name:t,shape:E.K.ROUNDED_CORNERS})}),(0,I.jsxs)(Ne.sP,{children:[(0,I.jsx)(m.D,{variant:"mestoBold",children:l.ag.get("web-player.audiobooks.audiobook")}),(0,I.jsx)(Ne.xd,{canEdit:!1,onClick:()=>{},children:t}),(0,I.jsx)(Ne.QS,{author:a})]})]})}));var Ee=a(49481),Re=a(21494);var Ue=a(74710);function Fe(e){return!e.playability?.playable&&(e.playability?.reason===Ue.WY.PaymentRequired||e.playability?.reason===Ue.WY.Anonymous)}var Be=a(39535),Oe=a(68784),Te=a(48161),Le=a(33033),Me=a(890),_e=a(95373);const ze=i.memo((function({uri:e,bookUri:t,size:a=ne.q.md,className:s,onClick:o=(()=>{}),isLocked:n=!0}){const[r,l]=(0,oe.Z)(t),c=(0,b.o)(),d=(0,i.useCallback)((()=>{c({targetUri:t,intent:"add-to-library",type:"click"}),l(!0)}),[c,t,l]);return(0,I.jsx)(ne.o,{className:s,isFollowing:r,canDownload:!n,onFollow:d,uri:e,size:a,onClick:o})})),Ge=i.memo((function(e){return(0,I.jsx)(ze,{...e})}));var We=a(33482);const He="b0Vng72SrQiFroJKXfk2",Ke="FfeP3XKSZcAdfviyk8fv",Xe="eWxDd0LanTnTlSl8SOHX",Ze="eAOkseqV13_CAmzuDJpa",Ye="fovofKIYdEIURgIYoKm2",Ve="we_1b4qCQBaFPT12eUXp",qe="NXXFrQO7npgPCRuSKaAA",$e="ekkhhuxKVGAzkEmuh9kE",Qe="zd6xqobF255bxHFtCmXy",Je=i.memo((function({name:e,duration:t,uri:a,bookUri:s,bookName:o,usePlayContextItem:n,isLocked:r,isPlayable:c,resumePositionMs:d,isFullyPlayed:u,isExplicit:p,is19PlusOnly:h,spec:k,index:j}){const f=(0,i.useRef)(d),{isPlaying:P,togglePlay:C,isActive:S}=n({uri:a}),w=(0,te.$P)(),N=(0,Le.Y)((e=>{if(e?.item?.uri===a){const t=(0,Me.k)(e)??0;return f.current=t,t}return 0})),D=(0,Te._)(a),A=(0,i.useCallback)((e=>{e.stopPropagation(),e.preventDefault()}),[]),E=(0,b.o)(),R=(0,i.useCallback)((e=>{A(e);const t=k.chapterBlockFactory({position:j,uri:a}).playButtonFactory();if(r)E({type:"click",intent:"audiobook-gated-entry-point",itemIdSuffix:"target-chapter"}),w.logInteraction(t.hitShowPaywall({paywalledItem:a}));else{const e=(0,We.aK)({isPlaying:P,isActive:S,spec:t,logger:w,uri:a});C({loggingParams:e})}}),[j,S,r,P,w,E,k,A,C,a]),U=(0,i.useCallback)(((e,t)=>{A(e);const i=k.chapterBlockFactory({position:j,uri:a}).downloadButtonFactory();t===me.mc.ADD?w.logInteraction(i.hitDownload({itemToDownload:a})):t===me.mc.REMOVE?w.logInteraction(i.hitRemoveDownload({itemToRemoveFromDownloads:a})):t===me.mc.NO_PERMISSION&&w.logInteraction(i.hitUiReveal())}),[j,w,k,A,a]),F=(0,i.useCallback)((()=>{const e=k.chapterBlockFactory({position:j,uri:a}).secondaryHitUiReveal();w.logInteraction(e)}),[j,w,k,a]),B=(0,i.useCallback)((e=>{A(e);const t=k.chapterBlockFactory({position:j,uri:a}).contextMenuFactory().hitUiReveal();w.logInteraction(t)}),[j,w,k,A,a]),O=!r,T=(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("hr",{className:Xe,"aria-hidden":!0}),(0,I.jsxs)("div",{className:He,onDoubleClick:e=>{E({targetUri:a,intent:"play",type:"double-click"}),R(e)},children:[(0,I.jsx)(m.D,{as:"h2",variant:"balladBold",className:g()(qe,{[Ke]:S}),semanticColor:"textBase",children:e}),(0,I.jsxs)("div",{className:$e,children:[(0,I.jsx)(V.f,{size:"sm",version:V.u.secondary,onClick:R,isPlaying:P,ariaPlayLabel:l.ag.get("tracklist.a11y.play",e,o),ariaPauseLabel:l.ag.get("tracklist.a11y.pause",e,o),locked:r,disabled:!c&&!r}),r?(0,I.jsx)(Be.g,{}):null,p&&(0,I.jsx)(v.N,{fullText:!0}),h&&(0,I.jsx)(X.X,{size:16}),(0,I.jsx)("div",{className:Qe,children:(0,I.jsx)(_e.E,{isPlaying:P,fullyPlayed:u,durationMs:t.milliseconds,resumePositionMs:f.current,position:P?N:void 0})})]}),O?(0,I.jsx)(ge.yj,{menu:(0,I.jsx)(y.r,{uri:a,showUri:s,isLocked:r}),children:(0,I.jsx)(x.z,{className:Ye,size:ne.q.sm,label:l.ag.get("more.label.context",e),onClick:B})}):null,(0,I.jsx)(Ge,{uri:a,bookUri:s,className:g()({[Ve]:!(0,Oe.y)(D)}),onClick:U,size:ne.q.sm,isLocked:r})]})]});return O?(0,I.jsx)(ge._P,{menu:(0,I.jsx)(y.r,{uri:a,showUri:s,isLocked:r}),onShow:F,children:(0,I.jsx)("div",{className:Ze,children:T})}):(0,I.jsx)("div",{className:Ze,children:T})})),et=({bookUri:e,bookName:t,sampleUri:a,isFinishedUnlockingJourney:s,usePlayContextItem:o,spec:n})=>{const r=function(e,t){const a=(0,Re.z)();return(0,i.useCallback)((async(i,s)=>a.getBookContents(e,{offset:i,limit:s,doRefreshSubscription:t})),[t,a,e])}(e,s),l=(0,i.useRef)(!1),c=(0,i.useRef)(0),[d,u]=(0,i.useState)([]),g=(0,i.useCallback)((e=>e?.uri===a),[a]),m=(0,i.useCallback)((e=>(e=>null!==e)(e)&&!g(e)),[g]),p=(0,i.useCallback)((()=>{r&&(l.current||null===c.current||(l.current=!0,r(c.current,50).then((e=>{l.current=!1,c.current=e.nextOffset,e.items.length>0&&u((t=>t.concat(e.items.filter(m))))}))))}),[r,m]);return(0,i.useEffect)((()=>{c.current=0,u([])}),[e]),(0,I.jsx)("ul",{children:(0,I.jsx)(Ee.C,{onReachBottom:p,triggerOnInitialLoad:!0,children:d.map(((a,i)=>{const{name:s,duration:r,uri:l,playability:{playable:c},playedState:{playPositionMilliseconds:d,state:u},isExplicit:g,is19PlusOnly:m}=a;return(0,I.jsx)(Je,{name:s,duration:r,uri:l,bookUri:e,bookName:t,usePlayContextItem:o,isLocked:Fe(a),isPlayable:c,resumePositionMs:d,isFullyPlayed:u===Ue.sY.Completed,isExplicit:g,is19PlusOnly:m,spec:n,index:i},l)}))})})};var tt=a(61331),at=a(47881),it=a(3444),st=a(49706),ot=a(76872);const nt="QEd1L2SSRW1ol_sQQN6m",rt="ENuWK8u3C9kmadnqkErf",lt="i0gSVhns0PjhiUKm4OG1",ct="jKVb6K0dga3SfW1dp2Pg",dt="MOpV0_YizQER2NksxLju",ut="vrR8bh9DvivyDfUrh1vD",gt="_toO3CqMPAPTbny7Rh8R",mt="Iudw61HRePwOAJpbDRvA",pt="GWaz1n1SADn9enzKdi_Z",ht=i.memo((function({coverArt:e,toggleModal:t,uri:a,isBook:i}){const s=(0,st.X)(e,{desiredSize:320}),{spec:o,logger:n}=(0,te.fU)(at.createDesktopPodcastRatingEventFactory,{data:{identifier:i?r.Wg.RATINGS_AND_REVIEWS_RATINGS_AUDIOBOOK:r.Wg.RATINGS_AND_REVIEWS_RATINGS,uri:a}});return(0,I.jsx)(ot.Z,{contentLabel:"podcast-rating-modal",isOpen:!0,onRequestClose:t,children:(0,I.jsxs)("div",{className:nt,children:[(0,I.jsxs)("div",{className:lt,children:[(0,I.jsx)(m.D,{as:"h1",variant:"canon",className:gt,children:l.ag.get("web-player.audiobooks.rating.rateAudiobook")}),(0,I.jsxs)("button",{className:ct,onClick:()=>{const e=o.closeButtonFactory().hitUiNavigateBack();n.logInteraction(e),t()},children:[(0,I.jsx)(tt.k,{role:"presentation"}),(0,I.jsx)("span",{className:"hidden-visually",children:l.ag.get("web-player.audiobooks.rating.closeModal")})]})]}),(0,I.jsxs)("div",{className:dt,children:[(0,I.jsx)(it.Ee,{loading:"eager",src:s?.url,className:rt}),(0,I.jsxs)("div",{className:ut,children:[(0,I.jsx)(m.D,{as:"p",variant:"cello",className:mt,children:l.ag.get("web-player.audiobooks.rating.wantToRate")}),(0,I.jsx)(m.D,{as:"p",className:pt,children:l.ag.get("web-player.audiobooks.rating.goToApp")}),(0,I.jsx)(xe.D,{colorSet:"invertedLight",onClick:()=>{const e=o.okButtonFactory().hitUiNavigateBack();n.logInteraction(e),t()},children:l.ag.get("web-player.audiobooks.rating.ok")})]})]})]})})})),xt="mmCZ5VczybT9VqKB5wFU",yt="At_ihDspJfh1yw3Cn2cq",bt="u3LLJx1KnMchfNCzi6k5",kt="Yqz1Nv6wj1n3HmXL_qji",jt="qRqn3JrWLPbGW9k2a63n",ft="HAah1_lK_dHgyyE71I8Z",vt="eiC4nh70nb5UHZBYMgNA",Pt="eYtmwXEvi1UdCevg8WoK",Ct="QOp2aYTYmZHZ6DFFHuYE",St="zOSFBl22aXH_Vak33myy",wt=i.memo((function({metadata:e}){const{uri:t,coverArt:a,name:s,htmlDescriptionPlain:n,authorName:d,sample:u,narrators:P,rating:C,isExplicit:S,duration:w,copyrights:N,publishDate:E,price:R,isLocked:U}=e,{search:F}=(0,o.TH)(),B=!!new URLSearchParams(F).get("isUnlockingAudiobook"),O=!(!(0,J.D)(B)||B),T=(0,be.g)(),L=(0,k.Z)(a[0]?.url),[M,_]=(0,i.useState)(!1),z=(0,b.o)(),{spec:G,logger:W}=(0,te.fU)(p.createDesktopAudiobookEventFactory,{data:{uri:t,identifier:r.Wg.PODCAST_SHOW_AUDIOBOOK}}),{spec:H,logger:K}=(0,te.fU)(p.createDesktopAudiobookEventFactory,{data:{uri:t,identifier:r.Wg.RATINGS_AND_REVIEWS_RATINGS_AUDIOBOOK}}),{spec:X,logger:Z}=(0,te.fU)(h.createDesktopLockedAudiobookEventFactory,{data:{uri:t,identifier:r.Wg.PODCAST_SHOW_AUDIOBOOK}}),Y=(0,i.useMemo)((()=>G.actionBarFactory()),[G]),V=(0,i.useMemo)((()=>H.aboutSectionFactory()),[H]),ae=(0,i.useMemo)((()=>G.chapterListFactory()),[G]);(0,i.useEffect)((()=>{z({type:"view",intent:"audiobook"})}),[z]),(0,i.useEffect)((()=>{U&&Z.logImpression(X.impression())}),[X,Z,U]);const{isPlaying:se,togglePlay:oe,usePlayContextItem:ne,isActive:re,triggerPlay:le}=(0,ee.n)({uri:t},{featureIdentifier:"audiobook"}),{togglePlay:ce,isPlaying:de,isActive:ue}=(0,ee.n)({uri:u?.uri??""},{featureIdentifier:"audiobook"}),ge=se&&!de,me=re&&!ue,pe=(0,i.useCallback)((async()=>{const e=G.actionBarFactory().playButtonFactory();if(!U||T)if(T)oe();else{const a=(0,We.aK)({isPlaying:ge,isActive:me,spec:e,logger:W,uri:t});me?oe({loggingParams:a}):le({loggingParams:a})}else W.logInteraction(e.hitShowPaywall({paywalledItem:t}))}),[G,U,T,W,t,oe,ge,me,le]),he=(0,i.useCallback)((()=>{u?.uri&&(z({targetUri:u.uri,intent:de?"play":"pause",type:"click"}),ce())}),[de,z,ce,u?.uri]),xe=(0,i.useCallback)((()=>{const e=V.ratingButtonFactory().hitUiReveal();K.logInteraction(e),_((e=>!e))}),[V,K]),{ref:ye,breakpoint:ke}=(0,Q.Db)({[Q.Uo.MEDIUM]:600,[Q.Uo.LARGE]:1024});return(0,I.jsxs)("section",{ref:ye,className:xt,children:[(0,I.jsx)(c.$,{children:l.ag.get("show.page-title",s)}),(0,I.jsx)(Ae,{name:s,authorName:d,uri:t,coverArt:a,backgroundColor:L,togglePlay:pe,isPlaying:ge,isLocked:U,price:R,logger:W,spec:G.actionBarFactory()}),(0,I.jsx)(we,{name:s,backgroundColor:L,uri:t,togglePlay:pe,isPlaying:ge,isLocked:U,isExplicit:S,duration:w,publishDate:E,price:R,spec:Y}),(0,I.jsxs)("div",{className:g()(yt,"contentSpacing",{[bt]:ke===Q.Uo.LARGE}),children:[(0,I.jsxs)("div",{className:kt,children:[(0,I.jsx)("hr",{className:St,"aria-hidden":!0}),(0,I.jsxs)("div",{className:Pt,children:[S&&(0,I.jsx)(v.N,{fullText:!0}),(0,I.jsxs)("div",{children:[E&&(0,I.jsx)(m.D,{variant:"ballad",className:Ct,children:l.ag.formatDate(E)}),(0,I.jsx)(m.D,{variant:"ballad",children:(0,I.jsx)(A.nL,{durationMs:w})})]})]}),(0,I.jsx)(ie,{htmlDescription:n,narrators:P,spec:V})]}),(0,I.jsxs)("div",{className:jt,children:[u&&(0,I.jsx)($,{label:l.ag.get("audiobook.page.sample"),images:u.coverArt||[],title:u.name,duration:u.duration.milliseconds,moreButton:U?null:(0,I.jsx)(j.y,{menu:(0,I.jsx)(y.r,{uri:u.uri,showUri:t,isLocked:U}),children:(0,I.jsx)(x.z,{})}),onClick:he,isPlaying:de,isActive:ue,size:q.LARGE,contentRating:u.contentRating?.label,isPlayable:u.isPlayable}),(0,I.jsx)("div",{className:ft,children:(0,I.jsx)(D,{rating:C,onClick:xe})})]}),(0,I.jsxs)("div",{className:vt,children:[(0,I.jsx)(et,{bookUri:t,bookName:s,sampleUri:u?.uri,isFinishedUnlockingJourney:O,usePlayContextItem:ne,spec:ae},`${t}-${U}`),(0,I.jsx)(f.k,{copyrights:N})]})]}),M&&(0,I.jsx)(ht,{toggleModal:()=>_(!1),coverArt:a,uri:t,isBook:!0})]})}));var Nt=a(80367),It=a(35826),Dt=a(24903),At=a(68006),Et=a(74253),Rt=a(37764);const Ut=({uri:e,name:t,backgroundColor:a,spec:s})=>{const o=(0,te.$P)(),n=(0,b.o)(),r=!(0,Ce.k)(),[c,d]=(0,oe.Z)(e),u=(0,i.useCallback)((()=>{n({targetUri:e,intent:c?"unsave":"save",type:"click"});const t=s.followButtonFactory();o.logInteraction(c?t.hitUnfollow({itemToBeUnfollowed:e}):t.hitFollow({itemToBeFollowed:e})),d(!c)}),[n,e,c,s,o,d]),g=(0,i.useCallback)((()=>{o.logInteraction(s.contextButtonFactory().hitUiReveal())}),[o,s]);return(0,I.jsx)(se.o,{backgroundColor:a,children:(0,I.jsxs)(se.F,{children:[(0,I.jsx)(Pe.r,{children:(0,I.jsx)(Rt.e,{isFollowing:c,onClick:u,disabled:r})},"follow-button"),(0,I.jsx)(j.y,{menu:(0,I.jsx)(Et.M,{uri:e}),onShow:g,children:(0,I.jsx)(x.z,{label:l.ag.get("more.label.context",t)})})]})})};var Ft=a(83016),Bt=a(47871);const Ot=(0,i.lazy)((()=>a.e(1754).then(a.bind(a,51754))));function Tt(e){return(0,Ft.W6)(Bt.$f)?(0,I.jsx)(i.Suspense,{fallback:!0,children:(0,I.jsx)(Ot,{...e})}):null}var Lt=a(99727),Mt=a(81706),_t=a(91404),zt=a(89161),Gt=a(91995),Wt=a(72490),Ht=a(94958),Kt=a(89662),Xt=a(44438);const Zt=(0,i.createContext)({setSortState:()=>{throw new Error("setSortState must be used within a ShowFilterProvider")},sortState:[]}),Yt=i.memo((function({uri:e,children:t}){return(0,I.jsx)(Xt.r,{uri:e,defaultState:[],sortContext:Zt,localStorageKey:"showFilterParams-v2",children:t})}));var Vt=a(77966);const qt={field:Vt.ay.PUBLISH_DATE,order:Vt.i5.DESC},$t={field:Vt.ay.PUBLISH_DATE,order:Vt.i5.ASC},Qt={episodic:qt,sequential:$t,recent:qt};function Jt(){return new Map([[qt,{key:"newest-to-oldest",value:l.ag.get("shows.sort.newest-to-oldest")}],[$t,{key:"oldest-to-newest",value:l.ag.get("shows.sort.oldest-to-newest")}]])}function ea(e){return Qt[e]}const ta=(0,i.createContext)({setSortState:()=>{throw new Error("setSortState must be used within a ShowSortProvider")},sortState:ea("recent")}),aa=e=>{const t=Jt();return Array.from(t.keys()).some((({field:t})=>t===e?.field))},ia=i.memo((function({uri:e,children:t,defaultSortParam:a}){return(0,I.jsx)(Xt.r,{uri:e,defaultState:a,sortContext:ta,localStorageKey:"showSortParam",validator:aa,children:t})})),sa="cJJXVm4gQW6AdfCQRhpX",oa="hTRqaN61SDG95erQGMmx",na={totalCount:0,nextOffset:0,items:[]},ra=i.memo((function({showMetadata:e,usePlayContextItem:t}){const{sortState:a}=(0,i.useContext)(ta),{sortState:s}=(0,i.useContext)(Zt),o=(0,Wt.ZM)(e.uri,a,s),[n,r]=(0,i.useState)(na),l=(0,i.useRef)(!1),c=(0,i.useRef)(0),d=(0,i.useCallback)(((e=!1)=>{if(!o)return;const t=c.current;null!==t&&(l.current||(l.current=!0,o(t,50).then((a=>{r((i=>{const s=e?[]:[...i.items];return s.splice(t,a.items.length,...a.items),c.current=a.nextOffset,{...a,items:s}})),l.current=!1}))))}),[o]);return(0,i.useEffect)((()=>{r(na)}),[e.uri]),(0,i.useEffect)((()=>{c.current=0,d(!0)}),[d]),(0,I.jsx)(Kt.ZP,{value:"track-list",children:(0,I.jsx)(Ee.C,{onReachBottom:d,triggerOnInitialLoad:!0,children:n.items.map(((a,i)=>a&&(0,I.jsxs)("div",{className:oa,children:[(0,I.jsx)("hr",{className:sa,"aria-hidden":!0}),(0,I.jsx)(Ht.V,{index:i,episode:a,showMetadata:e,usePlayContextItem:t},`${a.uri}/${i}`)]},`${i}${a.uri}`)))})})}));var la=a(65830);const ca={field:Vt.YG.ISPLAYED,operator:Vt.NK.EQUALS,value:!1},da={field:Vt.YG.STARTEDPLAYING,operator:Vt.NK.GREATER_THAN,value:0};const ua="all-episodes",ga=({onFilter:e})=>{const{sortState:t,setSortState:a}=(0,i.useContext)(Zt),s=new Map([[ca,{key:"is-played",value:l.ag.get("shows.filter.unplayed")}],[da,{key:"started-playing",value:l.ag.get("shows.filter.in-progress")}]]),o=Array.from(s.values());o.unshift({key:ua,value:l.ag.get("mwp.podcast.all.episodes")});const n=Array.from(s.keys()),r=(0,i.useCallback)((t=>{if(t===ua)a([]);else{const e=n.find((e=>s.get(e)?.key===t));e&&a([e])}e()}),[e,a,n,s]);if(!s.size||!n)return null;let c=o[0];const d=Array.from(s.entries()).filter((e=>t?.some((t=>t.field===e[0].field&&t.operator===e[0].operator))));return d.length>0&&(c=d[0][1]),(0,I.jsx)(la.A,{options:o,onSelect:e=>r(e),selected:c,variant:"balladBold",semanticColor:"textBase",heading:l.ag.get("drop_down.filter_by")})},ma=({onSort:e})=>{const{sortState:t,setSortState:a}=(0,i.useContext)(ta),s=Jt(),o=Array.from(s.values()),n=Array.from(s.keys()),r=(0,i.useCallback)((t=>{const i=n.find((e=>s.get(e)?.key===t));i&&a(i),e()}),[n,e,s,a]);if(!s.size||!t)return null;const c=Array.from(s.keys()).find((e=>e.field===t.field&&e.order===t.order));if(!c)return null;const d=s.get(c);return d?(0,I.jsx)(la.A,{options:o,onSelect:e=>r(e),selected:d,heading:l.ag.get("drop_down.sort_by")}):null},pa="aQMtxnKeiJqZ9XCcDuZ7",ha="TYB4Y2xQujO7cifhHush",xa="sSXKiPRvp2AHmwfHoCCS",ya="YJlizbhw6DBPHT9OYbdj",ba="klz_XuZpllvTMzpJF1gw",ka="TfjbWiK8hca4HHEBnonP",ja="kR0M2WSYVUj4cohADSFM",fa="ghfuv80I8uW_ymG_jfx9",va="jtfSxoRam9rzTtdXIjzc",Pa="fejGrhq7pxGC99cUdyVw",Ca="T0OjvsNXAJJGd23eBG2m",Sa="Ppm5YkDdE5ktTPwZC1Dw",wa=({spec:e})=>{const t=(0,te.$P)(),{canSort:a,canFilter:s}=(0,Wt.zZ)().capabilities,o=(0,i.useCallback)((()=>{t.logInteraction(e.episodeListFactory().filterButtonFactory().hitFilter())}),[t,e]),n=(0,i.useCallback)((()=>{t.logInteraction(e.episodeListFactory().sortButtonFactory().hitSort())}),[t,e]);return(0,I.jsxs)("div",{className:ja,children:[s&&(0,I.jsx)("div",{className:va,children:(0,I.jsx)(ga,{onFilter:o})}),!s&&(0,I.jsx)(m.D,{as:"h3",variant:"canon",semanticColor:"textBase",className:Pa,children:l.ag.get("mwp.podcast.all.episodes")}),a&&(0,I.jsx)("div",{className:fa,children:(0,I.jsx)(ma,{onSort:n})})]})},Na=e=>{switch(e){case Ue.it.TRAILER:return l.ag.get("podcasts.next-episode.trailer");case Ue.it.UP_NEXT:return l.ag.get("podcasts.next-episode.up-next");case Ue.it.CONTINUE_LISTENING:return l.ag.get("podcasts.next-episode.continue-listening");case Ue.it.FIRST_PUBLISHED:return l.ag.get("podcasts.next-episode.first-published");case Ue.it.LATEST_PUBLISHED:return l.ag.get("podcasts.next-episode.latest-published");default:return}},Ia=({breakpoint:e,metadata:t,showId:a,spec:s})=>{const{uri:o,trailer:n,topics:r,description:c,htmlDescription:d}=t,u=(0,te.$P)(),p=(0,i.useMemo)((()=>s.episodeListFactory()),[s]),h=(0,Ft.W6)(Bt.Vz),y=(0,b.o)(),k=(0,Ft.W6)(Bt.Cz),v=(0,be.g)(),{sortState:P}=(0,i.useContext)(ta),{sortState:C}=(0,i.useContext)(Zt),S=(0,Wt.zZ)(),{usePlayContextItem:w}=(0,ee.n)({uri:o,metadata:{[Gt.sb.SORTING_CRITERIA]:S.getPlayerSort(P),[Gt.sb.FILTERING_PREDICATE]:S.getPlayerFilter(C)}},{featureIdentifier:"show"}),{isActive:N,isPlaying:D,togglePlay:A}=w({uri:n?.uri||""}),E=(0,i.useCallback)((e=>{y({intent:"expand-description",type:"click"});const t=s.aboutSectionFactory().seeMoreButtonFactory(),a=e?t.hitUiReveal():t.hitUiHide();u.logInteraction(a)}),[u,y,s]),R=(0,i.useCallback)(((e,t)=>{const a=s.aboutSectionFactory().topicFactory(t).hitUiNavigate({destination:t.uri});u.logInteraction(a)}),[u,s]),U=n?{name:n.name,uri:n.uri,audio:{items:n.audio.items.map((e=>({url:e.url})))}}:null,F=(0,Ht.e)(t),B=(0,_t.s)(U,F),O=(0,i.useCallback)((()=>{n?.uri&&(v?B():(y({targetUri:n.uri,intent:D?"play":"pause",type:"click"}),A()))}),[B,v,D,y,A,n?.uri]),{ref:T,breakpoint:L}=(0,Q.Db)({[Q.Uo.MEDIUM]:0,[Q.Uo.LARGE]:600}),M=r.length>0,_=c||k&&d,z=_||M;return(0,I.jsxs)("div",{className:g()(ha,"contentSpacing",{[xa]:e===Q.Uo.LARGE}),children:[(0,I.jsxs)("div",{className:ya,children:[z&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(m.D,{as:"h3",variant:"canon",semanticColor:"textBase",className:Pa,children:l.ag.get("artist.about")}),_&&(0,I.jsx)(ae.o,{maxLines:4,content:(c||"").trim(),onExpanded:E,htmlContent:k&&d?d:void 0}),M&&(0,I.jsx)(Mt.v,{topics:r,onClick:R})]}),(0,I.jsx)(Tt,{showId:a,uri:o}),n&&!h&&(0,I.jsx)(zt._,{menu:(0,I.jsx)(Lt.k,{uri:n.uri,showUri:o,sharingInfo:n.sharingInfo}),children:(0,I.jsx)($,{label:l.ag.get("track-trailer"),className:Ca,images:n.coverArt||[],title:n.name,duration:n.duration.milliseconds,moreButton:(0,I.jsx)(j.y,{menu:(0,I.jsx)(Lt.k,{uri:n.uri,sharingInfo:n.sharingInfo,showUri:o}),children:(0,I.jsx)(x.z,{})}),onClick:O,isPlaying:D,isActive:N,size:q.LARGE,contentRating:n.contentRating?.label})})]}),(0,I.jsx)(Q.ZU.Provider,{value:L,children:(0,I.jsxs)("div",{className:ka,"data-testid":"show-all-episode-list",ref:T,children:[h&&t.nextBestEpisode&&(0,I.jsx)(Ht.V,{showMetadata:t,episode:t.nextBestEpisode.data,usePlayContextItem:w,status:Na(t.nextBestEpisode.type),variant:"next-best-episode"}),(0,I.jsx)(wa,{spec:s}),(0,I.jsx)(te.Nh,{spec:p,children:(0,I.jsx)(ra,{showMetadata:t,usePlayContextItem:w})})]})}),(0,I.jsx)(f.k,{copyrights:[]})]})},Da=i.memo(Ia);var Aa=a(3357);const Ea=({reason:e})=>{const t=(0,Ft.W6)(Bt.AL),a=function(e){switch(e){case"OTP":return l.ag.get("podcasts.subscriber-indicator.otp");case"SUBSCRIPTION":return l.ag.get("podcasts.subscriber-indicator.subscription");default:return""}}(e);return t&&a?(0,I.jsx)(m.D,{className:Sa,children:a}):null};const Ra=({metadata:e,backgroundColor:t})=>{const{uri:a,coverArt:i,name:s,podcastType:o,publisherName:n,gatedContentAccessReason:r}=e,{isXSOnly:c,isSMOnly:d}=(0,Aa.e)(),u=c||d;return(0,I.jsxs)(Ne.gF,{backgroundColor:t,children:[(0,I.jsx)(Ie.W,{children:(0,I.jsx)(De.i,{text:s,dragUri:a,dragLabel:s})}),(0,I.jsx)("div",{className:ba,children:(0,I.jsx)(zt._,{menu:(0,I.jsx)(Et.M,{uri:a}),children:(0,I.jsx)(Ne.Oe,{loading:"eager",name:s,images:i,placeholderType:"show",shape:Ne.Kc.ROUNDED_CORNERS})})}),(0,I.jsxs)(Ne.sP,{children:[(0,I.jsxs)(m.D,{variant:"mestoBold",children:["SHOW"===o?l.ag.get("type.show"):l.ag.get("type.podcast"),r&&(0,I.jsx)(Ea,{reason:r})]}),(0,I.jsx)(zt._,{menu:(0,I.jsx)(Et.M,{uri:a}),children:(0,I.jsx)(Ne.xd,{dragUri:a,dragLabel:s,children:(0,I.jsx)("span",{"data-testid":"show-title",children:s})})}),(0,I.jsx)(m.D,{variant:u?"cello":"canon",children:n})]})]})};var Ua=a(64252),Fa=a(30789);const Ba=({metadata:e,showId:t})=>{const{coverArt:a,name:r,uri:l}=e,{spec:d}=(0,te.fU)(n.createDesktopPodcastEventFactory,{data:{uri:l}}),u=(0,i.useMemo)((()=>d.actionBarFactory()),[d]),g=(0,k.Z)(a[0]?.url||null),{ref:m,breakpoint:p}=(0,Q.Db)({[Q.Uo.MEDIUM]:600,[Q.Uo.LARGE]:1024}),h=(0,s.v9)(Ua.vT),x=(0,At.l3)(h,t),y=(0,o.TH)(),b=(0,Nt.vI)(Dt.k.VideoPodcastShowTitleTag,y),j=x||b;return(0,I.jsxs)("section",{ref:m,className:pa,children:[(0,I.jsx)(c.$,{children:j?`${r} | Video Podcast on Spotify`:`${r} | Podcast on Spotify`}),(0,I.jsx)(Ra,{metadata:e,backgroundColor:g}),(0,I.jsx)(Ut,{uri:l,name:r,backgroundColor:g,spec:u}),(0,I.jsx)(Da,{breakpoint:p,metadata:e,showId:t,spec:d})]})},Oa=(0,i.memo)((function(){const{showId:e=""}=(0,o.UO)(),t=`spotify:show:${e}`,{data:a,error:s}=(0,It.l)(t);return!a||s?(0,I.jsx)(d.h,{hasError:!!s,errorMessage:l.ag.get("error.not_found.title.page")}):(0,Ue.l6)(a)?(0,I.jsx)(i.Suspense,{fallback:null,children:(0,I.jsx)(Fa.C,{pageId:r.Wg.PODCAST_SHOW_AUDIOBOOK,uri:t,children:(0,I.jsx)(wt,{metadata:a})})}):(0,I.jsx)(i.Suspense,{fallback:null,children:(0,I.jsx)(Fa.C,{pageId:r.Wg.PODCAST,uri:t,children:(0,I.jsx)(Yt,{uri:a.uri,children:(0,I.jsx)(ia,{uri:a.uri,defaultSortParam:ea(a.consumptionOrder),children:(0,I.jsx)(Ba,{showId:e,metadata:a})})})})})}))},3357:(e,t,a)=>{a.d(t,{e:()=>m});var i=a(81960);const s="(min-width: 0px)",o="(min-width: 0px) and (max-width: 767px)",n="(min-width: 768px)",r="(min-width: 768px) and (max-width: 1023px)",l="(min-width: 1024px)",c="(min-width: 1024px) and (max-width: 1279px)",d="(min-width: 1280px)",u="(min-width: 1280px) and (max-width: 1919px)",g="(min-width: 1920px)",m=()=>({isXS:(0,i.a)(s),isXSOnly:(0,i.a)(o),isSM:(0,i.a)(n),isSMOnly:(0,i.a)(r),isMD:(0,i.a)(l),isMDOnly:(0,i.a)(c),isLG:(0,i.a)(d),isLGOnly:(0,i.a)(u),isXL:(0,i.a)(g)})},50292:(e,t,a)=>{a.d(t,{k:()=>n});var i=a(68045);const s="rTMkDBDp47Eo12ZEQv4U";var o=a(4637);const n=({copyrights:e,courtesyLine:t})=>{const a=(e||[]).map(((e,t)=>{const a=e.text.replace(/^(\(C\)\s+)/,"").replace(/^(\(P\)\s+)/,"").replace(/^(©\s+)/,"").replace(/^(℗\s+)/,"");let s;return s="C"===e.type?"©":"P"===e.type?"℗":`(${e.type})`,(0,o.jsx)(i.D,{as:"p",variant:"finale",dir:"auto",children:`${s} ${a}`},t)}));return t&&a.unshift((0,o.jsx)(i.D,{as:"p",variant:"finale",dir:"auto",children:t},a.length)),(0,o.jsx)("div",{className:s,children:a})}}}]);
//# sourceMappingURL=xpui-routes-show.js.map