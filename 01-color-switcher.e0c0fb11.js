const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function e(d){a=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;document.body.style.backgroundColor=t}),1e3),e&&t.setAttribute("disabled","disabled")})),e.addEventListener("click",(function e(d){clearInterval(a),e&&t.removeAttribute("disabled")}));let a=0;
//# sourceMappingURL=01-color-switcher.e0c0fb11.js.map
