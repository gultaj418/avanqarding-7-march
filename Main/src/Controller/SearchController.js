const productService=require('../Service/ProductService');
const product=require('../Model/Product');
class SearchController{

    async searchProduct(req,res){
        try{
            const string=req.body.string;
            const add = await productService.search(string);
            if (add.length===0){
              return   res.send({msg:"Axtarışa uyğun heç bir nəticə tapılmadı"})
            }
            res.send(add);
        }catch (error){
            res.send(error);
        };
    };

};

module.exports=new SearchController();