(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__Nczto",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1_5Nm"}},11:function(e,t,a){e.exports={overlay:"Modal_overlay__H9unx",modal:"Modal_modal__2mHeJ"}},22:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1Qqmo"}},23:function(e,t,a){e.exports={button:"Button_button__fTZ3L"}},25:function(e,t,a){e.exports={loader:"Loader_loader__3kKOH"}},5:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2nPLW",SearchForm:"Searchbar_SearchForm__w_k6g",SearchFormButton:"Searchbar_SearchFormButton__21mXX",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__2Vcsc",SearchFormInput:"Searchbar_SearchFormInput__37tAi"}},70:function(e,t,a){e.exports={App:"App_App__1U3Xa"}},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),u=a(12),s=a(4),l=a(21),i=a.n(l),m=function(e){var t=e.searchQuery,a=void 0===t?"":t,n=e.currentPage,r=void 0===n?1:n,c=e.pageSize,o=void 0===c?12:c;return i.a.get("https://pixabay.com/api/?q=".concat(a,"&page=").concat(r,"&key=").concat("21944568-357b711266e3368e889ab4e4f","&image_type=photo&orientation=horizontal&per_page=").concat(o)).then((function(e){return e.data.hits}))},b=a(5),j=a.n(b),h=a(1);var d=function(e){var t=e.onSubmit,a=Object(n.useState)(""),r=Object(s.a)(a,2),c=r[0],o=r[1];return Object(h.jsx)("header",{className:j.a.Searchbar,children:Object(h.jsxs)("form",{className:j.a.SearchForm,onSubmit:function(e){e.preventDefault(),t(c),o("")},children:[Object(h.jsx)("button",{type:"submit",className:j.a.SearchFormButton,children:Object(h.jsx)("span",{className:j.a.SearchFormButtonLabel,children:"Search"})}),Object(h.jsx)("input",{className:j.a.SearchFormInput,type:"text",value:c,onChange:function(e){o(e.currentTarget.value)},autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},f=a(10),O=a.n(f),p=function(e){var t=e.webformatURL,a=e.onClick,n=e.tags;return Object(h.jsx)("li",{className:O.a.ImageGalleryItem,children:Object(h.jsx)("img",{src:t,alt:n,className:O.a.ImageGalleryItemImage,onClick:a})})},g=a(22),_=a.n(g),S=function(e){var t=e.hits,a=e.onOpenModalImg;return Object(h.jsx)("ul",{className:_.a.ImageGallery,children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL;return Object(h.jsx)("li",{children:Object(h.jsx)(p,{webformatURL:n,onClick:function(){return a(r)}})},t)}))})},x=a(11),y=a.n(x),I=document.querySelector("#modal-root");var v=function(e){var t=e.onClose,a=e.src,r=e.alt;Object(n.useEffect)((function(){return window.addEventListener("keydown",o),function(){return window.removeEventListener("keydown",o)}}));var o=function(e){"Escape"===e.code&&t()};return Object(c.createPortal)(Object(h.jsx)("div",{className:y.a.overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(h.jsx)("div",{className:y.a.modal,children:Object(h.jsx)("img",{src:a,alt:r})})}),I)},k=a(23),w=a.n(k),N=function(e){var t=e.onClick;return Object(h.jsx)("button",{className:w.a.button,type:"button",onClick:t,children:"Load more"})},F=a(24),L=a.n(F),G=a(25),C=a.n(G),B=(a(69),function(){return Object(h.jsx)(L.a,{type:"ThreeDots",color:"#3f51b5",className:C.a.loader})});a(70);var E=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(s.a)(c,2),l=o[0],i=o[1],b=Object(n.useState)(1),j=Object(s.a)(b,2),f=j[0],O=j[1],p=Object(n.useState)(!1),g=Object(s.a)(p,2),_=g[0],x=g[1],y=Object(n.useState)(""),I=Object(s.a)(y,2),k=I[0],w=(I[1],Object(n.useState)("")),F=Object(s.a)(w,2),L=F[0],G=F[1],C=Object(n.useState)(""),E=Object(s.a)(C,2),M=E[0],T=E[1];return Object(n.useEffect)((function(){l&&(x(!0),m({searchQuery:l,currentPage:f}).then((function(e){r((function(t){return[].concat(Object(u.a)(t),Object(u.a)(e))}))})).then((function(){window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})})).catch((function(e){return G({error:"No pictures found"})})).finally((function(){return x(!1)})))}),[l,f]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d,{onSubmit:function(e){i(e),O(1),r([]),G(null)}}),L&&Object(h.jsx)("p",{children:L}),Object(h.jsx)(S,{hits:a,onOpenModalImg:function(e){T(e)}}),_&&Object(h.jsx)(B,{}),a.length>11&&!_&&Object(h.jsx)(N,{onClick:function(){return O(f+1)}}),M&&Object(h.jsx)(v,{src:M,alt:k,onClose:function(){T("")}})]})};o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(E,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.c74c0cb3.chunk.js.map