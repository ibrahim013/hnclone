import React from 'react';

import './WithSpinnerStyle.css';

const WithSpinner = (WrappedComponent ) => {
  const spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className='spinner-overlay'>
        <div className='spinner-container'>
        </div>
      </div>
    ) :
    <WrappedComponent {...otherProps}/>
  }
  return spinner
}
export default WithSpinner;