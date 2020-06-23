import React,{useState} from 'react';

import { Section,Movie,DownloadTypes,TypeOfDownload,Container} from './style'

import Table from '../Table'

const Downolader = ({movieInfo}) => {

    const [active,setActive] = useState("Mp4");
    
    const typesOfButtons = ["Mp4","Webm","Mp3"];

    const Buttons = typesOfButtons.map(item =>( 
         <TypeOfDownload key = {item} className ={`${item} ${item===active?"active": ""}`} onClick={()=>setActive(item)}>{item}</TypeOfDownload>
    ))
    
    


    return ( 
        <Section>
            <Movie>
                <img src={movieInfo.Thumbinail} alt={movieInfo.Title}/>
                <p>{movieInfo.Title}</p>
            </Movie>
            <Container>
                <DownloadTypes>
                    {Buttons}
                </DownloadTypes>
                <Table movieInfo={movieInfo} active={active}/>
            </Container>
        </Section>
     );
}
 
export default Downolader;