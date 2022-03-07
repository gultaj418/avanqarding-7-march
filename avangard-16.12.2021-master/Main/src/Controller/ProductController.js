const productService=require('../Service/ProductService');
const Product=require('../Model/Product');
const {add} = require("nodemon/lib/rules");

class ProductController{

async addProduct(req,res){
try{
  const  {Name,Title,Power,Description,SpecificationTitle,ExtraDescription}=req.body;
          const buffer1 = await sharp(req.files.image[0].buffer).webp({quality: 20}).toBuffer();
          const buffer2 = await sharp(req.files.tableImage[0].buffer).webp({quality: 20}).toBuffer();
          let extraImageID=null;

          if (req.files.extraImage!=undefined){
              const buffer3 = await sharp(req.files.extraImage[0].buffer).webp({quality: 20}).toBuffer();
              extraImageID = await productService.addExtraImage(Name,buffer3);
          }
          const imageID = await productService.addProductImage(Name, buffer1);
          const tableImageID= await productService.addTableImage(Name,buffer2);
          const product = await productService.createProduct(Name, Title,Power,SpecificationTitle, Description,imageID,tableImageID,extraImageID,ExtraDescription);
          res.status(200).send({product : product});
}catch (error){
  res.send(error);};
};

 async getProduct(req,res){
     try {
         const productName=req.query.productName;
         const name=productName.split('_').join(' ');
         const product= await productService.getProduct(name);
         const pdfName=productName;
         res.status(200).render('productDetails',{product:product,pdfName:pdfName});
     }catch (error){
         return error;
     }
}


    async getAllProduct(req,res){
        try {
            const product= await productService.getAllProduct();
            res.status(200).send(product);
        }catch (error){
            return error;
        }
    }

    async getMainProduct(req,res){
        try {
            const product= await productService.getMainProduct();
            res.status(200).send(product);
        }catch (error){
            return error;
        }
    }

};
module.exports=new ProductController();