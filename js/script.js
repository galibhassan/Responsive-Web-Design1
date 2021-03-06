window.onload = function() {

  

  var navbar = document.querySelector(".navbar");
  var navLink = document.querySelector(".navLink");

  
  function myFunction(x) {
    if (x.matches) { // If media query matches
      window.onscroll = function() {
        scrollFunction()
      };
      function scrollFunction() {
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
          navbar.style.padding = "0 10px";
          navbar.className = "navbar navbar-fixed text-dark";
        } else {
          navbar.style.padding = "20px 10px";
          navbar.className ="navbar";
        }
      }
      // document.body.style.backgroundColor = "yellow";
    } else {
    //  document.body.style.backgroundColor = "pink";
    }
  }
  
  var x = window.matchMedia("(min-width: 770px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction)

  function scrollFunction() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
      navbar.style.padding = "0 10px";
      navbar.className = "navbar navbar-fixed text-dark";
    } else {
      navbar.style.padding = "20px 10px";
      navbar.className ="navbar";
    }
  }

  const menuBtn = document.querySelector(".menu-btn");

  let showMenu = false;

  menuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    if(!showMenu) {
      menuBtn.classList.add("close");
      showMenu = true;
    } else {
      menuBtn.classList.remove("close");
      showMenu = false;
    }
  }

  //Login Modal config
  var modal1 = document.getElementById('modal-background1');
  var modal2 = document.getElementById('modal-background2');
  var closeBtn1 = document.getElementById('closeBtn1');
  var loginAnchor = document.getElementById('loginAnchor');
  var signupBtn = document.getElementById('signupBtn');
  this.console.log(closeBtn1);

  window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = 'none';
    }
    if (event.target == modal2) {
      modal2.style.display = 'none';
    }
  }

  closeBtn1.addEventListener('click', onCloseBtn1Click);

  function onCloseBtn1Click() {
    modal1.style.display = 'none';
  }

  closeBtn2.addEventListener('click', function() {
    modal2.style.display = 'none';
  });


  loginAnchor.addEventListener('click', function() {
    modal2.style.display = 'none';
  });

  signupBtn.addEventListener('click', function() {
    modal1.style.display = 'none';
  });
  
  function onLoginBtnClick() {
    modal.style.display = 'block';
  }
  
  //Media Queries
  var sideMenu = document.getElementById('side-menu');
  var openSlide = document.getElementById('menuBtn');

  document.getElementById('menuBtn').addEventListener('click', onToggle);

  function onToggle() {
    if (sideMenu.style.transform == 'translateY(55px)') {
      // && openSlide.className === "hamburger hamburger--collapse menu-btn"
      // openSlide.className = "hamburger hamburger--collapse is-active menu-btn";
      sideMenu.style.transform = 'translateY(-600px)';
      // sideMenu.className = "";
    } else {
      // openSlide.className = "hamburger hamburger--collapse menu-btn";
      sideMenu.style.transform = 'translateY(55px)';
      // sideMenu.className = "hide";
    }
  }

  var maxWidth = window.matchMedia("(max-width: 770px)");
  functionQuery(maxWidth);
  maxWidth.addListener(functionQuery);

  function functionQuery(maxWidth) {
    if (maxWidth.matches) {
      openSlide.className = "menu-btn";
      showMenu = false;
      // sideMenu.className = "hide";
    } else {
      sideMenu.style.transform = 'translateY(-600px)';
      openSlide.className = "menu-btn close";
      showMenu = true;
    }
  }

  // Carousel config
  const carouselContainer = document.getElementById("carouselContainer");
  const carouselSlide = document.querySelector(".carousel-slide");
  const carouselImages = document.querySelectorAll(".carousel-slide img");
  const sliderImg = document.getElementsByClassName("sliderImg");
  const carouselNav = document.querySelector(".carousel-nav");
  const sliderIndicator = document.querySelectorAll(".carousel-nav a");
  const dots = Array.from(sliderIndicator);

  // console.log(dots);

  
  const prevBtn = document.querySelector("#prevBtn");
  const nextBtn = document.querySelector("#nextBtn");

  let counter = 0;

  const slideSize = carouselImages[0].clientWidth;

  if (counter == 0 || 4) {
    navbar.className ="navbar text-dark";
  }

  // Move the Slider
  function moveSlide() {
    carouselSlide.style.transform = "translateX(" + (-slideSize * counter) + "px)";
  }

  moveSlide();

  function setInitialIndicator() {
    sliderIndicator[counter].classList.add("active-slide");
  }
  
  setInitialIndicator();

  function resetIndicators() {
    sliderIndicator[4].classList.remove("active-slide");
    sliderIndicator[0].classList.add("active-slide");
  }

  var interval;

  function startInterval() {
    interval = setInterval(function() {
      counter++;
      moveSlide();
      updateIndicatorsN();
  
      if (counter === sliderIndicator.length) {
        counter = 0;
        moveSlide();
        resetIndicators()
      }
    }, 4000);
  }


  prevBtn.addEventListener("mouseover", stopInterval);
  nextBtn.addEventListener("mouseover", stopInterval);
  carouselNav.addEventListener("mouseover", stopInterval);
  carouselSlide.addEventListener("mouseover", stopInterval);
  carouselSlide.addEventListener("mouseleave", startInterval);

  startInterval();

  function stopInterval() {
    clearInterval(interval);
    console.log("Log");
  }

  

  sliderIndicator[0].addEventListener("click", function() {
    sliderIndicator[counter].classList.remove("active-slide");
    sliderIndicator[0].classList.add("active-slide");
    counter = 0;
    moveSlide();
  });
  sliderIndicator[1].addEventListener("click", function() {
    sliderIndicator[counter].classList.remove("active-slide");
    sliderIndicator[1].classList.add("active-slide");
    counter = 1;
    moveSlide();
  });
  sliderIndicator[2].addEventListener("click", function() {
    sliderIndicator[counter].classList.remove("active-slide");
    sliderIndicator[2].classList.add("active-slide");
    counter = 2;
    moveSlide();
  });
  sliderIndicator[3].addEventListener("click", function() {
    sliderIndicator[counter].classList.remove("active-slide");
    sliderIndicator[3].classList.add("active-slide");
    counter = 3;
    moveSlide();
  });
  sliderIndicator[4].addEventListener("click", function() {
    sliderIndicator[counter].classList.remove("active-slide");
    sliderIndicator[4].classList.add("active-slide");
    counter = 4;
    moveSlide();
  });

  function updateIndicatorsP() {
    if (counter <= -1) {return;}
    sliderIndicator[counter].classList.add("active-slide");
    sliderIndicator[counter+1].classList.remove("active-slide");
  }

  function updateIndicatorsN() {
    if (counter > carouselImages.length - 1) {return;}
    sliderIndicator[counter].classList.add("active-slide");
    sliderIndicator[counter-1].classList.remove("active-slide");
  }

  prevBtn.addEventListener("click", () => {
    if (counter <= -1) {return;}
    
    counter--;
    moveSlide();
    carouselSlide.style.transition = "transform 0.2s";
    updateIndicatorsP();
    console.log(counter);
  });

  nextBtn.addEventListener("click", () => {
    if (counter > carouselImages.length) {return;}
    
    counter++;
    // if (counter == carouselImages.length) {return;}
    moveSlide();
    carouselSlide.style.transition = "transform 0.2s";
    updateIndicatorsN();
    console.log(counter);
  });

  carouselSlide.addEventListener("transitionstart", () => {
    if (counter > carouselImages.length - 1) {
      counter = 0;
      sliderIndicator[4].classList.remove("active-slide");
      sliderIndicator[0].classList.add("active-slide");
      moveSlide();
      // carouselSlide.style.transition = "transform 0.2s";
    }
    if (counter <= -1) {
      counter = carouselImages.length - 1;
      sliderIndicator[4].classList.add("active-slide");
      sliderIndicator[0].classList.remove("active-slide");
      moveSlide();
      // carouselSlide.style.transition = "transform 0.2s";
    }
    if (counter == 1) {
      navLink.classList.add("text-default");
      navLink.classList.remove("text-dark");
    }
    
  });
  
  
}

