const mongoose = require("mongoose");

const rmedis = mongoose.model("Rmedis");

const rmedisList = (req, res) => {
    rmedis.find({},
        function(err, result){
            if(err){
                res
                    .status(500
                    .json({
                    "status": "failed"
                }));
            }else{
                res
                    .status(200)
                    .json(result)
            }
        });
}
const rmedisCreate = (req, res) => {
    rmedis.create({
        no_rekam_medis: req.body.no_rekam_medis,
        tanggal: req.body.tanggal,
        nama_pasien: req.body.nama_pasien,
        keluhan: req.body.keluhan,
        diagnosis: req.body.diagnosis,
        jenis_pengobatan: req.body.jenis_pengobatan,
    }, (err, result) =>{
        if(err){
            res
                .status(400)
                .json(err);
        }else{
            res
                .status(202)
                .json(result);
        }
    });
}
const rmedisReadOne = (req, res) => {
    rmedis
        .findById(req.params.id)
        .exec((err, rmedis) => {
            res
                .status(200)
                .json(rmedis)
        });
}
const rmedisUpdateOne = (req, res) => {
    rmedis
        .findById(req.params.id)
        .exec((err, rmedis) => {
            rmedis.no_rekam_medis= req.body.no_rekam_medis,
            rmedis.tanggal= req.body.tanggal,
            rmedis.nama_pasien= req.body.nama_pasien,
            rmedis.keluhan= req.body.keluhan,
            rmedis.diagnosis= req.body.diagnosis,
            rmedis.jenis_pengobatan= req.body.jenis_pengobatan,
            rmedis.save((err, result) => {
                if (err) {
                    res
                        .status(404)
                        .json(result)
                } else{
                    res
                        .status(200)
                        .json(result);
                }
            });
        })
}
const rmedisDeleteOne = (req, res) => {
    rmedis
        .findById(req.params.id)
        .exec((err, rmedis) => {
            rmedis.remove((err, result) => {
                if(err){
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
module.exports={
    rmedisCreate,
    rmedisDeleteOne,
    rmedisList,
    rmedisReadOne,
    rmedisUpdateOne
}