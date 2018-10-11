const Pelanggan = require('../models/pelanggan.model.js');
// Create and Save a new Pelanggan
exports.create = (req, res) => {
    // Validate request
    if(!req.body.nama) {
        return res.status(400).send({
            message: "Nama tidak boleh Kosong"
        });
    }
    // Create a Pelanggan
    const pelanggan = new Pelanggan({
        nama: req.body.nama,
        alamat: req.body.alamat || "Untitled address", 
        notelp: req.body.notelp || "Untitled no telp", 
        umur: req.body.umur || "Untitled umur", 
    });
    // Save Pelanggan in the database
    pelanggan.save()
    // res.send(Pelanggan);
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Pelanggan."
        });
    });
};
// Retrieve and return all Pelanggans from the database.
exports.findAll = (req, res) => {
    Pelanggan.find()
    .then(Pelanggans => {
        res.send(Pelanggans);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Pelanggans."
        });
    });
};

// Find a single Pelanggan with a PelangganId
exports.findOne = (req, res) => {
    Pelanggan.findById(req.params.PelangganId)
    .then(Pelanggan => {
        if(!Pelanggan) {
            return res.status(404).send({
                message: "Pelanggan not found with id " + req.params.PelangganId
            });            
        }
        res.send(Pelanggan);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Pelanggan not found with id " + req.params.PelangganId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Pelanggan with id " + req.params.PelangganId
        });
    });
};

// Update a Pelanggan identified by the PelangganId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.nama) {
        return res.status(400).send({
            message: "nama tidak boleh kosong"
        });
    }

    // Find Pelanggan and update it with the request body
    Pelanggan.findByIdAndUpdate(req.params.PelangganId, {
         nama: req.body.nama,
        alamat: req.body.alamat || "Untitled address", 
        notelp: req.body.notelp || "Untitled no telp", 
        umur: req.body.umur || "Untitled umur", 
    }, {new: true})
    .then(Pelanggan => {
        if(!Pelanggan) {
            return res.status(404).send({
                message: "Pelanggan not found with id " + req.params.PelangganId
            });
        }
        res.send(Pelanggan);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Pelanggan not found with id " + req.params.PelangganId
            });                
        }
        return res.status(500).send({
            message: "Error updating Pelanggan with id " + req.params.PelangganId
        });
    });
};

// Delete a Pelanggan with the specified PelangganId in the request
exports.delete = (req, res) => {
    Pelanggan.findByIdAndRemove(req.params.PelangganId)
    .then(Pelanggan => {
        if(!Pelanggan) {
            return res.status(404).send({
                message: "Pelanggan not found with id " + req.params.PelangganId
            });
        }
        res.send({message: "Pelanggan deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Pelanggan not found with id " + req.params.PelangganId
            });                
        }
        return res.status(500).send({
            message: "Could not delete Pelanggan with id " + req.params.PelangganId
        });
    });
};