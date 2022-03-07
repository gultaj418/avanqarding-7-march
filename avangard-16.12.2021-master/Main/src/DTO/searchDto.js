
module.exports=class ProductDto{
    Name;
    ImageUrl;

    constructor(model) {
    this.Name=model.Name,
     this.ImageUrl=model.ImageUrl
    }
}