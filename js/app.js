const nav = document.querySelector(".nav-links");
const mediaQuery = window.matchMedia("(max-width: 425px)");
const burger = document.querySelector(".burger");

// clear search input input value
const clearInputValue = () => {
  const searchInput = document.querySelector(".search-input");
  const clearIcon = document.querySelector(".clear-search");

  clearIcon.addEventListener("click", () => {
    searchInput.value = "";
  });
};

// navigation sidebar menu
const navSlide = () => {
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-link-visible");
    burger.classList.toggle("open");
  });
};

// search screen
const searchSlide = () => {
  const searchIcon = document.querySelector(".search-icon");
  const searchScreen = document.querySelector(".search-screen");
  const searchScreenClose = document.querySelector(".close-search");

  searchIcon.addEventListener("click", () => {
    searchScreen.classList.toggle("search-screen-visible");

    // for closing sidebar menu if its open
    if (nav.classList.contains("nav-link-visible")) {
      nav.classList.remove("nav-link-visible");
    }

    // removes burger "open" animation class
    if (burger.classList.contains("open")) {
      burger.classList.remove("open");
    }

    // for changing search icon
    if (searchScreen.classList.contains("search-screen-visible")) {
      searchIcon.classList.add("fa-times"); // changing font icon (by adding new class to element)
      searchIcon.style.fontSize = "1.8rem"; // increasing font size due to font icon getting smaller
      searchIcon.style.transform = "translateY(-0.2rem)"; // changing font icon location on Y axes
    } else {
      searchIcon.classList.remove("fa-times");
      searchIcon.style.fontSize = "1.4rem";
      searchIcon.style.transform = "translateY(0rem)";
    }

    // Check if the media query is true
    if (mediaQuery.matches) {
      var span = document.createElement("span");
      searchIcon.appendChild(span).innerText = "";
    }

    if (mediaQuery.matches && searchIcon.classList.contains("fa-times")) {
      searchIcon.classList.remove("fa-times");
    }
  });

  // for closing search-screen
  searchScreenClose.addEventListener("click", () => {
    searchScreen.classList.remove("search-screen-visible");
  });
};

const navigationArrows = () => {
  const section_1_Profiles = document.querySelectorAll('.section1-profile');
  const leftArrow = document.querySelector(".left-icon");
  const rightArrow = document.querySelector(".right-icon");

  let counter = 0;

  // right arrow
  rightArrow.addEventListener("click", () => {
    counter++;
    if (counter > section_1_Profiles.length - 1) {
      counter = 0;
    }
    section_1_Profiles.forEach(slide => {
      slide.classList.remove("section1-profile-active");
    });
    section_1_Profiles[counter].classList.add("section1-profile-active");
  });


  // left arrow
  leftArrow.addEventListener("click", () => {
    counter--;

    if (counter < 0) {
      counter = section_1_Profiles.length - 1;

    }

    section_1_Profiles.forEach(slide => {
      slide.classList.remove("section1-profile-active");
    });
    section_1_Profiles[counter].classList.add("section1-profile-active");
  });


}

navSlide();
searchSlide();
clearInputValue();
navigationArrows();
