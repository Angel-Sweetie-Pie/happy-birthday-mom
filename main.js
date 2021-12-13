var canvas = new fabric.Canvas("myCanvas");
var x= document.getElementById("myaudio");



function new_image()
{
    fabric.Image.fromURL("mom.jpg",function(img){
        block_object = img;

        block_object.scaleToWidth(700);
        block_object.scaleToHeight(510);
        block_object.set({
            top:0,
            left:0
        });
        canvas.add(block_object)
    });
    }

    function playsound(){
        x.play();
    }
