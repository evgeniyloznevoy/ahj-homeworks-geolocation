!function(){"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),function(){var t;e.g.importScripts&&(t=e.g.location+"");var s=e.g.document;if(!t&&s&&(s.currentScript&&(t=s.currentScript.src),!t)){var i=s.getElementsByTagName("script");i.length&&(t=i[i.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t}();class t{constructor(e,t){this.position=e,this.el=t,this.date=(new Date).toString().slice(3,21)}createMessage(e,t){e.innerHTML="",t.forEach((t=>{const s=document.createElement("div");s.classList.add("message"),s.innerHTML=`\n        <span class='message-date'>${t.date}</span>\n        <div class='message-content'></div> \n        <span class='message-position'>${t.position}</span>\n        `,e.insertAdjacentElement("afterbegin",s),s.querySelector(".message-content").appendChild(t.el)}))}}class s{constructor(){this.modalContainer=document.querySelector(".modal-container"),this.modalForm=document.querySelector(".modal-form"),this.modalInput=document.querySelector(".modal-input"),this.resetBtn=document.querySelector(".reset-btn")}init(e,s,i,n,a){this.modalForm.addEventListener("submit",(e=>{if(e.preventDefault(),this.modalInput.value)if(this.value=this.checkValidity(this.modalInput.value),this.value){this.value=this.value[0].split(",");const e=this.value[0].trim(),s=this.value[1].trim(),o=new t(`${e}, ${s}`,a);n.push(o),o.createMessage(i,n),document.querySelector(".message-form").reset(),this.resetModal()}else{const e=document.createElement("div");e.classList.add("invalid"),e.innerHTML="<p class='error text'>Введите корректные координаты</p>",this.modalContainer.appendChild(e),this.modalInput.addEventListener("input",(()=>{e.remove()}))}})),this.resetBtn.addEventListener("click",(e=>{this.resetModal(e)}))}resetModal(){this.modalForm.reset(),this.modalContainer.classList.add("hidden")}checkValidity(e){return e.match(/(-*\d+\.\d+),\s*(-*\d+\.\d+)/gm)}}(new class{constructor(){this.chatContainer=document.querySelector(".chat-container"),this.chat=document.querySelector(".chat"),this.messageForm=document.querySelector(".message-form"),this.messageInput=document.querySelector(".message-input"),this.modalContainer=document.querySelector(".modal-container"),this.messages=[]}init(){this.messageForm.addEventListener("submit",(e=>this.sendMessage(e)))}sendMessage(e){if(e.preventDefault(),this.messageInput.value){const e=document.createElement("p");e.classList.add("message-text"),e.textContent=this.messageInput.value,this.getGeolocation(e)}}getGeolocation(e){navigator.geolocation&&navigator.geolocation.getCurrentPosition((s=>{const{latitude:i,longitude:n}=s.coords,a=`${i.toFixed(5)}, ${n.toFixed(5)}`,o=new t(a,e);this.messages.push(o),o.createMessage(this.chat,this.messages,e),this.messageInput.closest(".message-form").reset()}),(t=>{console.log(t),this.modalContainer.classList.remove("hidden"),(new s).init(this.modalForm,this.messageInput,this.chat,this.messages,e)}))}}).init(),e.p,e.p}();