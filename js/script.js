let menuBtn = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .flex .navbar");
let menuBtnClicked = false;

menuBtn.onclick = () => {
  if (!menuBtnClicked) {
    menuBtn.classList.toggle("fa-times");
    navbar.classList.toggle("active");
    menuBtnClicked = true;
  } else {
    menuBtn.classList.toggle("fa-times");
    navbar.classList.toggle("active");
    menuBtnClicked = false;
  }
};

window.onscroll = () => {
  menuBtn.classList.remove("fa-times");
  navbar.classList.remove("active");
};

var swiper = new Swiper(".course-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".teachers-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

window.onscroll = () => {
  const gotopButton = document.querySelector(".gotop");
  const isBottomOfPage =
    window.innerHeight + window.scrollY >= document.body.scrollHeight;
  if (isBottomOfPage) {
    gotopButton.classList.add("active");
  } else {
    gotopButton.classList.remove("active");
  }
};
