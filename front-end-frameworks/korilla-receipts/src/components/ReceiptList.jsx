import Receipt from './Receipt';

function ReceiptList(props) {
  return (
    <main className="receipt-list">
      {props.receipts.map(receipt => {
        return !receipt.paid ? <Receipt receipt={receipt} key={receipt.key} /> : null;
      })}
    </main>
  );
}

export default ReceiptList;
