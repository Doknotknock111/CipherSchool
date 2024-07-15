document.getElementById("login-form").addEventListener("submit", function(event) {
	event.preventDefault(); // Prevent form submission

	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;

	if (username === "" || password === "") {  // '===' ->equal value and type
		alert("Please enter both username and password");
		return;
	}

	if (password.length < 8) {
		alert("Password must be at least 8 characters long");
		return;
	}

	// Check for password match
	// var confirmPassword = prompt("Confirm Password");
	// if (confirmPassword !== password) {
	// 	alert("Passwords do not match");
	// 	return;
	// }

	alert("Successfully Logged In");
	window.location.href = "homepage.html"; // Redirect to the homepage
});

document.getElementById("logout").addEventListener("click", function(event) {
	event.preventDefault(); // Prevent link navigation
	window.location.href = "login.html"; // Redirect to the login page
});