(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{21:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r,s,a,c,o,i,u,l=n(13),b=n.n(l),j=(n(21),n(4)),d=n(0),h=n.n(d).a.createContext(),p=n(5),O=n(7),f=n(2),x=n(6),m=n.n(x),v=n(3),g=n(9),w=n(1),y=v.a.div(r||(r=Object(f.a)(["\n// width: 10%;\nheight: 100%;\ntext-decoration: underline;\ncursor: pointer;\nfont-size: 1.2rem;\n"]))),S=function(){var e=Object(d.useContext)(h);return Object(w.jsxs)(y,{onClick:function(){e.setIsEmailSent(!1),e.setError(!1),e.setEmailDetails("")},children:[Object(w.jsx)(g.a,{})," Close"]})},E=v.a.div(s||(s=Object(f.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  z-index: 10;\n  background: rgba(0, 0, 0, 0.75);\n\n"]))),k=v.a.div(a||(a=Object(f.a)(["\nposition: fixed;\n  top: 30vh;\n  left: 10%;\n  width: 80%;\n  z-index: 100;\n  overflow: hidden;\n  background-color: grey;\n  border-radius: 10px;\n\n\n"]))),C=v.a.div(c||(c=Object(f.a)(["\ndisplay: flex;\njustify-content: space-between;\nalign0-content: center;\n\n"]))),D=v.a.form(o||(o=Object(f.a)(["\nwidth: 100%;\nheight: 2rem;\ndisplay: flex;\njustify-content: space-between;\n \n"]))),T=v.a.input(i||(i=Object(f.a)(["\nwidth: 20%;\nheight: 100%;\n\n&:focus {\n   border: 2px solid red;\n}\n"]))),I=v.a.button(u||(u=Object(f.a)(["\nwidth: 20%;\nheight: 100%;\n\n&:focus {\n    background-color: blue;\n}\n"])));var R,J,z,N=function(){var e=Object(d.useState)({name:"",phone:"",postcode:""}),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(d.useContext)(h);function a(){return(a=Object(O.a)(m.a.mark((function e(){var t,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={sourceRef:"recruit2022_macanderson",name:n.name,phone:n.phone,postcode:n.postcode},e.prev=1,e.next=4,fetch("https://mailing-list.prototype.mmgrouptech.net/subscribe/".concat(s.emailDetails&&s.emailDetails),{method:"PATCH",body:JSON.stringify(t)});case 4:if(!(r=e.sent).ok){e.next=10;break}s.setIsEmailSent(!0),console.log(r.status),e.next=12;break;case 10:throw s.setError(!0),new Error("There was an error");case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})))).apply(this,arguments)}return Object(w.jsxs)("div",{children:[Object(w.jsx)(E,{}),Object(w.jsxs)(k,{children:[Object(w.jsxs)(C,{children:[Object(w.jsx)("h2",{children:"Thanks for signing up "}),Object(w.jsx)(S,{})]}),Object(w.jsx)("p",{children:"To help us send more relevant information add more details"}),Object(w.jsxs)(D,{onSubmit:function(e){e.preventDefault(),function(){a.apply(this,arguments)}(),r({name:"",phone:"",postcode:""})},children:[Object(w.jsx)(T,{placeholder:"Enter your name",type:"text",onChange:function(e){return r(Object(p.a)(Object(p.a)({},n),{},{name:e.target.value}))},value:n.name}),Object(w.jsx)(T,{placeholder:"Enter your phone number",type:"number",onChange:function(e){return r(Object(p.a)(Object(p.a)({},n),{},{phone:e.target.value}))},value:n.phone}),Object(w.jsx)(T,{placeholder:"Enter your postcode",type:"text",onChange:function(e){return r(Object(p.a)(Object(p.a)({},n),{},{postcode:e.target.value}))},value:n.postcode}),Object(w.jsx)(I,{type:"submit",children:"Submit more details"})]})]})]})},P=v.a.form(R||(R=Object(f.a)(["\nwidth: 100%;\nheight: 2rem;\ndisplay: flex;\njustify-content: space-between;\n"]))),_=v.a.input(J||(J=Object(f.a)(["\nwidth: 70%;\nheight: 100%;\n\n&:focus {\n   border: 2px solid red;\n}\n"]))),A=v.a.button(z||(z=Object(f.a)(["\nwidth: 20%;\nheight: 100%;\n\n&:focus {\n    background-color: grey;\n}\n"])));var B=function(){var e=Object(d.useContext)(h);function t(){return(t=Object(O.a)(m.a.mark((function t(){var n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={sourceRef:"recruit2022_macanderson",email:e.emailDetails},t.prev=1,t.next=4,fetch(" https://mailing-list.prototype.mmgrouptech.net/subscribe",{method:"POST",body:JSON.stringify(n)});case 4:if(200===(r=t.sent).status){t.next=11;break}throw e.setError(!0),e.setResponseStat(r.status),new Error("There was an error");case 11:e.setResponseStat(r.status),e.setIsEmailSent(!0),console.log(r.status);case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(1),console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[1,16]])})))).apply(this,arguments)}return Object(w.jsxs)(P,{onSubmit:function(e){e.preventDefault(),function(){t.apply(this,arguments)}()},children:[Object(w.jsx)(_,{placeholder:"Enter your email address",type:"email",onChange:function(t){e.setEmailDetails(t.currentTarget.value)},value:e.emailDetails}),Object(w.jsx)(A,{type:"submit",children:"Subscribe now"})]})};var G,H=function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)("h2",{children:"Newsletter signup - be the first to find out news about our brands and products "}),Object(w.jsx)("p",{children:"Sign up to recieve offers, news and features about our range of products from G25 Limited."}),Object(w.jsx)(B,{})]})},L=v.a.div(G||(G=Object(f.a)(["\ncolor: white;\n\n"]))),q=function(){var e=Object(d.useContext)(h);return Object(w.jsxs)("div",{children:[Object(w.jsx)(E,{}),Object(w.jsx)(k,{children:Object(w.jsxs)(L,{children:[Object(w.jsx)("h3",{children:"There were an error "}),Object(w.jsxs)("div",{children:[Object(w.jsxs)("p",{children:["The error code is: ",e.responseStat,". This means the email is either already present in the database or isnt present at all"]}),Object(w.jsx)(S,{})]})]})})]})};var F=function(){var e=Object(d.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(d.useState)(!1),a=Object(j.a)(s,2),c=a[0],o=a[1],i=Object(d.useState)(!1),u=Object(j.a)(i,2),l=u[0],b=u[1],p=Object(d.useState)(""),O=Object(j.a)(p,2),f={responseStat:n,setResponseStat:r,isEmailSent:c,setIsEmailSent:o,error:l,setError:b,emailDetails:O[0],setEmailDetails:O[1]};return Object(w.jsx)("div",{children:Object(w.jsxs)(h.Provider,{value:f,children:[Object(w.jsx)(H,{}),c&&Object(w.jsx)(N,{}),l&&Object(w.jsx)(q,{})]})})};b.a.render(Object(w.jsx)(F,{}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.4dd505a0.chunk.js.map