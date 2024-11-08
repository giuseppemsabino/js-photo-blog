const displayCards = document.getElementById("cards-display");
const layoverdisplay = document.getElementById("layover");
const closeButtonLO = document.getElementById("close-button");

fetch("https://jsonplaceholder.typicode.com/photos?_limit=6")
  .then((res) => res.json())
  .then((posts) => {
    console.log(posts);

    posts.forEach((post) => {
      displayCards.innerHTML += `
        <div class="col-4 my-3">
          <div class="card h-100 ">
            <img src="${post.url}"class="p-3" alt="">
            <p class="m-3 fs-5">${post.title}</p>
          </div>
         </div>`;
    });

    const displayCardEl = document.querySelectorAll("#cards-display .card");

    displayCardEl.forEach((cardEl) => {
      cardEl.addEventListener("click", function () {
        layoverdisplay.classList.remove('d-none')
        console.log(this);
      });
    });

    closeButtonLO.addEventListener('click', () => {
      layoverdisplay.classList.add('d-none');
    })


  });
console.log("test");
