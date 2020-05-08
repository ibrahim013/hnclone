import React from 'react';
import { ListItem, ListItemText, Typography, Container } from '@material-ui/core';

function ListItemLink(props) {
  return <ListItem component="a" {...props}  disableGutters={true}/>;
}

function PostList({url, title, author, createdAt}) {
  return (
    <Container> 
      <ListItemLink href={url} target='_blanck'>
        <ListItemText primary={title}  root="title"/>
      </ListItemLink>
      <div>
        <Typography variant='body1'>
          author: {author} | date: {new Date(createdAt).toLocaleString()}
        </Typography>
      </div>
    </Container>
  )
}

export default PostList;