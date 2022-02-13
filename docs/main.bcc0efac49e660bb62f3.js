(()=>{"use strict";var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};function e(t,e){for(var n,o=0;o<e.length;o++)(n=e[o]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}t.d({},{L:()=>p});var n=function(){function t(e){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.tarea=e,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date}return function(t,n,o){n&&e(t.prototype,n),o&&e(t,o),Object.defineProperty(t,"prototype",{writable:!1})}(t,[{key:"imprimirClase",value:function(){console.log("".concat(this.tarea," - ").concat(this.id))}}],[{key:"fromJSON",value:function(e){var n=e.tarea,o=e.id,r=e.completado,a=e.creado,i=new t(n);return i.id=o,i.completado=r,i.creado=a,i}}]),t}();function o(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){c=!0,t},f:function t(){try{i||null==n.return||n.return()}finally{if(c)throw t}}}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}function a(t,e){for(var n,o=0;o<e.length;o++)(n=e[o]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}var i=function(){function t(){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.cargarLocalStorage()}return function(t,e,n){e&&a(t.prototype,e),n&&a(t,n),Object.defineProperty(t,"prototype",{writable:!1})}(t,[{key:"nuevoTodo",value:function(t){this.todos.push(t),this.guardarLocalStorage(),this.cantidadPendientes()}},{key:"eliminarTodo",value:function(t){this.todos=this.todos.filter((function(e){return e.id!==t})),this.guardarLocalStorage(),this.cantidadPendientes()}},{key:"estadoTodo",value:function(t){var e,n=o(this.todos);try{for(n.s();!(e=n.n()).done;){var r=e.value;if(r.id===t){r.completado=!r.completado;break}}}catch(t){n.e(t)}finally{n.f()}this.guardarLocalStorage(),this.cantidadPendientes()}},{key:"eliminarCompletados",value:function(){this.todos=this.todos.filter((function(t){return!t.completado})),this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorage",value:function(){this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[],this.todos=this.todos.map((function(t){return n.fromJSON(t)}))}},{key:"cantidadPendientes",value:function(){return this.todos.filter((function(t){return!t.completado})).length}}]),t}();function c(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a=!0,i=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){i=!0,t},f:function t(){try{a||null==n.return||n.return()}finally{if(i)throw t}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}var d=document.querySelector(".todo-list"),u=document.querySelector(".new-todo"),s=document.querySelector(".clear-completed"),f=document.querySelector(".filters"),m=document.querySelectorAll(".filtro"),h=document.querySelector(".todo-count"),v=function(t){var e='\n    <li class="'.concat(t.completado?"completed":"",'" data-id="').concat(t.id,'">\n        <div class="view">\n            <input class="toggle" type="checkbox" ').concat(t.completado?"checked":""," />\n            <label>").concat(t.tarea,'</label>\n            <button class="destroy"></button>\n        </div>\n        <input class="edit" value="Create a TodoMVC template" />\n    </li>'),n=document.createElement("div");return n.innerHTML=e,d.append(n.firstElementChild),y(),n.firstElementChild},y=function(){var t=p.cantidadPendientes();h.children[0].innerHTML=t};u.addEventListener("keyup",(function(t){if(13===t.keyCode&&0<u.value.length){var e=new n(u.value);p.nuevoTodo(e),v(e),u.value="",y()}})),d.addEventListener("click",(function(t){var e=t.target.localName,n=t.target.parentElement.parentElement,o=parseInt(n.getAttribute("data-id"));e.includes("input")?(p.estadoTodo(o),n.classList.toggle("completed"),y()):e.includes("button")&&(p.eliminarTodo(o),d.removeChild(n),y())})),s.addEventListener("click",(function(){p.eliminarCompletados();for(var t,e=d.children.length-1;0<=e;e--)(t=d.children[e]).classList.contains("completed")&&d.removeChild(t);y()})),f.addEventListener("click",(function(t){var e=t.target.text;if(e){m.forEach((function(t){return t.classList.remove("selected")})),t.target.classList.add("selected");var n,o=c(d.children);try{for(o.s();!(n=o.n()).done;){var r=n.value;r.classList.remove("hidden");var a=r.classList.contains("completed");"Pendientes"===e?a&&r.classList.add("hidden"):"Completados"===e&&(a||r.classList.add("hidden"))}}catch(t){o.e(t)}finally{o.f()}}}));var p=new i;p.todos.forEach(v)})();