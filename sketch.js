let values = [];
let i = 0;
let j = 0;
function setup() {
  createCanvas(windowWidth - 30, windowHeight - 30);
  for (let i = 0; i < width / 8; i++) {
    values.push(random(height));
  }
  frameRate(30);
}
function draw() {
  background("#fff");
  simulateSorting();
  selectSort();
}
function simulateSorting() {
  for (let i = 0; i < values.length; i++) {
    stroke(255, 255, 255);
    fill("#ed1a3b");
    rect(i * 8, height, 8, -values[i], 20);
  }
}
function selectSort() {
  if (j < values.length - 1) {
    let minIndex = j;
    for (let l = j + 1; l < values.length; l++) {
      if (values[l] < values[minIndex]) {
        minIndex = l;
      }
    }
    if (minIndex !== j) {
      let temp = values[j];
      values[j] = values[minIndex];
      values[minIndex] = temp;
    }
    j++;
  } else {
    noLoop();
  }
}
