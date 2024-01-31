document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.animated-element');
  
    function restartAnimation(card) {
      card.style.transition = 'none';
      card.style.transform = 'translateX(100%)';
      void card.offsetWidth; // Trigger reflow
      card.style.transition = 'transform 30s linear infinite'; // Adjust the transition property
      card.style.transform = 'translateX(-100%)';
    }
  
    function handleAnimationEnd() {
      restartAnimation(this);
    }
  
    cards.forEach(card => {
      card.addEventListener('animationiteration', handleAnimationEnd);
    });
  });
//------------------go to bottom code -----------------------

    document.addEventListener('DOMContentLoaded', function () {
      function scrollToBottom() {
       
        var documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    
        
        window.scrollTo({
          top: documentHeight,
          behavior: 'smooth'
        });
      }
    
      var aboutUsLink = document.getElementById('aboutUsLink');
      var contactLink = document.getElementById('contactLink');
    
      if (aboutUsLink) {
        aboutUsLink.addEventListener('click', function (event) {
          event.preventDefault();
          scrollToBottom();
        });
      }
    
      if (contactLink) {
        contactLink.addEventListener('click', function (event) {
          event.preventDefault();
          scrollToBottom();
        });
      }
    });
 
//--------------------------Theme Code --------------------------
const element = document.querySelectorAll('ol li');
const list =[];
document.body.classList.add(localStorage.getItem('color'))
element.forEach(e =>{
    list.push(e.getAttribute('data-color'));
    e.addEventListener('click', function(){
        document.body.classList.remove(...list);
        document.body.classList.add(this.getAttribute('data-color'));
        localStorage.setItem('color',this.getAttribute('data-color'));
    });
});
//-----------------------------------------Table Booking ------------------------------------
// function validateStringInput(inputField) {
//   var inputValue = inputField.value.trim();
//   var errorElement = document.getElementById(inputField.id + 'Error');

//   if (inputValue === "") {
//       errorElement.textContent = 'This field is required.';
//       return false;
//   }

//   if (!/^[a-zA-Z\s]+$/.test(inputValue)) {
//       errorElement.textContent = 'Invalid input. Please enter only letters and spaces.';
//       return false;
//   }

//   errorElement.textContent ='';
//   return true;
// }

// function validateEmailInput(inputField) {
//   var inputValue = inputField.value.trim();
//   var errorElement = document.getElementById(inputField.id + 'Error');

//   if (inputValue === "") {
//       errorElement.textContent = 'This field is required.';
//       return false;
//   }

//   // Add a basic email validation pattern
//   if (!/^\S+@\S+\.\S+$/.test(inputValue)) {
//       errorElement.textContent = 'Invalid email address.';
//       return false;
//   }

//   errorElement.textContent ='';
//   return true;
// }


