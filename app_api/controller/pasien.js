const mongoose = require("mongoose");

const pasien = mongoose.model("Pasien");

const pasienList = (req, res) => {
    pasien.find({},
        function (err, result){
            if(err){
                res.status(500)
                .json({
                    "status": "failed"
                });
            } else {
                res.status(200)
                .json(result);
            }
        });
}
const pasienCreate = (req, res) => {
    pasien.create({
        nama: req.body.nama,
        tgl_lahir: req.body.tgl_lahir,
        tempat_lahir: req.body.tmpt_lahir,
        jenis_kelamin: req.body.jenis_kelamin,
        umur: req.body.umur,
        gol_darah: req.body.gol_darah,
        tinggi_badan: req.body.tinggi_badan,
        berat_badan: req.body.berat_badan,
        alamat: req.body.alamat,
        no_tlpn: req.body.no_tlpn
    }, (err, result) => {
        if (err) {
            res
                .status(400)
                .json(err);
        } else {
            res
                .status(201)
                .json(result);
        }
    });
}
const pasienReadOne = (req, res) => {
    pasien
        .findById(req.params.id)
        .exec((err,pasien) => {
            res
                .status(200)
                .json(psn);
        });
}
const pasienUpdateOne = (req, res) => {
    pasien
        .findById(req.params.id)
        .exec((err, pasien) => {
            pasien.nama = req.body.nama,
            pasien.tgl_lahir = req.body.tgl_lahir,
            pasien.tempat_lahir = req.body.tmpt_lahir,
            pasien.jenis_kelamin = req.body.jenis_kelamin,
            pasien.umur = req.body.umur,
            pasien.gol_darah = req.body.gol_darah,
            pasien.tinggi_badan = req.body.tinggi_badan,
            pasien.berat_badan = req.body.berat_badan,
            pasien.alamat = req.body.alamat,
            pasien.no_tlpn = req.body.no_tlpn;
            pasien.save((err, result) => {
                if (err) {
                    res
                        .status(404)
                        .json(result);
                } else {
                    res
                        .status(200)
                        .json(result);
                }
            });
        })
}
const pasienDeleteOne = (req, res) => {
    pasien
        .findById(req.params.id)
        .exec((err, pasien) => {
            psn.remove((err, result) => {
                if (err) {
                    res
                        .satatus(404)
                        .json(err);
                }
                res
                    .status(204)
                    .json(null);
            });
        });
}
module.exports = {
    pasienCreate,
    pasienDeleteOne,
    pasienList,
    pasienReadOne,
    pasienUpdateOne
}