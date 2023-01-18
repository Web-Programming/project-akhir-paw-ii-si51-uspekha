var express = require("express");
const {
    route
} = require("express/lib/router");
var router = express.Router();

const ctrlPasien = require("../controller/pasien");
const ctrlDokter = require("../controller/dokter");
const ctrlRmedis = require("../controller/rmedis");

router.route("/pasien")
    .get(ctrlPasien.pasienList)
    .post(ctrlPasien.pasienCreate);

router.route("/pasien/:id")
    .get(ctrlPasien.pasienReadOne)
    .put(ctrlPasien.pasienUpdateOne)
    .delete(ctrlPasien.pasienDeleteOne);


router.route("/dokter")
    .get(ctrlDokter.dokterList)
    .post(ctrlDokter.dokterCreate);

router.route("/dokter/:id")
    .get(ctrlDokter.dokterReadOne)
    .put(ctrlDokter.dokterUpdateOne)
    .delete(ctrlDokter.dokterDeleteOne);

    router.route("/rmedis")
    .get(ctrlRmedis.rmedisList)
    .post(ctrlRmedis.rmedisCreate);

router.route("/rmedis/:id")
    .get(ctrlRmedis.rmedisReadOne)
    .put(ctrlRmedis.rmedisUpdateOne)
    .delete(ctrlRmedis.rmedisDeleteOne);

module.exports = router;