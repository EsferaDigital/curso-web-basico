// Variables usadas en este sitio

const Ano = new Date().getFullYear()
const mq768 = window.matchMedia('(min-width: 768px)')
const mq1024 = window.matchMedia('(min-width: 1024px)')



const mapa = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.1539567693094!2d-71.37642838521245!3d-33.05241338457937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689d78f720f0c6b%3A0x32f6dba7bbb38795!2sMaturana%20818%2C%20Villa%20Alemana%2C%20Valpara%C3%ADso!5e0!3m2!1ses-419!2scl!4v1580847733309!5m2!1ses-419!2scl"

const mpG = `<div class="Mapa-responsive"><iframe src=${mapa} width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe></div>`

const mapaLink = "https://goo.gl/maps/UmdbuCXggd3f77998"
const mpImg = `<a href=${mapaLink} target="_blank"><span class="Link-mapa">Ver en Google Maps</span><img src="img/mapa.jpg" alt="Mapa"></a>`

export{
  Ano,
  mq768,
  mq1024,
  mpG,
  mpImg
}
