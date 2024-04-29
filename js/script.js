// Add click event listener to document
document.addEventListener('click', function (event) {
  const drawer = document.querySelector('.drawer');
  const content = document.querySelector('.content');
  const drawerToggle = document.querySelector('.drawer-toggle');

  // Close drawer if clicked outside or on a drawer item
  if (event.target !== drawerToggle && !drawer.contains(event.target)) {
    drawer.style.width = '0';
    content.style.marginRight = '0';
  }

  // Check if clicked item is inside the drawer
  if (drawer.contains(event.target)) {
    // Close drawer
    drawer.style.width = '0';
    content.style.marginRight = '0';

    // Open another page based on the clicked item
    if (event.target.tagName === 'A') {
      const href = event.target.getAttribute('href');
      if (href) {
        window.location.href = href;
      }
    }
  }
});

function toggleDrawer() {
  const drawer = document.querySelector('.drawer');
  const content = document.querySelector('.content');

  if (drawer.style.width === '0px' || drawer.style.width === '') {
    drawer.style.width = '250px';
    content.style.marginRight = '250px';
  } else {
    drawer.style.width = '0px';
    content.style.marginRight = '0';
  }
}
document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('video-splash');

  // Hide video and show main content when the video ends
  video.addEventListener('ended', function () {
    video.parentElement.style.display = 'none'; // Hide video container
    document.querySelector('.content').style.display = 'block'; // Show main content
  });

  // Mute the video for autoplay on mobile devices
  video.muted = true;

  // Play the video
  video.play();


  // Optionally, you can add a timeout to automatically hide the video after a certain duration
  setTimeout(function () {
    video.parentElement.style.display = 'none'; // Hide video container
    document.querySelector('.content').style.display = 'block'; // Show main content
  }, 2000); // Hide video after 10 seconds
});

document.addEventListener('DOMContentLoaded', function () {
  const gifContainer = document.querySelector('.gif-container');

  function reloadAndHideGIF() {
    const gifImage = gifContainer.querySelector('img');
    gifImage.src = gifImage.src; // Reset the src attribute to reload the GIF

    // Hide the GIF container after 3 seconds
    setTimeout(function () {
      gifContainer.style.display = 'none';
      document.querySelector('.content').style.display = 'block'; // Show main content
    }, 2000); // Hide after 3 seconds
  }

  // Call reloadAndHideGIF() on page load
  reloadAndHideGIF();

});





document.addEventListener('DOMContentLoaded', function () {
  // Select the first image
  const firstImage = document.querySelector('.swiper-slide:first-child .image img');

  // Apply the zoom effect
  setTimeout(function () {
    firstImage.style.transform = 'scale(1.1)'; // Zoom in to 110% of the original size
  }, 2000); // Delay the zoom effect by 500 milliseconds
});


let Navbar = document.querySelector('.navbar');
let Fabars = document.querySelector('.fa-bars');

Fabars.onclick = () => {
  Navbar.classList.toggle("active")
};




var swiper = new Swiper(".home-slid", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




