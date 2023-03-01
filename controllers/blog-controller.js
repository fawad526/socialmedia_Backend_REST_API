import Blog from "../models/Blog";

export const getAllBlogs = async(req,res,next)=>
{
    let blogs;
    try {
        blogs = await Blog.find();
    } catch (error) {

        return console.log(err);
    }
    if(!blogs)
    {
        return res.status(404).json({message:"No Blogs Found"})
    }
    return res.status(200).json(blogs)
};
export const addBlog = async (req,res,next)=>
{
    console.log(req.body);
    const {title,description,image,user} = req.body;
   
    const blog = new Blog({
        title,
        description,
        image,
        user,
    });
    try {
        await blog.save();
        } catch (error) {
       return console.log(error);
    }
    return res.status(200).json(blog);
};

export const updateBlog = async (req,res,next) =>
{
    const {title,description} =req.body;
    const blogId = req.params.id;
    let blog;

    try {
        blog = await Blog.findByIdAndUpdate(blogId,{
            title,
            description,
        });   
} catch (error) {
    return console.log(error);
}
if(!blog)
{
    return res.status(500).json({message:"Unable to update thr Blog"})
}
return res.status(200).json({blog})
};
export const getAllById = async (req,res,next)=>
{
    const id =req.params.id;
    let blog;
    try {
        blog = await Blog.findById(id)
    } catch (error) {
        return console.log(error);
    }
    if(!blog)
    {
        return res.status(404).json({message:"not found Id"})
    }
    return res.status(200).json({blog});
}