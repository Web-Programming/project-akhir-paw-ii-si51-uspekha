const mongoose = require("mongoose");

const pasien = mongoose.model("Pasien");

const psnList = (req, res) => {
    pasien.find({},
        function (err, result){
            if(err){
                res.status(500)
                .json({
                    "status": "failed"
                });
            } else {
                res.status(200)
                .json({
                    "satatus": "success",
                    "data": result
                });
            }
        });
}
const psnCreate = (req, res) => {
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
const psnReadOne = (req, res) => {
    pasien
        .findById(req.params.id)
        .exec((err,psn) => {
            res
                .status(200)
                .json(psn);
        });
}
const psnUpdateOne = (req, res) => {
    pasien
        .findById(req.params.id)
        .exec((err, psn) => {
            psn.nama = req.body.nama,
            psn.tgl_lahir = req.body.tgl_lahir,
            psn.tempat_lahir = req.body.tmpt_lahir,
            psn.jenis_kelamin = req.body.jenis_kelamin,
            psn.umur = req.body.umur,
            psn.gol_darah = req.body.gol_darah,
            psn.tinggi_badan = req.body.tinggi_badan,
            psn.berat_badan = req.body.berat_badan,
            psn.alamat = req.body.alamat,
            psn.no_tlpn = req.body.no_tlpn;
            psn.save((err, result) => {
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
const psnDeleteOne = (req, res) => {
    pasien
        .findById(req.params.id)
        .exec((err, psn) => {
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
    psnCreate,
    psnDeleteOne,
    psnList,
    psnReadOne,
    psnUpdateOne
}