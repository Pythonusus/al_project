let phrases = [ // создаем массив объектов данных для вывода на страницу
    { text: 'одухотворённая Алёнка', image: './static/одухотворенная.jpg' }, //у каждого объекта два свойства: фраза и фотка
    { text: 'боулдеринговая Алёнка', image: './static/боулдеринговая.jpg' },
    { text: 'домашняя Алёнка', image: './static/домашняя.jpg' },
    { text: 'банная Алёнка', image: './static/банная.jpg' },
    { text: 'бешеная Алёнка', image: './static/бешенная.jpg' },
    { text: 'виаферратная Алёнка', image: './static/виаферратная.jpg' },
    { text: 'высокогорная Алёнка', image: './static/высокогорная.jpg' },
    { text: 'голодная Алёнка', image: './static/голодная.jpg' },
    { text: 'дрыхнущая Алёнка', image: './static/дрыхнущая.jpg' },
    { text: 'дурачечная Алёнка', image: './static/дурачечная.jpg' },
    { text: 'жаждущая свидания Алёнка', image: './static/жаждущая свидания.jpg' },
    { text: 'кемпящая Алёнка', image: './static/кемпящая.jpg' },
    { text: 'недовольная необходимостью работать Алёнка', image: './static/недовольная.jpg' },
    { text: 'не желающая заниматься спортом Алёнка', image: './static/не желающая заниматься спортом.jpg' },
    { text: 'офисная Алёнка', image: './static/офисная.jpg' },
    { text: 'походная Алёнка (летняя)', image: './static/походная(летняя).jpg' },
    { text: 'Алёнка-путешественница', image: './static/путешественница.jpg' },
    { text: 'расслабляющаяся Алёнка', image: './static/расслабляющаяся.jpg' },
    { text: 'скалолазная Алёнка', image: './static/скалолазная.jpg' },
    { text: 'сонная Алёнка', image: './static/сонная.jpg' },
    { text: 'странная Алёнка', image: './static/странная.jpg' },
    { text: 'точно ли Алёнка??', image: './static/точно ли Алёнка.jpg' },
    { text: 'уставшая Алёнка', image: './static/уставшая.jpg' },
    { text: 'походная Алёнка (зимняя)', image: './static/походная(зимняя).jpg' },
    { text: 'тусовочная Алёнка', image: './static/тусовочная.jpg' },
    { text: 'сытая Алёнка', image: './static/сытая.jpg' },
    { text: 'сексуальная Алёнка', image: './static/сексуальная.jpg' },
    { text: 'семейная Алёнка', image: './static/семейная.jpg' },
    { text: 'загадочная Алёнка', image: './static/загадочная.jpg' },
    { text: 'замёрзшая Алёнка', image: './static/замерзшая.jpg' },
    { text: 'европейская Алёнка', image: './static/европейская.jpg' },
    { text: 'шикарная Алёнка', image: './static/шикарная.gif' },
  ];

//функция выбирает случайный элемент из массива
const getRandomElement = (arr) => { 
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  };
  
let button = document.querySelector('.button'); //переменная, в которую мы записали объект с классом button
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

//функция, которая меняет картинку и фразу при клике по кнопке
button.addEventListener('click', function () { //добавляем слушатель клика кнопки
    let randomElement = getRandomElement(phrases);
    phrase.textContent = randomElement.text;

    image.src = randomElement.image;
    button.textContent = 'Попробуем еще раз?';
    
    if (randomElement.text.length > 40) {
      advice.style.fontSize = '30px';
    } else {
      advice.style.fontSize = '40px';
    }
  }
);
