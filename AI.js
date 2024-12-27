document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("nav button");
    const sections = document.querySelectorAll("main section");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const targetSection = button.getAttribute("data-section");

            sections.forEach(section => {
                section.classList.remove("active");
                if (section.id === targetSection) {
                    section.classList.add("active");
                }
            });
        });
    });
});

