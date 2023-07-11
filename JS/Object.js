//Objects

let circle = {
    
    //varaibles and literals in objects in js.
    radius: 1,
    //in js object we colon instead of equal and for next declaration of var we use comma , .
    
    //following is a nested object.
    location: {
        x: 3,
        y:5

    },
    isVisible : true,

    //defining functions in Object
    draw: function()
    {
        console.log('draw function','called')
    }

};

//accessing using Dot notations
    circle.draw(); 


//factory Functions


function createCircle(radius){

   return {
    
        radius: radius,
    
        // modern JS
        draw()
        {
            console.log('draw function called',radius)
        }
        //Old ways in JS
        /*draw: function()
        {
            console.log('draw function','called')
        }*/
    
    };

}

// accessing factory function
const circle1 = createCircle(2);
console.log(circle1.draw());

const circle2 = createCircle(4);
console.log(circle2.draw());


// Tip : whenever defining Constructor Function use Pascal Notation eg: OneTwoThree.

//Constructor Function


function Circle(radius)
{
    this.radius = radius;

    this.draw = function()
    {
        console.log('draw function in Constructor ',radius);
    }
}

    //accesing Constructor Function
    const circle3 = new Circle(5);
    circle3.draw();










