(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e334407"],{3835:function(e,t,r){"use strict";function a(e){if(Array.isArray(e))return e}r.d(t,"a",(function(){return c}));r("a4d3"),r("e01a"),r("d28b"),r("e260"),r("d3b7"),r("3ca3"),r("ddb0");function o(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],a=!0,o=!1,n=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done);a=!0)if(r.push(i.value),t&&r.length===t)break}catch(s){o=!0,n=s}finally{try{a||null==c["return"]||c["return"]()}finally{if(o)throw n}}return r}}var n=r("06c5");function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){return a(e)||o(e,t)||Object(n["a"])(e,t)||i()}},"498a":function(e,t,r){"use strict";var a=r("23e7"),o=r("58a8").trim,n=r("c8d2");a({target:"String",proto:!0,forced:n("trim")},{trim:function(){return o(this)}})},c8d2:function(e,t,r){var a=r("d039"),o=r("5899"),n="​᠎";e.exports=function(e){return a((function(){return!!o[e]()||n[e]()!=n||o[e].name!==e}))}},d81d:function(e,t,r){"use strict";var a=r("23e7"),o=r("b727").map,n=r("1dde"),i=r("ae40"),c=n("map"),s=i("map");a({target:"Array",proto:!0,forced:!c||!s},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},f4c1:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"max-width"},[r("BaseHeading",{attrs:{text:e.headingText,classes:e.headingClasses}}),e._l(e.inputs,(function(t){return r("BaseInput",{key:t.label,attrs:{input:t,labelClasses:e.labelClasses}})})),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.checkboxBool,expression:"checkboxBool"}],attrs:{name:e.checkboxText,type:"checkbox"},domProps:{checked:Array.isArray(e.checkboxBool)?e._i(e.checkboxBool,null)>-1:e.checkboxBool},on:{change:function(t){var r=e.checkboxBool,a=t.target,o=!!a.checked;if(Array.isArray(r)){var n=null,i=e._i(r,n);a.checked?i<0&&(e.checkboxBool=r.concat([n])):i>-1&&(e.checkboxBool=r.slice(0,i).concat(r.slice(i+1)))}else e.checkboxBool=o}}}),r("span",[e._v(e._s(e.checkboxText))])]),r("BaseButton",{attrs:{button:e.submitButton,onClick:e.submit}})],2)},o=[],n=(r("d81d"),r("498a"),r("3835")),i=r("5530"),c=r("2f62"),s=r("6e87"),u=r("dc16"),l=r("b3b3"),d=r("82ea"),b={name:"CreateCoursePage",components:{BaseHeading:u["a"],BaseInput:l["a"],BaseButton:d["a"]},computed:Object(i["a"])({},Object(c["c"])(["publicCourses","privateCourses"])),data:function(){return{headingText:"Create Course",headingClasses:"text-align-center",inputs:[{label:"Course Title",type:"text",placeholder:"Course name",value:""},{label:"Course Description",type:"text",placeholder:"Description",tag:"textarea",value:""},{label:"Image url",type:"url",placeholder:"Image Url",value:""}],labelClasses:"label",checkboxBool:!1,checkboxText:"Public",submitButton:{type:"submit",classes:"primary",text:"Submit"}}},methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])({action_update_public_courses:s["d"],action_update_private_courses:s["c"]})),{},{submit:function(){var e=this.checkboxBool;if(e){var t=this.publicCourses.sort((function(e,t){return e.id-t.id}));this.addCourse(t,"public")}else{var r=this.privateCourses.sort((function(e,t){return e.id-t.id}));this.addCourse(r,"private")}},addCourse:function(e,t){var r=e[e.length-1],a=r?r.id+1:1,o=this.inputs.map((function(e){return e.value.trim()})),i=Object(n["a"])(o,3),c=i[0],s=i[1],u=i[2],l=[],d=0;e.push({id:a,title:c,description:s,imageUrl:u,usersEnrolled:d,lectures:l}),"public"===t&&this.action_update_public_courses(e),"private"===t&&this.action_update_private_courses(e),this.$router.push("/")}})},p=b,h=r("2877"),f=Object(h["a"])(p,a,o,!1,null,null,null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-6e334407.bdf2c106.js.map