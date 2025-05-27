function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains("Dark")) {
    html.classList.remove("Dark")
  } else {
    html.classList.add("Dark")
  }

  const img = document.querySelector("#profile-img")

  if (html.classList.contains("Dark")) {
    img.setAttribute("src", "./assets/Eu Avatar.png")
  } else {
    img.setAttribute("src", "./assets/avatarsegundo.png")
  }
}
