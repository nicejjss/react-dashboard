import React from 'react';
import './Content.css';
import ContentHeader from '../content-header/ContentHeader';
import ContentArchivement from '../content-archivement/ContentArchivement';

const Content = ({ marginLeft, setMenuOpen }) => {

  const items = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' }
  ];

  return (
    <section id="content" style={{ marginLeft: marginLeft }}
      onClick={() => setMenuOpen(false)}>
      <ContentHeader />
      <ContentArchivement />
    </section>
  )
}

export default Content;