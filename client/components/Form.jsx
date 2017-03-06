import React, { Component } from 'react';
import { connect } from 'react-redux';

import OneStudent from './OneStudent';

class Form extends Component {
  render() {
    const { name, students } = this.props.cohort;
    return (
      <div>
        {name ? <h3>{name}</h3> : null}
        {students.map(student => <OneStudent name={student} />)}
      </div>
    );
  }
}

const mapStateToProps = ({ cohort }) => ({ cohort });

export default connect(mapStateToProps)(Form);
