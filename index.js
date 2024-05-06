const express =require('express');
const cors=require('cors');

const app=express();

app.use(cors());


app.get('/',(req,res)=>{
   console.log('get / route is running good');
   return res.status(200).json({message:"Route is Running Good "});
});

const PORT=9000

app.listen(PORT,()=>{
    console.log("Server is running on PORT 9000");
});