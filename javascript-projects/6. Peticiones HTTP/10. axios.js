const button = document.getElementById('button')

/* button.addEventListener('click', () => {
    // PARA VER SI FETCH FUNCIONA EN EL NAVEGADOR
    // if (window.fetch != undefined) console.log('FECHT OK')
    // else console.log('FETCH NOT WORKS')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            const list = document.getElementById('list')
            const fragment = document.createDocumentFragment()
            for (const userInfo of res){
                const listItem = document.createElement('li')
                listItem.textContent = `${userInfo.id} - ${userInfo.name} - ${userInfo.email}`
                fragment.appendChild(listItem)
            }
            list.appendChild(fragment)
        })
}) */

button.addEventListener('click', () => {
    axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users'
    }).then(res => {
        const list = document.getElementById('list')
        const fragment = document.createDocumentFragment()
        for (const userInfo of res.data){
            const listItem = document.createElement('li')
            listItem.textContent = `${userInfo.id} - ${userInfo.name} - ${userInfo.email}`
            fragment.appendChild(listItem)
        }
        list.appendChild(fragment)
    }).catch(err => console.log(err))
})