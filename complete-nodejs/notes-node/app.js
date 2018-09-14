const fs = require("fs");
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const COMMANDS = {
  title: {
    describe: 'Title of Note',
    demand: true,
    alias: 't'
  },
  body: {
    describe: 'Body of Note',
    demand: true,
    alias: 'b'
  }
}


const argv = yargs
  .command('add', 'Add a new note', {
    title: COMMANDS.title,
    body: COMMANDS.body
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: COMMANDS.title
  })
  .command('remove', 'Remove a note', {
    title: COMMANDS.title
  })
  .help()
  .argv;

var command = argv._[0];

if ( command === 'add' ) {
  var note = notes.addNote(argv.title, argv.body);
  if (_.isUndefined(note)) {
    console.log("Note already exists");
  } else {
    notes.logNote(note);
  }
} else if ( command === 'list' ) {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach( (note) => notes.logNote(note) );

} else if ( command === 'read' ) {
  var note = notes.getNote(argv.title);
  if (_.isUndefined(note)) {
    console.log(`No note with Title: ${argv.title} exists`);
  } else {
    notes.logNote(note);
  }
} else if ( command === 'remove' ) {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? `Note with Title: ${argv.title} removed` : 'No note removed'
  console.log(message);
} else {
  console.log('Command not recognized');
}
