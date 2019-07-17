import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Spin } from "antd";
import Wrapper from '../Login/Wrapper';
import MyLayout from '../Layout/MyLayout';

class App extends Component {
  state = {
    collapsed: false
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Route path='/login' component={Wrapper} />
          <Route path='**' component={MyLayout} />
        </Router>
        {
          this.props.loading && (<div className="shadow-fixed">
            <Spin tip="Loading..." size="large"></Spin>
          </div>)
        }
      </div>
    );
  }
}

export default App;
