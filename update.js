const fs = require('fs')

const update = function(note, oldNote){
    const oNote = JSON.parse(oldNote)
    const newNote = oNote.map(function(n,id){
        
        if(n.id == note.id) {
            n.name = note.name
            n.gender = note.gender
        }
        return n
    })
    fs.writeFileSync('./note.txt', JSON.stringify(newNote))
}

module.exports = update