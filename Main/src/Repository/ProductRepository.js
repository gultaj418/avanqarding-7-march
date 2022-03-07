const productModel=require('../Model/Product');
const mongoose=require('mongoose');
const productImage=require('../Model/Image');
const tableImage=require('../Model/TableImage');
const productDto=require('../DTO/productDTO');
const searchDto=require('../DTO/searchDto');
const extraImage=require('../Model/ExtraImage');

class ProductRepository{
    async createProduct(Name, Title,Power,SpecificationTitle, Description,ImageID,tableImageID,extraImageID,ExtraDescription){
        try {
            const product= await productModel.create(
                {Name:Name,Title:Title,Power:Power,SpecificationTitle:SpecificationTitle, Image:ImageID,
                    ImageUrl:`${process.env.url_image}/product/${Name.split(" ").join("_")}/image`,
                    TableImage:tableImageID,TableImageUrl:`${process.env.url_image}/table/${Name.split(" ").join("_")}/image`});
            if (extraImageID!=null){
                product.ExtraImage=extraImageID;
                product.ExtraImageUrl=`${process.env.url_image}/extra/${Name.split(" ").join("_")}/image`;
            }else {
                product.ExtraImage = null;
                product.ExtraImageUrl = null;
            }
            const des=Description.split('#')
            for (let i = 0; i < des.length; i++) {await product.Description.push(des[i])};
            if (ExtraDescription!=undefined){
            const extDesc=ExtraDescription.split('#');
            for (let i = 0; i < extDesc.length; i++) {await product.ExtraDescription.push(extDesc[i])};
            };
            await product.save();
            return product;
        }catch (error){
            console.log(error)
            return error;
        };
    };



    async getProduct(productName){
        try {
            const product = await productModel.findOne({Name:productName}).lean();
            return product;
        }catch (error){
            console.log(error)
            return error;
        };
    };

    async getAllProduct(){
        try {
            const product = await productModel.find({}).lean();
            const prod=product.map((docs)=>{
                docs=new productDto(docs);
                return docs;
            });
            return prod;
        }catch (error){
            console.log(error)
            return error;
        };
    };


    async getMainProduct(){
        try {
            const product = await productModel.find({}).sort({$natural : -1}).limit(3);
            return product;
        }catch (error){
            console.log(error)
            return error;
        };
    };



    async addImage(Name,buffer){
        try {
            const image= await productImage.create({
                Name:Name,
                Image:{data:buffer}
            });
            await image.save();
            return image._id;
        }catch (error){
            return error
        };
    };


    async addTableImage(Name,buffer){
        try {
            const TableImage= await tableImage.create({
                Name:Name,
                Image:{data:buffer}
            });
            await TableImage.save();
            return TableImage._id;
        }catch (error){
            return error
        };
    };



    async addExtraImage(Name,buffer){
        try {
            const ExtraImage= await extraImage.create({
                Name:Name,
                Image:{data:buffer}
            })
            await ExtraImage.save();
            return ExtraImage._id;
        }catch (error){
            return error
        };
    };

    async getImage(productName){
        try {
            const buffer = await productImage.findOne({Name:productName});
            return buffer.Image.data;
            }catch (error){
            return error;
        };
    };



    async getExtraImage(productName){
        try {
            const buffer = await extraImage.findOne({Name:productName});
            return buffer.Image.data;
        }catch (error){
            return error;
        };
    };


    async getTableImage(productName){
        try {
            const buffer = await tableImage.findOne({Name:productName});
            return buffer.Image.data;
        }catch (error){
            return error;
        };
    };



    async searchModels(string){
        try {
            const st=new RegExp(string, "i");
            const product=await productModel.find({Name:st}).lean().exec();
            const prod=product.map((docs)=>{
                 docs=new searchDto(docs);
                  return docs;
            });
            return prod;
        }catch (error){
            return error;
        };
    };
};

module.exports=new ProductRepository();