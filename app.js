const add = require('./add')
const write = require('./write')
const read = require('./read')
const del = require('./del')
// const update = require('./update')

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

    const present = require('./present')
    
    present(read())
}

if(cmd[2] == 'read') {

    const present = require('./present')
    
    present(read())
}

if(cmd[2] === 'delete') {
    let id = cmd[3]
    let oldNote = read()
    let del = require('./del')
    del(id, oldNote)

    const present = require('./present')
    present(read())
}

if(cmd[2] == 'update') {
    
    let note = { 
        id: cmd[3],
        name: cmd[4],
        gender: cmd[5]
    }

    let oldNote = read()
    let update = require('./update')
    update(note, oldNote)
    
    const present = require('./present')
    present(read())
}