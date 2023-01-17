const mongoose = require("mongoose");


const schemaPasien = new mongoose.Schema({
    nama: String,
    tgl_lahir: String,
    tempat_lahir: String,
    jenis_kelamin: String,
    umur: Number,
    gol_darah: String,
    tinggi_badan: String,
    berat_badan: String,
    alamat: String,
    no_tlpn: String,

});
mongoose.model("Pasien", schemaPasien, "psn")