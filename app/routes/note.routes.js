module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');
    const pelanggan = require('../controllers/pelanggan.controller.js');

    // Create a new Note
    app.post('/notes', notes.create);

    // Retrieve all Notes
    app.get('/notes', notes.findAll);

    // Retrieve a single Note with noteId
    app.get('/notes/:noteId', notes.findOne);

    // Update a Note with noteId
    app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/notes/:noteId', notes.delete);

    app.post('/pelanggan', pelanggan.create);

    // Retrieve all Notes
    app.get('/pelanggan', pelanggan.findAll);

    // // Retrieve a single Note with noteId
    app.get('/pelanggan/:PelangganId', pelanggan.findOne);

    // // Update a Note with noteId
    app.put('/pelanggan/:PelangganId', pelanggan.update);

    // // Delete a Note with noteId
    app.delete('/pelanggan/:PelangganId', pelanggan.delete);

}