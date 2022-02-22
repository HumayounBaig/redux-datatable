import React, { FC } from "react"
import { Col, Row } from "reactstrap";
import { orderType } from "../Datatable.interface"
import './TableRow.css';

type TableRowProps = {
  rowData: orderType
}

export const TableRow: FC<TableRowProps> = ({
  rowData: {
    orderID,
    orderStatus,
    companyName,
    customerName,
    purDate,
    fulfillDate,
    invoiceStatus,
    amount,
    currency,
  }
}) => {

  return(
    <Row className="table-row">
      <Col>{orderID}</Col>
      <Col className="order-status">
        {orderStatus === 'UNVERIFIED' ? '🔴' : '🟠'} {orderStatus}</Col>
      <Col className="customer-details">
        <p>{companyName}</p>
        <p>{customerName}</p>
      </Col>
      <Col>🗓 {purDate}</Col>
      <Col>🗓 {fulfillDate}</Col>
      <Col>{invoiceStatus}</Col>
      <Col><strong>{`${currency} ${amount}`}</strong></Col>
    </Row>
  )
}
