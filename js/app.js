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

/* Selection du curseur */
const cursor = document.querySelector(".cursor")
const cursorDot = document.querySelector(".cursor-dot")
let navLinks = document.querySelectorAll(".navbar a, a, img")

/* Prend la position de la souris et la donne au curseur grâce à top et left */
document.addEventListener("mousemove", (e) => {
  cursor.setAttribute("style", "top:" + (e.clientY - 17.5) + "px; left:" + (e.clientX - 17.5) + "px;")
  cursorDot.setAttribute("style", "top:" + (e.clientY - 2.5) + "px; left:" + (e.clientX - 2.5) + "px;")
})

/* Permet d'ajouter la classe au curseur crée dans le CSS pour faire grossir le curseur au click */
document.body.addEventListener("click", () => {
  cursor.classList.add("expand")

  setTimeout(() => {
    cursor.classList.remove("expand")
  }, 200)
})

/* Permet de faire grossir le curseur des liens quand on passe la souris dessus en ajoutant et retirant une classe */

navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    cursor.classList.add("link-grow")
    cursorDot.classList.add("dot-white")
    link.classList.add("hovered-link")
  })
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("link-grow")
    cursorDot.classList.remove("dot-white")
    link.classList.remove("hovered-link")
  })
})
