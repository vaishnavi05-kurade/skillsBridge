// ===============================
// Smooth Scrolling
// ===============================

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}


// ===============================
// Skill Assessment
// ===============================

function submitAssessment() {

    const selected = document.querySelector(
        'input[name="q1"]:checked'
    );

    const result = document.getElementById("assessment-result");

    if (!selected) {
        result.style.color = "#dc2626";
        result.innerHTML = "Please select an answer.";
        return;
    }

    if (selected.value === "correct") {
        result.style.color = "#16a34a";
        result.innerHTML =
            "✓ Correct! Your SQL assessment score has improved.";
    } else {
        result.style.color = "#dc2626";
        result.innerHTML =
            "✗ Incorrect. Review the SQL fundamentals module.";
    }
}


// ===============================
// Apply / Enroll
// ===============================

function applyOpportunity(button) {

    button.innerText = "Applied ✓";
    button.style.background = "#16a34a";
    button.disabled = true;

    alert("Your application has been submitted successfully!");
}


// ===============================
// Opportunity Search
// ===============================

function searchOpportunities() {

    const searchValue =
        document.getElementById("searchBox")
        .value
        .toLowerCase();

    const cards =
        document.querySelectorAll(".opportunity-card");

    cards.forEach(card => {

        const text =
            card.dataset.search.toLowerCase();

        if (text.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}


// ===============================
// Opportunity Filter
// ===============================

function filterOpportunities() {

    const filter =
        document.getElementById("typeFilter").value;

    const cards =
        document.querySelectorAll(".opportunity-card");

    cards.forEach(card => {

        const type = card.dataset.type;

        if (filter === "all" || type === filter) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}


// ===============================
// Profile Notification
// ===============================

document.querySelector(".profile-btn")
    .addEventListener("click", function () {

        alert(
            "Student Profile\n\n" +
            "Name: Alex Student\n" +
            "Industry Readiness: 78%\n" +
            "Skills: 8\n" +
            "Certifications: 4"
        );

    });
