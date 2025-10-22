
const overlay = document.querySelector(".page-overlay");

// ham button 
document.addEventListener('DOMContentLoaded', () => {

  const hamBtn = document.getElementById('ham-Btn');
  const hamContent = document.querySelector('.ham-content');

  if (!hamBtn || !hamContent) return;

  hamBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    hamContent.classList.toggle('show');
    overlay.classList.add('show');
  });

  hamContent.addEventListener('click', (e) => e.stopPropagation());

  document.addEventListener('click', () => {
    hamContent.classList.remove('show');
    overlay.classList.remove('show');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hamContent.classList.remove('show');
    overlay.classList.remove('show');
  });
});

//   city

document.addEventListener('DOMContentLoaded', () => {
  const cityBtn = document.querySelector('.select-city');
  const modal = document.querySelector('.modal');
  const cityNames = document.querySelectorAll('.cities-logo1 p, .hidden-city p');
  const input = document.querySelector('.search-city input');
  const hiddencity = document.querySelector('.hidden-city');
    const viewcity = document.getElementById('viewcity');
  //   const searchIcon = document.querySelector('.search-city i');

viewcity.addEventListener('click',(e) => {
  viewcity.innerHTML = 'Other Cities';
  viewcity.style.color = 'black';
  hiddencity.classList.add('show');
});

  cityBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    modal.classList.add('open');
    overlay.classList.add('show');
  });


  document.addEventListener('click', (e) => {
    if (!modal.contains(e.target) && !cityBtn.contains(e.target)) {
      modal.classList.remove('open');
      overlay.classList.remove('show');
    }
  });


  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') modal.classList.remove('open');
    overlay.classList.remove('show');
  });


  cityNames.forEach(city => {
    city.addEventListener('click', () => {
      const selectedCity = city.textContent.trim();
      cityBtn.innerHTML = `${selectedCity} <i class="fa-solid fa-angle-down"></i>`;
      modal.classList.remove('open');
      overlay.classList.remove('show');
    });
  });


  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const enteredCity = input.value.trim();
      if (enteredCity !== "") {
        cityBtn.innerHTML = `${enteredCity} <i class="fa-solid fa-angle-down"></i>`;
        modal.classList.remove('open');
        overlay.classList.remove('show');
        input.value = "";
      }
    }
  });


});

// input modal
document.addEventListener('DOMContentLoaded', () => {

const inputmodal = document.getElementById("input-modal");
const deleteBtn = document.getElementById("deleteBtn");
const logoinput = document.getElementById("logo-input1");

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


