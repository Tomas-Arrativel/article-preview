const shareIcon = document.querySelector(".share"),
  darkShareIcon = document.querySelector(".dark-share"),
  personalInfo = document.querySelector(".info__personal"),
  shareInfo = document.querySelector(".share-info");

shareIcon.addEventListener("click", () => {
  if (shareInfo.classList.length <= 1) {
    shareInfo.classList.add("hidden");
    personalInfo.classList.remove("text-hidden");
  } else {
    shareInfo.classList.remove("hidden");
    personalInfo.classList.add("text-hidden");
  }
});

darkShareIcon.addEventListener("click", () => {
  shareInfo.classList.add("hidden");
  personalInfo.classList.remove("text-hidden");
});
