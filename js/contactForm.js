 var form = document.getElementById('contact');


form.addEventListener('submit', validateForm);

function validateForm(event) {
  event.preventDefault();
  var isValid = true;
  var NameValue = document.getElementById('name').value;
  var MailValue = document.getElementById('email').value;
 


  //      //// First Name Validation ////


 if (!isNaN(NameValue)) {
    isValid = false;
    document.getElementById('name').innerHTML = "Please enter a valid name";
  }
  //        //// Email ////

  
  if (email.indexOf('@') === -1 || emailValue.indexOf('.') === -1 ) {
    document.getElementById('email').innerHTML = "Please enter a valid Email * ";
    isValid = false;

  }
  if (emailValue.length < 5 ) {
    document.getElementById('email').innerHTML = "Please enter a valid Email * ";
    isValid = false;

  }