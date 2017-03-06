import React, { Component } from 'react';
import { connect } from 'react-redux';

import OneStudent from './OneStudent';

class Form extends Component {
  onSubmit() {
    // Send data to database & display thank-you message
    return;
  }

  render() {
    const { name, students } = this.props.cohort;
    return (
      <div>
        {name ? <h2>{name}</h2> : null}
        <form>
          {students.map(student => <OneStudent name={student} />)}
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ cohort }) => ({ cohort });

export default connect(mapStateToProps)(Form);
