function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "/assets/euavatar.png")
  } else {
    img.setAttribute("src", "/assets/euavatarWhite.png")
  }

  const alt = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    alt.setAttribute("alt", "eu em preto e branco")
  } else {
    img.setAttribute("alt", "eu em colorido")
  }
}
