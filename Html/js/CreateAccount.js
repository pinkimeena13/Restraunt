
function validateStringInput(inputField) {
    var inputValue = inputField.value.trim();
    var errorElement = document.getElementById(inputField.id + 'Error');

    if (inputValue === "") {
        errorElement.textContent = 'This field is required.';
        return false;
    }

    if (!/^[a-zA-Z\s]+$/.test(inputValue)) {
        errorElement.textContent = 'Invalid input. Please enter only letters and spaces.';
        return false;
    }

    errorElement.textContent ='';
    return true;
}

function validateEmailInput(inputField) {
    var inputValue = inputField.value.trim();
    var errorElement = document.getElementById(inputField.id + 'Error');

    if (inputValue === "") {
        errorElement.textContent = 'This field is required.';
        return false;
    }

    // Add a basic email validation pattern
    if (!/^\S+@\S+\.\S+$/.test(inputValue)) {
        errorElement.textContent = 'Invalid email address.';
        return false;
    }

    errorElement.textContent = '';
    return true;
}

function validatePasswordInput(inputField) {
    var inputValue = inputField.value.trim();
    var errorElement = document.getElementById(inputField.id + 'Error');

    if (inputValue === "") {
        errorElement.textContent = 'This field is required.';
        return false;
    }

    // Add more password validation if needed

    errorElement.textContent = '';
    return true;
}

function validatePhoneNumberInput(inputField) {
    var inputValue = inputField.value.trim();
    var errorElement = document.getElementById(inputField.id + 'Error');

    // Add a basic phone number validation pattern
    if (!/^\d{10}$/.test(inputValue)) {
        errorElement.textContent = 'Invalid phone number. Please enter 10 digits.';
        return false;
    }

    errorElement.textContent = '';
    return true;
}

 function validateForm() {
    var isFormValid = (
        validateStringInput(document.getElementById('firstName')) &&
        validateStringInput(document.getElementById('lastName')) &&
        validateEmailInput(document.getElementById('email')) &&
        validatePasswordInput(document.getElementById('password')) &&
        validatePhoneNumberInput(document.getElementById('phoneNumber')) &&
        validateAddressInput(document.getElementById('address')) &&
        validateStringInput(document.getElementById('preferredLanguage'))
        // Add other validation functions for each input field if needed
    );

    if (!isFormValid) {
        alert("Please fill in all required fields with valid information before Create Account the form.");
    }

    return isFormValid;
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

    if (inputValue === "") {
        errorElement.textContent = 'Please Enter Valid Email';
        return false;
    }

    // Check for a valid email pattern
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inputValue)) {
        errorElement.textContent = 'Invalid email address. Please enter a valid email.';
        return false;
    }
    errorElement.textContent = '';
    return true;
}
function validatePasswordInput(inputField) {
    var inputValue = inputField.value.trim();
    var errorElement = document.getElementById(inputField.id + 'Error');

    if (inputValue === "") {
        errorElement.textContent = 'Please Enter Valid PassWord';
        return false;
    }

    // Check for a valid password pattern
    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(inputValue)) {
        errorElement.textContent = 'Password must be 8 characters, 1 uppercase, 1 lowercase, 1 digit, 1 special character';
        return false;
    }

    errorElement.textContent = '';
    return true;
}
function validateAddressInput(inputField) {
    var inputValue = inputField.value.trim();
    var errorElement = document.getElementById(inputField.id + 'Error');

    // Check if the address has at least 3 characters
    if (inputValue.length < 3) {
        errorElement.textContent = 'Invalid address. Please enter at least 3 characters.';
        return false;
    }

    // Additional checks if needed

    errorElement.textContent = '';
    return true;
}
function validateAddressInput(inputField) {
    var inputValue = inputField.value.trim();
    var errorElement = document.getElementById('addressError');

    // Check if the address has at least 3 characters
    if (inputValue.length < 3) {
        errorElement.textContent = 'Invalid address. Please enter at least 3 characters.';
        return false;
    }

    // Additional checks if needed

    errorElement.textContent = '';
    return true;
}