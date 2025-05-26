import React from 'react';
import './ContentHeader.css';
import Search from '../../search/Search';


const ContentHeader = () => {
  return (
    <div id="content-header">
      <section id="content-header-greeting">
        <h2>Hello Loc Dao 👋🏼,</h2>
      </section>
      <form id="content-header-search" className="search-form">
        <Search name="content" />
      </form>
    </div>
  )
}

export default ContentHeader;