(this["webpackJsonpreact-webpsite"]=this["webpackJsonpreact-webpsite"]||[]).push([[0],{17:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(2),n=c.n(a),i=c(21),r=c.n(i),o=c(10),l=c(13);c(32),c(46);l.a.initializeApp({apiKey:"AIzaSyCsVMjCqfafT50ntqLd-4F6olSX72WaoyI",authDomain:"library-web-6ed6d.firebaseapp.com",databaseURL:"https://library-web-6ed6d-default-rtdb.firebaseio.com",projectId:"library-web-6ed6d",storageBucket:"library-web-6ed6d.appspot.com",messagingSenderId:"179960351011",appId:"1:179960351011:web:40d881ee607bdb67f12496"});l.a.auth();var j=l.a.firestore(),b=l.a,d=(c(35),function(e){var t=e.email,c=e.setEmail,a=e.password,n=e.setPassword,i=e.handleLogin,r=e.handleSignUp,o=e.hasAccount,l=e.setHasAccount,j=e.emailError,b=e.passwordError;return Object(s.jsx)("section",{className:"login",children:Object(s.jsxs)("div",{className:"loginContainer",children:[Object(s.jsx)("label",{children:"Username"}),Object(s.jsx)("input",{type:"text",autoFocus:!0,required:!0,value:t,onChange:function(e){return c(e.target.value)}}),Object(s.jsx)("p",{className:"errorMsg",children:j}),Object(s.jsx)("label",{children:"Password"}),Object(s.jsx)("input",{type:"password",required:!0,value:a,onChange:function(e){return n(e.target.value)}}),Object(s.jsx)("p",{className:"errorMsg",children:b}),Object(s.jsx)("div",{className:"btnContainer",children:o?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("button",{onClick:i,children:"Sign in"}),Object(s.jsxs)("p",{children:["Don't have an account ? ",Object(s.jsx)("span",{onClick:function(){return l(!o)},children:"Sign up"})]})]}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("button",{onClick:r,children:"Sign up"}),Object(s.jsxs)("p",{children:["Have an account ? ",Object(s.jsx)("span",{onClick:function(){return l(!o)},children:"Sign in"})]})]})})]})})}),h=c(5),u=c.p+"static/media/image_logo.4ecca571.png",O=(c(36),c(37),["btn--primary","btn--outline"]),m=["btn--medium","btn--large"],x=function(e){var t=e.children,c=e.type,a=e.onClick,n=e.buttonStyle,i=e.buttonSize,r=O.includes(n)?n:O[0],o=m.includes(i)?i:m[0];return Object(s.jsx)(h.b,{to:"/sign-up",className:"btn-mobile",children:Object(s.jsx)("button",{className:"btn ".concat(r," ").concat(o),onClick:a,type:c,children:t})})};var f=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(!0),r=Object(o.a)(i,2),l=r[0],j=r[1],b=function(){return n(!1)},d=function(){window.innerWidth<=960?j(!1):j(!0)};return Object(a.useEffect)((function(){d()}),[]),window.addEventListener("resize",d),Object(s.jsx)("div",{children:Object(s.jsx)("nav",{className:"navbar",children:Object(s.jsxs)("div",{className:"navbar-container",children:[Object(s.jsxs)("a",{href:"http://alatoo.edu.kg/",target:"_blank",className:"navbar-logo",onClick:b,children:["AIU",Object(s.jsx)("i",{className:"navbar-brand mr-auto",href:"#",children:Object(s.jsx)("img",{src:u,width:"60",height:"60"})}),Object(s.jsx)("div",{className:"full-name",children:Object(s.jsx)("h5",{children:"Ala-Too InternationL University"})})]}),Object(s.jsx)("div",{className:"menu-icon",onClick:function(){return n(!c)},children:Object(s.jsx)("i",{className:c?"fas fa-times":"fas fa-bars"})}),Object(s.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(h.b,{to:"/",className:"nav-links",onClick:b,children:"Home"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{href:"http://alatoo.edu.kg/view/public/gallery/list.xhtml",target:"_blank",to:"/pictures",className:"nav-links",onClick:b,children:"Pictures"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{href:"http://alatoo.edu.kg/view/public/pages/contacts.xhtml;jsessionid=F3JVR0yuKu5qDmVeGGmmR9s7IXdFLS1A6AkIDYMv.unknown-host",target:"_blank",to:"/contacts",className:"nav-links",onClick:b,children:"Contacts"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(h.b,{to:"/",className:"nav-links-mobile",onClick:b,children:"AIU"})})]}),l&&Object(s.jsx)(x,{buttonStyle:"btn--outline",children:"AIU"})]})})})};c(17),c(42);var p=function(){return Object(s.jsxs)("div",{className:"footer-container",children:[Object(s.jsxs)("section",{className:"footer-subscription",children:[Object(s.jsx)("p",{className:"footer-subscription-heading",children:"Want to get Book Recommendations?"}),Object(s.jsx)("p",{className:"footer-subscription-text",children:"You can unsubscribe anytime."}),Object(s.jsx)("div",{className:"input-areas",children:Object(s.jsxs)("form",{children:[Object(s.jsx)("input",{type:"email",name:"email",placeholder:"Your Email",className:"footer-input"}),Object(s.jsx)(x,{buttonStyle:"btn--outline",children:"Send"})]})})]}),Object(s.jsxs)("div",{className:"footer-links",children:[Object(s.jsxs)("div",{className:"footer-link-wrapper",children:[Object(s.jsxs)("div",{className:"footer-link-items",children:[Object(s.jsx)("h2",{children:"About Us"}),Object(s.jsx)(h.b,{to:"/sign-up",children:"About University"}),Object(s.jsx)(h.b,{to:"/",children:"Faculty"}),Object(s.jsx)(h.b,{to:"/",children:"Admission"}),Object(s.jsx)(h.b,{to:"/",children:"Help"})]}),Object(s.jsxs)("div",{className:"footer-link-items",children:[Object(s.jsx)("h2",{id:"contacts",children:"Contact Us"}),Object(s.jsx)(h.b,{to:"/sign-up",children:"Email"}),Object(s.jsx)(h.b,{to:"/",children:"Call"}),Object(s.jsx)(h.b,{to:"/",children:"Address"})]})]}),Object(s.jsxs)("div",{className:"footer-link-wrapper",children:[Object(s.jsxs)("div",{className:"footer-link-items",children:[Object(s.jsx)("h2",{children:"Videos"}),Object(s.jsx)(h.b,{to:"/sign-up",children:"Our Students"}),Object(s.jsx)(h.b,{to:"/",children:"Campus"}),Object(s.jsx)(h.b,{to:"/",children:"Students' works"}),Object(s.jsx)(h.b,{to:"/",children:"Activities"})]}),Object(s.jsxs)("div",{className:"footer-link-items",children:[Object(s.jsx)("h2",{children:"Social Media"}),Object(s.jsx)(h.b,{to:"/sign-up",children:"Official page"}),Object(s.jsx)(h.b,{to:"/",children:"Facebook"}),Object(s.jsx)(h.b,{to:"/",children:"Instagram"}),Object(s.jsx)(h.b,{to:"/",children:"Twitter"})]})]})]}),Object(s.jsx)("section",{className:"social-media",children:Object(s.jsx)("div",{className:"social-media-wrap",children:Object(s.jsx)("div",{className:"footer-logo",children:Object(s.jsxs)(h.b,{to:"/",className:"social-logo",children:["AIU ",Object(s.jsx)("i",{href:"#",children:Object(s.jsx)("img",{src:u,width:"15",height:"15"})})]})})})}),Object(s.jsxs)("div",{className:"social-icons",children:[Object(s.jsx)("a",{href:"https://web.facebook.com/ALATOOinternationalUniversity1996/?_rdc=1&_rdr",className:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook",children:Object(s.jsx)("i",{className:"fab fa-facebook-f"})}),Object(s.jsx)("a",{href:"https://www.instagram.com/alatoo.edu.kg/?hl=en",className:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram",children:Object(s.jsx)("i",{className:"fab fa-instagram"})}),Object(s.jsx)("a",{href:"https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",className:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter",children:Object(s.jsx)("i",{className:"fab fa-twitter"})}),Object(s.jsx)("a",{href:"https://www.pluralsight.com/guides/how-to-render-%22a%22-with-optional-href-in-react",className:"social-icon-link linkedin",to:"/",target:"_blank","aria-label":"LinkedIn",children:Object(s.jsx)("i",{className:"fab fa-linkedin"})})]}),Object(s.jsx)("small",{className:"website-rights",children:"Ala-Too International University  \xa9 2020"})]})},v=(c(43),c.p+"static/media/Library.1929d5aa.mp4"),g=c(23),k=c(24),w=c(26),N=c(25),y=(c(44),function(e){Object(w.a)(c,e);var t=Object(N.a)(c);function c(){var e;Object(g.a)(this,c);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={books:null},e}return Object(k.a)(c,[{key:"componentDidMount",value:function(){var e=this;console.log("mounted"),j.collection("books").get().then((function(t){var c=[];t.forEach((function(e){var t=e.data();c.push(t)})),e.setState({books:c})})).catch((function(e){return console.log(e)}))}},{key:"reserve",value:function(){alert("Your book has reserved!")}},{key:"tableMethod",value:function(){var e=this;return Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("table",{id:"bookstab",children:[Object(s.jsx)("thead",{className:"thead-dark",children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"ID"}),Object(s.jsx)("th",{children:"Name"}),Object(s.jsx)("th",{children:"First Author"}),Object(s.jsx)("th",{children:"Second Author"}),Object(s.jsx)("th",{children:"Total Amount"}),Object(s.jsx)("th",{children:"Left Amount"}),Object(s.jsx)("th",{children:"Reserve"})]})}),Object(s.jsx)("tbody",{children:this.state.books&&this.state.books.map((function(t){return Object(s.jsxs)("tr",{className:"row",children:[Object(s.jsx)("td",{children:t.bookID},t.bookID),Object(s.jsx)("td",{children:t.bookName}),Object(s.jsx)("td",{children:t.firstAuthor}),Object(s.jsx)("td",{children:t.secondAuthor}),Object(s.jsx)("td",{children:t.totalAmount}),Object(s.jsx)("td",{children:t.leftAmount}),Object(s.jsx)("td",{children:Object(s.jsx)("button",{className:"btn-reserve",onClick:e.reserve,children:"Reserve"})})]})}))})]})})}},{key:"render",value:function(){return Object(s.jsx)("div",{className:"App",children:this.tableMethod()})}}]),c}(n.a.Component));var A=function(){return Object(s.jsxs)("div",{className:"hero-container",children:[Object(s.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,children:Object(s.jsx)("source",{src:v,type:"video/mp4"})}),Object(s.jsx)("h1",{children:"AIU's Library"}),Object(s.jsx)("p",{children:"Book List"}),Object(s.jsx)(y,{})]})};var S=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(A,{}),Object(s.jsx)(p,{})]})};var C=function(e){var t=e.handleLogout;return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(h.a,{children:[Object(s.jsx)("button",{onClick:t,children:"Logout"}),Object(s.jsx)(f,{}),Object(s.jsx)(S,{})]})})},I=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(""),r=Object(o.a)(i,2),l=r[0],j=r[1],h=Object(a.useState)(""),u=Object(o.a)(h,2),O=u[0],m=u[1],x=Object(a.useState)(""),f=Object(o.a)(x,2),p=f[0],v=f[1],g=Object(a.useState)(""),k=Object(o.a)(g,2),w=k[0],N=k[1],y=Object(a.useState)(!1),A=Object(o.a)(y,2),S=A[0],I=A[1],E=function(){v(""),N("")},L=function(){b.auth().onAuthStateChanged((function(e){e?(j(""),m(""),n(e)):n("")}))};return Object(a.useEffect)((function(){L()}),[]),Object(s.jsx)("div",{className:"Login",children:c?Object(s.jsx)(C,{handleLogout:function(){b.auth().signOut()}}):Object(s.jsx)(d,{email:l,setEmail:j,password:O,setPassword:m,handleLogin:function(){E(),b.auth().signInWithEmailAndPassword(l,O).catch((function(e){switch(e.code){case"auth/invalid-email":case"auth/user-disabled":case"auth/user-not-found":v(e.message);break;case"auth/wrong-password":N(e.message)}}))},handleSignUp:function(){E(),b.auth().createUserWithEmailAndPassword(l,O).catch((function(e){switch(e.code){case"auth/email-already-in-use":case"auth/invalid-email":v(e.message);break;case"auth/weak-password":N(e.message)}}))},hasAccount:S,setHasAccount:I,emailError:p,passwordError:w})})};r.a.render(Object(s.jsx)(I,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.eb1b7adb.chunk.js.map