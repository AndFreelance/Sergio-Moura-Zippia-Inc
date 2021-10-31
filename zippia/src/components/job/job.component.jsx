import React from 'react';
import PropTypes from 'prop-types';

import './job.styles.scss';

export function Job(props) {
  const {
    job: {
      companyName,
      jobTitle,
      shortDesc
    }
  } = props;

  return (
    <div className="job card text-dark bg-light mb-3">
      <div className="card-header">{ companyName }</div>
      <div className="card-body">
        <h5 className="card-title">{ jobTitle }</h5>
        <p className="card-text">{ shortDesc }</p>
      </div>
    </div>
  )
}

Job.propTypes = {
  job: PropTypes.shape({
    companyName: PropTypes.string,
    jobTitle: PropTypes.string,
    shortDesc: PropTypes.string
  })
};
