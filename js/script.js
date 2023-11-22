/*--------------------------- typing animation---------------------------- */
// Using Typed.js for a typing animation effect
let typed = new Typed(".typing", {
  strings: ["", "Web Designer", "Graphic Designer", "Web Developer", "Mechanical Engineer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

/*==============Aside===================== */
// Selecting necessary elements from the DOM
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

// Adding click event listeners to each navigation item
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    // Removing the 'back-section' class from all sections
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      // Adding the 'back-section' class to the previously active section
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      // Removing the 'active' class from all navigation items
      navList[j].querySelector("a").classList.remove("active");
    }
    // Adding the 'active' class to the clicked navigation item
    this.classList.add("active");
    // Displaying the corresponding section
    showSection(this);
    // Closing the aside menu for small screens
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

// Function to remove the 'back-section' class from all sections
function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

// Function to add the 'back-section' class to a specific section
function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

// Function to display the clicked section
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

// Function to update the navigation based on the current active section
function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

// Adding a click event listener to the "Hire Me" button
document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

// Adding a click event listener to the navigation toggler button
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

// Function to toggle the 'open' class for the aside menu and sections
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}
