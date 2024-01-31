// function validateName() {
//     var name = document.getElementById('name').value;
//     document.getElementById('nameError').innerText = '';
    
//     if (name.trim() === '') {
//         document.getElementById('nameError').innerText = 'Please enter your username.';
//     } else if (!isTextOnly(name)) {
//         document.getElementById('nameError').innerText = 'Name should contain only text characters.';
//     }
// }

// function validateEmail() {
//     var email = document.getElementById('email').value;
//     document.getElementById('emailError').innerText = '';

//     if (email.trim() === '' || !isValidEmail(email)) {
//         document.getElementById('emailError').innerText = 'Please enter a valid email.';
//     }
// }

// function validatePassword() {
//     var password = document.getElementById('password').value;
//     document.getElementById('passwordError').innerText = '';

//     if (!isValidPassword(password)) {
//         document.getElementById('passwordError').innerText = 
//         'Password must be 8characters, 1 uppercase, 1 lowercase, 1 digit, 1 special character';
//     }
// }

// function validateForm() {
//     validateName();
//     validateEmail();
//     validatePassword();

//     window.location.href = 'next_page.html';
// }

// function isValidPassword(password) {
//     // Password should have at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character
//     var passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     return passwordRegex.test(password);
// }

// function isValidEmail(email) {
//     // You can implement a more robust email validation logic if needed
//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }

// function isTextOnly(text) {
//     // Check if the text contains only letters (no numbers or special characters)
//     var textRegex = /^[A-Za-z]+$/;
//     return textRegex.test(text);
// }

// seconde code 
    // function validateName() {
    //     var name = document.getElementById('name').value;
    //     document.getElementById('nameError').innerText = '';
        
    //     if (name.trim() === '') {
    //         document.getElementById('nameError').innerText = 'Please enter your username.';
    //     } else if (!isTextOnly(name)) {
    //         document.getElementById('nameError').innerText = 'Name should contain only text characters.';
    //     }
    // }

    // function validateEmail() {
    //     var email = document.getElementById('email').value;
    //     document.getElementById('emailError').innerText = '';

    //     if (email.trim() === '' || !isValidEmail(email)) {
    //         document.getElementById('emailError').innerText = 'Please enter a valid email.';
    //     }
    // }

    // function validatePassword() {
    //     var password = document.getElementById('password').value;
    //     document.getElementById('passwordError').innerText = '';

    //     if (!isValidPassword(password)) {
    //         document.getElementById('passwordError').innerText = 
    //         'Password must be 8 characters, 1 uppercase, 1 lowercase, 1 digit, 1 special character';
    //     }
    // }

    // function validateForm() {
    //     var isNameValid = validateName();
    //     var isEmailValid = validateEmail();
    //     var isPasswordValid = validatePassword();

    //     if (isNameValid && isEmailValid && isPasswordValid) {
           
    //         window.location.href = '/Html/Restorentmainpage.html';
    //     } else {
    //         alert('Please fill out the form correctly before submitting.');
    //     }
    // }

    // function isValidPassword(password) {
    //     var passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    //     return passwordRegex.test(password);
    // }

    // function isValidEmail(email) {
    //     // You can implement a more robust email validation logic if needed
    //     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     return emailRegex.test(email);
    // }

    // function isTextOnly(text) {
    //     // Check if the text contains only letters (no numbers or special characters)
    //     var textRegex = /^[A-Za-z]+$/;
    //     return textRegex.test(text);
    // }

    function validateName() {
        var name = document.getElementById('name').value;
        document.getElementById('nameError').innerText = '';
    
        // Check for leading and trailing spaces
        if (name.trim() === '') {
            document.getElementById('nameError').innerText = 'Please enter your username.';
        } else if (!isTextOnly(name)) {
            document.getElementById('nameError').innerText = 'Name should contain only text characters.';
        } else {
            // Check for space at the beginning
            if (name[0] === ' ') {
                document.getElementById('nameError').innerText = 'Name should not start with a space.';
            }
    
            // Check for space in the middle (between first name and last name)
            var spaceIndex = name.indexOf(' ');
            if (spaceIndex !== -1 && spaceIndex < name.length - 1 && name[spaceIndex + 1] === ' ') {
                document.getElementById('nameError').innerText = 'There should be only one space between the first name and last name.';
            }
        }
    }
    
    
    function validateEmail() {
        var email = document.getElementById('email').value;
        document.getElementById('emailError').innerText = '';

        if (email.trim() === '' || !isValidEmail(email)) {
            document.getElementById('emailError').innerText = 'Please enter a valid email.';
        }
    }

    function validatePassword() {
        var password = document.getElementById('password').value;
        document.getElementById('passwordError').innerText = '';

        if (!isValidPassword(password)) {
            document.getElementById('passwordError').innerText = 
            'Password must be 8 characters, 1 uppercase, 1 lowercase, 1 digit, 1 special character';
        }
    }

    function validateForm() {
        
        validateName();
        validateEmail();
        validatePassword();

        // If all validations pass, the form will be submitted
        // If any validation fails, return false to prevent form submission
        return true;
    }

    function isValidPassword(password) {
        // Password should have at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character
        var passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    }

    function isValidEmail(email) {
        // Check if the email follows the pattern of having one "@" and at least one "." after it
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    

    function isTextOnly(text) {
        // Check if the text contains only letters (no numbers or special characters)
        var textRegex = /^[A-Za-z ]+$/; // Allow space in the regex
        return textRegex.test(text);
    }
    