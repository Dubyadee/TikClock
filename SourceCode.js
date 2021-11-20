let sec;
let min;
let hr;
let mill;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background;
	mill = 0;
}

function draw() {
	sec = second();
  min = minute();
  hr = hour();
	background(color(239, 242, 136));
	if (millis() - mill > 1000) {
		mill = millis();
	}
	noStroke();
	textSize(100);

	fill(color(154, 225, 252));
	let x = map(millis(), mill, mill + 1000, height, 0);
	rect(0, x, 100, height);

	fill(color(97, 176, 207));
	let x2 = map(sec, 0, 59, height, 0);
	rect(width / 3 - 50, x2, 100, height);
	fill(color(97, 176, 207));
	text(sec, width / 3 - 200, height/2);

	fill(color(46, 108, 133));
	let x3 = map(min, 0, 59, height, 0);
	rect(width / 2 + 150, x3, 100, height);
	fill(color(46, 108, 133));
	text(min, width / 2, height/2);

	fill(color(7, 37, 48));
	let x4 = map(hr, 0, 23, height, 0);
	rect(width - 100, x4, 100, height);
	fill(color(7, 37, 48));
	text(hr, width - 250, height/2);

}
