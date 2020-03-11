const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navLinks = document.querySelectorAll("a");
navLinks[0].textContent = siteContent["nav"]["nav-item-1"];
navLinks[1].textContent = siteContent["nav"]["nav-item-2"];
navLinks[2].textContent = siteContent["nav"]["nav-item-3"];
navLinks[3].textContent = siteContent["nav"]["nav-item-4"];
navLinks[4].textContent = siteContent["nav"]["nav-item-5"];
navLinks[5].textContent = siteContent["nav"]["nav-item-6"];

navLinks.forEach(element => {
  element.style.color = '#67e073';
})

let headerTitle = document.querySelector("h1");
headerTitle.textContent = siteContent["cta"]["h1"]; 

let getStarted = document.querySelector("button");
getStarted.textContent = siteContent["cta"]["button"];
getStarted.style.backgroundColor = "dodgerblue";
getStarted.style.borderRadius = "100%";

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let subHead = document.getElementsByTagName("h4");
subHead[0].textContent = siteContent["main-content"]["features-h4"];
subHead[1].textContent = siteContent["main-content"]["about-h4"];
subHead[2].textContent = siteContent["main-content"]["services-h4"];
subHead[3].textContent = siteContent["main-content"]["product-h4"];
subHead[4].textContent = siteContent["main-content"]["vision-h4"];
subHead[5].textContent = siteContent["contact"]["contact-h4"];

let subInfo = document.getElementsByTagName("p");
subInfo[0].textContent = siteContent["main-content"]["features-content"];
subInfo[1].textContent = siteContent["main-content"]["about-content"];
subInfo[2].textContent = siteContent["main-content"]["services-content"];
subInfo[3].textContent = siteContent["main-content"]["product-content"];
subInfo[4].textContent = siteContent["main-content"]["vision-content"];
subInfo[5].textContent = siteContent["contact"] ["address"];
subInfo[6].textContent = siteContent["contact"] ["phone"];
subInfo[7].textContent = siteContent["contact"] ["email"];
subInfo[8].textContent = siteContent["footer"]["copyright"];

let mainImg = document.getElementById("middle-img");
mainImg.src = siteContent["main-content"]["middle-img-src"];


const newLinkEnd = document.createElement('a');
newLinkEnd.textContent = "Ideas";
newLinkEnd.style.color = "#67e073";

const newLinkStart = document.createElement('a');
newLinkStart.textContent = "Great";
newLinkStart.style.color = "#67e073";

const nav = document.querySelector('nav');
nav.appendChild(newLinkEnd);
nav.prepend(newLinkStart);

const middle = document.querySelector(".main-content");
middle.style.backgroundColor = "#67e073";
middle.style.color = "white";
middle.style.marginBottom = "0";

const bottom = document.querySelector(".contact");
bottom.style.backgroundColor = "dodgerblue";
bottom.style.color = "white";
bottom.style.marginTop = "0";
bottom.style.height = "15rem";
bottom.style.paddingTop = "4rem";