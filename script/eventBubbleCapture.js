console.log("Event Bubbling and Event  Capturing");


// Event bubbling :- Default me 3rd parameter false hi rahta hai or wahi event bubbling hota hai
// document.querySelector('#grandParent')
//   .addEventListener('click', function (e) {
//     console.log(`You clicked on the Grand Parent`);
//   }, false);
// document.querySelector('#parent')
//   .addEventListener('click', function (e) {
//     console.log(`You clicked on the  Parent`);
//   }, false);
// document.querySelector('#child')
//   .addEventListener('click', function (e) {
//     console.log(`You clicked on the  Child`);
//   }, false);



//Now event capturing in this case 3rd parameter is true 


document.querySelector('#grandParent')
  .addEventListener('click', function (e) {
    console.log(`You clicked on the Grand Parent`);
    e.stopPropagation(true);

  }, true);
document.querySelector('#parent')
  .addEventListener('click', function (e) {
    console.log(`You clicked on the  Parent`);



  }, true);
document.querySelector('#child')
  .addEventListener('click', function (e) {
    console.log(`You clicked on the  Child`);

  }, true);
