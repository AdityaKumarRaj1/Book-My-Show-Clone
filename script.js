const hidethecity = document.getElementById("hidethecity");
const overlay = document.querySelector(".page-overlay");

// ham button
document.addEventListener("DOMContentLoaded", () => {
  const hamBtn = document.getElementById("ham-Btn");
  const hamContent = document.querySelector(".ham-content");

  if (!hamBtn || !hamContent) return;

  hamBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    document.body.style.overflow = "hidden";
    hamContent.classList.toggle("show");
    overlay.classList.add("show");
  });

  hamContent.addEventListener("click", (e) => e.stopPropagation());

  document.addEventListener("click", () => {
    document.body.style.overflow = "auto";
    hamContent.classList.remove("show");
    overlay.classList.remove("show");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") hamContent.classList.remove("show");
    overlay.classList.remove("show");
  });
});

//   city

document.addEventListener("DOMContentLoaded", () => {
  const cityBtn = document.querySelector(".select-city");
  const modal = document.querySelector(".modal");
  const cityNames = document.querySelectorAll(
    ".cities-logo1 p, .hidden-city p"
  );
  const input = document.querySelector(".search-city input");
  const hidecity = document.getElementById("hidecity");
  const viewcity = document.getElementById("viewcity");

  //   const searchIcon = document.querySelector('.search-city i');

  viewcity.addEventListener("click", (e) => {
    viewcity.innerHTML = "Other Cities";
    viewcity.style.color = "black";
    hidethecity.classList.add("show");
  });

  hidecity.addEventListener("click", (e) => {
    hidethecity.classList.remove("show");
    viewcity.innerHTML = "View all cities";
    viewcity.style.color = "red";
  });

  cityBtn.addEventListener("click", (e) => {
    e.stopPropagation();
     document.body.style.overflow = "hidden";
    modal.classList.toggle("open");
    overlay.classList.add("show");
  });

  modal.addEventListener("click", (e) => e.stopPropagation());

  document.addEventListener("click", (e) => {
    if (!modal.contains(e.target) && !cityBtn.contains(e.target)) {
      modal.classList.remove("open");
      overlay.classList.remove("show");
      document.body.style.overflow = "auto";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modal.classList.remove("open");
    overlay.classList.remove("show");
    document.body.style.overflow = "auto";
  });

  cityNames.forEach((city) => {
    city.addEventListener("click", () => {
      const selectedCity = city.textContent.trim();
      cityBtn.innerHTML = `${selectedCity} <i class="fa-solid fa-angle-down"></i>`;
      modal.classList.remove("open");
      overlay.classList.remove("show");
      document.body.style.overflow = "auto";
    });
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const enteredCity = input.value.trim();
      if (enteredCity !== "") {
        cityBtn.innerHTML = `${enteredCity} <i class="fa-solid fa-angle-down"></i>`;
        modal.classList.remove("open");
        overlay.classList.remove("show");
        document.body.style.overflow = "auto";
        input.value = "";
      }
    }
  });
});

// input modal
document.addEventListener("DOMContentLoaded", () => {
  const inputmodal = document.getElementById("input-modal");
  const deleteBtn = document.getElementById("deleteBtn");
  const logoinput = document.getElementById("logo-input1");
const logoinput1 = document.querySelector('logo-input1-input');
  logoinput.addEventListener("click", () => {
    inputmodal.classList.add("live");
  });

  deleteBtn.addEventListener("click", () => {
    inputmodal.classList.remove("live");
  });
});

// slide banner
const slides = document.querySelector(".hero");
const total = slides.children.length;
let i = 0;

function showSlide() {
  slides.style.transform = `translateX(-${i * 100}%)`;
}

setInterval(() => {
  i = (i + 1) % total;
  showSlide();
}, 5000);

document.getElementById("left-banner").onclick = () => {
  i = (i - 1 + total) % total;
  showSlide();
};
document.getElementById("right-banner").onclick = () => {
  i = (i + 1) % total;
  showSlide();
};



const logo = document.getElementById('logo');
const mobile = window.matchMedia('(max-width: 500px)');

function updateLogo(e) {
  if (e.matches) { 
    logo.src = 'my logo.webp';
    logo.style.width ='50px';
     logo.style.height ='50px';
     logo.style.margin = '0 10px';
  } else {
    logo.src = 'logo.png';
    logo.style.width ='120px';
     logo.style.height ='60px';
  }
}

updateLogo(mobile);

mobile.addEventListener('change', updateLogo);
