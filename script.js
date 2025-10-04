let mainPage = document.querySelector(".mainPage");
let blogContent = document.querySelector(".blogContent");
let cardMen = document.querySelector(".cardMen");
let cardgirl = document.querySelector(".cardgirl");
let aboutPage = document.querySelector(".about");
let contactus = document.querySelector(".contact");
let footwear = document.querySelector(".footware");

function home() {
   mainPage.style.display = "flex";
   cardMen.style.display = "block";
   cardgirl.style.display = "block";
   footwear.style.display = "block";
   blogContent.style.display = "block"
   contactus.style.display="none"
   
   document.getElementById("blog").style.color = "white";
   document.getElementById("shop").style.color = "white";
   document.getElementById("home").style.color = "rgb(1, 190, 190)";
   document.getElementById("about").style.color = "white";
   document.getElementById("contact").style.color="white";
}

function shop() {
   cardMen.style.display = "block";
   cardgirl.style.display = "block";
   footwear.style.display = "block";
   mainPage.style.display = "none"
   blogContent.style.display = "none";
   aboutPage.style.display = "none";
   contactus.style.display="none"
   
   document.getElementById("blog").style.color = "white";
   document.getElementById("about").style.color = "white";
   document.getElementById("shop").style.color = "rgb(1, 190, 190)"
   document.getElementById("home").style.color = "white"
   document.getElementById("contact").style.color="white";
}

function blog() {
   cardMen.style.display = "none";
   cardgirl.style.display = "none";
   footwear.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "block"
   aboutPage.style.display = "none";
   contactus.style.display="none"

   document.getElementById("blog").style.color = "rgb(1, 190, 190)";
   document.getElementById("home").style.color = "white"
   document.getElementById("shop").style.color = "white"
   document.getElementById("about").style.color = "white";
   document.getElementById("contact").style.color="white";
}

function about() {
   aboutPage.style.display = "block";
   cardMen.style.display = "none";
   cardgirl.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "none";
   contactus.style.display="none";

   document.getElementById("blog").style.color = "white";
   document.getElementById("home").style.color = "white"
   document.getElementById("shop").style.color = "white";
   document.getElementById("about").style.color = "rgb(1, 190, 190)"
   document.getElementById("contact").style.color="white";
}

function contact() {
   contactus.style.display="block";
   aboutPage.style.display = "none";
   cardMen.style.display = "none";
   cardgirl.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "none"
   document.getElementById("blog").style.color = "white";
   document.getElementById("home").style.color = "white";
   document.getElementById("shop").style.color = "white";
   document.getElementById("about").style.color = "white";
   document.getElementById("contact").style.color="rgb(1, 190, 190)"
} 

function showCard(imgElem) {
    const src = imgElem.getAttribute('src');
    const product = products.find(p => p.img === src);
    if (!product) return;

    document.querySelector('.fullPage').style.display = "flex";
    if (mainPage) mainPage.style.display = "none";
    if (cardMen) cardMen.style.display = "none";
    if (cardgirl) cardgirl.style.display = "none";
    if (aboutPage) aboutPage.style.display = "none";
    if (contactus) contactus.style.display = "none";
    if (footwear) footwear.style.display = "none";
    if (blogContent) blogContent.style.display = "none";

    document.getElementById("cartImg").src = product.img;
    document.getElementById("productName").textContent = product.name;
    document.getElementById("productLabel").textContent = "Special Price";
    document.getElementById("productPrice").textContent = "$" + product.price;
    document.getElementById("productDetails").textContent = product.details;

    loadReviews(product.img);
}

// Add to Cart
function addItem(){
   document.querySelector(".addCart").style.display="block";
   contactus.style.display="none";
   aboutPage.style.display = "none";
   cardMen.style.display = "none";
   cardgirl.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "none"
}
 
let cart = [];

// Add to Cart from product detail
function addToCart() {
    // Get current product image src
    const imgSrc = document.getElementById("cartImg").getAttribute("src");
    const product = products.find(p => p.img === imgSrc);
    if (!product) return;
    cart.push(product);
    updateCartUI();
    // Optionally, show a quick message or animation here
}

// Open cart sidebar
function addItem() {
    updateCartUI();
    document.getElementById("cartSidebar").classList.add("open");
    // Hide other sections if you want
}

// Close cart sidebar
function closeCart() {
    document.getElementById("cartSidebar").classList.remove("open");
}

// Update cart UI
function updateCartUI() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    const cartCount = document.getElementById("cartCount");
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach((item, idx) => {
        total += item.price;
        cartItems.innerHTML += `
            <li>
                <img src="${item.img}" alt="${item.name}" style="width:40px;height:40px;vertical-align:middle;margin-right:8px;">
                ${item.name} - $${item.price}
                <button onclick="removeFromCart(${idx})" style="float:right;">Remove</button>
            </li>
        `;
    });
   cartTotal.textContent = total;   // Sets the total price
   cartCount.textContent = cart.length; // Sets the number of items
}

