// Para usar esta funcion necesitamos una mediaquerie (mq, que guardo en dev/var), un elemento contenedor del mapa en el DOM (mpC), el iframe del mapa de google (mpG, que guardo en dev/var) y un elemento que contiene una imagen del mapa con un link al mapa pensado para moviles (mpImg, que guardo en dev/var)

const Mapa = (mq, mpG, mpImg) =>{
  const mpC = document.getElementById('Mapa')
  if(mq.matches){
    mpC.innerHTML = mpG
  } else{
    mpC.innerHTML = mpImg
  }
}

export {Mapa}
