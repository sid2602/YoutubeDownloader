import React from 'react';

import {TTable,DownloadButton} from './style'

const Table = ({movieInfo,active}) => {

    const download = (quality,downloadType) =>{
        
        const downloadLink = `/download?URL=${movieInfo.URL}&quality=${quality}&downloadType=${downloadType}&title=${movieInfo.Title}`
        window.location.href = downloadLink;
    
    }

     const Mp4 = movieInfo.Mp4.map(item => (
        <tr key = {item.itag}>
            <td>{item.qualityLabel}</td>
            <td><DownloadButton onClick ={()=>download(item.itag,"mp4")}><i className="fas fa-download"></i> Download </DownloadButton></td>
        </tr>)) 

    const Webm = movieInfo.Webm.map(item => {
            
        if(item!==undefined) return(
        <tr key = {item.itag}>
            <td>{item.qualityLabel}</td>
            <td><DownloadButton onClick ={()=>download(item.itag,"webm")}><i className="fas fa-download"></i> Download </DownloadButton></td>
        </tr>
    )})
    

    const Mp3 = () => (
        <tr>
            <td>128kbs</td>
            <td><DownloadButton onClick ={()=>download("highestaudio","mp3")}><i className="fas fa-download"></i> Download </DownloadButton></td>
        </tr>
    )

    return ( 
        <TTable className="table">
            <thead>
                <tr>
                    <th>Quality</th>
                    <th>Download</th>
                </tr>
                {active==="Mp4"? Mp4 : active === "Webm" ? Webm: <Mp3/>}
                
            </thead>
        </TTable>
     );
}
 
export default Table;