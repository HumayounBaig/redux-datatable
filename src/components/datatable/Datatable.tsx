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
            <Table>
              <thead>
                <tr>
                  <th>Order #</th>
                  <th>Order Status</th>
                  <th>Customer</th>
                  <th>Purchase date</th>
                  <th>Fulfilled Date</th>
                  <th>Invoice status</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {
                  orders
                    .filter((order: orderType) => searchFilter(order))
                    .map((order: orderType) => <TableRow rowData={order} /> )
                }
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </div>
  )
}
