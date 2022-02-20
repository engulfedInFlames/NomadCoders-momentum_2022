const body = document.querySelector("body");

const imgs = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img9.jpg",
  "img10.jpg",
];

const chosenImg = imgs[Math.floor(Math.random() * imgs.length)];
const bgImg = document.createElement("img");
bgImg.src = `img/${chosenImg}`;
body.appendChild(bgImg);
bgImg.classList.add("background");

//append는 뒤에, prepend는 앞에
//document.body.insertBefore(element1, element2)로 원하는 위치에 insert
