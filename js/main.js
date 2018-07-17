/*=========================================================
                        NAVBAR
/*=========================================================*/
const $navToggler = document.querySelector('.my-nav-icon');
const $myNavCollapse = document.querySelector('.my-nav-collapse');
const $navbar = document.querySelector('.my-nav');
const $backToTop = document.querySelector('.back-to-top');

$navToggler.addEventListener('click', toggleNav);

function toggleNav(){
    this.classList.toggle('change');
    if (this.classList.contains('change')) {
        $myNavCollapse.classList.add('show');
        setTimeout(() => {
            $myNavCollapse.style.width = '100%';
        }, 200);
    } else {
        $myNavCollapse.style.width = 0;
        setTimeout(() => {
            $myNavCollapse.classList.remove('show');
        }, 300);  
    }
}


function showHideNav() {
    if (window.scrollY > 50) {
        // Show White Nav
        $navbar.classList.add('navbar-white');
        // // Show Back To Top Button
        $backToTop.classList.add('back-btn-show');
    } else {
        // Hide White Nav
        $navbar.classList.remove('navbar-white');
        // Hide Back To Top Button
        $backToTop.classList.remove('back-btn-show');
    }
}

window.addEventListener('scroll', showHideNav);

/*=========================================================
                            MENU
/*=========================================================*/
const $buttons = document.querySelectorAll('button[data-toggle]');
const $headers = document.querySelectorAll('.card-header');


// Looping and adding event listeners
$buttons.forEach(button => button.addEventListener('click', handleClick));

// Deleting Header card-active class
function resetHeaders() {
    $headers.forEach(header => header.classList.remove('card-active'));
}

// Toggle Active Class
function handleClick() {
    // Probably not the best way to select parent DIV
    header = this.parentElement.parentElement;
    // Check if closed is clicked
    if(!header.classList.contains('card-active')) {
        resetHeaders();
    }
    header.classList.toggle('card-active');
}

/*=========================================================
                        GOOGLE MAP
/*=========================================================*/
function initMap() {
    // Map Options
    let options = {
        zoom: 12,
        center: { lat: 41.8781201, lng: -87.6476597 }
    }

    // New Map
    let map = new google.maps.Map(document.getElementById('map'), options);

    // Add Marker
    let marker = new google.maps.Marker({
        position: { lat: 41.8781201, lng: -87.6476597 },
        map: map
    });

    let infoWindow = new google.maps.InfoWindow({
        content: '<p class="text-dark p-0 m-0"> 806 W. Jackson Blvd. Chicago, IL. 60607</p>'
    });

    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });
}

/*=========================================================
                        SMOOTH SCROLLING
/*=========================================================*/
const $links = document.querySelectorAll('.smooth-scroll');
$links.forEach(link => {
    link.addEventListener('click', (e)=> {
        hideNav();
        // Preventing default link behavior
        e.preventDefault();
        // Getting href attribute of clicked link
        const att = link.getAttribute('href');
        // Selecting a section with that attribute
        const section = document.querySelector(att);
        // Scrolling to it
        window.scrollTo({
            top: section.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

function hideNav() {
    $navToggler.classList.toggle('change');
    $myNavCollapse.style.width = 0;
    setTimeout(() => {
        $myNavCollapse.classList.remove('show');
    }, 300);  
}
