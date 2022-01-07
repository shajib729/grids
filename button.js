// TODO: This is 1st 2 buttons click styles
let buttons = document.querySelectorAll(".styled-button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    e.preventDefault()
    console.log(e.clientY,e.clientX, e.target.offsetTop-window.scrollY, e.target.offsetLeft)
    console.log(e);
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY + window.scrollY - e.target.offsetTop;
    
    let overlay = document.createElement("span");
    overlay.classList.add("overlay");
    overlay.style.left = x + "px";
    overlay.style.top = y + "px";
    e.target.appendChild(overlay);

    setTimeout(() => {
      overlay.remove();
    }, 500);
  });
}

// TODO: This is last button hover styles
let btn = document.querySelector(".hover-button");
btn.addEventListener("mousemove", (e) => {
  btn.style.setProperty("--x", e.clientX - e.target.offsetLeft + "px");
  btn.style.setProperty("--y", e.clientY + window.scrollY - e.target.offsetTop + "px");
});

// TODO: This is for website height in percentige on the top bar
window.onscroll = (e) => {
  let scrollHeight=document.documentElement.scrollHeight // or document.body.scrollHeight
  let clientHeight=document.documentElement.clientHeight // or window.innerHeight
  let scrollTop=document.documentElement.scrollTop // or window.scrollY
  document.querySelector(".loading").style.width = (scrollTop*100)/(scrollHeight-clientHeight) + "%";

  // console.log(scrollTop,window.scrollY, scrollHeight,clientHeight);
  // <!-- kuttar bassssha  hottun -->
};