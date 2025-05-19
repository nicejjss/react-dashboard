import React from 'react';
import './Content.css';
import ContentHeader from '../content-header/ContentHeader';
import ContentArchivement from '../content-archivement/ContentArchivement';
import { MenuContext } from '../../Contexts';
import { useContext } from 'react';
import ContentData from '../content-data/ContentData';

const Content = ({ marginLeft }) => {
  const { setIsMenuOpen } = useContext(MenuContext);

  const items = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' }
  ];

  return (
    <section id="content" style={{ marginLeft: marginLeft }}
      onClick={() => setIsMenuOpen(false)}>
      <ContentHeader />
      <ContentArchivement />
      <ContentData />
    </section>
  )
}

export default Content;