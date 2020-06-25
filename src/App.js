import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Sections,Home} from "./pages";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            headline:"",
            chapters:[]
        }
        this.getData=this.getData.bind(this);
    }
    getData(){
        let xhr = new XMLHttpRequest();
        xhr.onload=()=>{
            // console.log("ok");
            // console.log(JSON.parse(xhr.responseText));
            let data=JSON.parse(xhr.responseText);
            this.setState({
                headline:data.headline,
                chapters:data.chapters
            })
        }
        xhr.open('get',"https://cwpeng.github.io/live-records-samples/data/content.json");
        xhr.send();
    }
    render(){
        if(this.state.headline===""){
            this.getData();
        }
        return (
        <div id="container">
            {/* <button onClick={this.getData}>start</button> */}
            <Router>
                {this.state.chapters.map(item=>(
                    <div key={item.key}><Link to={"/"+item.key}>{item.title}</Link></div>
                ))}
                <Switch>
                    {this.state.chapters.map(item=>(
                        <Route key={"route"+item.key} path={"/"+item.key} render={(props)=><Sections {...props} items={item.sections}/>}/>
                    ))}
                    <Route key="routehome" path="/" render={()=><Home/>}/>
                </Switch>
            </Router>
        </div>    
        )
    }
}

export default App;