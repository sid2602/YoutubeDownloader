import React ,{useRef} from 'react';

import {Inp,Button} from './style'

const Input = () => {

    const URL = useRef("");

    const style = {
        textAlign: 'center',
        width: '100%',
    }

    function sendURL() {
        
        fetch(`http://localhost:4001/download?URL=${URL.current.value}`, {
            method:'GET'
        }).then(res => res.json())
        .then(json => console.log(json));
    }


    return ( 
        
        <div style = {style}>
            <Inp ref = {URL} type="text" placeholder="Paste link"/>
            <Button onClick ={()=>sendURL()}>Start</Button>
        </div>
     );
     
}
 
export default Input;
