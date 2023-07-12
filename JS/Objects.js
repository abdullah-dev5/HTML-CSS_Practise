//Dynamic Nature of Objects.
const circle={
radius :2

};
// adding new property
circle.color='blue';
console.log(circle);

//even adding new functions
circle.draw=function (){
    console.log('Dynamic nature function Draw added');
}
console.log(circle);
//deleting Existing property 
delete circle.color;
console.log(circle);


//Cloning the Objects.

const circle1={
    radius:4,

    draw: function()
    {
        console.log ('Draw ');
    }


};

//where cloned

//Old way
/*const another ={};
for(let key in circle1)
another[key]=circle1[key];
*/

// Modern JS.
//const another =Object.assign({},circle1);

//Another simple way
const another = {...circle1};
console.log(another);





