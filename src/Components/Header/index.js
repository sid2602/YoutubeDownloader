import React from 'react';


const style = {
    height: "10vh",
    display:"flex",
    alignItems:"center",
    justifyContent: "center",
    fontSize: "2em",
    borderBottom: "2px solid black",
    fontWeight: "bold"
    
}


const Header = () => {
    return ( 
        <header style = {style}>YouTube Downloader <i className="fab fa-youtube" style={{marginLeft:"20px"}}></i> </header>
     );
}
 
export default Header;
