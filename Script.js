// DARK / LIGHT MODE TOGGLE
const toggleButton = document.getElementById("theme-toggle");

if (toggleButton) {
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            toggleButton.textContent = "🌙 Dark Mode";
        } else {
            toggleButton.textContent = "☀️ Light Mode";
        }
    });
}

// SIMPLE PAGE LOAD ANIMATION
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});
