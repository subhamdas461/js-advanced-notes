// function a(){
//     var i = 1;
//     return function(){
//         console.log(i);
//     }
// }
// const b = a();


// for(var i=1;i<=5;i++){
//     setTimeout(()=> console.log(i),i*1000)
// }
// // output: 6 6 6 6 6

// for(let i=1;i<=5;i++){
//     setTimeout(()=> console.log(i),i*1000)
// }
// output: 1 2 3 4 5

var fruits = ["apples", "bananas", "cucumbers", "dragonfruit"];

for (var i = 0; i < fruits.length; i++) {
 
  function show(i){
     var time = 1000-100 * i;
    setTimeout(function () {
        console.log(i);
    }, time);
  }
  show(i)
 
}