import express from 'express';
import blogRouter from './routes/blog-routes';
import  router  from './routes/user-routes';
import('./db/conn');

const app = express();
const port=process.env.PORT || 5000;
const Schema = import('./models/user'); 


// we have to use the middleware

//1)User Middleware
app.use('/api/user',router);
//2)Blog Middleware
app.use('/api/blog',blogRouter);


app.listen(port,()=>
console.log(`Server is running at port: ${port}`)
);




