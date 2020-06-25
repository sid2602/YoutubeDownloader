import React from 'react';

import {FooterContainer,FlexContainer} from './style'

const Footer = () => {
    return ( 
        <FooterContainer>
            <h1>How to download video and audio by this site?</h1>
            <FlexContainer>
                <p><span>Step 1:</span> Copy the link (url) of the youtube video you want to download</p>
                <p><span>Step 2:</span> Paste the link to the search engine and press the start button</p>
                <p><span>Step 3:</span> Select file type and quality. Then press the download button</p>
            </FlexContainer>
        </FooterContainer>
     );
}
 
export default Footer;
