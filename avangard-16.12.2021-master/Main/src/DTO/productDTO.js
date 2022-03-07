
module.exports=class ProductDto{
    Name;
    ImageUrl;
    Title;
    Power;
    constructor(model) {
            this.Name=model.Name,
            this.ImageUrl=model.ImageUrl,
            this.Title=model.Title,
            this.Power=model.Power
    }
}