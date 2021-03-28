import {Component} from 'react';

class Level5 extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container">
                <div className="row">
             <div className="col-xs-6 col-sm-6 col-md-6 color1">{this.props.r}</div>
			<div className="col-xs-3 col-sm-3 col-md-3 color1">{this.props.s}</div>
			<div className="col-xs-3 col-sm-3 col-md-3 color1 color border-bottom"><span>{this.props.t}</span></div>
		</div>
        </div>        
        ) 
    }
}
export default Level5;