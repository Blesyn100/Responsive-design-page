const toggleButton = document.getElementsByClassName('nav-bar-toggle')[0];
const navbarLinks = document.getElementsByClassName('nav-bar-links');
toggleButton.addEventListener('click', function() {
    for (var i=0; i<nav-bar-Links.length; i++)
    navbarLinks[i].classList.toggle('active');
}) 