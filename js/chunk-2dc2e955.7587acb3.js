(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2dc2e955"],{3835:function(e,t,r){"use strict";function n(e){if(Array.isArray(e))return e}r.d(t,"a",(function(){return s}));r("a4d3"),r("e01a"),r("d28b"),r("e260"),r("d3b7"),r("3ca3"),r("ddb0");function u(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,u=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done);n=!0)if(r.push(a.value),t&&r.length===t)break}catch(c){u=!0,i=c}finally{try{n||null==s["return"]||s["return"]()}finally{if(u)throw i}}return r}}var i=r("06c5");function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){return n(e)||u(e,t)||Object(i["a"])(e,t)||a()}},"498a":function(e,t,r){"use strict";var n=r("23e7"),u=r("58a8").trim,i=r("c8d2");n({target:"String",proto:!0,forced:i("trim")},{trim:function(){return u(this)}})},"7db0":function(e,t,r){"use strict";var n=r("23e7"),u=r("b727").find,i=r("44d2"),a=r("ae40"),s="find",c=!0,o=a(s);s in[]&&Array(1)[s]((function(){c=!1})),n({target:"Array",proto:!0,forced:c||!o},{find:function(e){return u(this,e,arguments.length>1?arguments[1]:void 0)}}),i(s)},a434:function(e,t,r){"use strict";var n=r("23e7"),u=r("23cb"),i=r("a691"),a=r("50c4"),s=r("7b0b"),c=r("65f0"),o=r("8418"),l=r("1dde"),d=r("ae40"),f=l("splice"),b=d("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,h=Math.min,m=9007199254740991,y="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!f||!b},{splice:function(e,t){var r,n,l,d,f,b,v=s(this),g=a(v.length),C=u(e,g),x=arguments.length;if(0===x?r=n=0:1===x?(r=0,n=g-C):(r=x-2,n=h(p(i(t),0),g-C)),g+r-n>m)throw TypeError(y);for(l=c(v,n),d=0;d<n;d++)f=C+d,f in v&&o(l,d,v[f]);if(l.length=n,r<n){for(d=C;d<g-n;d++)f=d+n,b=d+r,f in v?v[b]=v[f]:delete v[b];for(d=g;d>g-n+r;d--)delete v[d-1]}else if(r>n)for(d=g-n;d>C;d--)f=d+n-1,b=d+r-1,f in v?v[b]=v[f]:delete v[b];for(d=0;d<r;d++)v[d+C]=arguments[d+2];return v.length=g-n+r,l}})},b40b:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"lecture-holder"},[r("h6",{staticClass:"lecture-name"},[e._v(e._s(e.lecture.name))]),r("BaseButton",{attrs:{button:e.button,onClick:e.onClick,argument:e.lecture.id,courseId:e.course?e.course.id:0}})],1)},u=[],i=r("82ea"),a={name:"BaseLectureDetails",components:{BaseButton:i["a"]},props:{lecture:{type:Object,required:!0},button:{type:Object,required:!0},onClick:{type:Function,required:!0},course:{type:Object}}},s=a,c=r("2877"),o=Object(c["a"])(s,n,u,!1,null,null,null);t["a"]=o.exports},c8d2:function(e,t,r){var n=r("d039"),u=r("5899"),i="​᠎";e.exports=function(e){return n((function(){return!!u[e]()||i[e]()!=i||u[e].name!==e}))}},c975:function(e,t,r){"use strict";var n=r("23e7"),u=r("4d64").indexOf,i=r("a640"),a=r("ae40"),s=[].indexOf,c=!!s&&1/[1].indexOf(1,-0)<0,o=i("indexOf"),l=a("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:c||!o||!l},{indexOf:function(e){return c?s.apply(this,arguments)||0:u(this,e,arguments.length>1?arguments[1]:void 0)}})},d81d:function(e,t,r){"use strict";var n=r("23e7"),u=r("b727").map,i=r("1dde"),a=r("ae40"),s=i("map"),c=a("map");n({target:"Array",proto:!0,forced:!s||!c},{map:function(e){return u(this,e,arguments.length>1?arguments[1]:void 0)}})},de1a:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"max-width"},[r("BaseHeading",{attrs:{text:e.headingText,classes:e.headingClasses}}),e._l(e.inputs,(function(t){return r("BaseInput",{key:t.label,attrs:{input:t,labelClasses:e.labelClasses}})})),r("BaseButton",{attrs:{button:e.submitButton,onClick:e.submit,argument:e.course.id}}),r("h2",[e._v(e._s(e.lecturesInCourseText))]),e._l(e.lectures,(function(t){return r("BaseLectureDetails",{key:t.id,attrs:{lecture:t,button:e.playButton,onClick:e.deleteLecture,course:e.course}})}))],2)},u=[],i=(r("7db0"),r("c975"),r("d81d"),r("a434"),r("498a"),r("3835")),a=r("5530"),s=r("2f62"),c=r("6e87"),o=r("dc16"),l=r("b3b3"),d=r("82ea"),f=r("b40b"),b={name:"LecturePanelPage",components:{BaseHeading:o["a"],BaseInput:l["a"],BaseButton:d["a"],BaseLectureDetails:f["a"]},computed:Object(a["a"])(Object(a["a"])({},Object(s["c"])(["publicCourses"])),{},{course:function(){var e=this.$route.params.id;return this.publicCourses.find((function(t){return t.id===e}))},headingText:function(){return"Add lectures to course ".concat(this.course.title)},lectures:function(){return this.course.lectures},lecturesInCourseText:function(){return"There are ".concat(this.lectures.length," lectures in this course")}}),data:function(){return{headingClasses:"text-align-center",inputs:[{label:"Lecture Title",type:"text",placeholder:"Lecture title",value:""},{label:"Video Url",type:"url",placeholder:"Video Url",value:""}],labelClasses:"label",submitButton:{type:"submit",classes:"primary",text:"Submit"},playButton:{type:"button",classes:"danger align-self-end",text:"Delete"}}},methods:Object(a["a"])(Object(a["a"])({},Object(s["b"])({action_update_public_courses:c["d"]})),{},{submit:function(e){var t=this.publicCourses.find((function(t){return t.id===e})),r=t.lectures,n=r[r.length-1],u=this.inputs.map((function(e){return e.value.trim()})),a=Object(i["a"])(u,2),s=a[0],c=a[1],o=n?n.id+1:1,l={id:o,name:s,videoLink:c};r.push(l),this.action_update_public_courses(this.publicCourses)},deleteLecture:function(e,t){var r=this.publicCourses.find((function(e){return e.id===t})),n=r.lectures.find((function(t){return t.id===e})),u=r.lectures.indexOf(n);r.lectures.splice(u,1),this.action_update_public_courses(this.publicCourses)}})},p=b,h=r("2877"),m=Object(h["a"])(p,n,u,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2dc2e955.7587acb3.js.map