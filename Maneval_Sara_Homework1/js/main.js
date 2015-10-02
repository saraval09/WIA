/*
     Name: Sara Maneval
     Date: 10/1/15
     Class & Section:  WIA-1510
     Comments: "HTML5 Canvas Drawing"
 */

if(Modernizr.canvas) {

    console.log("Canvas works!");

}else{
        console.log("Canvas is not supported in your browser ");
    }

/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message



/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here

window.onload=function(){
    var canvas1 = document.getElementById("problem1");

    if(canvas1 && canvas1.getContext){
        var context = canvas1.getContext("2d");

        if(context){
            context.strokeStyle="black";
            context.fillStyle="blue";
            context.strokeRect(0, 0, 50, 100);
            context.fillRect(0, 0, 50, 100);




/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here


    var canvas2 = document.getElementById("problem2");

    if(canvas2 && canvas2.getContext){
        var context = canvas2.getContext("2d");

        if(context){


            context.strokeStyle="black";
            context.fillStyle="rgba(255, 0, 0, .5)";
            context.beginPath();
            context.arc(50, 50, 20, 0, (360/180)* Math.PI, true );

        }

    }




/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here


    var canvas3 = document.getElementById("problem3");



/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here


    var canvas4 = document.getElementById("problem4");


/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here


    var canvas5 = document.getElementById("problem5");



/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here


    var canvas6 = document.getElementById("problem6");




/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here



    var canvas7 = document.getElementById("problem7");
        }

    }
        };

