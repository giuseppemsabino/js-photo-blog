const displayCards = document.getElementById('cards-display')

fetch('https://jsonplaceholder.typicode.com/photos?_limit=6')
.then((res) => res.json())
.then (posts => {

    console.log(posts);

    posts.forEach((post) => {

        displayCards.innerHTML +=`
        <div class="col-4 my-3">
          <div class="card h-100 ">
            <img src="${post.url}"class="p-3" alt="">
            <p class="m-3 fs-5">${post.title}</p>
          </div>
         </div>`
    });
})
console.log('test')