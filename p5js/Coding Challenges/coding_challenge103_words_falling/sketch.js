
let fallingWords = [];
let wordsSpeed= [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  let text = select('.text');
  text.hide();

  const paragraph = text.html();
  const words = paragraph.split(' ');

  for (let j = 0; j < words.length; j++) {
    const spannedWord = createSpan(words[j]);
    spannedWord.position(random(0 , width-30), -20);
    fallingWords.push(spannedWord);
  }

  for (let j = 0; j < words.length; j++) {
    wordsSpeed[j] = random (1, 10);
  }
}

function draw() {

  for (let i = 0; i < fallingWords.length; i++) {

    let x = fallingWords[i].position().x;
    let y = fallingWords[i].position().y;

    y += wordsSpeed[i];

    if (y >= windowHeight) y = -20;
    fallingWords[i].position(x,y);
  }
}
