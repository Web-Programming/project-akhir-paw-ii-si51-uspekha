var express = require("express");
const {
    route
} = require("express/lib/router");
var router = express.Router();

const ctrlPsn = require("../controller/pasien");

router.route("/pasien")
    .get(ctrlPsn.psnList)
    .post(ctrlPsn.psnCreate);

router.route("/pasien/:id")
    .get(ctrlPsn.psnReadOne)
    .put(ctrlPsn.psnUpdateOne)
    .delete(ctrlPsn.psnDeleteOne)

module.exports = router;