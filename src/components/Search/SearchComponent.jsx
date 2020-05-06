import React from 'react';
import { connect } from 'react-redux';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { searchPost } from '../../action/latestPostAction'

import './SearchStyle.css';

function Search({ searchPost }) {
  return (
    <div className='search-wrapper'>
      <div className='search-icon'>
        <SearchIcon color='secondary'/>
      </div>
      <InputBase
        onChange={(event) => searchPost(event.target.value)}
        placeholder="Search stories by title, url or author"
        classes={{input: 'input', root: 'input-root' }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  searchPost: (data) => dispatch(searchPost(data))
})

export default connect(null, mapDispatchToProps)(Search);