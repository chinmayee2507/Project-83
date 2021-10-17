
var last_position_of_x , last_position_of_y;

var canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var colour = "black";
var width_of_the_line = 1;

var width= screen.width;
var new_width = screen.width - 70;
var height = screen.height;
var new_height = screen.height - 300;

if (width < 992){
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";

}



canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
   colour = document.getElementById("colour").value;
   width_of_the_line = document.getElementById("width_of_the_line").value;
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
console.log("my_touchstart");
}


canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
current_position_of_mouse_x= e.touches[0].clientX - canvas.offsetLeft;
current_position_of_mouse_y= e.touches[0].clientY - canvas.offsetTop;
console.log("my_touchmove");



    ctx.beginPath();
    ctx.strokeStyle = colour;
    ctx.lineWidth = width_of_the_line;
    console.log("last position of X Y co-ordinates");
    console.log("x =" + last_position_of_x + "y= " + last_position_of_y);

    ctx.moveTo(last_position_of_x , last_position_of_y);
    console.log(" current position of X Y co-ordinates");
    console.log("x =" + current_position_of_mouse_x + "y =" + current_position_of_mouse_y);

    ctx.lineTo(current_position_of_mouse_x , current_position_of_mouse_y);
    ctx.stroke();

last_position_of_x = current_position_of_mouse_x;
last_position_of_y = current_position_of_mouse_y;
}

function clearArea(){
    ctx.clearRect( 0, 0, ctx.canvas.width, ctx.canvas.height);
}


var mouseEvent= "empty";

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
   colour = document.getElementById("colour").value;
   width_of_the_line = document.getElementById("width_of_the_line").value;
    mouseEvent="mouseDown"
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp"
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseLeave"
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
current_position_of_mouse_x= e.clientX - canvas.offsetLeft;
current_position_of_mouse_y= e.clientY - canvas.offsetTop;

if (mouseEvent == "mouseDown"){

    ctx.beginPath();
    ctx.strokeStyle = colour;
    ctx.lineWidth = width_of_the_line;
    console.log("last position of X Y co-ordinates");
    console.log("x =" + last_position_of_x + "y= " + last_position_of_y);

    ctx.moveTo(last_position_of_x , last_position_of_y);
    console.log(" current position of X Y co-ordinates");
    console.log("x =" + current_position_of_mouse_x + "y =" + current_position_of_mouse_y);

    ctx.lineTo(current_position_of_mouse_x , current_position_of_mouse_y);
    ctx.stroke();
}
last_position_of_x = current_position_of_mouse_x;
last_position_of_y = current_position_of_mouse_y;
}


