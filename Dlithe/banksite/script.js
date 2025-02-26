// script.js

// Toggle Sidebar Visibility
function toggleSidebar() {
    const sidebar = document.getElementById("mySidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}

// Close Sidebar when clicking outside of it
window.onclick = function (event) {
    if (!event.target.matches('.menu-icon') && !event.target.matches('.sidebar') && !event.target.closest('.sidebar')) {
        document.getElementById("mySidebar").style.width = "0";
    }
};

// Form Validation for Transaction
function validateTransaction() {
    const amount = document.getElementById('amount').value;
    const recipient = document.getElementById('recipient').value;
    const errorMsg = document.getElementById('error-msg');

    errorMsg.innerHTML = '';  // Clear previous error message

    if (amount <= 0) {
        errorMsg.innerHTML = 'Please enter a valid amount.';
        return false;
    }

    if (recipient.trim() === "") {
        errorMsg.innerHTML = "Please enter the recipient's name.";
        return false;
    }

    alert("Payment Sent Successfully!");
    return true;
}
