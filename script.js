document.addEventListener("DOMContentLoaded", function () {
    // Login Functionality
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (username === "admin" && password === "1234") {
                localStorage.setItem("isLoggedIn", "true");
                window.location.href = "predictor.html";
            } else {
                document.getElementById("errorMessage").textContent = "Invalid credentials!";
            }
        });
    }

    // Protect Prediction Form
    if (window.location.pathname.includes("predictor.html")) {
        if (localStorage.getItem("isLoggedIn") !== "true") {
            window.location.href = "index.html";
        }
    }

    // Form Submit for Prediction
    const predictForm = document.getElementById("predictForm");
    if (predictForm) {
        predictForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Prediction submitted! Backend integration needed.");
        });
    }
});
