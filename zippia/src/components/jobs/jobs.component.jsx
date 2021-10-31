import React, { useState, useEffect, useCallback } from 'react';

import { Job } from '../job/job.component';
import { Spinner } from '../spinner.component';
import { FilterBar } from '../filter-bar/filter-bar.component';
import { getJobs } from '../../services/jobs.service';

import './jobs.styles.scss';

const DEFAULT_REQUEST_BODY = {
  companySkills: true,
  dismissedListingHashes: [],
  fetchJobDesc: true,
  jobTitle: 'Business Analyst',
  locations: [],
  numJobs: 20,
  previousListingHashes: []
};

export function Jobs() {
  const [ jobs, setJobs ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  const fetchJobs = (filters = {}) => {
    setLoading(true);

    getJobs({ ...DEFAULT_REQUEST_BODY, ...filters })
      .then((jobs) => {
        setJobs(jobs);
      })
      .catch(() => {
        setJobs([]);
      })
      .finally(() => {
        setLoading(false);
      })
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  const onFiltersChange = useCallback((filters) => {
    fetchJobs(filters);
  }, []);

  return (
    <>
      <FilterBar onChange={ onFiltersChange }/>
      {
        !loading
        ? (
          <div className="jobs-container">
            { jobs.map((job) => <Job key={ job.jobId } job={ job }/>)}
          </div>
        )
        : <Spinner />
      }
    </>
  )
}
