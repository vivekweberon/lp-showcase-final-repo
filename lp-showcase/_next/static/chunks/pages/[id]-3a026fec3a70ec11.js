(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[112],{3734:function(e,t,a){"use strict";var r=a(4298),i=a.n(r),n=a(7294),l=a(1581),s=a.n(l);let o=({contact:e})=>((0,n.useEffect)(()=>{let{mauticForm:t}=e;if(t){setMauticForms(t.formSetName),setEmailFormHeader(t.emailFormHeader),setPhoneFormHeader(t.phoneFormHeader);let e=t.popupForm;e&&!0===e.enable?(enablePopupForm(e.x,e.y,e.z),loadForm("lpContent")):loadForm("aside")}},[e]),n.createElement(n.Fragment,null,n.createElement("div",{id:"contact",className:"container-fluid",style:{paddingTop:"50px",paddingBottom:"50px",backgroundColor:"#fafafa"}},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-12",style:{textAlign:"center"}},n.createElement("h1",{id:"contactST",style:{marginBottom:"20px"}},"Contact"))),n.createElement("div",{className:"row"},n.createElement("div",{id:"aside",className:"col-12",style:{textAlign:"center"}}))),n.createElement("div",{id:"lpModal",className:"cmodal"},n.createElement("div",{id:"lpContent",className:"cmodal-content"},n.createElement("span",{id:"lpClose",className:"close"},"\xd7"))),n.createElement(i(),null,'let page = "lp"')));o.propTypes={contact:s().shape({menu:s().string.isRequired,mauticForm:s().shape({emailFormHeader:s().string.isRequired,formSetName:s().string.isRequired,pageType:s().string.isRequired,phoneFormHeader:s().string.isRequired,popupForm:s().shape({enable:s().bool.isRequired,x:s().number.isRequired,y:s().number.isRequired,z:s().number.isRequired})})})},t.Z=o},5107:function(e,t,a){"use strict";var r=a(7294),i=a(1581),n=a.n(i);let l=({footerMenu:e,footertext:t})=>r.createElement("div",{id:"footer",className:"container-fluid",style:{paddingTop:"50px",paddingBottom:"50px",backgroundColor:"#fafafa"}},r.createElement("div",{id:"footerMenu",className:"row justify-content-center",style:{marginBottom:"40px"}},e?.map(e=>e?r.createElement("div",{key:e,className:"col-6 col-sm-4 col-md-3 text-center",style:{textDecoration:"underline"}},r.createElement("a",{href:`#${e.toLowerCase()}`,style:{color:"#212529"}},e)):null)),r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12",style:{textAlign:"center"}},r.createElement("div",{id:"ftLine1"},t.line1),r.createElement("div",{id:"ftLine2"},t.line2),r.createElement("div",{id:"ftLine3"},t.line3))));l.propTypes={footerMenu:n().arrayOf(n().string),footertext:n().shape({line1:n().string,line2:n().string,line3:n().string})},t.Z=l},4308:function(e,t,a){"use strict";var r=a(7294),i=a(6564),n=a(8063),l=a(1581),s=a.n(l);function o({navbar:e,forwardedRef:t}){return r.createElement(i.Z,{bg:"dark",variant:"dark",expand:"md",fixed:"top","data-testid":"navbar",id:"nav",ref:t,style:{padding:"8px 12px"}},r.createElement(i.Z.Toggle,{"aria-controls":"navbar-nav"}),r.createElement(i.Z.Collapse,{id:"navbar-nav",className:"justify-content-center"},r.createElement(n.Z,null,e.map((e,t)=>r.createElement(n.Z.Link,{key:t,href:`#${e.toLowerCase()}`},e)))))}o.propTypes={navbar:s().arrayOf(s().string).isRequired,forwardedRef:s().oneOfType([s().shape({current:s().any})])},t.Z=o},5899:function(e,t,a){"use strict";var r=a(4298),i=a.n(r),n=a(7294),l=a(1581),s=a.n(l);let o=({contact:e})=>((0,n.useEffect)(()=>{let{mauticForm:t}=e;setMauticForms(t.formSetName),setEmailFormHeader(t.emailFormHeader),setPhoneFormHeader(t.phoneFormHeader),enablePopupForm(popupForm.x,popupForm.y,popupForm.z),loadForm("lpContent")},[e]),n.createElement(n.Fragment,null,n.createElement("div",{id:"lpModal",className:"cmodal"},n.createElement("div",{id:"lpContent",className:"cmodal-content"},n.createElement("span",{id:"lpClose",className:"close"},"\xd7"))),n.createElement(i(),null,'let page = "lp"')));o.propTypes={contact:s().shape({menu:s().string.isRequired,mauticForm:s().shape({emailFormHeader:s().string.isRequired,formSetName:s().string.isRequired,pageType:s().string.isRequired,phoneFormHeader:s().string.isRequired,popupForm:s().shape({enable:s().bool.isRequired,x:s().number.isRequired,y:s().number.isRequired,z:s().number.isRequired})})})},t.Z=o},3824:function(e,t,a){"use strict";var r=a(7294),i=a(9876),n=a(1581),l=a.n(n);let s=({realtorData:e})=>{let{photo:t,name:a,company:n,id:l,phone:s,logo:o,sectionTitle:c}=e;return r.createElement("div",{id:"realtor",className:"container-fluid",style:{paddingTop:"50px",paddingBottom:"50px"}},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12",style:{textAlign:"center"}},r.createElement("h1",{id:"realtorST"},c))),r.createElement("div",{className:"row no-gutters justify-content-center"},r.createElement("div",{className:"col-8 col-sm-4 col-lg-3",style:{marginTop:"20px"}},r.createElement("img",{id:"rImage",srcSet:`${i.basePath+"/"+t}?width=360 360w, ${i.basePath+"/"+t}?width=576 576w, ${i.basePath+"/"+t}?width=768 768w, ${i.basePath+"/"+t}?width=992 992w, ${i.basePath+"/"+t}?width=1200 1200w, ${i.basePath+"/"+t}?width=1400 1400w, ${i.basePath+"/"+t}?width=1600 1600w, ${i.basePath+"/"+t}?width=1920 1920w`,sizes:"(max-width: 600px) 576px, (max-width: 768px) 768px, (max-width: 992px) 992px, (max-width: 1200px) 1200px, (max-width: 1400px) 1400px, (max-width: 1600px) 1600px, (max-width: 1920px) 1920px, 2000px",src:`${i.basePath+"/"+t}?width=1920`,style:{width:"100%"},alt:a})),r.createElement("div",{className:"col-12 col-sm-6 col-xl-5",style:{color:"darkblue",textAlign:"center",marginTop:"10px"}},r.createElement("h1",{id:"rName"},a),r.createElement("h3",{id:"rCompany"},n),r.createElement("h3",{id:"rId"},l),r.createElement("h3",null,r.createElement("a",{href:`tel:${s}`,style:{color:"darkblue",textDecoration:"underline"}},s)),r.createElement("img",{id:"rLogo",src:i.basePath+"/"+o,alt:a,style:{width:"50%"}}))),r.createElement("div",{id:"rFooter",className:"row no-gutters justify-content-center",style:{display:"none",marginTop:"20px"}}))};s.propTypes={realtorData:l().shape({photo:l().string.isRequired,name:l().string.isRequired,company:l().string.isRequired,id:l().string.isRequired,phone:l().string.isRequired,logo:l().string.isRequired,sectionTitle:l().string.isRequired}).isRequired},t.Z=s},9876:function(e){"use strict";e.exports={reactStrictMode:!1,trailingSlash:!0,basePath:"/lp-showcase",output:"export",eslint:{ignoreDuringBuilds:!0},images:{domains:["images.pexels.com"]}}},7965:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return b},default:function(){return N}});var r=a(7294),i=a(4308),n=a(5107),l=a(1581),s=a.n(l);let o=({priceAndFeatures:e})=>{let{title1:t,title2:a,beds:i,baths:n,homeType:l,sqft:s,yearBuilt:o,price:c}=e;return r.createElement("div",{id:"price & features",className:"container",style:{paddingTop:"50px",paddingBottom:"50px"}},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-sm-12",style:{textAlign:"center"}},r.createElement("h1",{id:"pfTitle1"},t),r.createElement("h3",{id:"pfTitle2"},a))),r.createElement("div",{className:"row",style:{margin:"auto",textAlign:"center"}},r.createElement("div",{id:"pfBeds_c",className:"col-6 col-sm-6 col-lg-4",style:{marginTop:"50px"}},r.createElement("i",{className:"fa fa-3x fa-bed"}),r.createElement("div",{id:"pfBeds"},i)),r.createElement("div",{id:"pfBaths_c",className:"col-6 col-sm-6 col-lg-4",style:{marginTop:"50px"}},r.createElement("i",{className:"fa fa-3x fa-bath"}," "),r.createElement("div",{id:"pfBaths"},n)),r.createElement("div",{id:"pfHomeType_c",className:"col-6 col-sm-6 col-lg-4",style:{marginTop:"50px"}},r.createElement("i",{className:"fa fa-3x fa-home"}," "),r.createElement("div",{id:"pfHomeType"},l)),r.createElement("div",{id:"pfSqft_c",className:"col-6 col-sm-6 col-lg-4",style:{marginTop:"50px"}},r.createElement("i",{className:"fa fa-3x fa-building"}," "),r.createElement("div",{id:"pfSqft"},s)),r.createElement("div",{id:"pfYearBuilt_c",className:"col-6 col-sm-6 col-lg-4",style:{marginTop:"50px"}},r.createElement("i",{className:"fa fa-3x fa-calendar-week"}," "),r.createElement("div",{id:"pfYearBuilt"},o)),r.createElement("div",{id:"pfPrice_c",className:"col-6 col-sm-6 col-lg-4",style:{marginTop:"50px"}},r.createElement("i",{className:"fa fa-3x fa-dollar-sign"}," "),r.createElement("div",{id:"pfPrice"},c))))};o.propTypes={priceAndFeatures:s().shape({title1:s().string.isRequired,title2:s().string.isRequired,beds:s().string.isRequired,baths:s().string.isRequired,homeType:s().string.isRequired,sqft:s().string.isRequired,yearBuilt:s().string.isRequired,price:s().string.isRequired}).isRequired};var c=a(6483),d=a(9876);let m=({navbarRef:e,imageUrls:t})=>{console.log("IMAGEURLS",t);let[a,i]=(0,r.useState)(),[n,l]=(0,r.useState)();return(0,r.useEffect)(()=>{function t(){let t=function(){let t=window.innerHeight,a=window.innerWidth,r=1.777*(t-e.current.clientHeight-20);return r+30>a&&(r=a-30),r+"px"}();i(parseFloat(t)/1.777+"px"),l(t)}return t(),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[e]),r.createElement("div",{id:"photos",className:"container-fluid",style:{paddingTop:"50px",paddingBottom:"50px"}},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12",style:{textAlign:"center"}},r.createElement("h1",{id:"photosST"},"Photos"))),r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12"},r.createElement(c.Z,{id:"photosCarousel",className:"carousel slide",style:{backgroundColor:"black",maxWidth:"100%",width:n,height:a,margin:"auto"},interval:3e3},t.urls.map((e,t)=>r.createElement(c.Z.Item,{key:t},r.createElement("img",{srcSet:`${d.basePath+e}?width=360 360w, ${d.basePath+e}?width=576 576w, ${d.basePath+e}?width=768 768w, ${d.basePath+e}?width=992 992w, ${d.basePath+e}?width=1200 1200w, ${d.basePath+e}?width=1400 1400w, ${d.basePath+e}?width=1600 1600w, ${d.basePath+e}?width=1920 1920w`,sizes:"(max-width: 600px) 576px, (max-width: 768px) 768px, (max-width: 992px) 992px, (max-width: 1200px) 1200px, (max-width: 1400px) 1400px, (max-width: 1600px) 1600px, (max-width: 1920px) 1920px, 2000px",src:`${d.basePath+e}?width=1920`,className:"d-block",alt:"Property",style:{width:n,height:a}})))))))};m.propTypes={navbarRef:s().shape({current:s().shape({clientHeight:s().number.isRequired})}).isRequired,imageUrls:s().shape({urls:s().arrayOf(s().string).isRequired}).isRequired};let u=({youtubeVideoID:e,navbarRef:t})=>{let[a,i]=(0,r.useState)(),[n,l]=(0,r.useState)();return(0,r.useEffect)(()=>{function e(){let{width:e,height:a}=function(){let e=window.innerHeight,a=window.innerWidth,r=e-t.current.clientHeight-20,i=1.777*r;return i>a&&(r=(i=a)/1.777),{width:i+"px",height:r+"px"}}();l(e),i(a)}return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[t]),r.createElement("div",{id:"video",className:"container-fluid",style:{paddingTop:"50px",paddingBottom:"50px",backgroundColor:"#fafafa"}},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12",style:{textAlign:"center"}},r.createElement("h1",{id:"videoST"},"Video"))),r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12",style:{textAlign:"center"}},r.createElement("iframe",{id:"homeVideo",style:{width:n,height:a,margin:"auto",maxWidth:"100%"},src:`https://www.youtube.com/embed/${e}`,allowFullScreen:!0,title:"Property Video"}))))};u.propTypes={youtubeVideoID:s().string.isRequired,navbarRef:s().object.isRequired};let p=({virtualTour:e,navbarRef:t})=>{let{title:a,matterportID:i}=e,[n,l]=(0,r.useState)();return(0,r.useEffect)(()=>{function e(){let e=t.current.clientHeight;l(window.innerHeight-e-100+"px")}return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[t]),r.createElement("div",{id:"virtual tour",className:"container-fluid",style:{paddingTop:"50px",paddingBottom:"50px"}},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12",style:{textAlign:"center"}},r.createElement("h1",{id:"virtualTourST"},"Virtual Tour"),r.createElement("h4",{id:"vtTitle"},a))),r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12"},r.createElement("object",{id:"vtVideo",style:{width:"100%",height:n},data:`https://my.matterport.com/show/?m=${i}`,"aria-label":"Virtual tour of the property"}))))};p.propTypes={virtualTour:s().shape({title:s().string.isRequired,matterportID:s().string.isRequired}).isRequired,navbarRef:s().object.isRequired};var h=a(3734),f=a(3824),g=a(48),E=a(8486);let v=({content:e,onLinkClick:t})=>((0,r.useEffect)(()=>{let a=new g.Z({html:!0,breaks:!0}).use(E.Z),r=e.replace(/\[([^\]]+)\]\(javascript:openModal\('([^']+)'\)\)/g,(e,t,a)=>`[${t}](${a})`),i=a.render(r),n=e=>{e.preventDefault(),t(e.target.href)},l=document.getElementById("dContent");return l&&(l.innerHTML=i,Array.from(l.getElementsByTagName("a")).forEach(e=>{e.addEventListener("click",n)})),()=>{l&&Array.from(l.getElementsByTagName("a")).forEach(e=>{e.removeEventListener("click",n)})}},[e,t]),r.createElement("div",{id:"description",className:"container-fluid",style:{paddingTop:"50px",paddingBottom:"50px",backgroundColor:"#fafafa"}},r.createElement("div",{className:"row justify-content-center"},r.createElement("div",{className:"col-10",style:{textAlign:"center"}},r.createElement("h1",{id:"descriptionST"}," Description "))),r.createElement("div",{className:"row justify-content-center"},r.createElement("div",{className:"col-10"},r.createElement("div",{id:"dContent"})))));v.propTypes={content:s().string.isRequired,onLinkClick:s().func.isRequired};var w=a(5899);let x=({clickedUrl:e,onCloseModal:t})=>{let a=(0,r.useRef)(document.body);return(0,r.useEffect)(()=>{let e=a.current,t=e.style.overflow;return e.style.overflow="hidden",()=>{e.style.overflow=t}},[]),console.log("Modal clickedUrl:",e),r.createElement(r.Fragment,null,r.createElement("div",{className:"modal fade show",id:"extLinkModal",tabIndex:"-1","aria-labelledby":"modalLabel","aria-hidden":"true",style:{display:"block",paddingRight:"0px"}},r.createElement("div",{className:"modal-dialog modal-dialog-centered",style:{maxWidth:"fit-content",marginLeft:"auto",marginRight:"auto"}},r.createElement("div",{className:"modal-content"},r.createElement("div",{className:"modal-header"},r.createElement("h5",{className:"modal-title",id:"modalLabel",style:{visibility:"hidden"}},"Modal"),r.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:t},r.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.createElement("div",{className:"modal-body"},r.createElement("iframe",{id:"modalIframe",style:{height:"80vh",width:"80vw"},title:"Modal",src:e}))))),r.createElement("div",{className:"modal-backdrop fade show"}))};x.propTypes={clickedUrl:s().string.isRequired,onCloseModal:s().func.isRequired};let y=({propertyData:e,images:t})=>{let[a,l]=(0,r.useState)(null),[s,c]=(0,r.useState)(!1),d=(0,r.useRef)(null),g=e=>{console.log("Link clicked:",e),l(e),c(!0)};if(!e)return r.createElement("div",null,"Loading...");let{priceAndFeatures:E,photos:y,video:b,virtualTour:N,realtor:R,footertext:T,contact:q,description:k}=e,F=[],P=e.propertyPageSectionsOrder,$=P?P.map((e,t)=>{switch(e){case"virtualTour":return _(N,t);case"priceAndFeatures":return C(E,t);case"photos":return S(y,t);case"video":return L(b,t);case"contact":return H(q,t);case"realtor":return B(R,t);case"description":return A(k,t);default:return null}}):[_(N,0),C(E,1),S(y,2),L(b,3),H(q,4),B(R,5),A(k,6)];function _(e,t){return e?(F.push("Virtual Tour"),r.createElement(p,{key:`virtualTour_${t}`,virtualTour:e,navbarRef:d})):null}function C(e,t){return e?(F.push("Price & Features"),r.createElement(o,{key:`priceAndFeatures_${t}`,priceAndFeatures:e})):null}function S(e,a){return e?(F.push("Photos"),r.createElement(m,{key:`photos_${a}`,imageUrls:{urls:t},navbarRef:d})):null}function L(e,t){return e?.youtubeVideoID?(F.push("Video"),r.createElement(u,{key:`video_${t}`,youtubeVideoID:e.youtubeVideoID,navbarRef:d})):null}function H(e,t){return e?!1===e.mauticForm.popupForm.enable?(F.push("Contact"),r.createElement(h.Z,{contact:e,key:`contact_${t}`})):r.createElement(w.Z,{contact:e,key:`popupForm_${t}`}):null}function B(e,t){return e?(F.push("Realtor"),r.createElement(f.Z,{key:`realtor_${t}`,realtorData:e})):null}function A(e,t){return e&&e.content?(F.push("Description"),r.createElement(v,{key:`description_${t}`,content:e.content,onLinkClick:g})):null}return r.createElement("div",null,r.createElement(i.Z,{navbar:F,forwardedRef:d}),$,s&&r.createElement(x,{clickedUrl:a,onCloseModal:()=>{c(!1)}}),r.createElement(n.Z,{footerMenu:F,footertext:T}))};y.propTypes={propertyData:s().object.isRequired,images:s().arrayOf(s().string).isRequired};var b=!0,N=y},5222:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[id]",function(){return a(7965)}])}},function(e){e.O(0,[743,723,888,774,179],function(){return e(e.s=5222)}),_N_E=e.O()}]);