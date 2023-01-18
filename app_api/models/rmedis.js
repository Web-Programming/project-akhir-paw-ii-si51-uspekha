const mongoose = require("mongoose");

const schemaRmedis = new mongoose.Schema({
    no_rekam_medis: String,
    tanggal: String,
    nama_pasien: String,
    keluhan: String,
    diagnosis: String,
    jenis_pengobatan: String,
});
mongoose.model("Rmedis", schemaRmedis, "rekam_medis")