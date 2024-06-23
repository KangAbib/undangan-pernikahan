window.onscroll = function() {  // Function to handle scrolling event
    const navbar = document.querySelector('nav');  // Get reference to navbar element

    if (window.pageYOffset > 0) {  // Check if scrolled past top
        navbar.classList.add('sticky');  // Add 'sticky' class to navbar
    } else {
        navbar.classList.remove('sticky');  // Remove 'sticky' class if scrolled back to top
    }
};
