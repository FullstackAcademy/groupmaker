import React, { Component } from 'react';

class AppContainer extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <div className="app-container">
          {children}
        </div>
      </div>
    );
  }
}

export default AppContainer;
