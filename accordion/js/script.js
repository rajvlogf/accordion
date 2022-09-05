const accordionItem = document.querySelectorAll(".accordion-item");
const accordionHeaders = document.querySelectorAll(".accordion-header");


accordionHeaders.forEach(accordionHeader => {
    accordionHeader.addEventListener("click",()=>{
        accordionHeader.classList.toggle("active");
    });
});
