const canvas = document.getElementById("canvasGrid");
const canvasSize = document.querySelector("#canvasSize");
const scaleValue = document.querySelector(".scaleValue");
const clearButton = document.querySelector("#clear-button");
const rgbButton = document.querySelector("#rgb-button");
const blackButton = document.querySelector("#black-button");

// creates function to remove node
function removeChildNode(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

// creates event listener to make the slider determine the number of pixels for the canvas
canvasSize.addEventListener("input", function () {
  let canvasSizeValue = document.getElementById("canvasSize").value;
  scaleValue.textContent = canvasSizeValue;
  removeChildNode(canvas);
  canvas.setAttribute(
    "style",
    `grid-template-columns: repeat(${canvasSizeValue}, 2fr); grid-template-rows: repeat(${canvasSizeValue}, 2fr);`
  );
  for (let i = 0; i < canvasSizeValue * canvasSizeValue; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = "black";
    });
    canvas.appendChild(pixel);
  }
}); // end of event listener

// creates function to create the black pixel
function newGrid() {
  for (let i = 0; i < 256; i++) {
    const pixelDiv = document.createElement("div");
    pixelDiv.classList.add("pixel");
    pixelDiv.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = "black";
    });
    canvas.appendChild(pixelDiv);
  }
}

// creates function that generates random color
function randomizingColor() {
  let colorCharacters = "0123456789ABCDEF";
  let colorValue = "#";
  for (let i = 0; i < 6; i++) {
    colorValue += colorCharacters[Math.floor(Math.random() * 16)];
  }
  return colorValue;
}

// creates event listener to clear the canvas
clearButton.addEventListener("click", function () {
  let canvasSizeValue = document.getElementById("canvasSize").value;
  let pixel = canvas.children;
  for (let i = 0; i < canvasSizeValue * canvasSizeValue; i++) {
    pixel[i].style.backgroundColor = "white";
  }
});

// creates event listener to activate black brush
blackButton.addEventListener("click", function () {
  let canvasSizeValue = document.getElementById("canvasSize").value;
  let pixel = canvas.children;
  for (let i = 0; i < canvasSizeValue * canvasSizeValue; i++) {
    pixel[i].addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = "black";
    });
  }
});

// creates event listener to activate rgb brush
rgbButton.addEventListener("click", function () {
  let canvasSizeValue = document.getElementById("canvasSize").value;
  let pixel = canvas.children;
  for (let i = 0; i < canvasSizeValue * canvasSizeValue; i++) {
    pixel[i].addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = randomizingColor();
    });
  }
});

newGrid();
