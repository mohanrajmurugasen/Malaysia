const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models");
const PORT = process.env.PORT || 4000;
const apiRoutes = require("./routes/apiRoutes");
const adminRoutes = require("./routes/adminRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/',apiRoutes);
app.use('/',adminRoutes);

db.sequelize.sync().then(() => {
    app.listen(PORT,() => {
        console.log(`Server started on port ${PORT}`);
    })
})