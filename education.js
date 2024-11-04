const popoverClass = document.querySelector(".popover-class");
const popoverHidden = document.querySelector(".popover-hidden");
console.log("merde");

popoverClass.addEventListener("click", (event) => {
    popoverHidden.classList.toggle("popover-hidden");
});

// toto.style.display = "none";
// element.style.display = "";