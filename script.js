//ur image number
const imageNumber = 42;

//displaying all the images
const imges = document.getElementById("imges"); 
for (let i = 1; i <= imageNumber; i++) {
  const div = document.createElement("div");
  div.className = "relative overflow-hidden rounded-lg cursor-pointer shadow-md";
  div.id = `${i}`;
  div.onclick=function() {openModal(i)};
  const img = document.createElement("img");
  img.id = `image_${i}`;
  img.src = `l-im/${i}.jpg`;
  img.alt = `Image ${i}`;
  img.loading = "lazy"; 
  img.className = "w-full h-full object-cover transition-transform";
  div.appendChild(img);
  imges.appendChild(div);
}

//for the modal
function openModal(id) {
  const modal = document.getElementById("imageModal");
  modal.classList.remove("hidden");
  setTimeout(()=>document.getElementById("modalBody").classList.add("open"),10);
  document.getElementById("imageM").src = `h-im/${id}.jpg`;
  const img = document.getElementById("image_"+id);
  preventScroll();

  img.onload = function () {
    EXIF.getData(img, function () {
      let metadata = EXIF.getAllTags(this);
      const Exposure = metadata.ExposureTime ? `1/${Math.round(1 / metadata.ExposureTime)}`: "N/A";
      let infoText = `
              Camera: ${metadata.Make || "Unknown"} ${metadata.Model || ""}
              <br> Exposure: ${Exposure} sec
              <br> Aperture: f/${metadata.FNumber || "N/A"}
              <br> ISO: ${metadata.ISOSpeedRatings || "N/A"}
          `;
      document.getElementById("imageInfo").innerHTML = infoText;
    });
  };
  if (img.complete) {
    img.onload();
  }
  setTimeout(()=>{
    document.addEventListener("click", function closeModal() {
      activeScroll();
      document.getElementById("modalBody").classList.remove("open");
      setTimeout(() =>modal.classList.add("hidden") , 700);
      document.removeEventListener("click", closeModal);
      
    });
},100 );
}
function preventScroll() {
  window.addEventListener('scroll', preventDefault, { passive: false });
  window.addEventListener('touchmove', preventDefault, { passive: false });
  window.addEventListener('wheel', preventDefault, { passive: false });
}

function activeScroll() {
  window.removeEventListener('scroll', preventDefault);
  window.removeEventListener('touchmove', preventDefault);
  window.removeEventListener('wheel', preventDefault);
}

function preventDefault(e) {
  e.preventDefault();
}

function closeModal() {
  document.getElementById("imageModal").classList.add("hidden"); // Hide modal
}

//for slider 
const slides = document.querySelectorAll('.slides');
function showSlide() {
  for (let i = 0; i < slides.length; i++) {
    setTimeout(() => {
      slides.forEach((slide) => {
        slide.classList.add('hidden');
        slide.style.width = "100%";
        slide.classList.remove('order-1','order-2','order-3');

    });
      slides[i].classList.remove('hidden');
      slides[i].classList.add('order-1')
      slides[i].style.opacity = "0.5";
      slides[(i + 1) % slides.length].classList.remove('hidden');
      slides[(i + 1) % slides.length].classList.add('order-2')
      slides[(i + 1) % slides.length].style.opacity = "1";
      slides[(i + 1) % slides.length].style.width = "200%";
      slides[(i + 2) % slides.length].classList.remove('hidden');
      slides[(i + 2) % slides.length].style.opacity = "0.5";
      slides[(i + 2) % slides.length].classList.add('order-3')
    }, i*3000);
    
  }
}
showSlide();
setInterval(showSlide, 15000);

//spilting the letter to animate 
document.addEventListener ("DOMContentLoaded", function () {
  const textElement = document.querySelector(".animate-text");
  const text = textElement.textContent;
  textElement.innerHTML = "";

  Array.from(text).forEach((letter, index) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.setProperty("--letter", index);
    textElement.appendChild(span);
  });
});
