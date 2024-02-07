const mongoose = require("mongoose");
const debug = require('debug')("mongoose-movies:database")

mongoose.set("debug", true);
mongoose.connect(process.env.DATABASE_URL);

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on("connected", function () {
    debug(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});
