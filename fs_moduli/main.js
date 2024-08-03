const fileSystem = require('node:fs')
const filePath = './data/users.json'

const readFileSync = (filePath) => {
    try {
        const data = fileSystem.readFileSync(filePath, 'utf-8')
        return JSON.parse(data)

    } catch (error) {
        console.log("ERROR❗❗❗" + error.message)
    }
}

const writeFileSync = (filePath, content) => {
    try {
        fileSystem.writeFileSync(filePath, content)
        return "Successfully writed!✅"
    } catch (error) {
        console.log("ERROR❗❗❗" + error.message)
    }
}

// const data = readFileSync(filePath)
// console.log(writeFileSync('./data/text.txt', JSON.stringify(data, null, 4)))


fileSystem.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.log("ERROR❗❗❗" + err.message)
    }
    console.log(JSON.parse(data))
})

fileSystem.writeFile('./data/text.txt', "Assalomu alaykum", (err) => {
    if (err) {
        console.log("ERROR❗❗❗" + err.message)
    }
    console.log("Successfully writed!✅")
})
