import React from 'react'
import { Col, Input, InputGroup, Row } from 'reactstrap'
import { orders, orderType } from './Datatable.interface';
import { TableRow } from './tableRow';
import './Datatable.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getSearchQuery, setSearchQuery,  } from '../../redux/datatableSlice'

export const Datatable: React.FC = () => {
  const searchQuery = useAppSelector(getSearchQuery)
  const dispatch = useAppDispatch();

  const searchFilter = (order: orderType) => {
    return (order.orderID || '').includes(searchQuery) ||
    (order.customerName || '').toLowerCase().includes(searchQuery);
  }

  const tableColumns = [
    'Order #',
    'Order Status',
    'Customer',
    'Purchase date',
    'Fulfilled Date',
    'Invoice status',
    'Amount'
  ]

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
                onChange={(e) => dispatch(setSearchQuery(e.target.value))}
              />
            </InputGroup>
          </div>
          <div className='data-table'>
            <Row className='table-header'>
              {
                tableColumns.map((column, index) => (
                  <Col key={index}>{column}</Col>
                ))
              }
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
