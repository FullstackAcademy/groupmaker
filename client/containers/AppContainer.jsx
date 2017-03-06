import React, { Component } from 'react';

class AppContainer extends Component {
  render() {
    return (
      <div>
        <div className="app-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default AppContainer;
