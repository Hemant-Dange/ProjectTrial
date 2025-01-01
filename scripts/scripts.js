// js/scripts.js

$(document).ready(function() {
    // Tenant Registration Form Submission
    $('#tenantRegisterForm').on('submit', function(e) {
        e.preventDefault();

        // Basic Password Confirmation
        var password = $('#tenantPassword').val();
        var confirmPassword = $('#tenantConfirmPassword').val();

        if(password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // You can add more validation here

        // For demonstration, we'll just alert success
        alert("Registration successful!");

        // Redirect to login page after successful registration
        window.location.href = 'tenantLogin.html';
    });

    // Tenant Login Form Submission
    $('#tenantLoginForm').on('submit', function(e) {
        e.preventDefault();

        var usernameEmail = $('#tenantUsernameEmail').val();
        var password = $('#tenantPassword').val();

        // Add your authentication logic here

        // For demonstration, we'll just alert
        alert("Tenant Login Successful!");

        // Redirect to tenant dashboard or home page
        // window.location.href = 'tenantDashboard.html';
    });

    // Manager Login Form Submission
    $('#managerLoginForm').on('submit', function(e) {
        e.preventDefault();

        var usernameEmail = $('#managerUsernameEmail').val();
        var password = $('#managerPassword').val();

        // Add your authentication logic here

        // For demonstration, we'll just alert
        alert("Manager Login Successful!");

        // Redirect to manager dashboard or home page
        // window.location.href = 'managerDashboard.html';
    });
});
