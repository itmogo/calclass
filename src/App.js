import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Display from './Components/Display';
import Level1 from './Components/Level1';
import Level2 from './Components/Level2';
import Level3 from './Components/Level3';
import Level4 from './Components/Level4';
import Level5 from './Components/Level5';




class App extends Component{
  render(){
    return(
      <div>
      <Display/>
      <Level1 b='AC' c='-/+' d='%' e='÷'/>
      <Level2 f='7' g='8' h='9' i='×'/>
      <Level3 j='4' k='5' l='6' m='-'/>
      <Level4 n='1' o='2' p='3' q='+'/>
      <Level5 r='0' s='.' t='='/>
      </div>
    )
  }

}

export default App;
