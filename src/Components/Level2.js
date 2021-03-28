import {Component} from 'react';

class Level2 extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container">
            <div className="row">
            <div className="col-xs-3 col-sm-3 col-md-3 color1 ">{this.props.f}</div>
            <div className="col-xs-3 col-sm-3 col-md-3 color1 ">{this.props.g}</div>
            <div className="col-xs-3 col-sm-3 col-md-3 color1 ">{this.props.h}</div>
            <div className="col-xs-3 col-sm-3 col-md-3 color1 color"><span>{this.props.i}</span></div>
        </div>
        </div>
        )  
    }
}
export default Level2;