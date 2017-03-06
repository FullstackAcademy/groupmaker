import React from 'react';

const OneStudent = ({ name }) => (
  <div>
    <h4>{name}</h4>
    <div className="form-check">
    <label className="form-check-label">
      <input
        className="form-check-input"
        type="radio"
        name="peer-ratings"
        value="5"
        checked
      />
      5
    </label>
  </div>
  <div className="form-check">
    <label className="form-check-label">
      <input
        className="form-check-input"
        type="radio"
        name="peer-ratings"
        value="4"
      />
      4
    </label>
  </div>
  <div className="form-check">
    <label className="form-check-label">
      <input
        className="form-check-input"
        type="radio"
        name="peer-ratings"
        value="3"
      />
      3
    </label>
  </div>
  <div className="form-check">
    <label className="form-check-label">
      <input
        className="form-check-input"
        type="radio"
        name="peer-ratings"
        value="2"
      />
      2
    </label>
  </div>
  <div className="form-check">
    <label className="form-check-label">
      <input
        className="form-check-input"
        type="radio"
        name="peer-ratings"
        value="1"
      />
      1
    </label>
  </div>
</div>
);

export default OneStudent;
