const blogRepository = require("../Repository/BlogRepository");

class BlogService {
    async createBlog(Title,Subtitle_1,Subtitle_2,Subtitle_3,Description_1,Description_2,Description_3,image,extraImage){
        try {
            const product=await blogRepository.createBlog( Title,Subtitle_1,Subtitle_2,Subtitle_3,Description_1,Description_2,Description_3,image,extraImage);
            return product;
        }catch (err){
            return err;
        }
    };

    async addBlogImage(buffer){
        try {
            const image=  await blogRepository.addImage(buffer);
            return image;
        }catch (err){
            return err;
        }
    };


    async addExtraBlogImage(buffer){
        try {
            const image=  await blogRepository.addExtraBlogImage(buffer);
            return image;
        }catch (err){
            return err;
        }
    };

    async getBlogImage(id){
        try {
            const image=  await blogRepository.getImage(id);
            return image;
        }catch (err){
            return err;
        }
    };

    async getExtraBlogImage(id){
        try {
            const image=  await blogRepository.getIExtraBlogImage(id);
            return image;
        }catch (err){
            return err;
        }
    };


    async getBlogById(id){
        const blog = await  blogRepository.getBlogById(id);
        return blog;
    }

    async getAllBlogs(){
        const blog = await  blogRepository.getAllBlogs();
        const list=[];
        blog.map((docs)=>{
            let ShortDescription='';
            for (let i = 0; i < docs.Description[0].length; i++) {
                if (i < 100 ){
                    if(i>90  && docs.Description[0].charAt(i) === ' '){
                        ShortDescription=ShortDescription.concat('  ....');
                        break;
                    }else {
                        ShortDescription=ShortDescription.concat(docs.Description[0].charAt(i));
                    }
                }
            }
            const obj={
                productLink:`${process.env.url}/blog/${docs._id}`,
                Title:docs.Title,
                Description: ShortDescription,
                ImgUrl:docs.ImageUrl,
                date:docs.BlogCreatedAt
            };
                 list.push(obj);
        });
        return list;
    }
}

module.exports=new BlogService();