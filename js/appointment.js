function showPopup() {
    var popup = document.getElementById('myPopup');
    var content = document.getElementById('mainContent');
    popup.style.display = 'flex';  // Change display to flex for centering
    /*content.classList.add('blur');*/  // Add blur class to main content
    setTimeout(() => { popup.style.opacity = '1'; }, 10);  // Use timeout to trigger CSS transition
}

function closePopup() {
    var popup = document.getElementById('myPopup');
    var content = document.getElementById('mainContent');
    popup.style.opacity = '0';
   /* content.classList.remove('blur'); */ // Remove blur class from main content
    setTimeout(() => { popup.style.display = 'none'; }, 300);  // Match this with CSS transition duration
}

window.addEventListener('click', function (event) {
    var popup = document.getElementById('myPopup');
    if (event.target == popup) {
        closePopup();
    }
});

$(document).on('click', '.navbar-collapse.show', function (e) {
    if (!$(e.target).hasClass('dropdown-toggle') && $(e.target).is('a')) {
        $(this).collapse('hide');
    }
});