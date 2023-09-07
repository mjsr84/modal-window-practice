'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
console.log(btnsOpenModal);

// OPEN MODAL WINDOWS
for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener
        ('click', function () {
            console.log('button clicked');
            modal.classList.remove('hidden');
            overlay.classList.remove('hidden');
        });

// CLOSE MODAL WINDOWS
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);