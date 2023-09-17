import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import PostPage from './PostPage';

function PostPageWrapper() {
  const location = useLocation();
  const { title, text, date, id, tags } = location.state;
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  return (
    <PostPage title={title} text={text} date={date} id={id} tags={tags} navigate={navigate} /> 
  );
}

export default PostPageWrapper;
