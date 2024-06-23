document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        window.location.href = "dashboard.html"; // Mengarahkan langsung ke halaman dashboard
    });
});

