
let dancingWords = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  let text = select('.text');
  text.hide();

  const paragraph = text.html();
  const words = paragraph.split(' ');

  for (let j = 0; j < words.length; j++) {
    const spannedWord = createSpan(words[j]);
    spannedWord.position(width/2, height/2);
    dancingWords.push(spannedWord);
  }
}

function draw() {
  for (let i = 0; i < dancingWords.length; i++) {

    let x = dancingWords[i].position().x;
    let y = dancingWords[i].position().y;

    x += random(-3, 3);
    y += random (-3, 3);

    dancingWords[i].position(x,y);
  }
}
