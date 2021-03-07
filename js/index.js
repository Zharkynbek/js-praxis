import cards from './data.js'

// MODAL

const ulRef = document.createElement('ul')
const modalRef = document.querySelector('.modal')
const modalImgRef = document.querySelector('.modal-img')

document.body.prepend(ulRef)

const markup = cards.reduce((acc, { name, id, url, description }) => {
   return acc + `<li id="${id}"><p>${name}</p><img src="${url}" alt="${description}" width="320"></li>`
}, '')


ulRef.insertAdjacentHTML('beforeend', markup)


ulRef.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        modalRef.style.display = 'block'
        modalImgRef.src = e.target.src
        modalImgRef.alt = e.target.alt
    }
})

window.addEventListener('keyup', (event) => {

    if (event.keyCode === 27) {
        modalRef.style.display = 'none'
    };
})

modalRef.addEventListener('click', (e) => {
    console.dir(e.currentTarget);
    if (e.target.localName !== 'img') {
        modalRef.style.display = 'none'
    }
})

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