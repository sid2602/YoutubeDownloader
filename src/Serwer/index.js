const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const { response } = require('express');
const app = express();


app.use(cors());


app.listen(4001, () => {
    console.log('Server Works !!! At port 4001');
});

app.get('/download', (req,res) => {
    var URL = req.query.URL;
    
    // res.json(ytdl.getInfo(URL,(err,info)=>(info)))
    const Data = ytdl.getInfo(URL,(err,info)=>{
        return info;
    })

    Data.then(res => res)
    .then(data => res.json(data))
})