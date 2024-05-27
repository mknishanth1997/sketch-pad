const drawingBoard = document.querySelector(".drawing-pad");
const black = document.querySelector(".black");
const rgb = document.querySelector(".rgb");
const eraser = document.querySelector(".eraser");
const deletion = document.querySelector(".delete");
const inputBox = document.querySelector("input");
const addButton = document.querySelector(".add");


black.addEventListener("click", blackTheBoard);
rgb.addEventListener("click", rgbTheBoard);
eraser.addEventListener("click", eraserOnTheBoard);
deletion.addEventListener("click", deleteTheBoard);
addButton.addEventListener("click", howManySqauresToCreate);



// creation of Sqaures
function createTheSquares(size)
{
    const width = 900 / size;
    const height = 500 / size;
    console.log(width, height);

    for(let i = 0; i < size * size; i++)
        {
            const box = document.createElement("div");
            box.classList.add("squares");
            box.style.height = `${height}px`;
            box.style.width = `${width}px`;
            drawingBoard.appendChild(box);
        }
}


// Delete Function

function deleteTheBoard() 
{
    const square = document.querySelectorAll(".squares");
    square.forEach(element => {
        element.style.backgroundColor = "white";
    });
}

// black function

function blackTheBoard() 
{
    deleteTheBoard();
    const square = document.querySelectorAll(".squares");
    square.forEach(element => {
        element.addEventListener("mouseover", () => 
        {
            element.style.backgroundColor = "black";
        });
    });
}

// rgb function
function rgbTheBoard() 
{
    deleteTheBoard();
    deleteTheBoard();
    const square = document.querySelectorAll(".squares");
    square.forEach(element => {
        element.addEventListener("mouseover", () => 
        {
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
          
            // Combine RGB values into a valid CSS color string
            const randomColor = `rgb(${red}, ${green}, ${blue})`;
          
            // Set the element's background color to the random color
            element.style.backgroundColor = randomColor;
        });
    });
}

// eraser function
function eraserOnTheBoard() 
{

    const square = document.querySelectorAll(".squares");
    square.forEach(element => {
        element.addEventListener("mouseover", () => 
        {
            element.style.backgroundColor = "white";
        });
    });
}
let isSquaresCreated = false;
function howManySqauresToCreate () 
{
     deleteTheSquares();
    const userValue = parseInt(inputBox.value);
    inputBox.value = "";
    if (userValue <= 0 || userValue > 64)
        {
            alert("Only values between 1 and 64 are allowed");
        }
    else
        {
            createTheSquares(userValue);
        }
}

function deleteTheSquares()
{
    const squares = document.querySelectorAll(".squares");
    if(squares === null)
        {
            console.log("null");
        }
    else
        {
            squares.forEach(element => {
                element.remove();
            });
        }
}
