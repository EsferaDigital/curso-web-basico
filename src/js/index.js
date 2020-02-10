// Importamos y ejecutamos las funciones que necesitemos

import {toggleNav, scrollNav, animaHeader, colorHeader, showButtonUp, upToTop} from './dev/nav'
import {mq768, mpG, mpImg} from './dev/var'
import {Mapa} from './dev/mapa'
import {CopyDate} from './dev/footer'

toggleNav()
scrollNav()
animaHeader()
colorHeader()
showButtonUp()
upToTop()
CopyDate()
Mapa(mq768, mpG, mpImg)
