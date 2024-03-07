window.addEventListener('DOMContentLoaded', () => {
    const paragraph = document.getElementById('paragraph');
    const list = document.getElementById('list');

    function adjustListPosition() {
        const paragraphHeight = paragraph.offsetHeight;
        list.style.top = paragraphHeight + 'px';
    }

    adjustListPosition();

    window.addEventListener('resize', adjustListPosition);
});
window.addEventListener('scroll', function() {
    var footer = document.querySelector('.footer');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var documentHeight = document.body.scrollHeight;

    // Show the footer when scrolled to the bottom of the page
    if (scrollPosition + windowHeight >= documentHeight) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('searchInput');
    var searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', function() {
        var searchTerm = searchInput.value.trim();
        // Perform search operation with the searchTerm
        if (searchTerm !== '') {
            alert('Searching for: ' + searchTerm);
            // Add your search logic here
        } else {
            alert('Please enter a search term.');
        }
    });
});
document.getElementById('loginButton').addEventListener('click', function() {
    window.location.href = 'login.html';
});

