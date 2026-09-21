// ===============================
// PAGE NAVIGATION
// ===============================

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ===============================
// INTERNSHIP APPLICATION
// ===============================

function applyOpportunity(opportunityName) {

    alert(
        "Application submitted successfully!\n\n" +
        "Opportunity: " + opportunityName +
        "\n\n" +
        "Your profile has been shared with the organization."
    );
}


// ===============================
// INDUSTRY - POST OPPORTUNITY
// ===============================

function postOpportunity() {

    const opportunityName =
        document.getElementById("opportunityName").value;

    const requiredSkills =
        document.getElementById("requiredSkills").value;

    const duration =
        document.getElementById("duration").value;


    if (opportunityName === "" ||
        requiredSkills === "" ||
        duration === "") {

        alert("Please fill all the fields.");

        return;
    }


    alert(
        "Opportunity created successfully!\n\n" +
        "Opportunity: " + opportunityName +
        "\n" +
        "Required Skills: " + requiredSkills +
        "\n" +
        "Duration: " + duration +
        "\n\n" +
        "The system will find students whose skills match these requirements."
    );
}


// ===============================
// START WEBSITE
// ===============================

document.addEventListener("DOMContentLoaded", function() {

    showPage("home");

});
