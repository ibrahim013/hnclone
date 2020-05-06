import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

function ListItemLink(props) {
  return <ListItem component="a" {...props} />;
}

function PostList({url, title, author, createdAt}) {
  return (
    <> 
    <ListItemLink href={url} target='_blanck'>
      <ListItemText primary={title}  root="title"/>
    </ListItemLink>
    <div>
      <Typography variant='body1'>Author:{author} | Date: {createdAt}</Typography>
    </div>
    </>
  )
}

export default PostList;