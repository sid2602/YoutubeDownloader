import React ,{useRef} from 'react';

import {Inp,Button} from './style'

import {connect} from 'react-redux';
import getAllMovie from '../../Data/Operations'

const Input = ({getAllMovie}) => {

    const URL = useRef("");

    const style = {
        textAlign: 'center',
        width: '100%',
    }

    function sendURL() {
        
        // console.log(URL.current.value)
        getAllMovie(URL.current.value);
        // fetch(`http://localhost:4001/download?URL=${URL.current.value}`, {
        //     method:'GET'
        // }).then(res => res.json())
        // .then(json => console.log(json));
    }


    return ( 
        
        <div style = {style}>
            <Inp ref = {URL} type="text" placeholder="Paste link"/>
            <Button onClick ={()=>sendURL()}>Start</Button>
        </div>
     );
     
}


    const mapDispatchToProps = dispatch =>({
        getAllMovie: (URL) => dispatch(getAllMovie(URL))
    })

 
    const ConectedApp = connect(null,mapDispatchToProps)(Input);


export default ConectedApp;
