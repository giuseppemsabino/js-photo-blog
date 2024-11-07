const displayCards = document.getElementById('cards-display')

fetch('https://jsonplaceholder.typicode.com/photos?_limit=6')
.then((res) => res.json())
.then (posts => {

    console.log(posts);

    posts.forEach((post) => {

        displayCards.innerHTML +=`
        <div class="col-4">
          <div class="card h-100">
            <img src="${post.url}" alt="">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </div>
         </div>`
    });
})
console.log('test')