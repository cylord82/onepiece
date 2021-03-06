import React, { Component } from 'react';
import logo from './logo.svg';
import MyHighchart from './components/MyHighchart';
import MyButton from './components/MyButton';
import TodoListTemplate from './components/TodoListTemplate';
import MyD3 from './components/MyD3';
import MyD3WorldMap from './components/MyD3WorldMap';
import './App.less';

class App extends Component {
  handleMyFunc = data => {
    console.log(data);
  };

  render() {
    return (
      <div className="App">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="title">Welcome to React</h1>
        </header>
        <p className="intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MyHighchart className="MyHighchart" />
        <MyButton myFunc={this.handleMyFunc} />
        <TodoListTemplate form={<div>이렇게 말이죠.</div>}>
          여기에 있는 내요~yeah!
        </TodoListTemplate>
        <MyD3 data={[1, 2, 3, 4, 5, 7, 9 ,15]} size={[10, 20]} />
        <MyD3WorldMap />
      </div>
    );
  }
}

export default App;
