
// Clock
const soberStartDate = new Date("2024-04-24T00:00:00");

function updateSoberTime() {
    const now = new Date();
    let diff = now - soberStartDate;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const years = Math.floor(days / 365);
    const remainingDays = days % 365;
    
    const soberTimeElement = document.getElementById("soberTime");
    if (soberTimeElement) {
        soberTimeElement.textContent = `${years} years, ${remainingDays} days sober`;
    }
}

// Show/hide functions
function toggleVisibility(selector) {
    const items = document.querySelectorAll(selector);
    items.forEach(item => {
        item.style.display = (item.style.display === 'none' || item.style.display === '') ? 'list-item' : 'none';
    });
}

function hideList(selector) {
    const items = document.querySelectorAll(selector);
    items.forEach(item => {
        item.style.display = 'none';
    });
}

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    updateSoberTime();
    setInterval(updateSoberTime, 1000);
    
    // Set initial state to hidden
    document.querySelectorAll('.myInterest, .myListItem, .mySkills').forEach(item => {
        item.style.display = 'none';
    });
});
