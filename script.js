function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a tag da imagem
  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // Se estiver no modo claro, adicionar a imagem clara
    img.setAttribute("src", "./assets/avatar-light.png")
    img.classList.remove("flip") // Remover a classe "flip" para garantir que a imagem não esteja espelhada
  } else {
    // Se não estiver no modo claro, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.classList.add("flip") // Adicionar a classe "flip" para espelhar a imagem
  }

  // Substituir o atributo "alt" da imagem
  if (html.classList.contains("light")) {
    // Se estiver no modo claro, alterar o texto para o modo claro
    img.alt =
      "foto de Mayk Brito sorrindo, usando óculos escuros com um gradiente rosa e azul"
  } else {
    // Se não estiver no modo claro, manter o texto normal
    img.alt =
      "Foto de Mayk Brito sorrindo, usando óculos claros com um fundo gradiente rosa e azul"
  }
}
