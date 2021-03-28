import {Component} from 'react';

class Level4 extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container">
                <div className="row">
           <div className="col-xs-3 col-sm-3 col-md-3 color1 ">{this.props.n}</div>
            <div className="col-xs-3 col-sm-3 col-md-3 color1 ">{this.props.o}</div>
            <div className="col-xs-3 col-sm-3 col-md-3 color1 ">{this.props.p}</div>
            <div className="col-xs-3 col-sm-3 col-md-3 color1 color"><span>{this.props.q}</span></div>
        </div> 
        </div>       
        )
        }
}
export default Level4;