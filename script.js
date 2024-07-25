// Close dropdown menu when clicking outside
document.addEventListener('click', function (e) {
    var isDropdownMenu = e.target.matches('.dropdown-menu *, .dropdown-menu');
    if (!isDropdownMenu) {
        var dropdowns = document.querySelectorAll('.dropdown-menu.show');
        dropdowns.forEach(function (dropdown) {
            dropdown.classList.remove('show');
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productItems = document.querySelectorAll('.product-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filterValue = button.getAttribute('data-filter');

            // Remove 'active' class from all buttons and add it to the clicked button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Show/hide products based on the category filter
            productItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

// Function to open WhatsApp
function openWhatsApp() {
    let phoneNumber = "9840379299";
    let message = "Hello, Welcome to GVR Groups";

    // Construct WhatsApp URL
    let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open in new tab
    window.open(url, '_blank');
}



function sendEmail() {
    let emailAddress = "eht@gvrgroups.com";
    let subject = "Enquire From Smart-Home-Automation-India";
    let body = `
    Hello,

    I would like to inquire about your services.

    Name: 
    Contact: 
    Site Location: 
    Interested Solution: 
    Notes: 
  `;
    let url = `https://mail.google.com/mail/?view=cm&to=${emailAddress}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url, '_blank');
}
