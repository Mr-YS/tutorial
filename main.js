var circle = document.getElementById('circle');
var rect = circle.getBoundingClientRect();
var mouseX = rect.left + 50, mouseY = rect.top + 50;
function mouseMove() {
  mouseX = event.clientX;
  mouseY = event.clientY;
}

function key() {
  switch (event.keyCode) {
    case 27: window.close(); break; // ESC
    case 69: changeColor(); break; // E
    case 38: sizeUp(); break; // UP
    case 40: sizeDown(); break; // DOWN
    case 82: sizeReset(); break; // R
    case 87: autoChangeColor(); break; // W
  }
}

var currentSize = 100;
function sizeUp() {
  currentSize += 5;
  if (currentSize > 150) {
    currentSize = 150;
  }
  circle.style.width = currentSize+'px';
  circle.style.height = currentSize+'px';
}
function sizeDown() {
  currentSize -= 5;
  if (currentSize < 50) {
    currentSize = 50;
  }
  circle.style.width = currentSize+'px';
  circle.style.height = currentSize+'px';
}
function sizeReset() {
  currentSize = 100;
  circle.style.width = currentSize+'px';
  circle.style.height = currentSize+'px';
}

var colors = [
  'red',
  'aliceblue',
  'aqua',
  'aquamarine',
  'azure',
  'bisque',
  'black',
  'blue',
  'blueviolet',
  'brown',
  'burlywood',
  'chartreuse',
  'chocolate',
  'crimson',
  'cyan',
  'darkblue',
  'darkgoldenrod',
  'darkgreen',
  'darkmagenta',
  'darkorange',
  'darkred',
  'darkturquoise',
  'deeppink',
  'darkskyblue',
  'dodgerblue',
  'firebrick',
  'fuchsia',
  'gold',
  'greenyellow',
  'green',
  'indigo',
  'hotpink',
  'lawngreen',
  'lime',
  'limegreen',
  'magenta',
  'yellow',
  'tomato',
  'yellowgreen',
  'whitesmoke'
];
var iSave = 0;

function changeColor() {
  var i = Math.floor(Math.random() * colors.length)
  if (iSave == i) {
    if (iSave == 0 && i == 0) {
      i++;
      iSave = i;
    }
    else {
      i--;
      iSave = i;
    }
  }
  iSave = i;
  circle.style.background = colors[i];
}

var autoColor = false;
var interval;
function autoChangeColor() {
  if (!autoColor) {
    interval = setInterval(changeColor,50);
  } else {
    clearInterval(interval);
  }
  autoColor = !autoColor;
}

var x = 0, y = 0;
var deltaT = 16; // millisecond
setInterval(function() {
  // Update x, y
  var rect = circle.getBoundingClientRect();

  var dx = mouseX - (rect.left + 50.0);
  var dy = mouseY - (rect.top + 50.0);

  var theta = Math.atan2(dy, dx);
  var speed = 0.01 * Math.sqrt(dy*dy + dx*dx);

  var distance = speed * deltaT;
  x += distance * Math.cos(theta);
  y += distance * Math.sin(theta);

  // Update circle's position
  if (650 < x) { x = 650; }
  if (-650 > x) { x = -650; }
  if (300 < y) { y = 300; }
  if (-300 > y) { y = -300; }
  circle.style.marginLeft = (x - 50) + 'px';
  circle.style.marginTop = (y - 50) + 'px';
}, deltaT);
