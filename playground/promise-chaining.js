require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('60f40147d61c2c5b80c29d91', {age: 1}).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1})
}).then((result) => {
    console.log(result)
}).catch(e => {
    console.log(e)
})

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('60efe87d76cf124a0ff20c6a', 20).then(count => {
    console.log(count)
}).catch(e => {
    console.log(e)
})