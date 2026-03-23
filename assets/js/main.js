/**
 * TabulationX Static Presentation Logic
 * Handles UI interactions like sidebar toggles and simulated logic.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sidebar Toggle Logic
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    // Create overlay if not present (only on mobile screens)
    let overlay = document.querySelector('.sidebar-overlay');
    if (!overlay && window.innerWidth <= 1024) {
        overlay = document.createElement('div');
        overlay.classList.add('sidebar-overlay');
        document.body.appendChild(overlay);
    }

    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.toggle('active');
            document.body.classList.toggle('sidebar-open');
        });

        // Close when clicking overlay or outside
        const closeSidebar = () => {
            sidebar.classList.remove('active');
            document.body.classList.remove('sidebar-open');
        };

        if (overlay) {
            overlay.addEventListener('click', closeSidebar);
        }

        document.addEventListener('click', (e) => {
            if (sidebar.classList.contains('active') && !sidebar.contains(e.target) && e.target !== sidebarToggle) {
                closeSidebar();
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
