const button = document.getElementById('button')

button.addEventListener('click', () => {
    const newPost = {
        title: 'A new Post',
        body: 'Lorem ipsum dolor sit amet.',
        userId: 5
    }
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            'Content-type':'application/json'
        }
    }).then(res => res.json())
        .then(json => console.log(json))


    // console.log(JSON.stringify(newPost))
})