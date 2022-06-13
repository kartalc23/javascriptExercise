const openModal = document.getElementById('modal')
const closeModal = document.getElementById('close')
const modal = document.getElementById('modalContent')


openModal.addEventListener('click', () => { 
    modal.classList.add('open');
    closeModal.classList.add('open');
});

closeModal.addEventListener('click', () => { 
    modal.classList.remove('open');
    closeModal.classList.remove('open');
});