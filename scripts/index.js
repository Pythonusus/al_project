let phrases = [
    { text: 'одухотворённая Алёнка', image: '../static/одухотворенная.jpg' },
    { text: 'боулдеринговая Алёнка', image: '../static/боулдеринговая.jpg' },
    { text: 'домашняя Алёнка', image: '../static/домашняя.jpg' },
  ];
const getRandomElement = (arr) => {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  };
  
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  let image = document.querySelector('.image');
  
  //Это надо переписать
  /*
  button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text);
    smoothly(image, 'src', randomElement.image);
  
    if (randomElement.text.length > 40) {
      advice.style.fontSize = '30px';
    } else {
      advice.style.fontSize = '40px';
    }
  });
  
  for (let i=0; i <= 2; i = i+1) {
    smoothly(phrase, 'textContent', phrases[i].text);
    smoothly(image, 'src', phrases[i].image);
  }
  */