
function validateName(name) {
    const nameRegex = /^[a-zA-Z\s]*$/; 
    if (name.trim() === '') {
        return 'Name cannot be empty!';
    } else if (!nameRegex.test(name)) {
        return 'Name can only contain letters and spaces!';
    }
    return null; 
}


function validateForm() {
    const name = document.getElementById('name').value; 
    const validationMessage = validateName(name);

    if (validationMessage) {
        // Show the error in a popup
        alert(validationMessage);
        return false;  
    }

    alert('Name is valid!');
    return true;  
}


