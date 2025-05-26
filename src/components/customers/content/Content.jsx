import React from 'react';
import './Content.css';
import Customer from '../Customer';
import Dashboard from '../../dashboard/Daskboard';
import Product from '../../product/Product';
import CustomerNew from '../CustomerNew';
import { Routes, Route, Outlet } from 'react-router-dom';

const Content = ({ marginLeft }) => {
  return (
    <section id="content" style={{ marginLeft: marginLeft }}>
      <Routes>
        <Route path="/customers" element={<Customer/>}>
          <Route path='new' element={<CustomerNew/>} />
        </Route>
        <Route path="/" element={<Dashboard/>} />
        <Route path='*' element={<Product/>} />
      </Routes>
    </section>
  )
}

export default Content;