const productRepository=require('../Repository/ProductRepository');

class ProductService{
    async addProductImage(Name,buffer){
        try {
            const product= await productRepository.addImage(Name,buffer);
            return product
        }catch (err){
            return err;
        }
    };

    async addExtraImage(Name,buffer){
        try {
            const product= await productRepository.addExtraImage(Name,buffer);
            return product
        }catch (err){
            return err;
        }
    };

    async getAllProduct(){
        try {
            const product= await productRepository.getAllProduct();
            return product
        }catch (err){
            return err;
        }
    };

    async getProduct(productName){
        try {
            const product= await productRepository.getProduct(productName);
            return product
        }catch (err){
            return err;
        }
    };



    async getMainProduct(){
        try {
            const product= await productRepository.getMainProduct();
            return product
        }catch (err){
            return err;
        }
    };



    async addTableImage(Name,buffer){
        try {
            const product= await productRepository.addTableImage(Name,buffer);
            return product
        }catch (err){
            return err;
        }
    };




    async getProductImage(productName){
        try {
            const product= await productRepository.getImage(productName);
            return product;
        }catch (err){
            return err;
        }
    };

    async getExtraImage(productName){
        try {
            const product= await productRepository.getExtraImage(productName);
            return product;
        }catch (err){
            return err;
        }
    };


    async getTableImage(productName){
        try {
            const product= await productRepository.getTableImage(productName);
            return product
        }catch (err){
            return err;
        }
    };





    async search(string){
        try {
            const product=await productRepository.searchModels(string);
            return product
        }catch (err){
            return err;
        }
    };

    async createProduct(Name, Title,Power,SpecificationTitle, Description,imageID,tableImageID,extraImageID,ExtraDescription){
        try {
            const product=await productRepository.createProduct(Name, Title,Power,SpecificationTitle, Description,imageID,tableImageID,extraImageID,ExtraDescription);
            return product;
        }catch (err){
            return err;
        }
    };

};

module.exports=new ProductService();