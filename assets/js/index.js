
//featured products array
const products = [
  {
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1575663620136-5ebbfcc2c597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    description: "Lorem ipsum dolor sit amet",
    price: 20.99
  },
  {
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1575663620136-5ebbfcc2c597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 19.99,
    description: "Consectetur adipiscing elit"
  },
  {
    name: "Toys and Hobbies",
    image: "https://images.unsplash.com/photo-1575663620136-5ebbfcc2c597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 7.99,
    description: "Sed do eiusmod tempor incididunt"
  },
  {
    name: "Office Equipment",
    image: "https://images.unsplash.com/photo-1575663620136-5ebbfcc2c597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 7.99,
    description: "Sed do eiusmod tempor incididunt"
  }, {
    name: "Health and Wellness",
    image: "https://images.unsplash.com/photo-1575663620136-5ebbfcc2c597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 7.99,
    description: "Sed do eiusmod tempor incididunt"
  }, {
    name: "Household Items",
    image: "https://images.unsplash.com/photo-1575663620136-5ebbfcc2c597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 7.99,
    description: "Sed do eiusmod tempor incididunt"
  }, {
    name: "Food and Beverage",
    image: "https://images.unsplash.com/photo-1575663620136-5ebbfcc2c597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 7.99,
    description: "Sed do eiusmod tempor incididunt"
  }, {
    name: "Media",
    image: "https://images.unsplash.com/photo-1575663620136-5ebbfcc2c597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 7.99,
    description: "Sed do eiusmod tempor incididunt"
  }
];

const productCards = document.getElementById("product-cards");

products.forEach(product => {
  const card = document.createElement("li");
  card.classList.add("card");
  card.classList.add("cardslide");
  card.innerHTML = `
      <img class="d-block w-100" src="${product.image}" alt="${product.name}" />
      <h3 class="card-title">${product.name}</h3>
      <p class="card-content">${product.description}</p>
      <div class="card-link-wrapper">
      <button class="addcartBtn card-link">${product.price}<img src="https://img.icons8.com/doodle/100/000000/shopping-cart--v1.png" /></button>
    </div>
    `;
  productCards.appendChild(card);
});


//category array
const category = [
  {
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1575663620136-5ebbfcc2c597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    description: "Lorem ipsum dolor sit amet"
  },
  {
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1575663620136-5ebbfcc2c597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 19.99,
    description: "Consectetur adipiscing elit"
  },
  {
    name: "Toys and Hobbies",
    image: "https://images.unsplash.com/photo-1575663620136-5ebbfcc2c597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 7.99,
    description: "Sed do eiusmod tempor incididunt"
  },
  {
    name: "Office Equipment",
    image: "https://images.unsplash.com/photo-1575663620136-5ebbfcc2c597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 7.99,
    description: "Sed do eiusmod tempor incididunt"
  }, {
    name: "Health and Wellness",
    image: "https://images.unsplash.com/photo-1575663620136-5ebbfcc2c597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 7.99,
    description: "Sed do eiusmod tempor incididunt"
  }, {
    name: "Household Items",
    image: "https://images.unsplash.com/photo-1575663620136-5ebbfcc2c597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 7.99,
    description: "Sed do eiusmod tempor incididunt"
  }, {
    name: "Food and Beverage",
    image: "https://images.unsplash.com/photo-1575663620136-5ebbfcc2c597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 7.99,
    description: "Sed do eiusmod tempor incididunt"
  }, {
    name: "Media",
    image: "https://images.unsplash.com/photo-1575663620136-5ebbfcc2c597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 7.99,
    description: "Sed do eiusmod tempor incididunt"
  }
];

const categCards = document.getElementById("categ-cards");

category.forEach(product => {
  const card = document.createElement("li");
  card.classList.add("card");
  card.classList.add("cardslide");
  card.innerHTML = `
      <img class="d-block w-100" src="${product.image}" alt="${product.name}" />
      <h3 class="card-title">${product.name}</h3>
      <p class="card-content">${product.description}</p>
      <a href="" class="card-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket3-fill" viewBox="0 0 16 16">
      <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z"/>
    </svg>View Products</a>
    `;
  categCards.appendChild(card);
});


const animationCards = document.querySelectorAll('.cardslide');
animationCards.forEach(function (card) {
  card.style.transition = 'transform 0.5s ease-in-out';
});

let isDown = false;
let startX;
let scrollLeft;

productCards.addEventListener('mousedown', function (e) {
  isDown = true;
  productCards.classList.add('active');
  startX = e.pageX - productCards.offsetLeft;
  scrollLeft = productCards.scrollLeft;
});

productCards.addEventListener('mouseleave', function () {
  isDown = false;
  productCards.classList.remove('active');
});

productCards.addEventListener('mouseup', function () {
  isDown = false;
  productCards.classList.remove('active');
});

productCards.addEventListener('mousemove', function (e) {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - productCards.offsetLeft;
  const walk = (x - startX) * 3; // adjust scroll speed here
  productCards.scrollLeft = scrollLeft - walk;
});

const animationTest = document.querySelectorAll('.testimonial');
animationTest.forEach(function (card) {
  card.style.transition = 'transform 0.5s ease-in-out';
});


/** Scroll to top Button */

// get a reference to the button element
var scrollToTopBtn = document.getElementById('scrollToTopBtn');

// add a scroll event listener to the window object
window.addEventListener('scroll', function() {

  // if the user scrolls down more than 20 pixels, show the button
  if (window.scrollY > 20) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }

    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Get the height of the page
    const pageHeight = document.documentElement.scrollHeight;

    // Get the height of the viewport
    const viewportHeight = window.innerHeight;

    // Calculate the distance from the bottom of the page to the current scroll position
    const distanceToBottom = pageHeight - (scrollPosition + viewportHeight);

    // If the user has scrolled to the bottom of the page, add the "show" class to the button
    if (distanceToBottom <= 0) {
      scrollToTopBtn.classList.add("scrollBottom");
    } else {
      scrollToTopBtn.classList.remove("scrollBottom");
    }
  });

// add a click event listener to the button
scrollToTopBtn.addEventListener('click', function() {
  // scroll to the top of the page
  window.scrollTo({top: 0, behavior: 'smooth'});
  scrollToTopBtn.classList.add('hideBtn');
});