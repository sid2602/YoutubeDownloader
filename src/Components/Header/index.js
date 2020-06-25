import React from 'react';


const style = {
    height: "10vh",
    display:"flex",
    alignItems:"center",
    justifyContent: "center",
    fontSize: "2em",
    fontWeight: "bold"
    
}


const Header = () => {
    return ( 
        <header style = {style}>YouTube Downloader <i className="fab fa-youtube" style={{marginLeft:"20px",color:"red"}}></i></header>
     );
}
 
export default Header;
