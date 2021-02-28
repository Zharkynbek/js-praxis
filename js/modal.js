const openModalBtn = document.querySelector('button[data-action="open-modal"]')

openModalBtn.addEventListener('click', () => {
    document.body.classList.add('show-modal')
})

const closeModalBtn = document.querySelector('button[data-action="close-modal"]')

closeModalBtn.addEventListener('click', () => {
    document.body.classList.remove('show-modal')
})