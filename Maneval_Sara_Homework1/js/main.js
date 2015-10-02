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

window.onload = function(){
    var canvas1 = document.getElementById("problem1");

    if(canvas1 && canvas1.getContext){
        var context = canvas1.getContext("2d");

        if(context) {
            context.strokeStyle = "black";
            context.fillStyle = "blue";
            context.strokeRect(0, 0, 50, 100);
            context.fillRect(0, 0, 50, 100);
        }

    }

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

            if (canvas2 && canvas2.getContext) {
                var context2 = canvas2.getContext("2d");

                if (context2) {
                    var degrees = 360;
                    var radians = (degrees / 180) * Math.PI;
                    context2.beginPath();
                    context2.arc(50, 50, 20, 0, radians);
                    context2.strokeStyle = "black";
                    context2.fillStyle = "rgba(255, 0, 0, .5)";
                    //context2.lineWidth=30;
                    context2.stroke();
                    context2.fill();


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

//worked in the try it editor on w3schools until I got the star then moved the code to here.

    var canvas3 = document.getElementById("problem3");

    if (canvas3 && canvas3.getContext) {
        var context3 = canvas3.getContext("2d");

        if (context3) {
            context3.beginPath();
            context3.moveTo(100, 100);
            context3.lineTo(150, 10);
            context3.lineTo(200, 100);
            context3.lineTo(100, 30);
            context3.lineTo(190, 10);
            context3.lineTo(100, 100);
            context3.strokeStyle = "lime";
            context3.fillStyle = "gold";
            context3.lineWidth = 5;
            context3.stroke();
            context3.fill();

        }

    }





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

    if (canvas4 && canvas4.getContext) {
        var context4 = canvas4.getContext("2d");

        if (context4) {
            context4.strokeStyle = "orange";
            context4.lineWidth =3;
            context4.beginPath();
            context4.moveTo(133, 378);
            context4.bezierCurveTo(118, 380, 218, 205, 348, 354);
            context4.stroke();

        }

    }



    /*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here


    var canvas5 = document.getElementById("problem5");
    if (canvas5 && canvas5.getContext) {
        var context5 = canvas5.getContext("2d");

        if (context5) {
            context5.font = "30px Times New Roman";
            context5.fillStyle="red";
            context5.strokeStyle= "black";
            context5.fillText("Slowly Understanding Canvas! ",20,200);
            context5.strokeText("Slowly Understanding Canvas! ",20,200);

        }

    }




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






        }; //End of windows.onload


