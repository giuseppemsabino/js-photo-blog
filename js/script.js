const displayCards = document.getElementById("cards-display");
const layoverdisplay = document.getElementById("layover");
const closeButtonLo = document.getElementById("close-button");
const layoverImg = document.querySelector("#layover-img img")

fetch("https://jsonplaceholder.typicode.com/photos?_limit=6")
  .then((res) => res.json())
  .then((posts) => {
    console.log(posts);

    posts.forEach((post) => {
      displayCards.innerHTML += `
        <div class="col-4 my-3">
          <div class="card h-100 ">
            <img src="${post.thumbnailUrl}"class="p-3" id="curretimg" alt="" data-bigurl="${post.url}">
            <p class="m-3 fs-5">${post.title}</p>
          </div>
         </div>`;
        //  console.log(post.thumbnailUrl);
        
    });

    
    

    const displayCardEl = document.querySelectorAll("#cards-display .card");

    displayCardEl.forEach((cardEl) => {
      cardEl.addEventListener("click", function () {
        const imgEl = cardEl.querySelector("img");
        console.log(imgEl);
        const bigUrl = imgEl.getAttribute("data-bigurl")
        console.log(bigUrl);

        layoverImg.src = bigUrl;       
        
        layoverdisplay.classList.remove('d-none')
      });
    });


    closeButtonLo.addEventListener('click', () => {
      layoverdisplay.classList.add('d-none')
    })


  });
console.log("test");
