/* Message dans la console */
console.log("%c Hello ! 👋", "color: black;" + " background: #32ffce;" + " font-weight: bold;" + "font-size: 14px;" + "border-radius: 10px;" + "font-style: italic;" + "padding: 3px;")
console.log(
  "%c And welcome, my little sneaky developer 😉",
  "color: black;" + " background: #32ffce;" + " font-weight: bold;" + "font-size: 14px;" + "border-radius: 10px;" + "font-style: italic;" + "padding: 3px;"
)

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
let navLinks = document.querySelectorAll(".navbar a, a, img, .skills__box, .skills__box-tools, p, span, h1, .btn-toggle, .swiper-button-prev, .swiper-button-next")

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

/* Fait disparaître le curseur quand la souris n'est plus au dessus de la fenêtre */
window.addEventListener("mouseout", () => {
  cursor.classList.add("cursor-vanish")
  cursorDot.classList.add("cursor-vanish")
})
window.addEventListener("mouseover", () => {
  cursor.classList.remove("cursor-vanish")
  cursorDot.classList.remove("cursor-vanish")
})

/* Retire le menu en scrollant vers le bas et le fait réaparaître en scrollant vers le haut */
let header = document.querySelector(".header")
let lastScrollValue = 0

document.addEventListener("scroll", () => {
  let top = document.documentElement.scrollTop
  if (lastScrollValue < top) {
    header.classList.add("hidden")
  } else {
    header.classList.remove("hidden")
  }
  lastScrollValue = top
})

/* Bouton pour remonter en haut de la page */
let buttonScrollUp = document.querySelector(".btn-scrollup")

buttonScrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
})

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    buttonScrollUp.style.transition = "all 0.5s ease-in-out"
    buttonScrollUp.style.opacity = 1
    buttonScrollUp.style.visibility = "visible"
  } else {
    buttonScrollUp.style.opacity = 0
    buttonScrollUp.style.visibility = "hidden"
  }
})
window.addEventListener("load", () => {
  buttonScrollUp.style.opacity = 0
})
/* Bouton pour remonter en haut de la page */

/* SWIPPER */
let swiperProjects = new Swiper(".projets__container", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 10,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1500: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
  },
})

/****************** DARK MODE ***************/

const btnToggle = document.querySelector(".btn-toggle")

btnToggle.addEventListener("click", () => {
  const body = document.body

  if (body.classList.contains("dark")) {
    body.classList.add("light")
    body.classList.remove("dark")
  } else if (body.classList.contains("light")) {
    body.classList.add("dark")
    body.classList.remove("light")
  }
})

/***************** ANIMATED TEXT ********************/

/* window.addEventListener("DOMContentLoaded", (e) => {
  animate_text()
})

function animate_text() {
  let delay = 20,
    delay_start = 0,
    contents,
    letters

  document.querySelectorAll(".animated-text").forEach(function (elem) {
    contents = elem.textContent.trim()
    elem.textContent = ""
    letters = contents.split("")
    elem.style.visibility = "visible"

    letters.forEach(function (letter, index_1) {
      setTimeout(function () {
        elem.textContent += letter
      }, delay_start + delay * index_1)
    })
    delay_start += delay * letters.length
  })
}
 */
