'use strict';

import { Shape } from "./shape.js?v=1.1"

const btnCreate = document.querySelector(".create-cls");
const selShape = document.querySelector(".shape");
const selColor = document.querySelector(".color");
const msg = document.querySelector(".msg");

let rowNumber = 5; //grid row pointer 
let colNumber = 1; //grid column pointer

const shapeArr = [];
btnCreate.onclick = function () {

    if (selShape.value === "0") { //If don't select shape , return;
        return;
    }
    if (selColor.value === "0") { //If don't select color , return;
        return;
    }
    if (shapeArr.length === 25) { ////If array reach 25 , show "Storage is full";
        msg.innerHTML = "Storage is full";
        return;
    }

    
    const div = document.createElement("div"); //Create div
     
    switch (selShape.value) {
        case "Circle":
            div.className = "circle"; //Assign  class to div
            const circle = new Shape(div);
            circle.name = "Circle";
            circle.colorName = selColor[selColor.selectedIndex].text; //Assign  color name to shape
            circle.colorValue = selColor.value;
            div.id = shapeArr.length;
            shapeArr.push(circle);

            break;
        case "Square":
            div.className = "square";
            const square = new Shape(div); //New shape
            square.name = "Square";
            square.colorName = selColor[selColor.selectedIndex].text; //Assign  color name to shape
            square.colorValue = selColor.value;
            div.id = shapeArr.length; //Find shape reference in array through index
            shapeArr.push(square); //Add shape reference to array
           
            break;
    }
   
    div.addEventListener("click", function () {
        msg.innerHTML = `Unit${parseInt(this.id) + 1}: ${shapeArr[parseInt(this.id)].getInfo() }`;
    });

    const gridItem = document.querySelector(`.c${rowNumber}-${colNumber}`); //Find grid item through rowNumber and colNumber
    gridItem.appendChild(div);

    colNumber++;    
    if (colNumber === 6) {
        rowNumber--;
        colNumber = 1;
    }
   
}
