(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[112],{3734:function(e,t,a){"use strict";a(4298);var r=a(7294),i=a(1581),n=a.n(i);let s=({contact:e})=>((0,r.useEffect)(()=>{let{mauticForm:t}=e;if(t){setMauticForms(t.formSetName),setEmailFormHeader(t.emailFormHeader),setPhoneFormHeader(t.phoneFormHeader);let e=t.popupForm;e&&!0===e.enable?(enablePopupForm(e.x,e.y,e.z),loadForm("lpContent")):loadForm("aside")}},[e]),r.createElement(r.Fragment,null,r.createElement("div",{id:"contact",className:"container-fluid",style:{paddingTop:"50px",paddingBottom:"50px",backgroundColor:"#fafafa"}},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12",style:{textAlign:"center"}},r.createElement("h1",{id:"contactST",style:{marginBottom:"20px"}},"Contact"))),r.createElement("div",{className:"row"},r.createElement("div",{id:"aside",className:"col-12",style:{textAlign:"center"}}))),r.createElement("div",{id:"lpModal",className:"cmodal"},r.createElement("div",{id:"lpContent",className:"cmodal-content"},r.createElement("span",{id:"lpClose",className:"close"},"\xd7")))));s.propTypes={contact:n().shape({menu:n().string.isRequired,mauticForm:n().shape({emailFormHeader:n().string.isRequired,formSetName:n().string.isRequired,pageType:n().string.isRequired,phoneFormHeader:n().string.isRequired,popupForm:n().shape({enable:n().bool.isRequired,x:n().number.isRequired,y:n().number.isRequired,z:n().number.isRequired})})})},t.Z=s},5107:function(e,t,a){"use strict";var r=a(7294),i=a(1581),n=a.n(i);let s=({footerMenu:e,footertext:t})=>r.createElement("div",{id:"footer",className:"container-fluid",style:{paddingTop:"50px",paddingBottom:"50px",backgroundColor:"#fafafa"}},r.createElement("div",{id:"footerMenu",className:"row justify-content-center",style:{marginBottom:"40px"}},e?.map(e=>e?r.createElement("div",{key:e,className:"col-6 col-sm-4 col-md-3 text-center",style:{textDecoration:"underline"}},r.createElement("a",{href:`#${e.toLowerCase()}`,style:{color:"#212529"}},e)):null)),r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12",style:{textAlign:"center"}},r.createElement("div",{id:"ftLine1"},t.line1),r.createElement("div",{id:"ftLine2"},t.line2),r.createElement("div",{id:"ftLine3"},t.line3))));s.propTypes={footerMenu:n().arrayOf(n().string),footertext:n().shape({line1:n().string,line2:n().string,line3:n().string})},t.Z=s},4308:function(e,t,a){"use strict";var r=a(7294),i=a(6564),n=a(8063),s=a(1581),l=a.n(s);function c({navbar:e,forwardedRef:t}){return r.createElement(i.Z,{bg:"dark",variant:"dark",expand:"md",fixed:"top","data-testid":"navbar",id:"nav",ref:t,style:{padding:"8px 12px"}},r.createElement(i.Z.Toggle,{"aria-controls":"navbar-nav"}),r.createElement(i.Z.Collapse,{id:"navbar-nav",className:"justify-content-center"},r.createElement(n.Z,null,e.map((e,t)=>r.createElement(n.Z.Link,{key:t,href:`#${e.toLowerCase()}`},e)))))}c.propTypes={navbar:l().arrayOf(l().string).isRequired,forwardedRef:l().oneOfType([l().shape({current:l().any})])},t.Z=c},5899:function(e,t,a){"use strict";a(4298);var r=a(7294),i=a(1581),n=a.n(i);let s=({contact:e})=>((0,r.useEffect)(()=>{let{mauticForm:t}=e;setMauticForms(t.formSetName),setEmailFormHeader(t.emailFormHeader),setPhoneFormHeader(t.phoneFormHeader),enablePopupForm(popupForm.x,popupForm.y,popupForm.z),loadForm("lpContent")},[e]),r.createElement(r.Fragment,null,r.createElement("div",{id:"lpModal",className:"cmodal"},r.createElement("div",{id:"lpContent",className:"cmodal-content"},r.createElement("span",{id:"lpClose",className:"close"},"\xd7")))));s.propTypes={contact:n().shape({menu:n().string.isRequired,mauticForm:n().shape({emailFormHeader:n().string.isRequired,formSetName:n().string.isRequired,pageType:n().string.isRequired,phoneFormHeader:n().string.isRequired,popupForm:n().shape({enable:n().bool.isRequired,x:n().number.isRequired,y:n().number.isRequired,z:n().number.isRequired})})})},t.Z=s},3824:function(e,t,a){"use strict";var r=a(7294),i=a(9876),n=a(1581),s=a.n(n);let l=({realtorData:e})=>{let{photo:t,name:a,company:n,id:s,phone:l,logo:c,sectionTitle:o}=e;return r.createElement("div",{id:"realtor",className:"container-fluid",style:{paddingTop:"50px",paddingBottom:"50px"}},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12",style:{textAlign:"center"}},r.createElement("h1",{id:"realtorST"},o))),r.createElement("div",{className:"row no-gutters justify-content-center"},r.createElement("div",{className:"col-8 col-sm-4 col-lg-3",style:{marginTop:"20px"}},r.createElement("img",{id:"rImage",srcSet:`${i.basePath+"/"+t}?width=360 360w, ${i.basePath+"/"+t}?width=576 576w, ${i.basePath+"/"+t}?width=768 768w, ${i.basePath+"/"+t}?width=992 992w, ${i.basePath+"/"+t}?width=1200 1200w, ${i.basePath+"/"+t}?width=1400 1400w, ${i.basePath+"/"+t}?width=1600 1600w, ${i.basePath+"/"+t}?width=1920 1920w`,sizes:"(max-width: 600px) 576px, (max-width: 768px) 768px, (max-width: 992px) 992px, (max-width: 1200px) 1200px, (max-width: 1400px) 1400px, (max-width: 1600px) 1600px, (max-width: 1920px) 1920px, 2000px",src:`${i.basePath+"/"+t}?width=1920`,style:{width:"100%"},alt:a})),r.createElement("div",{className:"col-12 col-sm-6 col-xl-5",style:{color:"darkblue",textAlign:"center",marginTop:"10px"}},r.createElement("h1",{id:"rName"},a),r.createElement("h3",{id:"rCompany"},n),r.createElement("h3",{id:"rId"},s),r.createElement("h3",null,r.createElement("a",{href:`tel:${l}`,style:{color:"darkblue",textDecoration:"underline"}},l)),r.createElement("img",{id:"rLogo",src:i.basePath+"/"+c,alt:a,style:{width:"50%"}}))),r.createElement("div",{id:"rFooter",className:"row no-gutters justify-content-center",style:{display:"none",marginTop:"20px"}}))};l.propTypes={realtorData:s().shape({photo:s().string.isRequired,name:s().string.isRequired,company:s().string.isRequired,id:s().string.isRequired,phone:s().string.isRequired,logo:s().string.isRequired,sectionTitle:s().string.isRequired}).isRequired},t.Z=l},9876:function(e){"use strict";e.exports={reactStrictMode:!1,trailingSlash:!0,basePath:"/lp-showcase",output:"export",eslint:{ignoreDuringBuilds:!0},images:{domains:["images.pexels.com"]}}},3556:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return k},default:function(){return $}});var r=a(7294),i=a(9876),n=a(9008),s=a.n(n),l=a(1581),c=a.n(l),o=a(4308);let d=({youtubeVideoID:e,videoStart:t,videoEnd:a,sectionTitle:i})=>(console.log("youtubeVideoID",e),console.log("sectionTitle",i),r.createElement("div",{id:"home",style:{backgroundColor:"#fafafa",textAlign:"center",paddingTop:"50px",paddingBottom:"50px"}},r.createElement("h1",null,i),r.createElement("iframe",{id:"video1",frameBorder:"0",style:{pointerEvents:"none",width:"133vh",height:"75vh"},allow:"autoplay; fullscreen",src:`https://www.youtube.com/embed/${e}?$start=5&end=10&autoplay=1&controls=0&showinfo=0&disablekb=1&modestbranding=1&rel=0&mute=1&playsinline=1&enablejsapi=1&origin=https://ns-blue-weberealty.thrivebrokers.com`}),r.createElement("div",{style:{textAlign:"center",cursor:"pointer",fontWeight:"bold",textDecoration:"underline"}},r.createElement("a",{id:"playSound",onClick:e=>{handlePlaySoundButtonClick(e)}},"Play Sound"))));d.propTypes={youtubeVideoID:c().string.isRequired,videoStart:c().number.isRequired,videoEnd:c().number.isRequired,menu:c().string.isRequired,sectionTitle:c().string.isRequired};var m=a(5107);let u=({priceAndFeatures:e})=>{let{title1:t,title2:a,beds:i,baths:n,homeType:s,sqft:l,yearBuilt:c,price:o}=e;return r.createElement("div",{id:"price & features",className:"container",style:{paddingTop:"50px",paddingBottom:"50px"}},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-sm-12",style:{textAlign:"center"}},r.createElement("h1",{id:"pfTitle1"},t),r.createElement("h3",{id:"pfTitle2"},a))),r.createElement("div",{className:"row",style:{margin:"auto",textAlign:"center"}},r.createElement("div",{id:"pfBeds_c",className:"col-6 col-sm-6 col-lg-4",style:{marginTop:"50px"}},r.createElement("i",{className:"fa fa-3x fa-bed"}),r.createElement("div",{id:"pfBeds"},i)),r.createElement("div",{id:"pfBaths_c",className:"col-6 col-sm-6 col-lg-4",style:{marginTop:"50px"}},r.createElement("i",{className:"fa fa-3x fa-bath"}," "),r.createElement("div",{id:"pfBaths"},n)),r.createElement("div",{id:"pfHomeType_c",className:"col-6 col-sm-6 col-lg-4",style:{marginTop:"50px"}},r.createElement("i",{className:"fa fa-3x fa-home"}," "),r.createElement("div",{id:"pfHomeType"},s)),r.createElement("div",{id:"pfSqft_c",className:"col-6 col-sm-6 col-lg-4",style:{marginTop:"50px"}},r.createElement("i",{className:"fa fa-3x fa-building"}," "),r.createElement("div",{id:"pfSqft"},l)),r.createElement("div",{id:"pfYearBuilt_c",className:"col-6 col-sm-6 col-lg-4",style:{marginTop:"50px"}},r.createElement("i",{className:"fa fa-3x fa-calendar-week"}," "),r.createElement("div",{id:"pfYearBuilt"},c)),r.createElement("div",{id:"pfPrice_c",className:"col-6 col-sm-6 col-lg-4",style:{marginTop:"50px"}},r.createElement("i",{className:"fa fa-3x fa-dollar-sign"}," "),r.createElement("div",{id:"pfPrice"},o))))};u.propTypes={priceAndFeatures:c().shape({title1:c().string.isRequired,title2:c().string.isRequired,beds:c().string.isRequired,baths:c().string.isRequired,homeType:c().string.isRequired,sqft:c().string.isRequired,yearBuilt:c().string.isRequired,price:c().string.isRequired}).isRequired};var p=a(6483);let h=({navbarRef:e,imageUrls:t})=>{console.log("IMAGEURLS",t);let[a,n]=(0,r.useState)(),[s,l]=(0,r.useState)();return(0,r.useEffect)(()=>{function t(){let t=function(){let t=window.innerHeight,a=window.innerWidth,r=1.777*(t-e.current.clientHeight-20);return r+30>a&&(r=a-30),r+"px"}();n(parseFloat(t)/1.777+"px"),l(t)}return t(),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[e]),r.createElement("div",{id:"photos",className:"container-fluid",style:{paddingTop:"50px",paddingBottom:"50px"}},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12",style:{textAlign:"center"}},r.createElement("h1",{id:"photosST"},"Photos"))),r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12"},r.createElement(p.Z,{id:"photosCarousel",className:"carousel slide",style:{backgroundColor:"black",maxWidth:"100%",width:s,height:a,margin:"auto"},interval:3e3},t.urls.map((e,t)=>r.createElement(p.Z.Item,{key:t},r.createElement("img",{srcSet:`${i.basePath+e}?width=360 360w, ${i.basePath+e}?width=576 576w, ${i.basePath+e}?width=768 768w, ${i.basePath+e}?width=992 992w, ${i.basePath+e}?width=1200 1200w, ${i.basePath+e}?width=1400 1400w, ${i.basePath+e}?width=1600 1600w, ${i.basePath+e}?width=1920 1920w`,sizes:"(max-width: 600px) 576px, (max-width: 768px) 768px, (max-width: 992px) 992px, (max-width: 1200px) 1200px, (max-width: 1400px) 1400px, (max-width: 1600px) 1600px, (max-width: 1920px) 1920px, 2000px",src:`${i.basePath+e}?width=1920`,className:"d-block",alt:"Property",style:{width:s,height:a}})))))))};h.propTypes={navbarRef:c().shape({current:c().shape({clientHeight:c().number.isRequired})}).isRequired,imageUrls:c().shape({urls:c().arrayOf(c().string).isRequired}).isRequired};let f=({youtubeVideoID:e,navbarRef:t})=>{let[a,i]=(0,r.useState)(),[n,s]=(0,r.useState)();return(0,r.useEffect)(()=>{function e(){let{width:e,height:a}=function(){let e=window.innerHeight,a=window.innerWidth,r=e-t.current.clientHeight-20,i=1.777*r;return i>a&&(r=(i=a)/1.777),{width:i+"px",height:r+"px"}}();s(e),i(a)}return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[t]),r.createElement("div",{id:"video",className:"container-fluid",style:{paddingTop:"50px",paddingBottom:"50px",backgroundColor:"#fafafa"}},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12",style:{textAlign:"center"}},r.createElement("h1",{id:"videoST"},"Video"))),r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12",style:{textAlign:"center"}},r.createElement("iframe",{id:"video2",style:{width:n,height:a,margin:"auto",maxWidth:"100%"},src:`https://www.youtube.com/embed/${e}?rel=0&controls=1&autoplay=0&cc_load_policy=1&modestbranding=1&showinfo=0&playsinline=1&enablejsapi=1&origin=https://ns-blue-weberealty.thrivebrokers.com`,allowFullScreen:!0,title:"Property Video"}))))};f.propTypes={youtubeVideoID:c().string.isRequired,navbarRef:c().object.isRequired};let y=({virtualTour:e,navbarRef:t})=>{let{title:a,matterportID:i}=e,[n,s]=(0,r.useState)();return(0,r.useEffect)(()=>{function e(){let e=t.current.clientHeight;s(window.innerHeight-e-100+"px")}return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[t]),r.createElement("div",{id:"virtual tour",className:"container-fluid",style:{paddingTop:"50px",paddingBottom:"50px"}},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12",style:{textAlign:"center"}},r.createElement("h1",{id:"virtualTourST"},"Virtual Tour"),r.createElement("h4",{id:"vtTitle"},a))),r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12"},r.createElement("object",{id:"vtVideo",style:{width:"100%",height:n},data:`https://my.matterport.com/show/?m=${i}`,"aria-label":"Virtual tour of the property"}))))};y.propTypes={virtualTour:c().shape({title:c().string.isRequired,matterportID:c().string.isRequired}).isRequired,navbarRef:c().object.isRequired};var g=a(3734),E=a(3824),v=a(48),b=a(8486);let w=({content:e,onLinkClick:t})=>((0,r.useEffect)(()=>{let a=new v.Z({html:!0,breaks:!0}).use(b.Z),r=e.replace(/\[([^\]]+)\]\(javascript:openModal\('([^']+)'\)\)/g,(e,t,a)=>`[${t}](${a})`),i=a.render(r),n=e=>{e.preventDefault(),t(e.target.href)},s=document.getElementById("dContent");return s&&(s.innerHTML=i,Array.from(s.getElementsByTagName("a")).forEach(e=>{e.addEventListener("click",n)})),()=>{s&&Array.from(s.getElementsByTagName("a")).forEach(e=>{e.removeEventListener("click",n)})}},[e,t]),r.createElement("div",{id:"description",className:"container-fluid",style:{paddingTop:"50px",paddingBottom:"50px",backgroundColor:"#fafafa"}},r.createElement("div",{className:"row justify-content-center"},r.createElement("div",{className:"col-10",style:{textAlign:"center"}},r.createElement("h1",{id:"descriptionST"}," Description "))),r.createElement("div",{className:"row justify-content-center"},r.createElement("div",{className:"col-10"},r.createElement("div",{id:"dContent"})))));w.propTypes={content:c().string.isRequired,onLinkClick:c().func.isRequired};var x=a(5899);let N=({clickedUrl:e,onCloseModal:t})=>{let a=(0,r.useRef)(document.body);return(0,r.useEffect)(()=>{let e=a.current,t=e.style.overflow;return e.style.overflow="hidden",()=>{e.style.overflow=t}},[]),console.log("Modal clickedUrl:",e),r.createElement(r.Fragment,null,r.createElement("div",{className:"modal fade show",id:"extLinkModal",tabIndex:"-1","aria-labelledby":"modalLabel","aria-hidden":"true",style:{display:"block",paddingRight:"0px"}},r.createElement("div",{className:"modal-dialog modal-dialog-centered",style:{maxWidth:"fit-content",marginLeft:"auto",marginRight:"auto"}},r.createElement("div",{className:"modal-content"},r.createElement("div",{className:"modal-header"},r.createElement("h5",{className:"modal-title",id:"modalLabel",style:{visibility:"hidden"}},"Modal"),r.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:t},r.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.createElement("div",{className:"modal-body"},r.createElement("iframe",{id:"modalIframe",style:{height:"80vh",width:"80vw"},title:"Modal",src:e}))))),r.createElement("div",{className:"modal-backdrop fade show"}))};N.propTypes={clickedUrl:c().string.isRequired,onCloseModal:c().func.isRequired};var R=()=>r.createElement("div",{id:"chatContain"}),T=a(4298),j=a.n(T);let q=({propertyData:e,images:t})=>{let[a,n]=(0,r.useState)(null),[l,c]=(0,r.useState)(!1),p=(0,r.useRef)(null),v=e=>{n(e),c(!0)};if(!e)return r.createElement("div",null,"Loading...");let{priceAndFeatures:b,photos:T,video:q,virtualTour:k,realtor:$,footertext:P,contact:F,description:S}=e;e.home?.youtubeVideoID,e.chatbot?.enable;let _=[],I=e.propertyPageSectionsOrder,C=I?I.map((t,a)=>{switch(t){case"home":return H(e.home,a);case"virtualTour":return B(k,a);case"priceAndFeatures":return A(b,a);case"photos":return D(T,a);case"video":return Z(q,a);case"contact":return M(F,a);case"realtor":return V($,a);case"description":return z(S,a);case"chatbot":return L(e.chatbot,a);default:return null}}):[H(e.home,0),B(k,1),A(b,2),D(T,3),Z(q,4),M(F,5),V($,6),z(S,7),L(e.chatbot,8)];function B(e,t){return e?(_.push("Virtual Tour"),r.createElement(y,{key:`virtualTour_${t}`,virtualTour:e,navbarRef:p})):null}function L(e,t){return r.createElement(R,{key:`chatbot_${t}`})}function H(e,t){return e&&e.youtubeVideoID?(_.push(e.menu),r.createElement(d,{key:`home_${t}`,youtubeVideoID:e.youtubeVideoID,videoStart:e.videoStart,videoEnd:e.videoEnd,menu:e.menu,sectionTitle:e.sectionTitle})):null}function A(e,t){return e?(_.push("Price & Features"),r.createElement(u,{key:`priceAndFeatures_${t}`,priceAndFeatures:e})):null}function D(e,a){return e?(_.push("Photos"),r.createElement(h,{key:`photos_${a}`,imageUrls:{urls:t},navbarRef:p})):null}function Z(e,t){return e?.youtubeVideoID?(_.push("Video"),r.createElement(f,{key:`video_${t}`,youtubeVideoID:e.youtubeVideoID,navbarRef:p})):null}function M(e,t){return e?!1===e.mauticForm.popupForm.enable?(_.push("Contact"),r.createElement(g.Z,{contact:e,key:`contact_${t}`})):r.createElement(x.Z,{contact:e,key:`popupForm_${t}`}):null}function V(e,t){return e?(_.push("Realtor"),r.createElement(E.Z,{key:`realtor_${t}`,realtorData:e})):null}function z(e,t){return e&&e.content?(_.push("Description"),r.createElement(w,{key:`description_${t}`,content:e.content,onLinkClick:v})):null}return r.createElement("div",null,r.createElement(s(),null,r.createElement("title",null,e.title),r.createElement("meta",{charSet:"utf-8"}),r.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),r.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"}),r.createElement("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"}),r.createElement("script",{async:!0,src:"https://accounts.google.com/gsi/client"}),r.createElement("link",{rel:"stylesheet",href:`${i.basePath}/css/chatbot.css`})),r.createElement(j(),{strategy:"beforeInteractive",async:!0,type:"text/javascript",src:`${i.basePath}/js/rb-config.js`}),r.createElement(j(),{strategy:"beforeInteractive",async:!0,type:"text/javascript",src:`${i.basePath}/js/generateUI_v1.js`}),r.createElement(j(),{strategy:"beforeInteractive",async:!0,type:"text/javascript",src:`${i.basePath}/js/ytvideo_v1.js`}),r.createElement(j(),{strategy:"beforeInteractive",async:!0,type:"text/javascript",src:`${i.basePath}/js/logger.js`}),r.createElement(j(),{strategy:"beforeInteractive",async:!0,type:"text/javascript",src:`${i.basePath}/js/jquery-3.5.1.min.js`}),r.createElement(j(),{strategy:"beforeInteractive",async:!0,type:"text/javascript",src:`${i.basePath}/js/jwt-decode.js`}),r.createElement(j(),{strategy:"beforeInteractive",async:!0,type:"text/javascript",src:`${i.basePath}/js/tracker-config.js`}),r.createElement(j(),{strategy:"beforeInteractive",async:!0,type:"text/javascript",src:`${i.basePath}/js/showcase.js`}),r.createElement(j(),{strategy:"beforeInteractive",async:!0,type:"text/javascript",src:`${i.basePath}/js/tracker-util.js`}),r.createElement(j(),{strategy:"beforeInteractive",async:!0,type:"text/javascript",src:`${i.basePath}/js/tracker.js`}),r.createElement(j(),{strategy:"beforeInteractive",async:!0,type:"text/javascript",src:`${i.basePath}/js/showdown-1.9.1.min.js`}),r.createElement(j(),{strategy:"beforeInteractive",async:!0,type:"text/javascript",src:`${i.basePath}/js/inline-script.js`}),r.createElement(j(),{strategy:"beforeInteractive",async:!0,type:"text/javascript",src:`${i.basePath}/js/chatbot.js`}),r.createElement(j(),{strategy:"beforeInteractive",async:!0,type:"text/javascript",src:`${i.basePath}/js/index.js`}),r.createElement(j(),{strategy:"beforeInteractive",async:!0,src:"https://kit.fontawesome.com/c3c47df7d6.js"}),r.createElement(o.Z,{navbar:_,forwardedRef:p}),C,l&&r.createElement(N,{clickedUrl:a,onCloseModal:()=>{c(!1)}}),r.createElement(m.Z,{footerMenu:_,footertext:P}))};q.propTypes={propertyData:c().object.isRequired,images:c().arrayOf(c().string).isRequired};var k=!0,$=q},5222:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[id]",function(){return a(3556)}])}},function(e){e.O(0,[743,723,888,774,179],function(){return e(e.s=5222)}),_N_E=e.O()}]);