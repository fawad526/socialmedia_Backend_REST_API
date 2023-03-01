import express from "express";
import { addBlog, getAllBlogs, getAllById, updateBlog } from "../controllers/blog-controller";
const blogRouter = express.Router();

blogRouter.use(express.json());

blogRouter.get("/",getAllBlogs);
blogRouter.post("/add",addBlog);
blogRouter.put("/update/:id",updateBlog);
blogRouter.get("/:id",getAllById);


export default blogRouter;