import React, { Component } from 'react';
import { Button } from 'antd';
import moment from 'moment';
import 'moment/locale/ko';
import "./MyButton.less"

moment.locale('ko');

class MyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter:0,
      title:"clicked!"
    }
  }

  handleClickMyButton=()=>{
    this.setState({counter:this.state.counter+1});
    this.setState({counter:this.state.counter+1});
    this.setState({counter:this.state.counter+1});
    this.setState({counter:this.state.counter+1});
    console.log("Clicked!");
  }

  handleChange = (e) => {
    this.setState({title:e.target.value});
    console.log(this.state.title);
    this.props.myFunc(this.state.title)
  }

  render() {
    const {counter, title} = this.state;
    console.log("render.....");
    
    return (
      <div className="MyButton">
        <label>{counter} {title}</label>
        <Button type="primary" onClick={this.handleClickMyButton}>Button</Button>
        <input type="Button" value="MyButton" onClick={this.handleClickMyButton} />
        <form>
          <input
            placeholder="이름"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <div>{title}</div>
        </form>
      </div>
    );
  }
}

export default MyButton;  