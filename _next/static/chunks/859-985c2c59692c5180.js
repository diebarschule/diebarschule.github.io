(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[859],{1749:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let r=n(1024),i=n(8533)._(n(2265)),o=r._(n(4887)),l=r._(n(2251)),a=n(8630),s=n(6906),u=n(337);n(6184);let f=n(6993),c=r._(n(536)),d={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/diebarschule.github.io/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e,t,n,r,i,o){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function p(e){let[t,n]=i.version.split(".",2),r=parseInt(t,10),o=parseInt(n,10);return r>18||18===r&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let h=(0,i.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:o,height:l,width:a,decoding:s,className:u,style:f,fetchPriority:c,placeholder:d,loading:h,unoptimized:m,fill:y,onLoadRef:v,onLoadingCompleteRef:b,setBlurComplete:w,setShowAltText:_,onLoad:S,onError:x,...E}=e;return i.default.createElement("img",{...E,...p(c),loading:h,width:a,height:l,decoding:s,"data-nimg":y?"fill":"1",className:u,style:f,sizes:o,srcSet:r,src:n,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(x&&(e.src=e.src),e.complete&&g(e,d,v,b,w,m))},[n,d,v,b,w,x,m,t]),onLoad:e=>{g(e.currentTarget,d,v,b,w,m)},onError:e=>{_(!0),"empty"!==d&&w(!0),x&&x(e)}})});function m(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...p(n.fetchPriority)};return t&&o.default.preload?(o.default.preload(n.src,r),null):i.default.createElement(l.default,null,i.default.createElement("link",{key:"__nimg-"+n.src+n.srcSet+n.sizes,rel:"preload",href:n.srcSet?void 0:n.src,...r}))}let y=(0,i.forwardRef)((e,t)=>{let n=(0,i.useContext)(f.RouterContext),r=(0,i.useContext)(u.ImageConfigContext),o=(0,i.useMemo)(()=>{let e=d||r||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:l,onLoadingComplete:g}=e,p=(0,i.useRef)(l);(0,i.useEffect)(()=>{p.current=l},[l]);let y=(0,i.useRef)(g);(0,i.useEffect)(()=>{y.current=g},[g]);let[v,b]=(0,i.useState)(!1),[w,_]=(0,i.useState)(!1),{props:S,meta:x}=(0,a.getImgProps)(e,{defaultLoader:c.default,imgConf:o,blurComplete:v,showAltText:w});return i.default.createElement(i.default.Fragment,null,i.default.createElement(h,{...S,unoptimized:x.unoptimized,placeholder:x.placeholder,fill:x.fill,onLoadRef:p,onLoadingCompleteRef:y,setBlurComplete:b,setShowAltText:_,ref:t}),x.priority?i.default.createElement(m,{isAppRouter:!n,imgAttributes:S}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2595:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});let r=n(1024)._(n(2265)).default.createContext({})},3044:function(e,t){"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},8630:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),n(6184);let r=n(7160),i=n(6906);function o(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var n;let a,s,u,{src:f,sizes:c,unoptimized:d=!1,priority:g=!1,loading:p,className:h,quality:m,width:y,height:v,fill:b=!1,style:w,onLoad:_,onLoadingComplete:S,placeholder:x="empty",blurDataURL:E,fetchPriority:P,layout:O,objectFit:C,objectPosition:j,lazyBoundary:z,lazyRoot:M,...A}=e,{imgConf:L,showAltText:k,blurComplete:W,defaultLoader:I}=t,B=L||i.imageConfigDefault;if("allSizes"in B)a=B;else{let e=[...B.deviceSizes,...B.imageSizes].sort((e,t)=>e-t),t=B.deviceSizes.sort((e,t)=>e-t);a={...B,allSizes:e,deviceSizes:t}}let R=A.loader||I;delete A.loader,delete A.srcSet;let N="__next_img_default"in R;if(N){if("custom"===a.loader)throw Error('Image with src "'+f+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=R;R=t=>{let{config:n,...r}=t;return e(r)}}if(O){"fill"===O&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[O];t&&!c&&(c=t)}let H="",D=l(y),T=l(v);if("object"==typeof(n=f)&&(o(n)||void 0!==n.src)){let e=o(f)?f.default:f;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,u=e.blurHeight,E=E||e.blurDataURL,H=e.src,!b){if(D||T){if(D&&!T){let t=D/e.width;T=Math.round(e.height*t)}else if(!D&&T){let t=T/e.height;D=Math.round(e.width*t)}}else D=e.width,T=e.height}}let U=!g&&("lazy"===p||void 0===p);(!(f="string"==typeof f?f:H)||f.startsWith("data:")||f.startsWith("blob:"))&&(d=!0,U=!1),a.unoptimized&&(d=!0),N&&f.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(d=!0),g&&(P="high");let G=l(m),Y=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:j}:{},k?{}:{color:"transparent"},w),F=W||"empty"===x?null:"blur"===x?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:D,heightInt:T,blurWidth:s,blurHeight:u,blurDataURL:E||"",objectFit:Y.objectFit})+'")':'url("'+x+'")',X=F?{backgroundSize:Y.objectFit||"cover",backgroundPosition:Y.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:F}:{},V=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:l,loader:a}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,l),f=s.length-1;return{sizes:l||"w"!==u?l:"100vw",srcSet:s.map((e,r)=>a({config:t,src:n,quality:o,width:e})+" "+("w"===u?e:r+1)+u).join(", "),src:a({config:t,src:n,quality:o,width:s[f]})}}({config:a,src:f,unoptimized:d,width:D,quality:G,sizes:c,loader:R});return{props:{...A,loading:U?"lazy":p,fetchPriority:P,width:D,height:T,decoding:"async",className:h,style:{...Y,...X},sizes:V.sizes,srcSet:V.srcSet,src:V.src},meta:{unoptimized:d,priority:g,placeholder:x,fill:b}}}},2251:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return u},default:function(){return g}});let r=n(1024),i=n(8533)._(n(2265)),o=r._(n(7392)),l=n(2595),a=n(3634),s=n(3044);function u(e){void 0===e&&(e=!1);let t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(6184);let c=["name","httpEquiv","charSet","itemProp"];function d(e,t){let{inAmpMode:n}=t;return e.reduce(f,[]).reverse().concat(u(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let o=!0,l=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){l=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=c.length;e<t;e++){let t=c[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?o=!1:n.add(t);else{let e=i.props[t],n=r[t]||new Set;("name"!==t||!l)&&n.has(e)?o=!1:(n.add(e),r[t]=n)}}}}return o}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,i.default.cloneElement(e,t)}return i.default.cloneElement(e,{key:r})})}let g=function(e){let{children:t}=e,n=(0,i.useContext)(l.AmpStateContext),r=(0,i.useContext)(a.HeadManagerContext);return i.default.createElement(o.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7160:function(e,t){"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:l}=e,a=r?40*r:t,s=i?40*i:n,u=a&&s?"viewBox='0 0 "+a+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},337:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let r=n(1024)._(n(2265)),i=n(6906),o=r.default.createContext(i.imageConfigDefault)},6906:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},7447:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{unstable_getImgProps:function(){return s},default:function(){return u}});let r=n(1024),i=n(8630),o=n(6184),l=n(1749),a=r._(n(536)),s=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,i.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/diebarschule.github.io/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},u=l.Image},536:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},7392:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let r=n(2265),i=r.useLayoutEffect,o=r.useEffect;function l(e){let{headManager:t,reduceComponentsToState:n}=e;function l(){if(t&&t.mountedInstances){let i=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(i,e))}}return i(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),i(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},6184:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},6691:function(e,t,n){e.exports=n(7447)},7042:function(e,t,n){"use strict";t.Z=function(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=function e(t){var n,r,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t)){var o=t.length;for(n=0;n<o;n++)t[n]&&(r=e(t[n]))&&(i&&(i+=" "),i+=r)}else for(r in t)t[r]&&(i&&(i+=" "),i+=r)}return i}(e))&&(r&&(r+=" "),r+=t);return r}},5630:function(e,t,n){"use strict";n.d(t,{N:function(){return u}});var r=n(2265),i=n(5818),o=n(5968),l=n(961),a=n(538),s=n(2363);function u(e,t){let n=function(e){let t=(0,l.h)(()=>(0,i.BX)(e)),{isStatic:n}=(0,r.useContext)(o._);if(n){let[,n]=(0,r.useState)(e);(0,r.useEffect)(()=>t.on("change",n),[])}return t}(t()),u=()=>n.set(t());return u(),(0,a.L)(()=>{let t=()=>s.Wi.update(u,!1,!0),n=e.map(e=>e.on("change",t));return()=>{n.forEach(e=>e()),(0,s.Pn)(u)}}),n}},5258:function(e,t,n){"use strict";n.d(t,{Y:function(){return o}});var r=n(5630),i=n(5735);function o(e,...t){let n=e.length;return(0,r.N)(t.filter(i.i),function(){let r="";for(let o=0;o<n;o++){r+=e[o];let n=t[o];n&&(r+=(0,i.i)(n)?n.get():n)}return r})}},4570:function(e,t,n){"use strict";let r,i;n.d(t,{v:function(){return W}});var o=n(5818),l=n(961),a=n(2265),s=n(6567);let u=new WeakMap;function f({target:e,contentRect:t,borderBoxSize:n}){var r;null===(r=u.get(e))||void 0===r||r.forEach(r=>{r({target:e,contentSize:t,get size(){return function(e,t){if(t){let{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})})}function c(e){e.forEach(f)}let d=new Set;var g=n(2868),p=n(9815);let h=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),m=()=>({time:0,x:h(),y:h()}),y={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function v(e,t,n,r){let i=n[t],{length:o,position:l}=y[t],a=i.current,s=n.time;i.current=e["scroll"+l],i.scrollLength=e["scroll"+o]-e["client"+o],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=(0,g.Y)(0,i.scrollLength,i.current);let u=r-s;i.velocity=u>50?0:(0,p.R)(i.current-a,u)}let b={All:[[0,0],[1,1]]},w={start:0,center:.5,end:1};function _(e,t,n=0){let r=0;if(void 0!==w[e]&&(e=w[e]),"string"==typeof e){let t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(r=t*e),n+r}let S=[0,0];var x=n(3245),E=n(4269);let P={x:0,y:0};var O=n(2363);let C=new WeakMap,j=new WeakMap,z=new WeakMap,M=e=>e===document.documentElement?window:e;var A=n(538);function L(e,t){(0,s.K)(!!(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let k=()=>({scrollX:(0,o.BX)(0),scrollY:(0,o.BX)(0),scrollXProgress:(0,o.BX)(0),scrollYProgress:(0,o.BX)(0)});function W({container:e,target:t,layoutEffect:n=!0,...o}={}){let f=(0,l.h)(k);return(n?A.L:a.useEffect)(()=>(L("target",t),L("container",e),function(e,{container:t=document.documentElement,...n}={}){let o=z.get(t);o||(o=new Set,z.set(t,o));let l=function(e,t,n,r={}){return{measure:()=>(function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight})(e,r.target,n),update:t=>{v(e,"x",n,t),v(e,"y",n,t),n.time=t,(r.offset||r.target)&&function(e,t,n){let{offset:r=b.All}=n,{target:i=e,axis:o="y"}=n,l="y"===o?"height":"width",a=i!==e?function(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if("svg"===r.tagName){let e=r.getBoundingClientRect(),t=(r=r.parentElement).getBoundingClientRect();n.x+=e.left-t.left,n.y+=e.top-t.top}else if(r instanceof SVGGraphicsElement){let{x:e,y:t}=r.getBBox();n.x+=e,n.y+=t;let i=null,o=r.parentNode;for(;!i;)"svg"===o.tagName&&(i=o),o=r.parentNode;r=i}else break;return n}(i,e):P,s=i===e?{width:e.scrollWidth,height:e.scrollHeight}:"getBBox"in i&&"svg"!==i.tagName?i.getBBox():{width:i.clientWidth,height:i.clientHeight},u={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let f=!t[o].interpolate,c=r.length;for(let e=0;e<c;e++){let n=function(e,t,n,r){let i=Array.isArray(e)?e:S,o=0;return"number"==typeof e?i=[e,e]:"string"==typeof e&&(i=(e=e.trim()).includes(" ")?e.split(" "):[e,w[e]?e:"0"]),_(i[0],n,r)-_(i[1],t)}(r[e],u[l],s[l],a[o]);f||n===t[o].interpolatorOffsets[e]||(f=!0),t[o].offset[e]=n}f&&(t[o].interpolate=(0,x.s)(t[o].offset,(0,E.Y)(r)),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=t[o].interpolate(t[o].current)}(e,n,r)},notify:()=>t(n)}}(t,e,m(),n);if(o.add(l),!C.has(t)){let e=()=>{for(let e of o)e.measure()},n=()=>{for(let e of o)e.update(O.frameData.timestamp)},l=()=>{for(let e of o)e.notify()},a=()=>{O.Wi.read(e,!1,!0),O.Wi.read(n,!1,!0),O.Wi.update(l,!1,!0)};C.set(t,a);let f=M(t);window.addEventListener("resize",a,{passive:!0}),t!==document.documentElement&&j.set(t,"function"==typeof t?(d.add(t),i||(i=()=>{let e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};d.forEach(e=>e(t))},window.addEventListener("resize",i)),()=>{d.delete(t),!d.size&&i&&(i=void 0)}):function(e,t){r||"undefined"==typeof ResizeObserver||(r=new ResizeObserver(c));let n=function(e,t,n){var r;if("string"==typeof e){let i=document;t&&((0,s.k)(!!t.current,"Scope provided, but no element detected."),i=t.current),n?(null!==(r=n[e])&&void 0!==r||(n[e]=i.querySelectorAll(e)),e=n[e]):e=i.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}(e);return n.forEach(e=>{let n=u.get(e);n||(n=new Set,u.set(e,n)),n.add(t),null==r||r.observe(e)}),()=>{n.forEach(e=>{let n=u.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==r||r.unobserve(e)})}}(t,a)),f.addEventListener("scroll",a,{passive:!0})}let a=C.get(t);return O.Wi.read(a,!1,!0),()=>{var e;(0,O.Pn)(a);let n=z.get(t);if(!n||(n.delete(l),n.size))return;let r=C.get(t);C.delete(t),r&&(M(t).removeEventListener("scroll",r),null===(e=j.get(t))||void 0===e||e(),window.removeEventListener("resize",r))}}(({x:e,y:t})=>{f.scrollX.set(e.current),f.scrollXProgress.set(e.progress),f.scrollY.set(t.current),f.scrollYProgress.set(t.progress)},{...o,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0})),[e,t,JSON.stringify(o.offset)]),f}},728:function(e,t,n){"use strict";n.d(t,{H:function(){return u}});var r=n(3245);let i=e=>e&&"object"==typeof e&&e.mix,o=e=>i(e)?e.mix:void 0;var l=n(5630),a=n(961),s=n(5818);function u(e,t,n,i){if("function"==typeof e)return function(e){s.S1.current=[],e();let t=(0,l.N)(s.S1.current,e);return s.S1.current=void 0,t}(e);let a="function"==typeof t?t:function(...e){let t=!Array.isArray(e[0]),n=t?0:-1,i=e[0+n],l=e[1+n],a=e[2+n],s=e[3+n],u=(0,r.s)(l,a,{mixer:o(a[0]),...s});return t?u(i):u}(t,n,i);return Array.isArray(e)?f(e,a):f([e],([e])=>a(e))}function f(e,t){let n=(0,a.h)(()=>[]);return(0,l.N)(e,()=>{n.length=0;let r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)})}}}]);