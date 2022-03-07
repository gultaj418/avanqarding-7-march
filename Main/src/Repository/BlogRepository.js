const Image = require("../Model/BlogImage");
const Blog=require('../Model/Blog');
const ExtraBlogImage=require('../Model/ExtraBlogImage');

class BlogRepository {

    async createBlog(Title,Subtitle_1,Subtitle_2,Subtitle_3,Description,Description_2,Description_3,imageModel,extraImageModel){
 try {

     const blog = await Blog.create(
         {
             Title: Title, ImageID: imageModel._id
         });
     blog.ImageUrl = `${process.env.url_image}/blog/${blog._id}/image`
     blog.ExtraImageUrl = `${process.env.url_image}/blog/${blog._id}/image/extra`

     const img = await Image.findOne({_id: imageModel._id});
     img.BlogId = blog._id;
     await img.save();
     if (extraImageModel !== null) {
         console.log(extraImageModel)
         const extImg = await ExtraBlogImage.findOne({_id: extraImageModel._id});
         extImg.BlogId = blog._id;
         await extImg.save();
     }

     if (Description !== undefined) {
         const desc = Description.split('#');
         for (let i = 0; i < desc.length; i++) {
             await blog.Description.push(desc[i])
         }
         ;
     }
     if (Subtitle_2 !== undefined && Description_2 !== undefined) {
         blog.Subtitle_2 = Subtitle_2;
         const desc_2 = Description_2.split('#');
         for (let i = 0; i < desc_2.length; i++) {
             await blog.Description_2.push(desc_2[i])
         };
     }
     if (Subtitle_3 !== undefined  && Description_3 !== undefined) {
         blog.Subtitle_3 = Subtitle_3;
         const desc_3 = Description_3.split('#');
         for (let i = 0; i < desc_3.length; i++) {
             await blog.Description_3.push(desc_3[i])
         };
     }
     await blog.save();
     return blog;
 }catch (error){
     console.log(error)
 }

    };


    async addImage(buffer){
        try {
            const image= await Image.create({
                Image:{data:buffer}
            });
            await image.save();
            return image;
        }catch (error){
            return error
        };
    };

    async addExtraBlogImage(buffer){
        try {
            const image= await ExtraBlogImage.create({
                Image:{data:buffer}
            });
            await image.save();
            return image;
        }catch (error){
            return error
        };
    };


    async getImage(id){
        try {
       const img = await Image.findOne({BlogId:id});
       return img.Image.data;
        }catch (error){
            return error
        };
    };

    async getIExtraBlogImage(id){
        try {
            const img = await ExtraBlogImage.findOne({BlogId:id});
            return img.Image.data;
        }catch (error){
            return error
        };
    };


    async getBlogById(id){
        const blog=await Blog.findOne({_id:id});
        return blog;
    }

    async getAllBlogs() {
        try {
            const blog = await Blog.find({}).sort({$natural: -1}).limit(5);
            return blog;
        }catch (error){
            console.log(error);
        }
    }
}

module.exports=new BlogRepository();