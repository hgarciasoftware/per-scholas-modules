import Receipt from './Receipt';

function ReceiptList(props) {
  return (
    <main className="receipt-list">
      {props.receipts.map((receipt, index) => {
        return !receipt.paid ? <Receipt receipt={receipt} key={index} /> : null;
      })}
    </main>
  );
}

export default ReceiptList;
