var express = require("express");
const {
    route
} = require("express/lib/router");
var router = express.Router();

const ctrlPasien = require("../controller/pasien");

router.route("/pasien")
    .get(ctrlPasien.pasienList)
    .post(ctrlPasien.pasienCreate);

router.route("/pasien/:id")
    .get(ctrlPasien.pasienReadOne)
    .put(ctrlPasien.pasienUpdateOne)
    .delete(ctrlPasien.pasienDeleteOne)

module.exports = router;