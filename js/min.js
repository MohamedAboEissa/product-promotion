/* ========================================================================= */
/*  On scroll fade/bounce fffect
/* ========================================================================= */

wow = new WOW({
  animateClass: 'animated',
  offset: 100,
  mobile: false
});
wow.init();
// ========================================================



// ========================================
// start tabs-list
// ========================================
let tabsList = document.querySelectorAll(".tabs-list li");
let imgs = Array.from(document.images);

tabsList.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImgs);
})
// remove active class from all lis and add to current
function removeActive() {
  tabsList.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  })
}
// manage imgs
function manageImgs() {
  imgs.forEach((booo) => {
    booo.style.display = "none";
  });
  document.querySelectorAll(this.dataset.contant).forEach((el) => {
    el.style.display = 'block';
  });
}
// ========================================
// =========================================
// start gallery
// =========================================

// Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

    img.addEventListener('click', (e) => {

    // Create Overlay Element
    let overlay = document.createElement("div");

    // Add Class To Overlay
    overlay.className = 'popup-overlay';

    // Append Overlay To The Body
    document.body.appendChild(overlay);

    // Create The Popup Box
    let popupBox = document.createElement("div");

    // Add Class To The Popup Box
    popupBox.className = 'popup-box';

    if (img.alt !== null) {

      // Create Heading
      let imgHeading = document.createElement("h3");

      // Create text For Heading
      let imgText = document.createTextNode(img.alt);

      // Append The Text To The Heading
      imgHeading.appendChild(imgText);

      // Append The Heading To The Popup Box
      popupBox.appendChild(imgHeading);

    }

    // Create The Image
    let popupImage = document.createElement("img");

    // Set Image Source
    popupImage.src = img.src;

    // Add Image To Popup Box
    popupBox.appendChild(popupImage);

    // Append The Popup Box To Body
    document.body.appendChild(popupBox);

    // Create The Close Span
    let closeButton = document.createElement("span");

    // Create The Close Button Text
    let closeButtonText = document.createTextNode("X");

    // Append Text To Close Button
    closeButton.appendChild(closeButtonText);

    // Add Class To Close Button
    closeButton.className = 'close-button';

    // Add Close Button To The Popup Box
    popupBox.appendChild(closeButton);

});

});

// Close Popup
document.addEventListener("click", function (e) {

  if (e.target.className == 'close-button') {

    // Remove The Current Popup
  e.target.parentNode.remove();

    // Remove Overlay
  document.querySelector(".popup-overlay").remove();

  }

});
// ===============================================================

// ======================================================
// ====== Create a category slider=================
// ======================================================

$(document).ready(function() {
  
    $("#owl-demo").owlCarousel({
  
        autoPlay: 2000, //Set AutoPlay to 3 seconds
  
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
    });

});
// =====================================

// =========================
// FOOTER
// ==========================
// Automatically update copyright year in the footer
var currentTime = new Date();
var year = currentTime.getFullYear();
$("#year").text(year);
