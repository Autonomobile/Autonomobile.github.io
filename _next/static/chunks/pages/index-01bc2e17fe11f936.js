(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(323)}])},8045:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(c){l=!0,i=c}finally{try{o||null==n.return||n.return()}finally{if(l)throw i}}return a}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,o=void 0!==r&&r,l=e.priority,d=void 0!==l&&l,m=e.loading,h=e.lazyBoundary,y=void 0===h?"200px":h,w=e.className,x=e.quality,j=e.width,k=e.height,O=e.objectFit,A=e.objectPosition,I=e.onLoadingComplete,E=e.loader,z=void 0===E?S:E,P=e.placeholder,C=void 0===P?"empty":P,R=e.blurDataURL,T=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),M=n?"responsive":"intrinsic";"layout"in T&&(T.layout&&(M=T.layout),delete T.layout);var q="";if(function(e){return"object"===typeof e&&(v(e)||function(e){return void 0!==e.src}(e))}(t)){var B=v(t)?t.default:t;if(!B.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(B)));if(R=R||B.blurDataURL,q=B.src,(!M||"fill"!==M)&&(k=k||B.height,j=j||B.width,!B.height||!B.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(B)))}t="string"===typeof t?t:q;var L=N(j),D=N(k),W=N(x),U=!d&&("lazy"===m||"undefined"===typeof m);(t.startsWith("data:")||t.startsWith("blob:"))&&(o=!0,U=!1);g.has(t)&&(U=!1);0;var F,H=a(f.useIntersection({rootMargin:y,disabled:!U}),2),G=H[0],V=H[1],Y=!U||V,J={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},X={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Z=!1,$={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:O,objectPosition:A},Q="blur"===C?{filter:"blur(20px)",backgroundSize:O||"cover",backgroundImage:'url("'.concat(R,'")'),backgroundPosition:A||"0% 0%"}:{};if("fill"===M)J.display="block",J.position="absolute",J.top=0,J.left=0,J.bottom=0,J.right=0;else if("undefined"!==typeof L&&"undefined"!==typeof D){var K=D/L,ee=isNaN(K)?"100%":"".concat(100*K,"%");"responsive"===M?(J.display="block",J.position="relative",Z=!0,X.paddingTop=ee):"intrinsic"===M?(J.display="inline-block",J.position="relative",J.maxWidth="100%",Z=!0,X.maxWidth="100%",F='<svg width="'.concat(L,'" height="').concat(D,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===M&&(J.display="inline-block",J.position="relative",J.width=L,J.height=D)}else 0;var te={src:b,srcSet:void 0,sizes:void 0};Y&&(te=_({src:t,unoptimized:o,layout:M,width:L,quality:W,sizes:n,loader:z}));var ne=t;0;var re;0;var ie=(i(re={},"imagesrcset",te.srcSet),i(re,"imagesizes",te.sizes),re);return c.default.createElement("span",{style:J},Z?c.default.createElement("span",{style:X},F?c.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(u.toBase64(F))}):null):null,c.default.createElement("img",Object.assign({},T,te,{decoding:"async","data-nimg":M,className:w,ref:function(e){G(e),function(e,t,n,r,i){if(!e)return;var a=function(){e.src!==b&&("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===r&&(e.style.filter="",e.style.backgroundSize="",e.style.backgroundImage="",e.style.backgroundPosition=""),g.add(t),i){var n=e.naturalWidth,a=e.naturalHeight;i({naturalWidth:n,naturalHeight:a})}}))};e.complete?a():e.onload=a}(e,ne,0,C,I)},style:p({},$,Q)})),U&&c.default.createElement("noscript",null,c.default.createElement("img",Object.assign({},T,_({src:t,unoptimized:o,layout:M,width:L,quality:W,sizes:n,loader:z}),{decoding:"async","data-nimg":M,style:$,className:w,loading:m||"lazy"}))),d?c.default.createElement(s.default,null,c.default.createElement("link",Object.assign({key:"__nimg-"+te.src+te.srcSet+te.sizes,rel:"preload",as:"image",href:te.srcSet?void 0:te.src},ie))):null)};var c=h(n(7294)),s=h(n(5443)),u=n(6978),d=n(5809),f=n(7190);function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){return e&&e.__esModule?e:{default:e}}function p(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){m(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}var g=new Set,b=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var y=new Map([["default",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,a=new URL("".concat(t).concat(I(n))),o=a.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||r.toString()),i&&o.set("q",i.toString());return a.href}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,a=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t).concat(a).concat(I(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(I(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function v(e){return void 0!==e.default}var w={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom"}||d.imageConfigDefault,x=w.deviceSizes,j=w.imageSizes,k=w.loader,O=w.path,A=(w.domains,o(x).concat(o(j)));function _(e){var t=e.src,n=e.unoptimized,r=e.layout,i=e.width,a=e.quality,l=e.sizes,c=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var s=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var r,i=/(^|\s)(1?\d?\d)vw/g,a=[];r=i.exec(n);r)a.push(parseInt(r[2]));if(a.length){var l,c=.01*(l=Math).min.apply(l,o(a));return{widths:A.filter((function(e){return e>=x[0]*c})),kind:"w"}}return{widths:A,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:x,kind:"w"}:{widths:o(new Set([e,2*e].map((function(e){return A.find((function(t){return t>=e}))||A[A.length-1]})))),kind:"x"}}(i,r,l),u=s.widths,d=s.kind,f=u.length-1;return{sizes:l||"w"!==d?l:"100vw",srcSet:u.map((function(e,n){return"".concat(c({src:t,quality:a,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:c({src:t,quality:a,width:u[f]})}}function N(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function S(e){var t=y.get(k);if(t)return t(p({root:O},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(k))}function I(e){return"/"===e[0]?e.slice(1):e}x.sort((function(e,t){return e-t})),A.sort((function(e,t){return e-t}))},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(c){l=!0,i=c}finally{try{o||null==n.return||n.return()}finally{if(l)throw i}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!l,r=a.useRef(),s=i(a.useState(!1),2),u=s[0],d=s[1],f=a.useCallback((function(e){r.current&&(r.current(),r.current=void 0),n||u||e&&e.tagName&&(r.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,a=r.observer,o=r.elements;return o.set(e,t),a.observe(e),function(){o.delete(e),a.unobserve(e),0===o.size&&(a.disconnect(),c.delete(i))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,u]);return a.useEffect((function(){if(!l&&!u){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[u]),[f,u]};var a=n(7294),o=n(9311),l="undefined"!==typeof IntersectionObserver;var c=new Map},6978:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},323:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(5893),i=n(9008),a=n(5675),o=n(2064),l=n.n(o),c=function(){return(0,r.jsx)("div",{className:"flex w-screen min-h-screen bg-white text-center",children:(0,r.jsxs)("div",{className:"m-auto",children:[(0,r.jsx)(a.default,{className:"rounded-t",loader:l(),src:"logo.svg",alt:"logo",width:250,height:250,unoptimized:!0}),(0,r.jsx)("h1",{className:"h text-center",children:"By Autonomobile"})]})})},s=n(2206),u=function(e){return(0,r.jsxs)(s.Z,{className:"card flex-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 m-3",ratio:2/3,children:[(0,r.jsx)("div",{className:"card-side front bg-transparent w-full h-full",children:(0,r.jsxs)("div",{className:"bg-black w-full h-full relative border-2 border-black rounded-lg overflow-hidden",children:[(0,r.jsx)(a.default,{loader:l(),src:e.src,alt:e.name,layout:"fill",unoptimized:!0}),(0,r.jsx)("div",{className:"text-black absolute w-full text-center border-b-2 border-black",children:(0,r.jsx)("p",{className:"mini-hc",children:e.name})})]})}),(0,r.jsx)("div",{className:"card-side back flex bg-transparent h-full w-full",children:(0,r.jsxs)("div",{className:"bg-white flex flex-col w-full h-full border-2 border-black rounded-lg overflow-hidden",children:[(0,r.jsx)("div",{className:"text-black flex-none w-full text-center border-b-2 border-black",children:(0,r.jsx)("p",{className:"mini-hc",children:e.login})}),(0,r.jsx)("div",{className:"text-black flex flex-1 text-center",children:(0,r.jsx)("div",{className:"m-3",children:(0,r.jsx)("p",{className:"text-center",children:e.bio})})})]})})]})},d=function(){return(0,r.jsx)("div",{className:"w-screen min-h-screen bg-white",children:(0,r.jsxs)("div",{className:"pt-12 mx-auto flex-col",children:[(0,r.jsx)("div",{children:(0,r.jsx)("h1",{className:"h text-center",children:"The Team"})}),(0,r.jsx)("div",{className:"flex flex-wrap justify-center w-full mx-auto",children:[{name:"Alexandre Girold",bio:"Future CEO of Google. I am studying at EPITA in order to acquire the necessary skills to achieve my goals. I am glad that I can work on Autopylot with such a great team! See you in 6 years. ",src:"images/alexandre-girold.jpg",login:"alexandre.girold"},{name:"Maxime Ellerbach",bio:"Let's face it, I am kinda the BBB around here (Big Bad Boss). Yet I love the people i am working with, they are smart and devoted to the task. Also i am hella good at programming.",src:"images/maxime-ellerbach.jpg",login:"maxime.ellerbach"},{name:"Maxime Gay",bio:"Fuck I am so hot, normal I am from the south of France. Yet dispite being a siddist I am actually smart and I love money.",src:"images/maxime-gay.jpg",login:"maxime.gay"},{name:"Micka\xebl Bobovitch",bio:"Hot, sexy and russian. I am a full stack develloper with a heart of gold. I am glad to be in this wonderfull team of smart and nice developpers (Alex is kinda da best).",src:"images/mickael-bobovitch.jpg",login:"mickael.bobovitch"}].map((function(e){return(0,r.jsx)(u,{name:e.name,src:e.src,bio:e.bio,login:e.login},e.name)}))})]})})};function f(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"Autopylot"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,r.jsx)(c,{}),(0,r.jsx)(d,{})]})}},2064:function(e){"use strict";e.exports=function(e){var t=e.src;e.width,e.quality;return t}},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},9008:function(e,t,n){e.exports=n(5443)},5675:function(e,t,n){e.exports=n(8045)},2703:function(e,t,n){"use strict";var r=n(414);function i(){}function a(){}a.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,a,o){if(o!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:i};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},1996:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.omit=d;var a=n(7294),o=c(a),l=c(n(5697));function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function d(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}var f=["children","contentClassName","ratio","ratioClassName","style","tagName"],m={height:"100%",left:0,position:"absolute",top:0,width:"100%"},h={height:0,position:"relative",width:"100%"},p=function(e){function t(){return s(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,i=e.contentClassName,a=e.ratio,l=e.ratioClassName,c=e.style,s=e.tagName,u=r({display:"block"},c),p=0===a?100:100/a;return o.default.createElement(s,r({},d(this.props,f),{className:"Ratio "+n,style:u}),o.default.createElement("div",{className:"Ratio-ratio "+l,style:r({},h,{paddingTop:p+"%"})},o.default.createElement("div",{className:"Ratio-content "+i,style:m},t)))}}]),t}(a.Component);t.default=p,p.propTypes={children:l.default.any,className:l.default.string,contentClassName:l.default.string,ratio:l.default.number,ratioClassName:l.default.string,style:l.default.object,tagName:l.default.string},p.defaultProps={children:null,className:"",contentClassName:"",ratio:1,ratioClassName:"",style:{},tagName:"div"}},2206:function(e,t,n){"use strict";var r,i=n(1996),a=(r=i)&&r.__esModule?r:{default:r};t.Z=a.default}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);