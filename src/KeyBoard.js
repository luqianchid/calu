import React, {Component} from 'react';
import PropTypes from "prop-types";
import Button from './Button'
import './KeyBoard.scss'

class KeyBoard extends Component {
  static propTypes = {
    clickEvent: PropTypes.func
  }
  handleClick = btnValue => {
    this.props.clickEvent(btnValue);
  }
  render() {
    // const command = ["AC" , "+/-", "%", "/", "7", "8", "9", "*", "4", "5", "6" ,"-", "1", "2","3","+","0", ".", "="]
    return (  
      <div className="keyboard">
        <Button clickEvent = {this.handleClick} value="AC" />
        <Button clickEvent = {this.handleClick} value="+/-" />
        <Button clickEvent = {this.handleClick} value="%" />
        <Button clickEvent = {this.handleClick} value="/" special/>
        <Button clickEvent = {this.handleClick} value="7" />
        <Button clickEvent = {this.handleClick} value="8" />
        <Button clickEvent = {this.handleClick} value="9" />             
        <Button clickEvent = {this.handleClick} value="*" special/>
        <Button clickEvent = {this.handleClick} value="4" />
        <Button clickEvent = {this.handleClick} value="5" />
        <Button clickEvent = {this.handleClick} value="6" />
        <Button clickEvent = {this.handleClick} value="-" special/>
        <Button clickEvent = {this.handleClick} value="1" />
        <Button clickEvent = {this.handleClick} value="2" />
        <Button clickEvent = {this.handleClick} value="3" />
        <Button clickEvent = {this.handleClick} value="+" special/>
        <Button clickEvent = {this.handleClick} value="0" isLarge/>
        <Button clickEvent = {this.handleClick} value="." />
        <Button clickEvent = {this.handleClick} value="=" special/> 
      </div>
    )
  }


}

export default KeyBoard