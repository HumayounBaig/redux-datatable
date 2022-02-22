import React, { useEffect, useState } from 'react'
import { Col, Input, InputGroup, Row, Table } from 'reactstrap'
import { orders, orderType } from './Datatable.interface';
import { TableRow } from './tableRow';
import './Datatable.css';

export const Datatable: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {

  }, []);

  const searchFilter = (order: orderType) => {
    return (order.orderID || '').includes(searchQuery) ||
    (order.customerName || '').toLowerCase().includes(searchQuery);
  }

  return (
    <div className='datatable-container'>
      <Row>
        <Col>
          <div>
            <InputGroup>
              <Input
                id='search-input'
                placeholder="🔍 Search by Order #, Customer"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </InputGroup>
          </div>
          <div className='data-table'>
            <Row className='table-header'>
              <Col>Order #</Col>
              <Col>Order Status</Col>
              <Col>Customer</Col>
              <Col>Purchase date</Col>
              <Col>Fulfilled Date</Col>
              <Col>Invoice status</Col>
              <Col>Amount</Col>
            </Row>
            {
              orders
                .filter((order: orderType) => searchFilter(order))
                .map((order: orderType, index: number) => <TableRow rowData={order} key={index} /> )
            }
          </div>
        </Col>
      </Row>
    </div>
  )
}
