// CALLBACKS
// FUNCION que se ejecuta a traves de una funcion
// NO son asincronos

/* const getUser = (id, cb) => {
    const user = {
        name: 'Dorian',
        id: id
    }
    if (id == 2) cb('user no exist',user)
    else cb(null,user)
} 

getUser(1, (err,user) => {
    if (err) {
        return console.log(err)
    } else {
        console.log(`usernae is ${user.name}` )
    }
}) */

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

const getUser = (id,cb) => {
    const user = users.find(user => user.id==id)
    if (!user) cb(`No exist whit user id: ${id} `)
    else cb(null,user)
}

const getEmail = (user, cb) => {
    const email = emails.find(email => email.id == user.id)
    if (!email) cb(`${user.name} hasn´t email `)
    else cb(null,{
        id: user.id,
        name: user.name,
        email: email.email
    })
}

getUser(3, (err,user) => {
    if (err) {
        return console.log(err)
    }
    getEmail(user, (err,res) => {
        if (err) return console.log(err)
        console.log(res)
    })
})

