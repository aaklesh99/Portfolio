// document.addEventListener("DOMContentLoaded", function() {
//     const toggleButton = document.querySelector(".toggle-button");
//     const navbarLinks = document.querySelector(".right");
//     const links = navbarLinks.querySelectorAll("a");

//     toggleButton.addEventListener("click", function() {
//         navbarLinks.classList.toggle("show");
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector(".toggle-button");
    const navbarLinks = document.querySelector(".right");
    const links = navbarLinks.querySelectorAll("a");

    toggleButton.addEventListener("click", function() {
        navbarLinks.classList.toggle("show");
    });

    links.forEach(link => {
        link.addEventListener("click", function() {
            navbarLinks.classList.remove("show");
        });
    });
});





document.addEventListener("DOMContentLoaded", function() {
    const profileButton = document.getElementById("profileButton");
    const profilePopup = document.getElementById("profilePopup");
    const closePopup = document.getElementById("closePopup");

    profileButton.addEventListener("click", function() {
        profilePopup.style.display = "block";
    });

    closePopup.addEventListener("click", function() {
        profilePopup.style.display = "none";
    });

    // Close the popup when clicking outside of it
    window.addEventListener("click", function(event) {
        if (event.target == profilePopup) {
            profilePopup.style.display = "none";
        }
    });
});












// document.addEventListener('DOMContentLoaded', function() {
//     const burgerMenu = document.getElementById('burgerMenu');
//     const navbarLinks = document.getElementById('navbarLinks');

//     burgerMenu.addEventListener('click', function() {
//         navbarLinks.classList.toggle('active');
//     });

//     const profileButton = document.getElementById('profileButton');
//     const profilePopup = document.getElementById('profilePopup');
//     const closePopup = document.getElementById('closePopup');

//     profileButton.addEventListener('click', function() {
//         profilePopup.style.display = 'block';
//     });

//     closePopup.addEventListener('click', function() {
//         profilePopup.style.display = 'none';
//     });

//     window.addEventListener('click', function(event) {
//         if (event.target == profilePopup) {
//             profilePopup.style.display = 'none';
//         }
//     });
// });



