let scrollContainer = document.querySelector(".slider");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
})


nextBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft += 400;
})


backBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 400;
})
