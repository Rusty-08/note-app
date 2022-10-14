const add = require('./add')
const write = require('./write')
const read = require('./read')

const cmd = process.argv

var note = {}

if(cmd[2] == 'add') {

    note = { 
        id: cmd[3],
        name: cmd[4],
        gender: cmd[5]
    }
    var oldNote = read()

    add(note, oldNote)
}