const mongoose = require("mongoose");

const dokter = mongoose.model("Dokter");

const dokterList = (req, res) => {
    dokter.find({},
        function (err, result){
            if(err){
                res.status(500)
                .json({
                    "status": "failed"
                });
            }else{
                res.status(200)
                .json(result)
            }
        });
}
const dokterCreate = (req, res) => {
    dokter.create({
        nama: req.body.nama,
        jenis_kelamin: req.body.jenis_kelamin,
        umur: req.body.umur,
        spesialis: req.body.spesialis,
        alamat: req.body.alamat,
        no_tlpn: req.body.no_tlpn,
    }, (err, result) =>{
        if (err) {
            res
                .status(400)
                .json(err);
        } else {
            res
                .status(202)
                .json(result);
        }
    });
}
const dokterReadOne = (req, res) => {
    dokter
        .findById(req.params.id)
        .exec((err,dokter) => {
            res
                .status(200)
                .json(dokter)
        });
}
const dokterUpdateOne = (req, res) => {
    dokter
        .findById(req.params.id)
        .exec((err, dokter) => {
            dokter.nama = req.body.nama,
            dokter.jenis_kelamin = req.body.jenis_kelamin,
            dokter.umur = req.body.umur,
            dokter.spesialis = req.body.spesialiss,
            dokter.alamat = req.body.alamat,
            dokter.no_tlpn = req.body.no_tlpn,
            dokter.save((err, result) => {
                if (err) {
                    res
                        .status(404)
                        .json(result)
                } else {
                    res
                        .status(200)
                        .json(result);
                }
            });
        })
}
const dokterDeleteOne = (req, res) => {
    dokter
        .findById(req.params.id)
        .exec((err, dokter) => {
            dokter.remove((err, result) => {
                if(err) {
                    res
                        .status(404)
                        .json(err);
                }
                res
                    .status(204)
                    .json(null)
            });
        });
}
module.exports ={
    dokterCreate,
    dokterDeleteOne,
    dokterList,
    dokterReadOne,
    dokterUpdateOne
}