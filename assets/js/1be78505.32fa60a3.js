/*! For license information please see 1be78505.32fa60a3.js.LICENSE.txt */
(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[514,608],{3616:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return re}});var o=n(7294),r=n(3905),a=n(2263),i=n(6291),c=n(2611),l=n(2122),s=n(9756),u=n(6010),d=n(6700),m=n(944),f=n(1839),b=n(3783),p=n(7898),_=n(6742),v=n(3919),h=n(5537),g=function(e){return o.createElement("svg",(0,l.Z)({width:"20",height:"20",role:"img"},e),o.createElement("g",{fill:"#7a7a7a"},o.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),o.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},y=n(4478),E=n(4973),N="sidebar_15mo",x="sidebarWithHideableNavbar_267A",S="sidebarHidden_2kNb",w="sidebarLogo_3h0W",C="menu_Bmed",k="menuLinkText_2aKo",O="menuWithAnnouncementBar_2WvA",Z="collapseSidebarButton_1CGd",P="collapseSidebarButtonIcon_3E-R",A="sidebarMenuIcon_fgN0",T="sidebarMenuCloseIcon_1lpH",R="menuLinkExternal_1OhN",I=["items"],L=["item","onItemClick","collapsible","activePath"],j=["item","onItemClick","activePath","collapsible"];var M=function e(t,n){return"link"===t.type?(0,d.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},F=(0,o.memo)((function(e){var t=e.items,n=(0,s.Z)(e,I);return t.map((function(e,t){return o.createElement(D,(0,l.Z)({key:t,item:e},n))}))}));function D(e){switch(e.item.type){case"category":return o.createElement($,e);case"link":default:return o.createElement(B,e)}}function $(e){var t,n,r,a=e.item,i=e.onItemClick,c=e.collapsible,d=e.activePath,m=(0,s.Z)(e,L),f=a.items,b=a.label,p=M(a,d),_=(n=p,r=(0,o.useRef)(n),(0,o.useEffect)((function(){r.current=n}),[n]),r.current),v=(0,o.useState)((function(){return!!c&&(!p&&a.collapsed)})),h=v[0],g=v[1],y=(0,o.useRef)(null),E=(0,o.useState)(void 0),N=E[0],x=E[1],S=function(e){var t;void 0===e&&(e=!0),x(e?(null==(t=y.current)?void 0:t.scrollHeight)+"px":void 0)};(0,o.useEffect)((function(){p&&!_&&h&&g(!1)}),[p,_,h]);var w=(0,o.useCallback)((function(e){e.preventDefault(),N||S(),setTimeout((function(){return g((function(e){return!e}))}),100)}),[N]);return 0===f.length?null:o.createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":h})},o.createElement("a",(0,l.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--sublist":c,"menu__link--active":c&&p},t[k]=!c,t)),onClick:c?w:void 0,href:c?"#!":void 0},m),b),o.createElement("ul",{className:"menu__list",ref:y,style:{height:N},onTransitionEnd:function(){h||S(!1)}},o.createElement(F,{items:f,tabIndex:h?"-1":"0",onItemClick:i,collapsible:c,activePath:d})))}function B(e){var t,n=e.item,r=e.onItemClick,a=e.activePath,i=(e.collapsible,(0,s.Z)(e,j)),c=n.href,d=n.label,m=M(n,a);return o.createElement("li",{className:"menu__list-item",key:d},o.createElement(_.Z,(0,l.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--active":m},t[R]=!(0,v.Z)(c),t)),to:c},(0,v.Z)(c)&&{isNavLink:!0,exact:!0,onClick:r},i),d))}function z(e){var t=e.onClick;return o.createElement("button",{type:"button",title:(0,E.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,E.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,u.Z)("button button--secondary button--outline",Z),onClick:t},o.createElement(g,{className:P}))}function W(e){var t=e.responsiveSidebarOpened,n=e.onClick;return o.createElement("button",{"aria-label":t?(0,E.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,E.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?o.createElement("span",{className:(0,u.Z)(A,T)},"\xd7"):o.createElement(y.Z,{className:A,height:24,width:24}))}var H=function(e){var t,n,r=e.path,a=e.sidebar,i=e.sidebarCollapsible,c=void 0===i||i,l=e.onCollapse,s=e.isHidden,_=function(){var e=(0,m.Z)().isAnnouncementBarClosed,t=(0,o.useState)(!e),n=t[0],r=t[1];return(0,p.Z)((function(t){var n=t.scrollY;e||r(0===n)})),n}(),v=(0,d.LU)(),g=v.navbar.hideOnScroll,y=v.hideableSidebar,E=(0,m.Z)().isAnnouncementBarClosed,k=function(){var e=(0,o.useState)(!1),t=e[0],n=e[1];(0,f.Z)(t);var r=(0,b.Z)();return(0,o.useEffect)((function(){r===b.D.desktop&&n(!1)}),[r]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,o.useCallback)((function(e){e.target.blur(),n(!1)}),[n]),toggleResponsiveSidebar:(0,o.useCallback)((function(){n((function(e){return!e}))}),[n])}}(),Z=k.showResponsiveSidebar,P=k.closeResponsiveSidebar,A=k.toggleResponsiveSidebar;return o.createElement("div",{className:(0,u.Z)(N,(t={},t[x]=g,t[S]=s,t))},g&&o.createElement(h.Z,{tabIndex:-1,className:w}),o.createElement("div",{className:(0,u.Z)("menu","menu--responsive","thin-scrollbar",C,(n={"menu--show":Z},n[O]=!E&&_,n))},o.createElement(W,{responsiveSidebarOpened:Z,onClick:A}),o.createElement("ul",{className:"menu__list"},o.createElement(F,{items:a,onItemClick:P,collapsible:c,activePath:r}))),y&&o.createElement(z,{onClick:l}))},U=n(7461),q=n(4608),K=n(5977),Y="docPage_31aa",V="docMainContainer_3ufF",G="docMainContainerEnhanced_3NYZ",J="docSidebarContainer_3Kbt",Q="docSidebarContainerHidden_3pA8",X="collapsedDocSidebar_2JMH",ee="expandSidebarButtonIcon_1naQ",te="docItemWrapperEnhanced_2vyJ",ne="docItemWrapper_3FMP";function oe(e){var t,n,i,l,s,m=e.currentDocRoute,f=e.versionMetadata,b=e.children,p=(0,a.default)(),_=p.siteConfig,v=p.isClient,h=f.pluginId,y=f.permalinkToSidebar,N=f.docsSidebars,x=f.version,S=y[m.path],w=N[S],C=(0,o.useState)(!1),k=C[0],O=C[1],Z=(0,o.useState)(!1),P=Z[0],A=Z[1],T=(0,o.useCallback)((function(){P&&A(!1),O(!k)}),[P]);return o.createElement(c.Z,{key:v,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:x,tag:(0,d.os)(h,x)}},o.createElement("div",{className:Y},w&&o.createElement("div",{className:(0,u.Z)(J,(t={},t[Q]=k,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(J)&&k&&A(!0)},role:"complementary"},o.createElement(H,{key:S,sidebar:w,path:m.path,sidebarCollapsible:null==(n=null==(i=_.themeConfig)?void 0:i.sidebarCollapsible)||n,onCollapse:T,isHidden:P}),P&&o.createElement("div",{className:X,title:(0,E.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,E.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:T,onClick:T},o.createElement(g,{className:ee}))),o.createElement("main",{className:(0,u.Z)(V,(l={},l[G]=k||!w,l))},o.createElement("div",{className:(0,u.Z)("container padding-vert--lg",ne,(s={},s[te]=k,s))},o.createElement(r.Zo,{components:U.Z},b)))))}var re=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,a=t.find((function(e){return(0,K.LX)(r.pathname,e)}));return a?o.createElement(oe,{currentDocRoute:a,versionMetadata:n},(0,i.Z)(t)):o.createElement(q.default,e)}},4608:function(e,t,n){"use strict";n.r(t);var o=n(7294),r=n(2611),a=n(4973);t.default=function(){return o.createElement(r.Z,{title:"Page Not Found"},o.createElement("main",{className:"container margin-vert--xl"},o.createElement("div",{className:"row"},o.createElement("div",{className:"col col--6 col--offset-3"},o.createElement("h1",{className:"hero__title"},o.createElement(a.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),o.createElement("p",null,o.createElement(a.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),o.createElement("p",null,o.createElement(a.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},8440:function(e,t,n){"use strict";n.d(t,{Z:function(){return _e}});var o,r,a,i=n(2122),c=n(7294),l=n(9756),s=n(7378),u=n(8944),d=n(6856),m=["as","asProps","children","removeDefault","className"],f=["as","asProps","children","removeDefault","className"],b=["as","asProps","children","removeDefault","className"],p={modal:"_modal-module__modal__f2DhU","is-enter":"_modal-module__is-enter__1JMjM","is-enter-active":"_modal-module__is-enter-active__4zBfM","is-exit":"_modal-module__is-exit__2gV8v","is-exit-active":"_modal-module__is-exit-active__1vzBy",overlay:"_modal-module__overlay__1FZ9M",box:"_modal-module__box__3hjm9",title:"_modal-module__title__16Wgc"};!function(e){e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll"}(o||(o={})),function(e){e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow"}(r||(r={})),function(e){e[e.Previous=-1]="Previous",e[e.Next=1]="Next"}(a||(a={}));var _=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((function(e){return e+":not([tabindex='-1'])"})).join(",");var v,h=function(e){null==e||e.focus({preventScroll:!0})},g=function(e,t){var n=o,i=function(e){return void 0===e&&(e=document.body),null==e?[]:Array.from(e.querySelectorAll(_))}(e),c=document.activeElement,l=function(e){var t=o;if(e&(t.First|t.Next))return a.Next;if(e&(t.Last|t.Previous))return a.Previous;throw new Error("Missing FocusStrategy")}(t),s=function(e,t,n){var r=o;if(n&r.First)return 0;if(n&r.Previous)return Math.max(0,e.indexOf(t)-1);if(n&r.Next)return Math.max(0,e.indexOf(t)+1);if(n&r.Last)return e.length-1;throw new Error("Missing FocusStrategy")}(i,c,t),u=t&n.NoScroll?{preventScroll:!0}:{},d=0,m=i.length,f=void 0;do{var b;if(d>=m||d+m<=0)return r.Error;var p=s+d;if(t&n.WrapAround)p=(p+m)%m;else{if(p<0)return r.Underflow;if(p>=m)return r.Overflow}null===(b=f=i[p])||void 0===b||b.focus(u),d+=l}while(f!==document.activeElement);return f.hasAttribute("tabindex")||f.setAttribute("tabindex","0"),r.Success},y="undefined"!=typeof window;!function(e){e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All"}(v||(v={}));var E=function(e,t,n){var a,i,c,l,u=o;a="keydown",i=function(o){t&v.TabLock&&e.current&&"Tab"===o.key&&(o.preventDefault(),g(e.current,(o.shiftKey?u.Previous:u.Next)|u.WrapAround)===r.Success&&n(document.activeElement))},(l=(0,s.useRef)(i)).current=i,(0,s.useEffect)((function(){function e(e){l.current.call(window,e)}return window.addEventListener(a,e,c),function(){return window.removeEventListener(a,e,c)}}),[a,c])},N=function(e,t,n){void 0===t&&(t=v.All);var r,a,i=(void 0===n?{}:n).initialFocusRef,c=Boolean(t&v.RestoreFocus),l=Boolean(t&v.InitialFocus),u=(0,s.useRef)(null),d=function(e){return u.current=e};return r=c,a=(0,s.useRef)(y?document.activeElement:null),(0,s.useEffect)((function(){if(r)return a.current=document.activeElement,function(){h(a.current),a.current=null}}),[r]),a.current,function(e,t,n,r){void 0===r&&(r=!1),(0,s.useEffect)((function(){if(r&&e.current&&y){var a=document.activeElement;null!=t&&t.current&&t.current===a||e.current.contains(a)||(null!=t&&t.current?h(t.current):g(e.current,o.First)),n(a)}}),[e,t,r])}(e,i,d,l),E(e,t,d),{}},x="div",S=function(e){var t,n=e.as,o=void 0===n?x:n,r=e.isOpen,a=void 0!==r&&r,i=e.unmountOnExit,c=void 0===i||i,l=e.timeout,m=void 0===l?275:l,f=e.initialFocusRef,b=e.close,_=void 0===b?function(){}:b,h=(0,s.useRef)(null),g=a?v.All:v.None;return console.log({focusTrapFeatures:g}),N(h,g,{initialFocusRef:f}),s.createElement(w.Provider,{value:{isOpen:a,close:_}},s.createElement(d.Z,{nodeRef:h,classNames:(t=p,{appear:t?t["is-appear"]:"is-appear",appearActive:t?t["is-appear-active"]:"is-appear-active",appearDone:t?t["is-appear-done"]:"is-appear-done",enter:t?t["is-enter"]:"is-enter",enterActive:t?t["is-enter-active"]:"is-enter-active",enterDone:t?t["is-enter-done"]:"is-enter-done",exit:t?t["is-exit"]:"is-exit",exitActive:t?t["is-exit-active"]:"is-exit-active",exitDone:t?t["is-exit-done"]:"is-exit-done"}),in:a,timeout:m,unmountOnExit:c},s.createElement(o,Object.assign({},e.asProps,{className:(0,u.Z)(!e.removeDefault&&p.modal,e.className),ref:h},e.attributes),e.children)))},w=(0,s.createContext)(null),C=function(e){var t=e.as,n=void 0===t?x:t,o=e.asProps,r=e.children,a=e.removeDefault,i=e.className,c=(0,l.Z)(e,m),d=(0,s.useContext)(w);return s.createElement(n,Object.assign({},c,o,{className:(0,u.Z)(!a&&p.overlay,i),onClick:function(){null!=d&&d.isOpen&&d.close()}}),r)};C.styles=p.overlay;var k=function(e){var t=e.as,n=void 0===t?x:t,o=e.asProps,r=e.children,a=e.removeDefault,i=e.className,c=(0,l.Z)(e,f);return s.createElement(n,Object.assign({},c,o,{className:(0,u.Z)(!a&&p.box,i)}),r)};k.styles=p.box;var O=function(e){var t=e.as,n=void 0===t?x:t,o=e.asProps,r=e.children,a=e.removeDefault,i=e.className,c=(0,l.Z)(e,b);return s.createElement(n,Object.assign({},c,o,{className:(0,u.Z)(!a&&p.title,i)}),r)};function Z(e,t){return e(t={exports:{}},t.exports),t.exports}O.styles=p.title,S.Overlay=C,S.Box=k,S.Title=O;var P="function"==typeof Symbol&&Symbol.for,A=P?Symbol.for("react.element"):60103,T=P?Symbol.for("react.portal"):60106,R=P?Symbol.for("react.fragment"):60107,I=P?Symbol.for("react.strict_mode"):60108,L=P?Symbol.for("react.profiler"):60114,j=P?Symbol.for("react.provider"):60109,M=P?Symbol.for("react.context"):60110,F=P?Symbol.for("react.async_mode"):60111,D=P?Symbol.for("react.concurrent_mode"):60111,$=P?Symbol.for("react.forward_ref"):60112,B=P?Symbol.for("react.suspense"):60113,z=P?Symbol.for("react.suspense_list"):60120,W=P?Symbol.for("react.memo"):60115,H=P?Symbol.for("react.lazy"):60116,U=P?Symbol.for("react.block"):60121,q=P?Symbol.for("react.fundamental"):60117,K=P?Symbol.for("react.responder"):60118,Y=P?Symbol.for("react.scope"):60119;function V(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case A:switch(e=e.type){case F:case D:case R:case L:case I:case B:return e;default:switch(e=e&&e.$$typeof){case M:case $:case H:case W:case j:return e;default:return t}}case T:return t}}}function G(e){return V(e)===D}var J={AsyncMode:F,ConcurrentMode:D,ContextConsumer:M,ContextProvider:j,Element:A,ForwardRef:$,Fragment:R,Lazy:H,Memo:W,Portal:T,Profiler:L,StrictMode:I,Suspense:B,isAsyncMode:function(e){return G(e)||V(e)===F},isConcurrentMode:G,isContextConsumer:function(e){return V(e)===M},isContextProvider:function(e){return V(e)===j},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===A},isForwardRef:function(e){return V(e)===$},isFragment:function(e){return V(e)===R},isLazy:function(e){return V(e)===H},isMemo:function(e){return V(e)===W},isPortal:function(e){return V(e)===T},isProfiler:function(e){return V(e)===L},isStrictMode:function(e){return V(e)===I},isSuspense:function(e){return V(e)===B},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===R||e===D||e===L||e===I||e===B||e===z||"object"==typeof e&&null!==e&&(e.$$typeof===H||e.$$typeof===W||e.$$typeof===j||e.$$typeof===M||e.$$typeof===$||e.$$typeof===q||e.$$typeof===K||e.$$typeof===Y||e.$$typeof===U)},typeOf:V},Q=(Z((function(e,t){0})),Z((function(e){e.exports=J})),Object.getOwnPropertySymbols),X=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;function te(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(r){return!1}})()&&Object.assign;var ne="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function oe(e,t,n,o,r){}oe.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function re(){}function ae(){}ae.resetWarningCache=re;var ie,ce=Z((function(e){e.exports=function(){function e(e,t,n,o,r,a){if(a!==ne){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ae,resetWarningCache:re};return n.PropTypes=n,n}()})),le={button:"_button-module__button__3zYwS",button__wrapper:"_button-module__button__wrapper__3rAoB",button__icon:"_button-module__button__icon__29ekZ",button__iconStart:"_button-module__button__iconStart__397L1",button__iconEnd:"_button-module__button__iconEnd__29lZf",button__loading:"_button-module__button__loading__ayDLz",button__text:"_button-module__button__text__3KfIU","is-disabled":"_button-module__is-disabled__3Pno1","is-loading":"_button-module__is-loading__2GYiA",spin_with_centering:"_button-module__spin_with_centering__1c1H0",button__iconLoading:"_button-module__button__iconLoading__1sOGi","variant-fab-circle":"_button-module__variant-fab-circle__xcb02","color-primary":"_button-module__color-primary__1z8Ia"},se=function(e,t){return function(n){for(var o=arguments.length,r=new Array(o>1?o-1:0),a=1;a<o;a++)r[a-1]=arguments[a];return u.Z.apply(void 0,[null==e?void 0:e[n],null==t?void 0:t[n]].concat(r))}},ue=function(e){var t=e.svg;return s.createElement("div",{className:(0,u.Z)(le.button__icon,e.className)},s.createElement(t,null))};function de(){return(de=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function me(e){return(0,s.createElement)("svg",de({"aria-hidden":"true","data-prefix":"fad","data-icon":"spinner-third",className:"button-loading-icon_svg__svg-inline--fa button-loading-icon_svg__fa-spinner-third button-loading-icon_svg__fa-w-16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},e),ie||(ie=(0,s.createElement)("g",{className:"button-loading-icon_svg__fa-group"},(0,s.createElement)("path",{className:"button-loading-icon_svg__fa-secondary",fill:"currentColor",d:"M478.71 364.58zm-22 6.11l-27.83-15.9a15.92 15.92 0 01-6.94-19.2A184 184 0 11256 72c5.89 0 11.71.29 17.46.83-.74-.07-1.48-.15-2.23-.21-8.49-.69-15.23-7.31-15.23-15.83v-32a16 16 0 0115.34-16C266.24 8.46 261.18 8 256 8 119 8 8 119 8 256s111 248 248 248c98 0 182.42-56.95 222.71-139.42-4.13 7.86-14.23 10.55-22 6.11z",opacity:.4}),(0,s.createElement)("path",{className:"button-loading-icon_svg__fa-primary",fill:"currentColor",d:"M271.23 72.62c-8.49-.69-15.23-7.31-15.23-15.83V24.73c0-9.11 7.67-16.78 16.77-16.17C401.92 17.18 504 124.67 504 256a246 246 0 01-25 108.24c-4 8.17-14.37 11-22.26 6.45l-27.84-15.9c-7.41-4.23-9.83-13.35-6.2-21.07A182.53 182.53 0 00440 256c0-96.49-74.27-175.63-168.77-183.38z"}))))}var fe=function(e){var t=e.icon,n=void 0===t?me:t,o=e.classNames,r=void 0===o?{}:o,a=e.className,i=se(le,r);return s.createElement("div",{className:i("loading",i("animation"),a)},s.createElement(n,{className:i("loading__icon")}))},be=function(e){var t=e.as,n=void 0===t?"div":t,o=e.children;return s.createElement(n,{className:e.className},o)},pe=function(e){var t,n=e.as,o=void 0===n?"button":n,r=e.classNames,a=void 0===r?{}:r,i=e.className,c=void 0===i?null:i,l=e.size,u=void 0===l?"normal":l,d=e.variant,m=void 0===d?"contained":d,f=e.color,b=void 0===f?"primary":f,p=e.disabled,_=void 0!==p&&p,v=e.isLoading,h=e.children,g=se(le,a);return(0,s.createElement)(o,Object.assign({},e,{className:g("button",c,(t={},t[le["size-"+u]]=u,t[le["color-"+b]]=b,t[le["variant-"+m]]=m,t[le["is-loading"]]=v,t[le["is-disabled"]]=_,t)),disabled:e.disabled||v}),h?"function"==typeof h?h():h:(0,s.createElement)("div",{className:g("button__wrapper")},v?(0,s.createElement)(fe,{classNames:{loading:g("button__loading"),loading__icon:g("button__icon",g("button__iconLoading")),animation:g("button__loadingAnimation")}}):null,e.iconStart?(0,s.createElement)(ue,{className:g("button__icon",g("button__iconStart")),svg:e.iconStart}):null,e.text?(0,s.createElement)(be,{className:g("button__text")},e.text):null,e.iconEnd?(0,s.createElement)(ue,{className:g("button__icon",g("button__iconEnd")),svg:e.iconEnd}):null))};pe.propTypes={classNames:ce.object,color:ce.oneOf(["primary","secondary"]),disabled:ce.bool,isLoading:ce.bool,size:ce.oneOf(["small","normal","jumbo"]),text:ce.string,variant:ce.oneOf(["fab","fab-circle"])};var _e=Object.assign({React:c},c,{ButtonExample:function(e){return c.createElement("button",(0,i.Z)({},e,{style:Object.assign({backgroundColor:"white",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)}))},Button:pe,useTimer:function(e){var t,n=e.duration,o=e.onTimeout,r=void 0===o?function(){}:o,a=(t=(0,s.useRef)(!0)).current?(t.current=!1,!0):t.current,i=(new Date).getTime()+n,c=(0,s.useState)(i),l=c[0],u=c[1],d=function(){return Math.max(l-(new Date).getTime(),0)},m=(0,s.useState)(d()),f=m[0],b=m[1];return(0,s.useEffect)((function(){a||(u((new Date).getTime()+n),b(d()))}),[n]),(0,s.useEffect)((function(){if(d()<=0)return r();var e=new AbortController;return function(e,t,n){var o=document.timeline?document.timeline.currentTime||0:performance.now();function r(e){t.aborted||(n(e),a(e))}function a(t){var n=t-o,a=Math.round(n/e)*e,i=o+a+e-performance.now();setTimeout((function(){return requestAnimationFrame(r)}),i)}a(o)}(1e3,e.signal,(function(){return function(e){var t=d(),n=t<=0;b(t),n&&(e.abort(),r())}(e)})),function(){return e.abort()}}),[n]),f}})}}]);