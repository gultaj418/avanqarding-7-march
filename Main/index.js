const express = require("express");
const app = express();
const path = require("path");
const expressValidator = require("express-validator");
const bodyParser = require("body-parser");
const { engine } = require("express-handlebars");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");
const helmet = require("helmet");
const router = require("./src/Router/Router");
const { noCache } = require("helmet");
const yamljs = require("yamljs");
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = yamljs.load("./swagger.yaml");

const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST;

app.use(helmet({ contentSecurityPolicy: false, }));


app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    key: process.env.SESSION_KEY,
    saveUninitialized: false,
    resave: false,
  })
);
app.use(express.static(path.join(__dirname, "/Content")));
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
app.use("/", router);

router.use("/api-docs/", swaggerUI.serve);
router.get("/api-docs/", swaggerUI.setup(swaggerDocument));

app.listen(PORT, async () => {
  await mongoose.connect(process.env.db_url);
  console.log(`Server http://${HOST}:${PORT}/`);
});
