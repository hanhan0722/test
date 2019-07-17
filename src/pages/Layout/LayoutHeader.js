import React, { Component } from 'react'
import { Icon } from 'antd';
class LayoutHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    }
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  render() {
    return (
      <div>
        <Icon
          className="trigger"
          type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        ></Icon>
      </div>
    );
  }
}

export default LayoutHeader;