// Remove item from cart
function removeFromCart(idx) {
    cart.splice(idx, 1);
    updateCartUI();
}

// Example product data (add more as needed)
const products = [
  {
    img: "srt1.webp",
    name: "Trending Shirt's",
    price: 11,
    details: "Men Regular Fit Solid Spread Collar Casual Shirt."
  },
  {
    img: "srt2.webp",
    name: "Trending Shirt's",
    price: 10,
    details: "Men Regular Fit Self Design Spread Collar Casual Shirt."
  },
  {
    img: "srt6.webp",
    name: "Trending Shirt's",
    price: 9,
    details: "Men Regular Fit Solid Spread Collar Casual Shirt."
  },
  {
    img: "srt7.jpg",
    name: "Trending Shirt's",
    price: 15,
    details: "Men Regular Fit Solid Spread Collar Casual Shirt."
  },
  {
    img: "wn6.webp",
    name: "Trending Girl Dresses",
    price: 15,
    details: "Stylish and comfortable dress for women."
  },
  {
    img: "wn1.jpg",
    name: "Trending Girl Dresses",
    price: 17,
    details: "Stylish and comfortable dress for women."
  },
  {
    img: "wn5.webp",
    name: "Trending Girl Dresses",
    price: 18,
    details: "Stylish and comfortable dress for women."
  },
  {
    img: "wn6.jpg",
    name: "Trending Girl Dresses",
    price: 14,
    details: "Stylish and comfortable dress for women."
  },
  {
    img: "ft2.jpg",
    name: "Trending Casual Footwear",
    price: 20,
    details: "Trendy and comfortable casual footwear."
  },
  {
    img: "ft4.jpg",
    name: "Trending Casual Footwear",
    price: 22,
    details: "Latest design casual footwear for all occasions."
  },
  {
    img: "ft1.jpg",
    name: "Trending Casual Footwear",
    price: 19,
    details: "Durable and stylish casual footwear."
  },
  {
    img: "ft3.jpg",
    name: "Trending Casual Footwear",
    price: 21,
    details: "Comfortable and fashionable footwear for daily use."
  }
];

function goBack() {
    document.querySelector('.fullPage').style.display = "none";
    // Show your main/shop sections again
    mainPage.style.display = "flex";
    cardMen.style.display = "block";
    cardgirl.style.display = "block";
    footwear.style.display = "block";
    blogContent.style.display = "block";
    aboutPage.style.display = "none";
    contactus.style.display = "none";
}

// review section
// Review storage (in-memory, per product)
let reviews = {};
let currentRating = 0;

// Handle star rating UI
const ratingStars = document.getElementById('ratingStars');
if (ratingStars) {
    ratingStars.addEventListener('mouseover', function(e) {
        if (e.target.dataset.value) {
            highlightStars(e.target.dataset.value);
        }
    });
    ratingStars.addEventListener('mouseout', function() {
        highlightStars(currentRating);
    });
    ratingStars.addEventListener('click', function(e) {
        if (e.target.dataset.value) {
            currentRating = parseInt(e.target.dataset.value);
            highlightStars(currentRating);
        }
    });
}
function highlightStars(rating) {
    const stars = document.querySelectorAll('#ratingStars span');
    stars.forEach(star => {
        star.classList.remove('selected', 'hovered');
        if (star.dataset.value <= rating) {
            star.classList.add('selected');
        }
    });
}

// Submit review
function submitReview() {
    const reviewText = document.getElementById('reviewText').value.trim();
    if (!reviewText || currentRating === 0) {
        alert('Please enter a review and select a rating.');
        return;
    }
    const imgSrc = document.getElementById("cartImg").getAttribute("src");
    if (!reviews[imgSrc]) reviews[imgSrc] = [];
    reviews[imgSrc].push({ text: reviewText, rating: currentRating });
    document.getElementById('reviewText').value = '';
    currentRating = 0;
    highlightStars(0);
    loadReviews(imgSrc);
}

// Load reviews for current product
function loadReviews(imgSrc) {
    const reviewsList = document.getElementById('reviewsList');
    reviewsList.innerHTML = '';
    if (reviews[imgSrc]) {
        reviews[imgSrc].forEach(r => {
            reviewsList.innerHTML += `
                <div class="review">
                    <span class="stars">${'&#9733;'.repeat(r.rating)}${'&#9734;'.repeat(5 - r.rating)}</span>
                    ${r.text}
                </div>
            `;
        });
    }
}

// Show reviews when product detail is opened
function buyNow() {
    // Add current product to cart
    addToCart();
    // Open the cart sidebar
    document.getElementById("cartSidebar").classList.add("open");
}

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    if (navToggle && navMenu) {
        navToggle.onclick = function() {
            navMenu.classList.toggle('open');
        };
        // Optional: Hide nav when a link is clicked (without overwriting existing onclicks)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
            });
        });
    }
});