let centerIndex = 2;
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const loader = document.getElementById("preloader");
const closeForm = document.getElementById("close-form");
const formContainer = document.getElementById("form-container");
const signUp = document.getElementById("sign-up");

previous.addEventListener("click", () => {
  const advantagesElements = Array.from(
    document.querySelectorAll(".advantage")
  );
  let item = advantagesElements.pop();
  advantagesElements[0].parentNode.prepend(item);
  advantagesElements.unshift(item);

  advantagesElements.forEach((adventage, index) => {
    position = Math.abs(index - centerIndex);

    if (position === 0) {
      adventage.classList.remove("secondary");
      adventage.classList.remove("hidden");
      adventage.classList.add("main");
    } else if (position === 1) {
      adventage.classList.remove("main");
      adventage.classList.remove("hidden");
      adventage.classList.add("secondary");
    } else {
      adventage.classList.remove("main");
      adventage.classList.remove("secondary");
      adventage.classList.add("hidden");
    }
  });
});

next.addEventListener("click", () => {
  const advantagesElements = Array.from(
    document.querySelectorAll(".advantage")
  );
  let item = advantagesElements.shift();
  advantagesElements[0].parentNode.appendChild(item);
  advantagesElements.push(item);

  advantagesElements.forEach((adventage, index) => {
    position = Math.abs(index - centerIndex);

    if (position === 0) {
      adventage.classList.remove("secondary");
      adventage.classList.remove("hidden");
      adventage.classList.add("main");
    } else if (position === 1) {
      adventage.classList.remove("main");
      adventage.classList.remove("hidden");
      adventage.classList.add("secondary");
    } else {
      adventage.classList.remove("main");
      adventage.classList.remove("secondary");
      adventage.classList.add("hidden");
    }
  });
});

signUp.addEventListener("click", () => {
  formContainer.classList.remove("closed-form");
  document.body.classList.remove("scrolling-allowed");
});

closeForm.addEventListener("click", () => {
  formContainer.classList.add("closed-form");
  document.body.classList.add("scrolling-allowed");
});

window.addEventListener("load", function () {
  loader.classList.add("loaded");
  document.body.classList.add("scrolling-allowed");
});
