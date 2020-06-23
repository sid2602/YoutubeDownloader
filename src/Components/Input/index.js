import React ,{useRef} from 'react';

import {Inp,Button} from './style'

import {connect} from 'react-redux';
import getAllMovie from '../../Data/Operations'

const Input = ({getAllMovie}) => {

    const URL = useRef("");

    const style = {
        textAlign: 'center',
        width: '100%',
        display: 'flex',
        justifyContent: "center"
    }

    function sendURL() {
        getAllMovie(URL.current.value);
    }


    return ( 
        
        <main style = {style}>
            <Inp ref = {URL} type="text" placeholder="Paste link"/>
            <Button onClick ={()=>sendURL()}>Start</Button>
        </main>
     );
     
}


    const mapDispatchToProps = dispatch =>({
        getAllMovie: (URL) => dispatch(getAllMovie(URL))
    })

 
    const ConectedApp = connect(null,mapDispatchToProps)(Input);


export default ConectedApp;
