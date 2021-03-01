import cards from './data.js'

// console.log(cards);

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


const formRef = document.querySelector('.form')
const inputRef = document.querySelector('.todo')

const formUlRef = document.querySelector('.todolist')

const filterRef = document.querySelector('.filter')

const todoArr = []

formRef.addEventListener('submit', (e) => {
    e.preventDefault()
    console.dir(inputRef);
    todoArr.push(`<li><p>${inputRef.value}</p></li>`)
    formUlRef.innerHTML = todoArr.join('')
    inputRef.value = ''
})

filterRef.addEventListener('input', () => {
    const filtredArr = todoArr.filter(elem => elem.includes(filterRef.value))
        formUlRef.innerHTML = filtredArr.join('')
})