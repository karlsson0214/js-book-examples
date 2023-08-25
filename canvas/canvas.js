"use strict";

let canvas = document.getElementById("js-canvas");

if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(30, 30, 50, 50);

    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.stroke();
    ctx.fill();

    ctx.clearRect(50, 50, 50, 50);

    let img = new Image(); // Create new img element
    img.src = "crab2.png"; // Set source path
    
    let x = 100;
    let y = 100;
    let angle = 45;
    // Save the current context  
    ctx.save();  
    // Translate to the center point of our image  
    ctx.translate(x + img.width * 0.5, y + img.height * 0.5);  
    // Perform the rotation  
    ctx.rotate(angle * Math.PI / 180);  
    // Translate back to the top left of our image  
    ctx.translate(-x-img.width * 0.5, -y-img.height * 0.5);  
    // Finally we draw the image  
    ctx.drawImage(img, x, y);
    // And restore the context ready for the next loop  
    ctx.restore();

   

  }