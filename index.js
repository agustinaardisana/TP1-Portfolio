const iconoHamburguesa = document.querySelector('.menu-hamburguesa')
const menuResponsive = document.querySelector('.menu-responsive')
const header = document.getElementById('header')
const barraNavegacion = document.getElementsByClassName('menu-header responsive')

//////////////////// MENU RESPONSIVE SIN TRANSITION /////////////
// iconoHamburguesa.onclick = () => {
//     if (menuResponsive.classList.contains('hidden')) {
//         menuResponsive.classList.remove('hidden')
//         iconoHamburguesa.classList.add('color-menu')
//         header.classList.add('menu-desplegado')
//     }
//     else {
//         menuResponsive.classList.add('hidden')
//         iconoHamburguesa.classList.remove('color-menu')
//         header.classList.remove('menu-desplegado')
//     }
// }
//tambien podria haber hecho esto con toggle
// iconoHamburguesa.onclick = () => {
//     menuResponsive.classList.toggle('hidden')
//         iconoHamburguesa.classList.toggle('color-menu')
//         header.classList.toggle('menu-desplegado')
// }

// for (let link of barraNavegacion) {
//     link.onclick = () => {
//         menuResponsive.classList.add('hidden')
//     }
// }

//////////////////// MENU RESPONSIVE CON TRANSITION /////////////

iconoHamburguesa.onclick = () => {
    menuResponsive.classList.toggle('abierto')
    iconoHamburguesa.classList.toggle('color-menu')
    header.classList.toggle('menu-desplegado')
}

for (let link of barraNavegacion) {
    link.onclick = () => {
        menuResponsive.classList.remove('abierto')
        iconoHamburguesa.classList.toggle('color-menu')
        header.classList.toggle('menu-desplegado')
    }
}