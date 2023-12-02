'use strict';

const languageSwitcher = document.querySelectorAll('.switcher');
if (languageSwitcher) {
   const innerTextList = [];
   const innerHTMLList = [];
   const defaultText = {};
   const tumbler = document.querySelectorAll('.tumbler');

   innerTextList.push(document.querySelector('.name'));
   innerTextList.push(document.querySelector('.once'));
   innerTextList.push(document.querySelector('.always'));
   innerTextList.push(document.querySelector('.more'));
   innerTextList.push(document.querySelector('.little'));
   innerTextList.push(document.querySelector('.data'));
   innerTextList.push(document.querySelector('.auth'));
   innerTextList.push(document.querySelector('.another_data'));
   innerTextList.push(document.querySelector('.another_auth'));
   innerTextList.push(document.querySelector('.tune'));

   innerHTMLList.push(document.querySelector('.little_time'));
   innerHTMLList.push(document.querySelector('.more_time'));
   innerHTMLList.push(document.querySelector('.projects_link'));

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
         once: 'Разовая работа',
         always: 'Регулярный сбор данных',
         more: 'от 5000₽',
         little: 'от 2500₽',
         more_time: 'сайт/приложение<br><br>1-14 дней',
         little_time: '<br><br>1-10 дней',
         data: 'Парсинг данных',
         auth: 'Включая сайты с авторизацией',
         another_data: 'Парсинг данных',
         another_auth: 'Включая сайты с авторизацией',
         tune: 'Настраиваемая периодичность',
         projects_link: 'И другие проекты,<br>подробности уточняйте!',
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