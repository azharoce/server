const mongoose = require('mongoose');

const PelangganSchema = mongoose.Schema({
    nama: String,
    alamat: String,
    notelp:String,
    umur:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Pelanggan', PelangganSchema);