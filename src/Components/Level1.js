import {Component} from 'react';

class Level1 extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(       
            <div className="container">
            <div className="row">
            <div className="col-xs-3 col-sm-3 col-md-3 color1 ">{this.props.b}</div>
            <div className="col-xs-3 col-sm-3 col-md-3 color1 ">{this.props.c}</div>
            <div className="col-xs-3 col-sm-3 col-md-3 color1 ">{this.props.d}</div>
            <div className="col-xs-3 col-sm-3 col-md-3 color1 color"><span>{this.props.e}</span></div>
        </div>
        </div>
        )       

    }
}
export default Level1;