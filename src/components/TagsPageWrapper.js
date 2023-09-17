import React from 'react';
import { useLocation } from 'react-router-dom';
import TagsPage from './TagsPage';

function TagsPageWrapper() {
  const location = useLocation();
  const { searchTerm } = location.state;

  return (
    <TagsPage searchTerm={ searchTerm } />
  );
}

export default TagsPageWrapper;
