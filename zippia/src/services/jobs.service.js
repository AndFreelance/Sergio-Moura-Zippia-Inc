import axios from 'axios';

import { URL } from '../configs/api.config';

export function getJobs(body) {
  const url = `${URL}/api/jobs`;

  return axios.post(url, body)
    .then((response) => response.data.jobs)
    .catch((err) => {
      throw err;
    });
}
