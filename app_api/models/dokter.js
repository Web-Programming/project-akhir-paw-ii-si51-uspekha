const mongoose = require("mongoose");

const schemaDokter = new mongoose.Schema({
    nama: String,
    jenis_kelamin: String,
    umur: String,
    spesialis: String,
    alamat: String,
    no_tlpn: String,
});

mongoose.model("Dokter", schemaDokter, "dokter")