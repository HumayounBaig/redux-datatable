
enum status {
  UNVERIFIED,
  REFUNDED,
  CANCELLED,
  VERIFIED,
  FULFILLED,
}

type OrderStatus = keyof typeof status;

export interface orderType {
  orderID?: string;
  orderStatus: OrderStatus;
  companyName?: string;
  customerName?: string;
  purDate?: string;
  fulfillDate?: string;
  invoiceStatus?: "Paid" | "Unpaid",
  amount?: number;
  currency?: string;
}

export const orders : orderType[] = [
  {
    orderID: "2544",
    orderStatus: "UNVERIFIED",
    companyName: "GÅRDSBUA AS",
    customerName: "John Doe",
    purDate: "26 Jan 2022",
    fulfillDate: "26 Jan 2022",
    invoiceStatus: "Paid",
    amount: 250,
    currency: "NOK"
  }, {
    orderID: "2545",
    orderStatus: "VERIFIED",
    companyName: "GÅRDSBUA AS",
    customerName: "William",
    purDate: "26 Jan 2022",
    fulfillDate: "26 Jan 2022",
    invoiceStatus: "Paid",
    amount: 400,
    currency: "NOK"
  }, {
    orderID: "2546",
    orderStatus: "UNVERIFIED",
    companyName: "GÅRDSBUA AS",
    customerName: "Jacob",
    purDate: "26 Jan 2022",
    fulfillDate: "26 Jan 2022",
    invoiceStatus: "Paid",
    amount: 630,
    currency: "PKR"
  }, {
    orderID: "2547",
    orderStatus: "UNVERIFIED",
    companyName: "GÅRDSBUA AS",
    customerName: "Bobby",
    purDate: "26 Jan 2022",
    fulfillDate: "26 Jan 2022",
    invoiceStatus: "Paid",
    amount: 400,
    currency: "USD"
  }
]
