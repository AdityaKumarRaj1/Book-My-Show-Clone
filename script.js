// ham button 
   const overlay = document.querySelector(".page-overlay");
   
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
//   const searchIcon = document.querySelector('.search-city i');


  
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


