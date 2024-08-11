document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  // Toggle the menu visibility on click
  menuToggle.addEventListener("click", () => {
    if (navLinks.style.display === "block") {
      navLinks.style.display = "none";
    } else {
      navLinks.style.display = "block";
    }
  });

  // Initialize Google Map
  function initMap() {
    // Location coordinates
    const eventLocation = { lat: 28.6139, lng: 77.209 }; // Example coordinates for Delhi

    // Map options
    const mapOptions = {
      zoom: 12,
      center: eventLocation,
      mapTypeId: "roadmap",
    };

    // Create map
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // Add marker
    const marker = new google.maps.Marker({
      position: eventLocation,
      map: map,
      title: "Event Location",
    });
  }

  // Load the map when the window loads
  window.onload = initMap;
});
