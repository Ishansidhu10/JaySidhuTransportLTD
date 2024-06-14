window.onload = () => {
  imageArray = [
    "./images/AggregateImage.jpg",
    "./images/EquipmentImage.jpg",
    "./images/Management.jpg",
    "./images/SafetyImage.jpg",
  ];

  var currentImageIndex = 0;
  var slideshowImage = document.getElementById("slideshow-image");
  var backButton = document.querySelector(".back-btn");
  var forwardButton = document.querySelector(".forward-btn");

  function showMore() {
    var hiddenContent = document.querySelector(".hidden-content");

    // Toggle the visibility
    if (hiddenContent.classList.contains("hidden")) {
      hiddenContent.classList.remove("hidden");
    } else {
      hiddenContent.classList.add("hidden");
    }

    console.log("clicked");
  }
  function updateImage() {
    slideshowImage.src = imageArray[currentImageIndex];
  }

  // Function to go to the previous image
  function goBack() {
    currentImageIndex =
      (currentImageIndex - 1 + imageArray.length) % imageArray.length;
    updateImage();
    console.log("back");
  }

  // Function to go to the next image
  function goForward() {
    currentImageIndex = (currentImageIndex + 1) % imageArray.length;
    updateImage();
    console.log("forward");
  }

  // Add event listeners to the buttons
  backButton.addEventListener("click", goBack);
  forwardButton.addEventListener("click", goForward);
  document.querySelector("#LearnMore").addEventListener("click", showMore);
};
