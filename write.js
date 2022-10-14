const fs = require('fs')

const write = function(data=[]) {
    fs.writeFileSync('note.txt', data)
}

module.exports = write