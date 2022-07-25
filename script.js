const faq = document.getElementsByClassName('faq-question');

for (let i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        this.classList.toggle("active");

        const body = this.nextElementSibling;
        
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });


}
