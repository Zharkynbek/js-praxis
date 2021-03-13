import cards from './data.js'

const ulRef = document.createElement('ul')

document.body.prepend(ulRef)

const markup = cards.reduce((acc, { name, url, id, description }) => {
    return acc + `<li id="${id}"><p>${name}</p><img src="${url}" alt="${description}" width="333"></li>`
}, '')

ulRef.insertAdjacentHTML('beforeend', markup)


const modalRef = document.querySelector('.modal')
const modalImgRef = document.querySelector('.modal-img')


// open Modal

function openModal(e) {
    if (e.target.nodeName === 'IMG') {
        modalRef.style.display = 'block'
        modalImgRef.src = e.target.src
        modalImgRef.alt = e.target.alt
    }
}
ulRef.addEventListener('click', openModal)

// close Modal on Overlay

function closeModal(e) {
    if (e.target.nodeName !== 'IMG') {
        modalRef.style.display = 'none'
    }
}
window.addEventListener('click', closeModal)

// close Modal with Escape

function closeModalWithEscape(e) {
    if (e.key === 'Escape') {
        modalRef.style.display = 'none'
    }
}
window.addEventListener('keyup', closeModalWithEscape)

// FORM


const formRef = document.querySelector('.form')
const iRef = document.querySelector('.todo')
const formUlRef = document.querySelector('.todolist')
const btnRef = document.querySelector('#btn')
const clearId = document.querySelector('#clear')
const filterRef = document.querySelector('.filter')

const todoArr = []

formRef.addEventListener('submit', (e) => {
    e.preventDefault()
    todoArr.push(`<li><p>${iRef.value}</p></li>`)
    formUlRef.innerHTML = todoArr.join('')
    iRef.value = ''
})



btnRef.addEventListener('click', () => clearId.innerHTML = '')

filterRef.addEventListener('input', () => {
    const filteredArr = todoArr.filter(el => el.includes(filterRef.value))
        formUlRef.innerHTML = filteredArr.join('')

})