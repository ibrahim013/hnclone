import React from 'react';
import { connect } from 'react-redux';
import PostList from './PostList';


function LatestPost ({ post }) {
  return(
    <>
    { 
      post.map(({url, title, author, created_at, objectID}) => {
      return (<PostList
        key={objectID}
        url={url}
        title={title}
        author={author}
        createdAt={created_at}
      />)})
    }
    </>
  )
}

const mapStateToProps = (state) => ({
  post: state.post.data
})

export default connect(mapStateToProps, null)(LatestPost);