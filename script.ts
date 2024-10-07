const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skills = document.getElementById('skills') as HTMLElement;

// Initialize the display state if needed
if (!skills.style.display) {
  skills.style.display = 'none'; // Default to hidden if not set
}

toggleButton.addEventListener('click', () => {
  skills.style.display = skills.style.display === 'none' ? 'block' : 'none';
});