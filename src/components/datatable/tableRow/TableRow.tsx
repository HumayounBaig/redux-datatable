import { FC } from "react"
import { orderType } from "../Datatable.interface"

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
    <tr>
      <td>{orderID}</td>
      <td>{orderStatus}</td>
      <td>
        <strong>{companyName}</strong>
        <small>{customerName}</small>
      </td>
      <td>{purDate}</td>
      <td>{fulfillDate}</td>
      <td>{invoiceStatus}</td>
      <td><strong>{`${currency} ${amount}`}</strong></td>
    </tr>
  )
}
