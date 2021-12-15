const button = document.getElementById('button')

button.addEventListener('click', () => {
    axios({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: {
            title: 'A new Post',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum!',
            userId: 1
        }
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
})