const productService=require('../Service/ProductService');
const product=require('../Model/Product');
const blogService = require("../Service/BlogService");

class imageController {

    async getProductImage(req,res){
        try{
            const productName=req.params.productName;
            const name=productName.split("_").join(" ");
            const img = await productService.getProductImage(name);
            res.set('Content-Type','image/png')
            res.send(img);
        }catch (error){
            res.send(error);
        };
    };


    async getExtraImage(req,res){
        try{
            const productName=req.params.productName;
            const name=productName.split("_").join(" ");
            const img = await productService.getExtraImage(name);
            res.set('Content-Type','image/png')
            res.send(img);
        }catch (error){
            res.send(error);
        };
    };


    async getTableImage(req,res){
        try{
            const productName=req.params.productName;
            const name=productName.split("_").join(" ");
            const img = await productService.getTableImage(name);
            res.set('Content-Type','image/png')
            res.send(img);
        }catch (error){
            res.send(error);
        };
    };

    async getBlogImage(req,res){
        try{
            const BlogID=req.params.id;
            const img = await blogService.getBlogImage(BlogID);
            res.set('Content-Type','image/png')
            res.send(img);
        }catch (error){
            res.send(error);
        };
    };

    async getExtraBlogImage(req,res){
        try{
            const BlogID=req.params.id;
            const img = await blogService.getExtraBlogImage(BlogID);
            res.set('Content-Type','image/png')
            res.send(img);
        }catch (error){
            res.send(error);
        };
    };


};



module.exports=new imageController();