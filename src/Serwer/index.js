const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const { response } = require('express');
const app = express();

const PORT = 4000;

app.use(cors());


app.listen(PORT, () => {
    console.log('Server Works !!! At port 4000');
});

app.get('/search', (req,res) => {
    const URL = req.query.URL;
    
    const Data = ytdl.getInfo(URL,(err,info)=>{
        return info;
    })

    Data.then(res => res)
    .then(data => res.json(data))
})


app.get('/download' ,async(req,res) => {
    try{
        const URL = req.query.URL;
        const quality = req.query.quality;
        const downloadType= req.query.downloadType;
        let title = "video";
        
        await ytdl.getBasicInfo(URL, {
            format: 'mp4'
        }, (err, info) => {
            title = info.player_response.videoDetails.title.replace(/[^\x00-\x7F]/g, "");
        });

        res.header('Content-Disposition', `attachment; filename="${title}.${downloadType}"`);

        ytdl(URL,{
            format: downloadType === 'mp3'? "mp4":downloadType,
            quality: quality
        }).pipe(res);
    }
    catch(error){
        alert(error)
    }
   
})