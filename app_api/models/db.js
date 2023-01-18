let mongoose = require("mongoose")

let dbURI = "mongodb+srv://si:sisteminformasi@cluster0.sscpnlc.mongodb.net/si51?retryWrites=true&w=majority";

mongoose.connect(dbURI, {
    useNewUrlParser: true
});

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (error) => {
    console.log("Connection Error : " + error);
});

mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from MongoDB");
});
//memanggil model
require("./pasien");
require("./dokter");
require("./rmedis");
