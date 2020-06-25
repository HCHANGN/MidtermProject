import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const Sections=(props)=>{
    
    return(
        <div>
            <ul>
                {props.items.map(item=>(
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <div>
            <Link to="/">回首頁</Link>
            </div>
        </div>
    );
    
}
const Home=()=>{
    return(
        <div>
            <h1>React Redux 入門教學課程</h1>
        </div>
    );
}

export {Sections,Home};