const sharp = require('sharp');
const blogService = require("../Service/BlogService");
const productService = require("../Service/ProductService");

class BlogController{

    async addBlog(req,res){
        try{
            const  {Title,Subtitle_1,Subtitle_2,Subtitle_3,Description,Description_2,Description_3}=req.body;
            const buffer1 = await sharp(req.files.image[0].buffer).webp({quality: 20}).toBuffer();
            const buffer2 = await sharp(req.files.extraImage[0].buffer).webp({quality: 20}).toBuffer();
            const image = await blogService.addBlogImage(buffer1);
            let extraImage;
            if (buffer2) {
                extraImage = await blogService.addExtraBlogImage(buffer2)
            }else {
                extraImage=null;
            }
                const blog = await blogService.createBlog(Title,Subtitle_1,Subtitle_2,Subtitle_3,Description,Description_2,Description_3,image,extraImage);
            res.status(200).send({blog : blog});
        }catch (error){
            res.send(error);};
    };


    async getBlog(req,res){
        try {
            const id=req.params.id;
            const blog = await blogService.getBlogById(id);
            res.status(200).render('blogDetails',{blog:blog});
        }catch (error){
            res.send(error);
        }
    }

    async getAllBlogs(req,res){
        try {
            const blog = await blogService.getAllBlogs();
            res.status(200).render('blog',{blog:blog});
        }catch (error){
            res.send(error);
        }
    }
}

module.exports=new BlogController();