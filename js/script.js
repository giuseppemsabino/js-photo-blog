const postNumber = 6; 

fetch('https://jsonplaceholder.typicode.com/photos?_limit=' + postNumber)
.then((res) => res.json)
.then (posts => {
    console.log(posts.id);
    
})