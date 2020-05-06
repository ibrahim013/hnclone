import React from 'react';

import './WithSpinnerStyle.css';

const withSpinner = (WrappedComponent ) => {
  const spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className='spinner-overlay'>
        <div className='spinner-container'/>
      </div>
    ) :
    <WrappedComponent {...otherProps}/>
  }
  return spinner
}
export default withSpinner;