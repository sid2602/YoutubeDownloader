import React from 'react';

import {TTable,DownloadButton} from './style'

const Table = ({movieInfo,active}) => {


     const Mp4 = movieInfo.Mp4.map(item => (
        <tr key = {item.itag}>
            <td>{item.qualityLabel}</td>
            <td><DownloadButton><i className="fas fa-download"></i> Download </DownloadButton></td>
        </tr>)) 

    const Webm = movieInfo.Webm.map(item => (
        <tr key = {item.itag}>
            <td>{item.qualityLabel}</td>
            <td><DownloadButton><i className="fas fa-download"></i> Download </DownloadButton></td>
        </tr>)) 


    return ( 
        <TTable className="table">
            <thead>
                <tr>
                    <th>Quality</th>
                    <th>Download</th>
                </tr>
                {active==="Mp4"? Mp4 : Webm}
                
            </thead>
        </TTable>
     );
}
 
export default Table;