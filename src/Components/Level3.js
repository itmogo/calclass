import {Component} from 'react';

class Level3 extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container">
            <div className="row">
            <div className="col-xs-3 col-sm-3 col-md-3 color1 ">{this.props.j}</div>
            <div className="col-xs-3 col-sm-3 col-md-3 color1 ">{this.props.k}</div>
            <div className="col-xs-3 col-sm-3 col-md-3 color1 ">{this.props.l}</div>
            <div className="col-xs-3 col-sm-3 col-md-3 color1 color"><span>{this.props.m}</span></div>
        </div>
        </div>
        )
        

    }


}
export default Level3;