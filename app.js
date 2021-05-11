const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const theContainer = document.querySelector('.container')

openBtn.addEventListener('click', () => {
    theContainer.classList.add('show-nav');
})


closeBtn.addEventListener('click', () => {
    theContainer.classList.remove('show-nav');
});





