'use strict';

/**
The function is executed when the user clicks the submit button on the form
*/
function handleFormSubmit(event) {
  event.preventDefault();
  
  const data = new FormData(event.target); //Grab the form data
  
  const formJSON = Object.fromEntries(data.entries()); //Transforms key/value pairs into JS Object

  // for multi-selects, we need special handling
  formJSON.snacks = data.getAll('snacks'); //Add snacks data
  
  const results = document.querySelector('.results pre'); //reference the pre tag
  results.innerText = JSON.stringify(formJSON, null, 2); //stringify the Object into JSON format
  
  console.log('success in JSON construction');
  
  //Send the JSON data to our handler in PHP
  $.ajax({
    data: 'file=' + results.innerText,
    url: 'handler.php',
    method: 'POST', 
    success: function(msg) {
        console.log(msg);
    }
  });  
  
}

//Adds our function as a listener to the submit control on our form.
const form = document.querySelector('.contact-form');
form.addEventListener('submit', handleFormSubmit);

/** Resources
https://www.geeksforgeeks.org/how-to-send-data-of-html-form-directly-to-json-file/
https://stackoverflow.com/questions/38963096/save-html-form-input-to-json-file
https://codepen.io/jlengstorf/pen/rNMpJNy
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
*/

