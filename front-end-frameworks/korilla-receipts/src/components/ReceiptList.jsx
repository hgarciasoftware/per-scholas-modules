import Receipt from './Receipt';

function ReceiptList(props) {
  return (
    <main className="receipt-list">
      {props.receipts.map((receipt, index) => {
        return <Receipt receipt={receipt} key={index} />;
      })}
    </main>
  );
}

export default ReceiptList;
