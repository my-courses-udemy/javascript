const users = [
    {
        id: 1,
        name: 'dorian'
    },
    {
        id: 2,
        name: 'laura'
    },
    {
        id: 3,
        name: 'carlos'
    }
]

const emails = [
    {
        id: 1,
        email: 'dorian@gmail.com'
    },
    {
        id: 2,
        email: 'laura@gmail.com'
    }
]

// PROMESA
// OBJETO CON 2 CALLBACKS INTERNOS
const getUser = (id) => {
    const user = users.find(user => user.id == id)
    const promise = new Promise((res, rej) => {
        if (!user) rej(`Doesn´t exist an user with id ${id}`)
        else res(user)
    })

    return promise

}

const getEmail = (user) => {
    const email = emails.find(email => email.id == user.id)

    const promise = new Promise((res, rej) => {
        if (!email) rej(`${user.name} hasn´t email`)
        else res({
            id: user.id,
            name: user.name,
            email: email.email
        })
    })

    return promise
}

getUser(2)
.then(user => getEmail(user))
.then(res => console.log(res))
.catch(err => console.log(err))