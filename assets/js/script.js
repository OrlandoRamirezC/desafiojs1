const precioBase = document.querySelector('.precioBase')
const cantidad = document.querySelector('.cantidad')
const valorTotal = document.querySelector('.valorTotal')

//Botones
const mas = document.querySelector('.mas')
const menos = document.querySelector('.menos')

mas.addEventListener('click', () => {
    cantidad.innerHTML++
    valorTotal.innerHTML = (cantidad.innerHTML * precioBase.innerHTML).toLocaleString()
})
menos.addEventListener('click', () => {
    cantidad.innerHTML--
    valorTotal.innerHTML = (cantidad.innerHTML * precioBase.innerHTML).toLocaleString()
})

