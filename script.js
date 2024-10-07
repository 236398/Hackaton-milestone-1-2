var toggleButton = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
// Initialize the display state if needed
if (!skills.style.display) {
    skills.style.display = 'none'; // Default to hidden if not set
}
toggleButton.addEventListener('click', function () {
    skills.style.display = skills.style.display === 'none' ? 'block' : 'none';
});
