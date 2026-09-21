/* =================================
   PAGE NAVIGATION
================================= */

function showPage(pageId) {

    // Get all pages
    const pages = document.querySelectorAll(".page");

    // Hide all pages
    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    // Show selected page
    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =================================
   APPLY BUTTON
================================= */

function applyOpportunity(opportunityName) {

    alert(
        "Application submitted successfully!\n\n" +
        "Opportunity: " + opportunityName +
        "\n\nYour profile has been shared with the organization."
    );

}


/* =================================
   POST OPPORTUNITY
================================= */

function postOpportunity() {

    alert(
        "Opportunity created successfully!\n\n" +
        "The system will now find students whose skills match your requirements."
    );

}


/* =================================
   INITIAL PAGE
================================= */

document.addEventListener("DOMContentLoaded", function() {

    showPage("home");

});