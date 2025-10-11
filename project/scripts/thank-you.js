document.addEventListener("DOMContentLoaded", () => {
    console.log("thankyou.js is running");

    const params = new URLSearchParams(window.location.search);

    const name = params.get("name");
    const email = params.get("email");
    const location = params.get("location");
    const skill = params.get("skill");
    const message = params.get("message");

    const responseBox = document.getElementById("response-message");

    if (name && email && location && skill && message) {
        const userData = { name, email, location, skill, message };
        localStorage.setItem("crochetUser", JSON.stringify(userData));

        let submissionCount = localStorage.getItem("submissionCount");
        submissionCount = submissionCount ? parseInt(submissionCount) + 1 : 1;
        localStorage.setItem("submissionCount", submissionCount);

        responseBox.innerHTML = `
      <strong>Welcome, ${name}!</strong><br>
      We're so glad to have a <em>${skill}</em> crocheter from <em>${location}</em> in our community.<br><br>
      <strong>Your Story:</strong> ${message}<br>
      <strong>Email:</strong> ${email}<br><br>
      You've submitted this form <strong>${submissionCount}</strong> time${submissionCount > 1 ? "s" : ""}.
    `;
    } else {
        responseBox.textContent = "Oops! We couldn't load your submission. Please try again.";
    }
});