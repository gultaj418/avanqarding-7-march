const { check, body } = require("express-validator");
const Router = require("express").Router;
const router = new Router();
const formController = require("../Controller/ContactFormController");
const serviceController = require("../Controller/ServiceFormController");
const productController = require("../Controller/ProductController");
const multer = require("multer");
const searchController = require("../Controller/SearchController");
const imageController = require("../Controller/ImageController");
const blogConroller = require("../Controller/BlogController");
const {min} = require("moment-timezone");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("aboutCompany");
});

router.get("/calculator", (req, res) => {
  res.render("calculator");
});

router.get("/contact", (req, res, next) => {
  res.render("contact");
});

router.post(
  "/contact",
  body("name")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Adınızı daxil edin !")
    .matches(/^[A-Za-z0-9 .,'!&]+$/)
    .withMessage("Lütfən düzgün ad daxil edin !")
      .isLength({ min: 3 })
      .withMessage("Ad çox qısa daxil edilib"),
  body("email")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Elektron ünvanınızı daxil edin !")
    .isEmail()
    .withMessage("Elektron ünvanınızı daxil edin !")
    .normalizeEmail()
    .withMessage("Elektron ünvanınızı daxil edin !"),
  body("phone")
    .trim()
    .isNumeric()
    .withMessage("Əlaqə nömrənizi daxil edin !")
    .escape()
    .notEmpty()
    .withMessage("Əlaqə nömrənizi daxil edin !")
      .isLength({ min: 13 })
      .withMessage("Əlaqə nömrəsi çox qısa daxil edilib"),
  body("companyName")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Şirkət adını daxil edin !")
      .isLength({ min: 3 })
      .withMessage("Şirkət çox qısa daxil edilib"),
  body("subject")
    .trim()
    .escape()
    .isIn([
      "Məhsullar haqqında",
      "Qiymət haqqında",
      "Müqavilə haqqında",
      "Digər",
    ])
    .notEmpty()
    .withMessage("Zəhmət olamasa mövzunu daxil edin !"),
  body("message")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Zəhmət olamasa mətninizi daxil edin !")
    .isLength({ min: 20 })
    .withMessage("Minimum mətn uzunluğu 20 simvoldan ibarət olmalıdır !"),
  formController.sendMessageToAdmin
);

router.get("/productDetails", (req, res) => {
  res.render("productDetails");
});

router.get("/products", (req, res) => {
  res.render("products");
});

router.get('/service',(req,res)=> {
    res.render('service');
});

router.post(
  "/service",
  body("name")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Adınızı daxil edin !")
      .isLength({ min: 3}).withMessage('Ad çox qısa daxil edilib')
      .matches(/^[A-Za-z0-9 .,'!&]+$/)
      .withMessage("Lütfən düzgün ad daxil edin !"),
  body("phone")
    .trim()
    .isNumeric()
    .withMessage("Əlaqə nömrənizi daxil edin !")
    .escape()
    .withMessage("Əlaqə nömrənizi daxil edin !")
    .notEmpty()
    .withMessage("Əlaqə nömrənizi daxil edin !")
      .isLength({ min: 13}).withMessage('Əlaqə nömrəniz çox qısa daxil edilib'),
  serviceController.serviceMessage
);

const upload = multer({
  limits: { fileSize: 2000000 },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("Please upload an image"));
    }
    cb(undefined, true);
  },
});

router.post(
  "/product/create",
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },
    {
      name: "tableImage",
      maxCount: 1,
    },
    {
      name: "extraImage",
      maxCount: 1,
    },
  ]),
  productController.addProduct
);
router.get("/product", productController.getProduct);
router.get("/product/all", productController.getAllProduct);
router.get("/product/main", productController.getMainProduct);
router.get("/search", searchController.searchProduct);
router.get("/product/:productName/image", imageController.getProductImage);
router.get("/table/:productName/image", imageController.getTableImage);
router.get("/extra/:productName/image", imageController.getExtraImage);

router.get("/blog/:id/image", imageController.getBlogImage);
router.get("/blog/:id/image/extra", imageController.getExtraBlogImage);
router.get("/blog/:id/", blogConroller.getBlog);
router.get("/blog", blogConroller.getAllBlogs);
router.post(
  "/blog/add",
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },
    {
      name: "extraImage",
      maxCount: 1,
    },
  ]),
  blogConroller.addBlog
);

module.exports = router;
