
const galleryEl = document.querySelector(".gallery");
const imgEl = document.querySelector(".image");
const liEl = galleryEl.querySelector("li");


window.addEventListener("keydown", (e) => {
    for (let i = 0; i < liEl.length; i++) {
        liEl[i].classList.toggle("full-image-container");
        imgEl[i].classList.toggle("full-image");
        if (e.key === "ArrowLeft") {
            console.log(e.key);
        }
    };
});


imgEl.addEventListener("click", () => {
    
});


