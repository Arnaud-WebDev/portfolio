/* Message dans la console */
console.log("%c Hello !", "color: black;" + " background: #32ffce;" + " font-weight: bold;" + "font-size: 12px;" + "border-radius: 10px;" + "font-style: italic;")
console.log("%c Welcome, my little sneaky developer ;)", "color: black;" + " background: #32ffce;" + " font-weight: bold;" + "font-size: 12px;" + "border-radius: 10px;" + "font-style: italic;")

let menu = document.querySelector("#menu-icon")
let navbar = document.querySelector(".navbar")

/* Au click fait apparaitre le menu et change le burger en croix */
menu.addEventListener("click", () => {
  navbar.classList.toggle("active")
  menu.classList.toggle("toggle")
})

/* Retire la barre de navigation au scroll  */
window.addEventListener("scroll", () => {
  navbar.classList.remove("active")
  menu.classList.remove("toggle")
})
