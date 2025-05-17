import React from 'react';
import './ContentHeader.css';
import Search from '../search/Search';

const ContentHeader = () => {
  return (
    <div id="content-header">
      <section id="content-header-greeting">
        <h2>Hello Loc Dao 👋🏼,</h2>
      </section>
      <Search name="content" />
    </div>
  )
}

export default ContentHeader;