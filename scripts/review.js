let reviewCount = localStorage.getItem("reviewCount");
reviewCount = reviewCount ? parseInt(reviewCount) : 0;
reviewCount++;
localStorage.setItem("reviewCount", reviewCount);
document.getElementById("review-count").textContent = reviewCount;


// display submitted review data
const params = new URLSearchParams(window.location.search);

// Product Name
document.getElementById("product-name").textContent = params.get("product") || "Not provided";

// Overall Rating
document.getElementById("overall-rating").textContent = params.get("rating") || "Not rated";

// Date of Installation
document.getElementById("installation-date").textContent = params.get("install-date") || "Not specified";

// Review Comments
document.getElementById("review-comments").textContent = params.get("review") || "No comments";

