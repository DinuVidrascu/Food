import tabs from './modules/tabs';
import modals from './modules/modals';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import slides from './modules/slides';
import {openModal} from './modules/modals';

document.addEventListener('DOMContentLoaded', () => {

  const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 500000);


  tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
  modals('[data-modal]', '.modal', modalTimerId);
  timer('.timer','2022-12-25');
  cards();
  slides({ 
    container: '.offer__slider',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    slide: '.offer__slide',
    totalCounter: '#total',
    currentCounter: '#current'
  });
  calc();
  forms('form', modalTimerId);
});