function validatePhoneNumberInput(inputField) {
  var inputValue = inputField.value.trim();
  var errorElement = document.getElementById(inputField.id + 'Error');

 
  if (!/^\d{10}$/.test(inputValue)) {
      errorElement.textContent = 'Invalid phone number. Please enter 10 digits.';
      return false;
  }

  errorElement.textContent = '';
  return true;
}
function validateStringInput(inputField) {
  var inputValue = inputField.value.trim();
  var errorElement = document.getElementById(inputField.id + 'Error');

  if (inputValue === "") {
      errorElement.textContent = 'Please Enter Valid Name';
      return false;
  }

  if (!/^[a-zA-Z]+$/.test(inputValue)) {
      errorElement.textContent = 'Invalid input. Only alphabets are allowed.';
      return false;
  }
  errorElement.textContent = '';
  return true;
}
function validateEmailInput(inputField) {
  var inputValue = inputField.value.trim();
  var errorElement = document.getElementById(inputField.id + 'Error');

  if (inputValue === !"") {
      errorElement.textContent = 'Please Enter Valid Email';
      return false;
  }

  // Improved regular expression for email validation
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inputValue)) {
      errorElement.textContent ='Invalid email address. Please enter a valid email.';
      return false;
  }

  errorElement.textContent = '';
  return true;
}
function validateForm1() {
  var isFormValid = (
      validateStringInput(document.getElementById('firstName')) &&
      validateStringInput(document.getElementById('lastName')) &&
      validateEmailInput(document.getElementById('email')) &&
      validatePasswordInput(document.getElementById('password')) &&
      validatePhoneNumberInput(document.getElementById('phoneNumber'))
  );

  if (isFormValid) {
    alert("Form submitted successfully!");
} 
else {
    alert("Please fill in all required fields with valid information before submitting the form.");
}
  return isFormValid;  
}
//-----------------Feedback Form Validation---------------------------------
function validateForm() {

  document.getElementById("error-fname").innerHTML = "";
  document.getElementById("error-lname").innerHTML = "";
  document.getElementById("error-email").innerHTML = "";
  document.getElementById("error-phone").innerHTML = "";
  document.getElementById("error-rating").innerHTML = "";

  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("error-email").value;
  var phone = document.getElementById("phone").value;
  var rating = document.getElementById("rating").value;

  if (fname === "") {
      document.getElementById("error-fname").innerHTML = "First Name is required.";
      return;
  }

  if (lname === "") {
      document.getElementById("error-lname").innerHTML = "Last Name is required.";
      return;
  }
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
      document.getElementById("error-email").innerHTML = "Email is required.";
      return;
  } else if (!emailRegex.test(email)) {
      document.getElementById("error-email").innerHTML = "Enter a valid email address.";
      return;
  }
  if (phone === "") {
      document.getElementById("error-phone").innerHTML = "Phone is required.";
      return;
  }

  if (rating === "") {
      document.getElementById("error-rating").innerHTML = "Rating is required.";
      return;
  }
  // If all validations pass, display success message
  // document.getElementById("success-message").innerHTML = "Form submitted successfully!";
  alert("Form submitted successfully!");
}
//---------------------order Form----------------------------
function validateForm2() {
  console.log("Form submitted");
  var isValid = true;

  // Clear existing error messages
  var errorElements = document.querySelectorAll('.error-message');
  errorElements.forEach(function (element) {
      element.textContent = '';
  });

  // Validate each field
  isValid = validateField("customerName", "First Name is required.") && isValid;
  isValid = validateField("customerLastName", "Last Name is required.") && isValid;
  isValid = validateField("contactNumber", "Contact Number is required.") && isValid;
  isValid = validateField("email", "Email is required.") && isValid;
  isValid = validateField("itemsSelection", "Please select an item.") && isValid;
  isValid = validateField("quantity", "Quantity is required and should be a positive number.", /^\d+$/) && isValid;
  isValid = validateField("deliveryDate", "Date is required.") && isValid;
  isValid = validateField("deliveryTime", "Time is required.") && isValid;
  isValid = validateField("city", "Address is required.") && isValid;
  isValid = validateField("cardNumber", "Card Number is required and should be a number.", /^\d+$/) && isValid;
  isValid = validateField("expiryDate", "Expiry Date is required.") && isValid;
  isValid = validateField("cvv", "CVV is required and should be a number.", /^\d+$/) && isValid;

  // Check if any field is empty and display a general error message
  if (!isValid) {
      showError("formError", "Please fill in all required fields.");
  }

  // Additional validation logic can be added here

  return isValid;
}

function validateField(fieldId, errorMessage, regex) {
  var field = document.getElementById(fieldId);
  var value = field.value.trim();

  if (value === "") {
      showError(fieldId, errorMessage);
      return false;
  }

  if (regex && !regex.test(value)) {
      showError(fieldId, errorMessage);
      return false;
  }

  return true;
}

function showError(fieldId, errorMessage) {
  var errorElement = document.getElementById(fieldId + "Error");
  if (errorElement) {
      errorElement.textContent = errorMessage;
  }
}