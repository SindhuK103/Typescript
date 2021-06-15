import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassCom from './components/ClassComponents';
import Counter from './components/FunctionComponent';
import Head from './components/Header';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <h2> Typescript example </h2>
    <Head/>
    <Switch>
      <Route path ="/" exact component={ClassCom}/>
      <Route path ="/Counter" exact component={Counter}/>
      </Switch>
    </div>
  );
}

export default App;
// function App(){
//   function getApp(){
//     const route = window.location.pathname;
//     if (route === "/ ClassCom" )return <ClassCom/>
//     else  return <Counter/>;
//   }
//  return(
//   <div>
//     <Head/>
//     {getApp()}
//   </div>
// )
// }
//  export default App;