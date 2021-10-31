import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './filter-bar.styles.scss';

export function FilterBar({ onChange = () => {} }) {
  const [ filters, setFilters ] = useState({});
  const companyNameInputRef = useRef();

  const onClick = (key, value) => {
    const newFiltes = { ...filters, [key]: value };

    setFilters(newFiltes);
    onChange(newFiltes);
  }

  const postDateBtnClassName = classNames(
    'filter-bar__item btn',
    {
      'btn-primary': filters.postedDate,
      'btn-outline-primary': !filters.postedDate
    }
  );

  return (
    <div className="filter-bar mb-3 d-flex">
      <div className="filter-bar__item filter-bar__item--company-name me-4 d-flex align-items-center">
        <input type="text" name="companyName" ref={ companyNameInputRef } />
        <button className="btn btn-primary ms-2"
          onClick={ () => onClick('companyName', companyNameInputRef.current.value) }>
            Search
        </button>
      </div>
      <button className={ postDateBtnClassName }
        type="button"
        onClick={ () => onClick('postedDate', '7d ago') }>
        Published in last 7 days
      </button>
    </div>
  );
}

FilterBar.propTypes = {
  onChange: PropTypes.func
}
