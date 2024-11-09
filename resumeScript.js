"use strict";
let skill_section = document.getElementById("skills-section");
let skillsBtn = document.getElementById("skillsBtn");
skillsBtn?.addEventListener("click", () => {
    skill_section.classList.toggle("hide");
});
let experience_section = document.getElementById("experience-section");
let experienceBtn = document.getElementById("experienceBtn");
experienceBtn?.addEventListener("click", () => {
    experience_section.classList.toggle("hide");
});
let certification_section = document.getElementById("certifications-section");
let certificationBtn = document.getElementById("certificationBtn");
certificationBtn?.addEventListener("click", () => {
    certification_section.classList.toggle("hide");
});
let education_section = document.getElementById("education-section");
let educationBtn = document.getElementById("educationBtn");
educationBtn?.addEventListener("click", () => {
    education_section.classList.toggle("hide");
});
