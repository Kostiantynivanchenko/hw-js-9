import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const a={email:"",message:""},t=document.querySelector(".feedback-form");if(localStorage.getItem("feedback-form-state")){const e=JSON.parse(localStorage.getItem("feedback-form-state"));t.elements.email.value=e.email,t.elements.message.value=e.message,a.email=e.email,a.message=e.message}const m=e=>{e.preventDefault(),a.email=e.currentTarget.elements.email.value.trim(),a.message=e.currentTarget.elements.message.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(a))};t.addEventListener("input",m);const l=e=>{e.preventDefault();const s=JSON.parse(localStorage.getItem("feedback-form-state")||"{}");!s.email||!s.message?alert("You need to fill all the fields"):(console.log(a),localStorage.removeItem("feedback-form-state"),a.email="",a.message="",t.elements.email.value="",t.elements.message.value="")};t.addEventListener("submit",l);
//# sourceMappingURL=2-form.js.map
