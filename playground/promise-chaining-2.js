require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('60f4002870befc5b2002d248').then(task => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then(result => {
//     console.log(result)
// }).catch(e => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const result = await Task.countDocuments({ completed: false })
    return result
}

deleteTaskAndCount('60f3ff69130a155af95f9679').then(result => {
    console.log(result)
}).catch(e => {
    console.log('e', e)
})