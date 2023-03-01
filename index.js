import express from 'express';
import  router  from './routes/user-routes';
import('./db/conn');

const app = express();
const port=process.env.PORT || 5000;
const Schema = import('./models/user'); 


// we have to use the middleware


app.use('/api/user',router);


app.listen(port,()=>
console.log(`Server is running at port: ${port}`)
);




