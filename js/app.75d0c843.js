(function(e){function t(t){for(var r,o,a=t[0],c=t[1],i=t[2],l=0,p=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(u,o)&&u[o]&&p.push(u[o][0]),u[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==u[c]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},u={app:0},s=[];function o(e){return a.p+"video-tutorials-live/js/"+({}[e]||e)+"."+{"chunk-192ba700":"813b509f","chunk-2d7aeeb4":"2d09539a","chunk-2dc2e955":"7587acb3","chunk-2e5dbfb6":"a3c83225","chunk-61f7fc48":"ee24ec1b","chunk-63db4be0":"2ccbe22f","chunk-6e334407":"bdf2c106"}[e]+".js"}function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=u[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=u[e]=[t,r]}));t.push(n[2]=r);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=o(e);var i=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=u[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",i.name="ChunkLoadError",i.type=r,i.request=s,n[1](i)}u[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=i;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("BaseNavBar",{attrs:{text:e.navBarHeader,routes:e.navBarRoutes}}),n("div",{staticClass:"page-content"},[n("router-view")],1),n("BaseFooter",{attrs:{text:e.footerText,link:e.footerLink}})],1)},s=[],o=(n("b64b"),n("5530")),a=n("2f62"),c=n("6e87"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-bar"},[n("div",[e._v(e._s(e.text))]),n("div",{staticClass:"nav-bar-links-holder"},e._l(e.routes,(function(t){return n("router-link",{key:t.text,staticClass:"nav-bar-link",attrs:{to:t.to},nativeOn:{click:function(e){t.onClick&&t.onClick()}}},[e._v(e._s(t.text))])})),1)])},l=[],d={name:"BaseNavBar",props:{text:{type:String,required:!0},routes:{type:Array,required:!0}}},p=d,m=n("2877"),b=Object(m["a"])(p,i,l,!1,null,null,null),h=b.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer max-width"},[e._v(e._s(e.text)),n("a",{staticClass:"fotter-link"},[e._v(e._s(e.link))])])},v=[],C={name:"BaseFooter",props:{text:{type:String,required:!0},link:{type:String,required:!0}}},g=C,y=Object(m["a"])(g,f,v,!1,null,null,null),x=y.exports,k={name:"App",components:{BaseNavBar:h,BaseFooter:x},computed:Object(o["a"])(Object(o["a"])({},Object(a["d"])({current_user:function(e){return e.current_user}})),{},{navBarRoutes:function(){var e=0===Object.keys(this.current_user).length;return e?[{text:"Home",to:"/"},{text:"Login",to:"/login"},{text:"Register",to:"/register"}]:[{text:"Home",to:"/"},{text:"Welcome, ".concat(this.current_user.username),to:"/"},{text:"Logout",to:"/",onClick:this.logout}]}}),data:function(){return{navBarHeader:"Video Tutorials",footerText:"© 2019 ",footerLink:"Express Fundamentals"}},methods:Object(o["a"])(Object(o["a"])({},Object(a["b"])({action_current_user:c["a"]})),{},{logout:function(){this.action_current_user({})}})},B=k,O=(n("cf25"),Object(m["a"])(B,u,s,!1,null,null,null)),w=O.exports,S=(n("d3b7"),n("8c4f")),j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.current_user.access?e._e():n("DefaultHomePage"),"user"===e.current_user.access?n("UserHomePage"):e._e(),"admin"===e.current_user.access?n("AdminHomePage"):e._e()],1)},_=[],A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("HomePageHeader",{attrs:{header:e.headerText,info:e.headerInfo}}),n("BaseHeading",{attrs:{text:e.contentHeaderText,classes:e.headingClasses}}),n("div",{staticClass:"content max-width"},e._l(e.topThreePublicCourses,(function(e){return n("BaseCourseWindow",{key:e.id,attrs:{course:e}})})),1)],1)},N=[],U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home-page-header-holder"},[n("h1",{staticClass:"home-page-header"},[e._v(e._s(e.header))]),n("h4",{staticClass:"home-page-header"},[e._v(e._s(e.info))])])},L=[],E={name:"HomePageHeader",props:{header:{type:String,required:!0},info:{type:String,required:!0}}},P=E,H=Object(m["a"])(P,U,L,!1,null,null,null),T=H.exports,q=n("dc16"),I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"courses-holder"},[n("div",{staticClass:"course-holder"},[n("img",{staticClass:"course-image",attrs:{src:e.course.imageUrl,alt:"course-image"}}),n("div",{staticClass:"course-info"},[n("div",[e._v(e._s(e.course.title))]),n("div",[e._v(e._s(e.course.description))])])]),e.button?n("div",{staticClass:"course-button-holder course-holder-margin"},[n("BaseButton",{attrs:{button:e.button,onClick:e.onClick,argument:e.course.id}})],1):e._e()])},R=[],W=n("82ea"),J={name:"BaseCourseWindow",components:{BaseButton:W["a"]},props:{course:{type:Object,required:!0},button:{type:Object},onClick:{type:Function}}},z=J,D=Object(m["a"])(z,I,R,!1,null,null,null),V=D.exports,Z={name:"HomePage",components:{HomePageHeader:T,BaseHeading:q["a"],BaseCourseWindow:V},computed:Object(o["a"])({},Object(a["c"])(["topThreePublicCourses"])),data:function(){return{headingClasses:"text-align-center",headerText:"Video Tutorials",headerInfo:"Start Self-Study Today: It'll Change Your Life",contentHeaderText:"Top Courses"}}},M=Z,G=Object(m["a"])(M,A,N,!1,null,null,null),X=G.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"max-width"},[n("BaseHeading",{attrs:{text:e.contentHeaderText,classes:e.headingClasses}}),n("CoursesSearch",{attrs:{input:e.input,button:e.searchButton,onClick:e.coursesSearch}}),n("div",{staticClass:"content"},e._l(e.courses,(function(t){return n("BaseCourseWindow",{key:t.id,attrs:{course:t,button:e.coursesButton,onClick:e.showCourse}})})),1)],1)},Y=[],Q=(n("4de4"),n("4d63"),n("ac1f"),n("25f0"),n("2909")),K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-holder"},[n("BaseInput",{attrs:{input:e.input,button:e.button,onClick:e.onClick}})],1)},$=[],ee=n("b3b3"),te={name:"CoursesSearch",components:{BaseInput:ee["a"]},props:{input:{type:Object,required:!0},button:{type:Object,required:!0},onClick:{type:Function,required:!0}}},ne=te,re=Object(m["a"])(ne,K,$,!1,null,null,null),ue=re.exports,se={name:"HomePage",components:{CoursesSearch:ue,BaseHeading:q["a"],BaseCourseWindow:V},computed:Object(o["a"])({},Object(a["d"])({public_courses:function(e){return e.public_courses}})),data:function(){return{headingClasses:"text-align-center",contentHeaderText:"Courses",courses:[],coursesButton:{type:"button",text:"Details"},input:{label:"Search: ",type:"text",placeholder:"",value:""},searchButton:{type:"button",classes:"primary",text:"Search"}}},methods:{coursesSearch:function(){var e=new RegExp(this.input.value,"gi");this.courses=this.public_courses.filter((function(t){return e.test(t.title)}))},showCourse:function(e){this.$router.push("/course-details/".concat(e))}},mounted:function(){this.courses=Object(Q["a"])(this.public_courses)}},oe=se,ae=Object(m["a"])(oe,F,Y,!1,null,null,null),ce=ae.exports,ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"max-width"},[n("BaseButton",{attrs:{button:e.createCourseButton,onClick:e.createCourse}}),n("BaseHeading",{attrs:{text:e.headingText,classes:e.headingClasses}}),e.haveCourses?n("div",{staticClass:"admin-courses-holder"},e._l(e.public_courses,(function(t){return n("Course",{key:t.id,attrs:{course:t,editCourseButton:e.editCourseButton,editCourse:e.editCourse,addLectureButton:e.addLectureButton,addLecture:e.addLecture,lecturesInCourse:e.lecturesInCourse,lecturesCount:t.lectures.length}})})),1):e._e()],1)},le=[],de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"admin-course-holder"},[n("div",{staticClass:"admin-course-title"},[e._v(e._s(e.course.title))]),n("div",{staticClass:"admin-course-buttons-info-holder"},[n("div",{staticClass:"admin-course-buttons-holder"},[n("BaseButton",{attrs:{button:e.editCourseButton,onClick:e.editCourse,argument:e.course}}),n("BaseButton",{attrs:{button:e.addLectureButton,onClick:e.addLecture,argument:e.course}})],1),n("span",{staticClass:"lectures-in-course"},[e._v(e._s(e.lecturesInCourse))]),n("span",{staticClass:"lectures-count primary"},[e._v(e._s(e.lecturesCount))])])])},pe=[],me=(n("a9e3"),{name:"Course",props:{course:{type:Object,required:!0},editCourseButton:{type:Object,required:!0},editCourse:{type:Function,required:!0},addLectureButton:{type:Object,required:!0},addLecture:{type:Function,required:!0},lecturesInCourse:{type:String,required:!0},lecturesCount:{type:Number,required:!0}},components:{BaseButton:W["a"]}}),be=me,he=Object(m["a"])(be,de,pe,!1,null,null,null),fe=he.exports,ve={name:"HomePage",components:{BaseHeading:q["a"],BaseButton:W["a"],Course:fe},computed:Object(o["a"])(Object(o["a"])({},Object(a["d"])({public_courses:function(e){return e.public_courses}})),{},{haveCourses:function(){return this.public_courses.length>0},headingText:function(){return this.haveCourses?"Choose Course":"No courses in database. Please create one!"}}),data:function(){return{headingClasses:"text-align-center",createCourseButton:{type:"button",classes:"primary",text:"Create Course"},editCourseButton:{type:"button",classes:"warning",text:"Edit Course"},addLectureButton:{type:"button",classes:"success",text:"Add lecture"},lecturesInCourse:"Lectures in course"}},methods:{createCourse:function(){this.$router.push({name:"CreateCourse"})},editCourse:function(e){this.$router.push({name:"EditCourse",params:e})},addLecture:function(e){this.$router.push({name:"LecturePanel",params:e})}}},Ce=ve,ge=Object(m["a"])(Ce,ie,le,!1,null,null,null),ye=ge.exports,xe={name:"HomePage",components:{DefaultHomePage:X,UserHomePage:ce,AdminHomePage:ye},computed:Object(o["a"])({},Object(a["d"])({current_user:function(e){return e.current_user}}))},ke=xe,Be=Object(m["a"])(ke,j,_,!1,null,null,null),Oe=Be.exports;r["a"].use(S["a"]);var we,Se,je=[{path:"/",name:"Home",component:Oe},{path:"/login",name:"Login",component:function(){return n.e("chunk-63db4be0").then(n.bind(null,"10c3"))}},{path:"/register",name:"Register",component:function(){return n.e("chunk-61f7fc48").then(n.bind(null,"6d4e"))}},{path:"/course-details/:id",name:"CourseDetailsPage",component:function(){return n.e("chunk-2e5dbfb6").then(n.bind(null,"cc25"))},meta:{requiresAccess:"user"},children:[{path:"id",name:"CourseDetails",component:function(){return n.e("chunk-192ba700").then(n.bind(null,"2f92"))}}]},{path:"/create-course",name:"CreateCourse",meta:{requiresAccess:"admin"},component:function(){return n.e("chunk-6e334407").then(n.bind(null,"f4c1"))}},{path:"/edit-course",name:"EditCourse",meta:{requiresAccess:"admin"},component:function(){return n.e("chunk-2d7aeeb4").then(n.bind(null,"b7c7"))}},{path:"/lecture-panel",name:"LecturePanel",meta:{requiresAccess:"admin"},component:function(){return n.e("chunk-2dc2e955").then(n.bind(null,"de1a"))}}],_e=new S["a"]({mode:"history",base:"/",routes:je}),Ae=_e,Ne=(n("fb6a"),n("ade3")),Ue=n("0e44");r["a"].use(a["a"]);var Le=new a["a"].Store({plugins:[Object(Ue["a"])()],state:{public_courses:[{id:1,imageUrl:"https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg",title:"React",description:"Lorem Ipsum",usersEnrolled:2,lectures:[{id:1,name:"Introduction",videoLink:"https://www.youtube.com/embed/OxIDLw0M-m0"},{id:2,name:"How React Works",videoLink:"https://www.youtube.com/embed/pKYiKbf7sP0"},{id:3,name:"React Setup (with CDN)",videoLink:"https://www.youtube.com/embed/SAX6RMEFVM4"}]},{id:4,imageUrl:"data:image/png;base64,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",title:"Angular",description:"Lorem Ipsum",usersEnrolled:1,lectures:[{id:1,name:"Introduction",videoLink:"https://www.youtube.com/embed/0eWrpsCLMJQ"},{id:2,name:"Getting Started",videoLink:"https://www.youtube.com/embed/FVPGJHinItI"}]},{id:3,imageUrl:"https://i.pinimg.com/originals/25/9b/ee/259beeb9275f3ea219cf5fef37a2766a.png",title:"Symfony",description:"Lorem Ipsum",usersEnrolled:0,lectures:[{id:1,name:"Before you watch the series",videoLink:"https://www.youtube.com/embed/l5QLodEL1jo"}]},{id:5,imageUrl:"https://5.imimg.com/data5/CO/RG/WK/GLADMIN-14526645/selection-036-500x500.png",title:"Spring MVC",description:"Lorem Ipsum",usersEnrolled:0,lectures:[{id:1,name:"introduction",videoLink:"https://www.youtube.com/embed/zCHrZdJODg4"}]},{id:2,imageUrl:"https://geeks.ms/clanderas/wp-content/uploads/sites/275/2016/10/asp_net.png",title:"ASP .NET",description:"Lorem Ipsum",usersEnrolled:0,lectures:[{id:1,name:"Core Tutorial",videoLink:"https://www.youtube.com/embed/4IgC2Q5-yDE"}]},{id:6,imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUuln1g--PI8ji-vEw8qXV4Gm22bJw_oNogMFHad3DHYiLKSOy&usqp=CAU",title:"Express",description:"Lorem Ipsum",usersEnrolled:3,lectures:[{id:1,name:"Intro & Environment",videoLink:"https://www.youtube.com/embed/k_0ZzvHbNBQ"}]}],private_courses:[],users:[{username:"Admin",password:"a",access:"admin"}],current_user:{}},mutations:(we={},Object(Ne["a"])(we,c["h"],(function(e,t){e.public_courses=t})),Object(Ne["a"])(we,c["g"],(function(e,t){e.private_courses=t})),Object(Ne["a"])(we,c["f"],(function(e,t){e.users=t})),Object(Ne["a"])(we,c["e"],(function(e,t){e.current_user=t})),we),actions:(Se={},Object(Ne["a"])(Se,c["d"],(function(e,t){var n=e.commit;n(c["h"],t)})),Object(Ne["a"])(Se,c["c"],(function(e,t){var n=e.commit;n(c["g"],t)})),Object(Ne["a"])(Se,c["b"],(function(e,t){var n=e.commit;n(c["f"],t)})),Object(Ne["a"])(Se,c["a"],(function(e,t){var n=e.commit;n(c["e"],t)})),Se),getters:{publicCourses:function(e){return e.public_courses},privateCourses:function(e){return e.private_courses},users:function(e){return e.users},currentUser:function(e){return e.current_user},topThreePublicCourses:function(e){return e.public_courses.sort((function(e,t){return t.usersEnrolled-e.usersEnrolled})).slice(0,3)},haveCourses:function(e){return e.public_courses.length>0}}});r["a"].config.productionTip=!1,Ae.beforeEach((function(e,t,n){var r=e.meta.requiresAccess,u=Le.state.current_user.access;r?r===u?n():n({name:"Login"}):n()})),new r["a"]({router:Ae,store:Le,render:function(e){return e(w)}}).$mount("#app")},"6e87":function(e,t,n){"use strict";n.d(t,"h",(function(){return r})),n.d(t,"g",(function(){return u})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l}));var r="store/UPDATE_PUBLIC_COURSES",u="store/UPDATE_PRIVATE_COURSES",s="store/SAVE_USERS",o="store/CURRENT_USER",a="store/ACTION_UPDATE_PUBLIC_COURSES",c="store/ACTION_UPDATE_PRIVATE_COURSES",i="store/ACTION_SAVE_USERS",l="store/ACTION_CURRENT_USER"},"82ea":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"btn",class:e.button.classes,attrs:{type:e.button.type},on:{click:function(t){return e.onClick(e.argument,e.courseId)}}},[e._v(e._s(e.button.text))])},u=[],s=(n("a9e3"),{name:"BaseButton",props:{button:{type:Object,required:!0},onClick:{type:Function,required:!0},argument:{type:[Number,Object]},courseId:{type:Number}}}),o=s,a=n("2877"),c=Object(a["a"])(o,r,u,!1,null,null,null);t["a"]=c.exports},b3b3:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",{class:e.labelClasses},[e._v(e._s(e.input.label))]),"textarea"===e.input.tag?n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.input.value,expression:"input.value"}],attrs:{placeholder:e.input.placeholder,name:"",id:"",cols:"30",rows:"3"},domProps:{value:e.input.value},on:{input:function(t){t.target.composing||e.$set(e.input,"value",t.target.value)}}}):"checkbox"===e.input.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.value,expression:"input.value"}],attrs:{placeholder:e.input.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(e.input.value)?e._i(e.input.value,null)>-1:e.input.value},on:{change:function(t){var n=e.input.value,r=t.target,u=!!r.checked;if(Array.isArray(n)){var s=null,o=e._i(n,s);r.checked?o<0&&e.$set(e.input,"value",n.concat([s])):o>-1&&e.$set(e.input,"value",n.slice(0,o).concat(n.slice(o+1)))}else e.$set(e.input,"value",u)}}}):"radio"===e.input.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.value,expression:"input.value"}],attrs:{placeholder:e.input.placeholder,type:"radio"},domProps:{checked:e._q(e.input.value,null)},on:{change:function(t){return e.$set(e.input,"value",null)}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.value,expression:"input.value"}],attrs:{placeholder:e.input.placeholder,type:e.input.type},domProps:{value:e.input.value},on:{input:function(t){t.target.composing||e.$set(e.input,"value",t.target.value)}}}),e.button&&e.onClick?n("BaseButton",{attrs:{button:e.button,onClick:e.onClick}}):e._e()],1)},u=[],s=n("82ea"),o={name:"BaseInput",components:{BaseButton:s["a"]},props:{input:{type:Object,required:!0},labelClasses:{type:String},button:{type:Object},onClick:{type:Function}}},a=o,c=n("2877"),i=Object(c["a"])(a,r,u,!1,null,null,null);t["a"]=i.exports},cf25:function(e,t,n){"use strict";var r=n("fea6"),u=n.n(r);u.a},dc16:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"max-width"},[n("h1",{class:e.classes},[e._v(e._s(e.text))])])},u=[],s={name:"BaseHeading",props:{text:{type:String,required:!0},classes:{type:String,required:!0}}},o=s,a=n("2877"),c=Object(a["a"])(o,r,u,!1,null,null,null);t["a"]=c.exports},fea6:function(e,t,n){}});
//# sourceMappingURL=app.75d0c843.js.map