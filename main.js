'use strict';

const languageSwitcher = document.querySelectorAll('.switcher');
if (languageSwitcher) {
   const innerTextList = [];
   const innerHTMLList = [];
   const defaultText = {};
   const tumbler = document.querySelectorAll('.tumbler');
   
   innerTextList.push(document.querySelector('.name'));
   innerTextList.push(document.querySelector('.title'));
   innerTextList.push(document.querySelector('.parse'));
   innerTextList.push(document.querySelector('.analize'));
   innerTextList.push(document.querySelector('.business'));
   innerTextList.push(document.querySelector('.prices_button'));

   ((e) => {
      innerTextList.forEach((element) => {
         element.classList[element.classList.length - 1] === 'active' ? defaultText[element.classList[element.classList.length - 2]] = element.innerText : defaultText[element.classList[element.classList.length - 1]] = element.innerText
      });

      innerHTMLList.forEach((element) => {
         element.classList[element.classList.length - 1] === 'active' ? defaultText[element.classList[element.classList.length - 2]] = element.innerHTML : defaultText[element.classList[element.classList.length - 1]] = element.innerHTML
      });
   })();

   const translateRussian = (e) => {
      const russianProperty = {
         name: '«Малая Корона» ООО, Подгорица, Черногория',
         title: 'Мониторинг цен',
         parse: 'Парсинг сайтов',
         analize: 'Анализ цен и наличия конкурентов',
         business: 'Сбор данных для бизнеса',
         prices_button: 'Услуги и цены',
      }

      innerTextList.forEach((element) => {
         element.classList[element.classList.length - 1] === 'active' ? element.innerText = russianProperty[element.classList[element.classList.length - 2]] : element.innerText = russianProperty[element.classList[element.classList.length - 1]]
      });

      innerHTMLList.forEach((element) => {
         element.classList[element.classList.length - 1] === 'active' ? element.innerHTML = russianProperty[element.classList[element.classList.length - 2]] : element.innerHTML = russianProperty[element.classList[element.classList.length - 1]]
      });
   }

   const translateEnglish = (e) => {
      innerTextList.forEach((element) => {
         element.classList[element.classList.length - 1] === 'active' ? element.innerText = defaultText[element.classList[element.classList.length - 2]] : element.innerText = defaultText[element.classList[element.classList.length - 1]]
      });

      innerHTMLList.forEach((element) => {
         element.classList[element.classList.length - 1] === 'active' ? element.innerHTML = defaultText[element.classList[element.classList.length - 2]] : element.innerHTML = defaultText[element.classList[element.classList.length - 1]]
      });
   }

   languageSwitcher.forEach((element) => element.addEventListener('click', (event) => {
      tumbler.forEach((elem) => {
         elem.classList.toggle('activate');
         elem.classList.contains('activate') ? translateRussian() : translateEnglish();
      });
   }));
}