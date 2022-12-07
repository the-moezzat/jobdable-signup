const nextStepBtn = document.querySelectorAll(".next-btn");
const previousStepBtn = document.querySelectorAll(".pre-btn");
const formStep = document.querySelectorAll(".step");

const stepMover = function (direction) {
  const activeFormStep = document.querySelector(".step--active");
  const activeTabStep = document.querySelector(".step-item--active");

  const nextFormStep = document.querySelector(
    `.step-${
      direction === "next"
        ? +activeFormStep.dataset.number + 1
        : +activeFormStep.dataset.number - 1
    }`
  );
  const nextTabStep = document.querySelector(
    `.step-tab-${
      direction === "next"
        ? +activeTabStep.dataset.number + 1
        : +activeTabStep.dataset.number - 1
    }`
  );

  nextFormStep.classList.add("step--active");
  nextTabStep.classList.add("step-item--active");
  activeFormStep.classList.remove("step--active");
  activeTabStep.classList.remove("step-item--active");
};

nextStepBtn.forEach((btn) => {
  btn.addEventListener("click", () => stepMover("next"));
});

previousStepBtn.forEach((btn) => {
  btn.addEventListener("click", () => stepMover("pre"));
});
