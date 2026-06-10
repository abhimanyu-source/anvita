function showSurprise() {

    // Confetti effect
    confetti({
        particleCount: 250,
        spread: 180
    });

    // Show the hidden content
    const content = document.getElementById("content");
    content.style.display = "block";

    // Hide the button
    document.getElementById("surpriseBtn").style.display = "none";

    // Smooth scroll to the content section
    setTimeout(() => {
        content.scrollIntoView({
            behavior: "smooth"
        });
    }, 300);
}