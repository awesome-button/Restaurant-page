!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),document.addEventListener("DOMContentLoaded",()=>{!function(){const e=document.querySelector(".content"),t=document.createElement("nav");t.setAttribute("class","container"),["Menu","About","Contacts"].forEach(e=>{const n=document.createElement("button");n.innerText=`${e}`,n.setAttribute("class",`${e.toLowerCase()} tab`),t.appendChild(n)}),e.appendChild(t)}();let e=document.querySelector(".content");Array.from(e.firstChild.children).forEach(t=>{t.addEventListener("click",t=>{console.log("clicked"),Array.from(e.children).length>1&&e.removeChild(e.childNodes[1]),e.classList.add("background"),function(e){switch(e.target.className){case"about tab":!function(){let e=document.querySelector(".content"),t=document.createElement("div");t.setAttribute("class","box-about");let n=document.createElement("h1");n.innerText="A bit about us";let a=document.createElement("p");a.setAttribute("class","text-field"),a.innerText="Since 1994, Ristorante Da Angelo has been \n    bringing authentic Italian food to Tomsk.\n    \b\r\n    We offer the menu of tried and true favourites, \n    mainly from the southern regions of Italy, \n    where pizza originated and where pasta is king.\n    In true Italian fashion just about everything \n    is freshly made on the premises.\n    \b\r\n    And if you want to know why the gnocchi, \n    in particular, tastes so exceptional — \n    it’s because Angelo’s and Marco’s mothers, \n    Nicolina and Rita, come in each and every \n    day to make it.\n    ";let r=document.createElement("img");r.setAttribute("src","img/team.jpg"),t.appendChild(n),t.appendChild(a),t.appendChild(r),e.appendChild(t)}();break;case"contacts tab":!function(){let e=document.querySelector(".content"),t=document.createElement("div");t.setAttribute("class","box-contacts");let n=document.createElement("h1");n.innerText="Contact us";let a=document.createElement("p");a.setAttribute("class","text-field"),a.innerText="Our address: Lenina 26, Tomsk\n    Phone number: 8 (923) 465 32 22";let r=document.createElement("img");r.setAttribute("src","img/pizzeria.jpg"),t.appendChild(n),t.appendChild(a),t.appendChild(r),e.appendChild(t)}();break;case"menu tab":!function(){let e=[{Name:"Padana",Ingredients:"Paprika, smoked salami, mozarella, and parmesan",Price:"450 rubles"},{Name:"Piccanta",Ingredients:"Tomato, spicy salami, mozarella, and parsley",Price:"450 rubles"},{Name:"Margerita",Ingredients:"Tomato sauce, mozarella, oregano, and fresh tomatoes",Price:"400 rubles"},{Name:"Carbonara",Ingredients:"Tomato sauce, mozzarella, parmesan, eggs, and bacon",Price:"550 rubles"},{Name:"Bufalina",Ingredients:"Tomato sauce, Buffalo mozzarella, basil, and oregano",Price:"600 rubles"},{Name:"Braccio di Ferro",Ingredients:"Mozzarella, red onions, ricotta cheese, and parmesan",Price:"500 rubles"}],t=document.querySelector(".content"),n=document.createElement("div");n.setAttribute("class","pizzas-flex");let a=document.createElement("h1");a.innerText="Our pizzas",n.appendChild(a);for(let t=0;t<=5;t++){let a=document.createElement("div");a.setAttribute("class","item");let r=document.createElement("h2");r.innerText=e[t].Name,a.appendChild(r);let o=document.createElement("div");o.setAttribute("class","image-container"),o.style.backgroundImage=`url("img/pizza${t+1}.png")`,a.appendChild(o);let i=document.createElement("p");i.innerText=`Ingredients: ${e[t].Ingredients}\nPrice: ${e[t].Price}`,a.appendChild(i),n.appendChild(a)}t.appendChild(n)}()}}(t)})})})}]);