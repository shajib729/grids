let buttons = document.querySelectorAll(".styled-button"); for (let t = 0; t < buttons.length; t++)buttons[t].addEventListener("click", t => { t.preventDefault(), console.log(t.clientY, t.clientX, t.target.offsetTop - window.scrollY, t.target.offsetLeft), console.log(t); let e = t.clientX - t.target.offsetLeft, o = t.clientY + window.scrollY - t.target.offsetTop, l = document.createElement("span"); l.classList.add("overlay"), l.style.left = e + "px", l.style.top = o + "px", t.target.appendChild(l), setTimeout(() => { l.remove() }, 500) }); let btn = document.querySelector(".hover-button"); btn.addEventListener("mousemove", t => { btn.style.setProperty("--x", t.clientX - t.target.offsetLeft + "px"), btn.style.setProperty("--y", t.clientY + window.scrollY - t.target.offsetTop + "px") }), window.onscroll = (t => { let e = document.documentElement.scrollHeight, o = document.documentElement.clientHeight, l = document.documentElement.scrollTop; document.querySelector(".loading").style.width = 100 * l / (e - o) + "%" });


let btnWidth = document.querySelector(".hover-button")
btnWidth.style.setProperty("--hvrBtn", btnWidth.offsetWidth*3 + "px")

console.log(btnWidth.offsetWidth);