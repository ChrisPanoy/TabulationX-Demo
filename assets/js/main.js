/**
 * TabulationX Static Presentation Logic
 * Handles UI interactions like sidebar toggles and simulated logic.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sidebar Toggle Logic
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.toggle('active');
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (sidebar.classList.contains('active') && !sidebar.contains(e.target) && e.target !== sidebarToggle) {
                sidebar.classList.remove('active');
            }
        });
    }

    // 2. Refresh Date Display
    const dateDisplay = document.getElementById('current-date');
    if (dateDisplay) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        dateDisplay.innerText = new Date().toLocaleDateString('en-US', options);
    }

    // 3. Simulated Tooltips / Interaction Feedback
    const disabledItems = document.querySelectorAll('.menu-item.disabled');
    disabledItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            alert('This feature is for demonstration purposes in the full system.');
        });
    });

    // 4. Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') === '#') return;
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
